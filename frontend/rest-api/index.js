const express = require("express")

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, function () {
    console.log(`Express app listening on port ${PORT}`)
})