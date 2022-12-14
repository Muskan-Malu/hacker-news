const userSchema = require('../models/user');
const { isEmpty } = require('lodash'); 
const bcrypt = require('bcryptjs');

const Signup = async (req, res) => {
    // console.log("IN ROUTER");
    // console.log(req.body);
    // res.send("My API signup");
    try {
        if(req.body) {
            const { username, password } = req.body;
            if(isEmpty(username)) res.send("Enter the username");
            if(isEmpty(password)) res.send("Enter the password");
            const salt = await bcrypt.genSalt(10);
            const passwordCrypt = await bcrypt.hash(password, salt);
            console.log(passwordCrypt);
            const data = await userSchema.find({username: username});
            if(isEmpty(data)) {
                const user = new userSchema({
                    username,
                    password: passwordCrypt
                });
                const val = await user.save();
                res.send("WOHOOO!! SUCCESSFULLY SIGNEDUP");
            }
        }
    } catch(error) {
        console.log(error);
    }

}

const Login = async (req, res) => {
    try{
        if(req.body) {
            const { username, password } = req.body;
            const user = await userSchema.find({username: username});
            const { password: passwordCrypt } = user[0];
            if(!isEmpty(user)) {
                const match = await bcrypt.compare(password, passwordCrypt);
                if(match) {
                    res.send("LOGGED IN SUCCESSFULLY!!")
                    console.log("LOGGEDIN");
                }
                else{
                    res.send("Incorrect password!")
                }
            } else {
                res.send("user dosen't exist");
            }
            
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    Signup,
    Login
}