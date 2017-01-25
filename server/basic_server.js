var express = require('express');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');

var fs = require('fs');
var path = require('path');
var app = express();
// console.log()

var User = require(path.join(__dirname, '../app/models/user'));
var db = require(path.join(__dirname, '../app/config.js'))


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/../public'));
// app.use(cookieParser('shhhh, very secret'));
// app.use(session({
//   secret: 'olapola',
//   resave: false,
//   saveUninitialized: true
// }));

app.use(express.static(path.join(__dirname, '../public')));

// var createSession = function(req, res, newUser) {
// 	console.log("creating sessiom")
//   return req.session.regenerate(function() {
//       req.session.user = newUser;
//       res.redirect('/index');
//     });
// };
// var isLoggedIn = function(req, res) {
//   return req.session ? !!req.session.user : false;
// };

// var checkUser = function(req, res, next) {
//   if (!isLoggedIn(req)) {
//     res.redirect('/signin');
//   } else {
//     next();
//   }
// };

app.get('/index', function(req, res){	
 // req.sendFile('/') ``
 console.log("index get: ");
 console.log("filepath: ",path.join(__dirname, '../public/index.html'));
	fs.readFile(path.join(__dirname, '../public/index.html'), 'utf-8', function(err, file) {
		if (err) {
			console.log("index error", err);
			res.send(err);
		} else {
			console.log("no index error", err);
			res.send(file);
		}
	})
  
	
});
// app.post('/index', function(req, res){	
//  // req.sendFile('/') ``
//  console.log("index post ");
//  console.log("filepath: ",path.join(__dirname, '../public/index.html'));
// 	fs.readFile(path.join(__dirname, '../public/index.html'), 'utf-8', function(err, file) {
// 		if (err) {
// 			console.log("index error", err);
// 			res.send(err);
// 		} else {
// 			console.log("no index error", err);
// 			res.send(file);
// 		}
// 	})
	
// });
// app.post('/index', function(req, res){	
//  // req.sendFile('/') ``
//  console.log("index: ");
// 	fs.readFile(path.join(__dirname, '../public/index.html'), 'utf-8', function(err, file) {
// 		if (err) {
// 			res.send(err);
// 		} else {
// 			res.send(file);
// 		}
// 	})
	
// });

// app.get('/AddMovie.js', function(req, res){  
//  // req.sendFile('/') ``
//   // fs.readFile(path.join(__dirname, '../public/signin.html'), 'utf-8', function(err, file) {
//   //   if (err) {
//   //     res.send(err);
//   //   } else {
//   //     res.send(file);
//   //   }
//   // })
//   console.log(path.join(__dirname, '../public/AddMovie.js'))
//   res.render(path.join(__dirname, '../public/AddMovie.js'));
  
// });

app.get('/signin', function(req, res){	
 // req.sendFile('/') ``
	fs.readFile(path.join(__dirname, '../public/signin.html'), 'utf-8', function(err, file) {
		if (err) {
			res.send(err);
		} else {
			res.send(file);
		}
	})
	
});



app.get('/signup', function(req, res){	
 // req.sendFile('/') ``
	fs.readFile(path.join(__dirname, '../public/signup.html'), 'utf-8', function(err, file) {
		if (err) {
			res.send(err);
		} else {
			res.send(file);
		}
	})
	
});

app.post('/signup', function(req, res){	
 // req.sendFile('/') 
 console.log("signup post:", req.body);
 var username = req.body.username;
 var password =  req.body.password;

 
   var q=User.findOne({ username: username });

    q.exec(function(err, user) {
    	if(err) {
    		console.log("error");
    	}
      	if (!user) {
      		console.log("user not found");
        	var newUser = new User({
          	username: username,
          	password: password
        	});
        	newUser.save(function(err, newUser) {
          		if (err) {
          		  	res.status(500).send(err);
          		}
                //createSession(req, res, newUser);
                else {
                	console.log("getting to this line");
	          		res.redirect('/index');
	          		res.end();
	          		console.log("after index")
      
                }
          	
     	   });
      	} else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
	
});

app.post('/signin', function(req, res){	
 // req.sendFile('/') 
  var username = req.body.username;
  var password = req.body.password;
  console.log("in signin");
  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        res.redirect('/signin');
      } else {
        User.comparePassword(password, user.password, function(err, match) {
          if (match) {
           // createSession(req, res, user);
           console.log("password math");
           res.redirect('/index');
          } else {
            res.redirect('/signin');
          }
        });
      }
    });
	
});

// app.get('/logout', function (req, res) {
// 	req.session.destroy(function() {
//     res.redirect('/login');
//   });
// })

// console.log("hey issi!");

app.listen(8000);
