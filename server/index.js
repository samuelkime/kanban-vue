var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(express.static(__dirname + "/../www/dist"))

var whitelist = ['http://localhost:8080', 'http://kanban-tastic.herokuapp.com'];
var corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};
app.use(cors(corsOptions))

//Fire up database connection
require('./server-assets/db/mlab-config')


//REGISTER MIDDLEWEAR
app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))

let auth = require('./server-assets/auth/routes')
app.use(auth.session)
app.use(auth.router)

app.use((req,res,next)=>{
  if(!req.session.uid){
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

// Routes
var boards = require('./server-assets/routes/boards')
var lists = require('./server-assets/routes/lists')
var tasks = require('./server-assets/routes/tasks')
var comments = require('./server-assets/routes/comments')

app.use(boards.router)
app.use(lists.router)
app.use(tasks.router)
app.use(comments.router)

app.get('*', (req, res, next) => {
    res.status(404).send({
      error: 'No matching routes'
    })
  })

app.listen(port, () => {
    console.log('server running on port', port)
  })
    