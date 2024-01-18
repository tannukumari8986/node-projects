fs = require('node:fs')

fs.writeFileSync('./tannu.txt', "Hiee Iam tannu & this is my node project", {flag :'a'})
console.log('file written successfully')

fs.writeFile('./tk.txt', "Hello this is async writting. You can check it out", {flag :'a'}, (error)=>{
    if(error){console.log(error)}
    else{console.log('file written sucessfully.')}
})