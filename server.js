/*const fs = require('fs')

const tieto = "Hälytys datakeskuksessa klo 11:32"

fs.appendFile('Data4.txt', tieto + '\r\n', function (err) {
    if (err) throw err
    console.log('Updated!')
})

fs.readFile('Data4.txt', 'utf8', function (err, contents) {
    console.log(contents)
}) */

var fs = require('fs')

const http = require('http')

var server = http.createServer(function (req, res) {
    console.log('pyyntö tuli täältä: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    var myReadStream = fs.createReadStream(__dirname + '/Data3.txt', 'utf8')
    myReadStream.pipe(res)

})

// Start the server on port 3000
server.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')

