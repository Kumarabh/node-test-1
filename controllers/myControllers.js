const User = require('./../models/User');

exports.register = async (req, res, next) => {
    // const user = await User.findOne({email});
    const {firstName, lastName, email, password } = req.body;
    console.log(req.body);

}

exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    console.log(req.body);
}