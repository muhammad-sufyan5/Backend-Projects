// const app = require('./app')

// // console.log("Hey!")
// // console.warn("Hey!")
// console.warn(app.z())
// const arr =[1,2,3,4,4,7,78,3]

// arr.filter(item) => {
//     console.log(item)
// }
// const fs = require('fs');
// fs.writeFileSync("sample.txt","this is gona be sample text in this file goes....")
// console.log("==>",__dirname)
// import chalk from 'chalk'
// // const http = require('http')
// import http from 'http'

// const data = function(req,res){
//     res.write('<H1>Hey, How are you!</H1>')
//     res.end()
// }

// http.createServer(data).listen(4500)

// // const colors = require('colors')
// import colors from 'colors'
// console.log(chalk.red("Hello...."))
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// console.log(chalk.green.bgRed.bold('Hello world!'));
// console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar'.white, 'biz', 'baz'.green));
// console.log(chalk.bold('Bold'))
// console.log(chalk.bgRed('itelici'))

// console.log('this is going to show the use of nodemon.......',20+20)

const http = require("http");
const api = require("./api");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(JSON.stringify(api));
    res.end();
  })
  .listen(3000);
