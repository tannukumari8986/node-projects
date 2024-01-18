/* node file handelling */
fs = require('fs')

text = fs.readFileSync('./read.txt', 'utf-8')
console.log(text)

fs.readFile('./r.txt', 'utf-8', (error, data) =>{
         if(error){console.log(error)}
         else{console.log(data)}       

})

console.log('2nd console')
console.log('3rd console')
console.log('4th console')
console.log('5th console')