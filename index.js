var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 3030

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.text({ type: 'text/html' }))
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/assets'));


app.get('/', function (req, res) {
    res.render('index')
})
 
app.listen(port, err => {
    if(err) {
        console.error(err);
    }else {
        console.log('App listening on port %s', port);
    }
})