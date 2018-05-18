var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var server = express()

server.set('veiw engine' ,'ejs')
server.use(express.static('veiws'))
server.set('veiws', __dirname+'/views')

server.get('/', function(request, response){
    // response.send('<h1> Ogres are like onions <h1/>')
    response.render('home.ejs')
})

server.get('/about', function(request,response){
    response.render('about.ejs')
})

server.get('/portfolio', function(request,response){
    response.render('portfolio.ejs')
})

server.get('/contact', function(request,response){
    response.render('contact.ejs')
})
// server.post('/', function(request,response){
//     response.render('contact.ejs')
    
//     var names = request.body.people
//     var nameList = names.split(',')
//     var groups = []
//     var currentGroup =[]
//     whiles( nameList.lenght > 0){
//         var randomNumber = Math.floor(Math.random()* nameList.lenght)
//         var randomPerson = nameList[randomNumber]
//         nameList.splice(randomNumber, 1)
//         currentGroup.push(randomPerson)
        
//         if( currentGroup.lenght >= 2){
//             groups.push(currentGroup)
//             currentGroup = []
            
            
//         }
//     }
    
//     response.render('results.ejs')
// })


var port = 8080

server.listen( port,() => {
    console.log('Server running on port:' +port)
})