var express = require('express')
var app = express()
var request = require('request');
var bodyParser = require('body-parser');
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

app.post('/fetch-logo', function(req, res){
    console.log(req.body);
    if (req.body.size != "" || req.body.greyscale === true){
        request.get('https://logo.clearbit.com/'+req.body.link+"?size="+req.body.size+"&greyscale="+req.body.greyscale, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log(response.headers['content-type']) // 'image/png'
            res.send(body);
        });
    }else{
        request.get('https://logo.clearbit.com/'+req.body.link, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log(response.headers['content-type']) // 'image/png'
            console.log(body)
            res.send(body)
        });
    }
})
 
app.listen(port, err => {
    if(err) {
        console.error(err);
    }else {
        console.log('App listening on port %s', port);
    }
})