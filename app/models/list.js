var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var listSchema = mongoose.Schema({
  // username: { type: String, required: true, index: { unique: true } },
  // password: { type: String, required: true }
  list: {type: String, required: true}
});



var List = mongoose.model('List', listSchema);


// Promise.all([promise1, promise2])
// 	.then(function([val1, val2]) {
		
// 	})


// function makeMaybeNullBox(x) {
// 	return {
// 		__isMaybeBox: true,
// 		value: x || null,
// 		map(fn) {
// 			if (this.x !== null) {
// 				return makeMaybeNullBox(fn(this.x));
// 			} else {
// 				return this;
// 			}
// 		},
// 		flatMap(fn) {
// 			if (this.x === null) {
// 				return this;
// 			}
// 			const newValue = fn(this.x);
// 			if (newValue.__isMaybeBox) {
// 				return newValue;
// 			}
// 			return makeMaybeNullBox(newValue);
// 		}
// 	}
// }

// Promise
// 	.then(double)
// 	.then(returnPromise)


// User.comparePassword = function(candidatePassword, savedPassword, cb) {
//   bcrypt.compare(candidatePassword, savedPassword, function(err, isMatch) {
//     if (err) { return cb(err); }
//     cb(null, isMatch);
//   });
// };

// userSchema.pre('save', function(next) {
//   var cipher = Promise.promisify(bcrypt.hash);
//   return cipher(this.password, null, null).bind(this)
//     .then(function(hash) {
//       this.password = hash;
//       next();
//     });
// });

module.exports = list;
