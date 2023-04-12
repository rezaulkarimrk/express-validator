const registerUser = (req, res) => {
    try {
        const {name, email, password, dob} = req.body;
        const newUser = {
            name, email, password, dob
        }
        res.status(201).json({
            messagee: "user was created",
            newUser,
        })
    } catch (error) {
        res.status(500).json({messaee: error.message});
    }
}


const loginUser = (req, res) => {
    try {
        const {email, password} = req.body;
        if(email==="mrk99rk@gmail.com" && password==="rk000111"){
            res.status(201).json({
                message: "user was logedIn",
            })
        }
        else{
            res.status(400).json({
                message: "email/password is wrong",
            })
        }
    } catch (error) {
        res.status(500).json({messaee: error.message});
    }
}
module.exports = { registerUser, loginUser };