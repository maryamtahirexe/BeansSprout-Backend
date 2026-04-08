const jwt = require('jsonwebtoken');

exports.signAccessToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });

exports.signRefreshToken = (payload, rememberMe = false) =>
  jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: rememberMe ? '30d' : '7d',
  });

exports.verifyAccessToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET);

exports.verifyRefreshToken = (token) =>
  jwt.verify(token, process.env.JWT_REFRESH_SECRET);