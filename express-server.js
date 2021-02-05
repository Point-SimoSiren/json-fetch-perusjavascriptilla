const path = require('path')
const express = require('express')

const app = express()

//-------------staattiset filet-----------------------------
const polku = path.join(__dirname, './webdir')
app.use(express.static(polku))

//-----------Rest API------------------------------------

const henkiloJson = [{ "id": 1, "nimi": "Pentti", "ikä": 67 }, { "id": 2, "nimi": "Jade", "ikä": 14 }, { "id": 3, "nimi": "Sami", "ikä": 36 }]

const autoJson = [{ "merkki": "BMW", "väri": "musta" }, { "merkki": "Trabant", "väri": "vaaleanruskea" }, { "merkki": "Fiat", "väri": "oliivinvihreä" }]

app.get('/henkilot', (req, res) => res.json(henkiloJson))

app.get('/autot', (req, res) => res.json(autoJson))

//------------portti jota palvelin kuunetelee-------------------

app.listen(3001, () => {
    console.log('Server is up on port 3001.')
})
