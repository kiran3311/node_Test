const fs =  require("fs")

/* Streams in Node.js are used for handling I/O efficiently, especially for large files. 
Instead of reading or writing entire files at once (which consumes memory), streams process data in chunks. */

//Create Read File Stream-------------------------------------------------------------------
//fs.createReadStream(path, [options])

const readstream = fs.createReadStream("text.txt", {encoding:"utf8"})
readstream.on("data", (chunk)=>{
    console.log(" Chunk Recieved : ", chunk)
})

readstream.on("end", ()=>{
    console.log("Finished Reading File")
})

readstream.on("error", (err)=>{
    console.log("Read Error",err)
})






//Create Write File Stream ----------------------------------------------------------------------

//fs.createWriteStream(path, [options])

const writeStream = fs.createWriteStream("writeSreamFile.txt")

writeStream.write("text____1")
writeStream.write("text____2")

writeStream.end()  //close stream

writeStream.on("finish", ()=>{
    console.log("write Successfully")
})


writeStream.on("error", (err)=>{
    console.log(err)
})




// Stream Pipe ---------------------------------------------------------------------------
// Piping: Read → Write Stream (e.g., File Copy)

const readStreamPipe = fs.createReadStream("text.txt", {encoding:"utf8"})
const writeStreamPipe = fs.createWriteStream("pipeWriteStream.txt")

readStreamPipe.pipe(writeStreamPipe)
readStreamPipe.on("error",(err)=>{
    console.log("error in reading file",err)
})


writeStreamPipe.on("error",(err)=>{
    console.log("error in writing file", err)
})


writeStream.on("finish",()=>{

    console.log("File Writing finished")
})