const app = require('express')()

const esBisiesto = (year) => {
    if (year % 4 === 0) {
        return "es bisiesto"
    }
    return "no es bisiesto"
}

app.get('/year/:num', (req, res) => {
    const year = req.params.num

    res.send(esBisiesto(year))
})

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
})