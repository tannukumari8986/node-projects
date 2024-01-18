fs = require('node:fs')

fs.writeFileSync('./mukesh.txt', "This is wonderful")
console.log('file written successfully')

fs.writeFile('./nashit.txt', "Hello sir this is async writting",(error)=>{
    if(error){console.log(error)}
    else{console.log('file written sucessfully.')}
})