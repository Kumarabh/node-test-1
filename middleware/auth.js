module.exports = (req, res, next) => {
    req.timeOfRequest = Date.now();
console.log('auth service active');
next();
}