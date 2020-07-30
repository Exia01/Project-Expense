const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 12 strength
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const createToken = user => {
  const payload = {
    user: {
      id: user._id,
      email: user.email
    },
  };
  return jwt.sign(payload,
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
};


module.exports = {
  hashPassword,
  createToken
};
