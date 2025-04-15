const { isUtf8 } = require("buffer")
const fs = require("fs")
const { writer } = require("repl")

console.log("Line Code___1")
// Read File Asynchronously----------------Asyncronous require callback

fs.readFile("text.txt","utf8", (err, data)=>{ 
    if(err) throw err
    console.log(data, "  data read with Asyncronous")
})

console.log("Line Code___2")



//Read File Syncronously ----------------- Syncronous does not require callback 

const data =  fs.readFileSync("text.txt", "utf8")
console.log(data, "  data read with syncronous")     
console.log("Line Code___3")



//Write file in Asyncronously-----------------------Asyncronous require callback


const text= "Hellooo.... \n"
fs.writeFile("newtext.txt",text, (err)=>{
    if(err) throw err
    console.log("Text Written in newtext.txt with asyncronous")
} )


console.log("Line Code___4")


//Write file Syncronously ------------------------------Syncronous does not require callback
const textnew = "text_2klklklkl "
fs.writeFileSync("newtext.txt", textnew  )
console.log("Text Written in newtext.txt with syncronous")
console.log("Line Code___5")



//Append File 
const appendtext = "\n Appended text"
fs.appendFile("text.txt", appendtext, (err)=>{
    if(err) throw err
    console.log("Text appended success")
})


// Delete File

/* fs.unlink("text.txt", (err)=>{
    if(err) throw err
    console.log("File Deleted Successfully..")
})
 */



//Creating Directory

fs.mkdir("myFolder", (err)=>{
    if(err) throw err
    console.log("Folder Created")
})



//Creating folder with nested folder creation

fs.mkdir("parentFolder/ChildFolder", {recursive: true},(err)=>{
    if(err) throw err
    console.log("Herarchy created")
})