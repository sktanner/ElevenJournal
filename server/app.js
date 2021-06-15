require("dotenv").config()
const express = require("express")
const app = express()
const dbConnection = require("./db")
const cors = require('cors')

app.use(require('./middleware/headers'))
app.use(cors())

const controllers = require("./controllers")

app.use(express.json())

// app.use(require("./middleware/validate-jwt"))

app.use("/journal", controllers.journalController)
app.use("/about", controllers.journalController)
app.use("/user", controllers.userController)

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000.`)
        })
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`)
    })


// app.listen(3000, () => {
//     console.log(`[Server]: App `)
// })