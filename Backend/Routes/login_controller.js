const express = require("express")
const router = express.Router();
const register = require("../Model/login_model.js")


router.get("/", (req, res) => {
    res.send('hello')
})
router.post("/register", async (req, res) => {
    const regdata = {
        name: req.body.name, email: req.body.email, password: req.body.password
    }
    const data = await register.create(regdata)
    console.log(data)

    res.status(200).send('registered')

})


router.get("/login", async (req, res) => {
    const {email}=req.params
    const isValid = await register.findOne({ email:email })

    if (isValid) {
        res.status(200).send("user logedIn")
    }
    else { res.status(400).send("no user found!") }
})

module.exports = router;