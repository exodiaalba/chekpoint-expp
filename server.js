const express = require('express');

const app = express();

const port = 7000

function verifDate(req, res, next) {
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",];
    let hours = new Date().getHours();
    if (days[new Date().getDay()] !== "sunday" &&
        days[new Date().getDay()] !== "saturday" && hours < 17 && hours >8) { next() }
    else {
        res.send("<h1>erj3 ba3d</h1>");
    }

}

app.use(verifDate)
app.use(express.static("pub"))

app.listen(port,(err) =>
err?console.log(err) : console.log(`wee  ${port}`))

