const http = require('http')
const {readFileSync} = require('fs')

const homepage = readFileSync('./navbar-app/index.html')
const csspage = readFileSync('./navbar-app/styles.css')
const iconpage = readFileSync('./navbar-app/logo.svg')
const browserpage = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req, res) =>{ // passes requedt first then response

    const url = req.url
    if(url === '/')
        {
             res.writeHead(200,{ 'content-type' : 'text/html'}) // this is important cause if it changes from html to txt it will be simple text
            res.write(homepage);
            res.end()
            

        }
    else if(url === '/styles.css')
        {
             res.writeHead(200,{ 'content-type' : 'text/css'}) // this is important cause if it changes from html to txt it will be simple text
            res.write(csspage);
            res.end()
         

        }
        else if(url === '/browser-app.js')
        {
             res.writeHead(200,{ 'content-type' : 'text/javascript'}) // this is important cause if it changes from html to txt it will be simple text
            res.write(browserpage);
            res.end()
           

        }
       else if(url === '/')
        {
             res.writeHead(200,{ 'content-type' : 'text/svg+xml'}) // this is important cause if it changes from html to txt it will be simple text
            res.write(iconpage);
            res.end()
          

        }
      

        
        else if (url == '/about'){
             res.writeHead(200,{ 'content-type' : 'text/html'}) // this is important cause if it changes from html to txt it will be simple text
    res.write('<h1>This is Starting</h1>');
    res.end()
    console.log("user Hit the server")
        }
        else{
            res.writeHead(404, {'content-type' :'text/html'})
            res.write('<h1>Error Occcured 404 </h1>')
        }
   
})
server.listen(5000)
