

const express = require('express')
const dotenv = require('dotenv')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(cors())

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null,"public/uploads")
    },
    filename : (req,file,cb) =>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage : storage})

app.use('/uploads', express.static('public/uploads'));

app.use('/upload',upload.single('profileImg'),(req,res)=>{
   if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send(`File uploaded: /uploads/${req.file.filename}`);
})

app.use('/',(req,res) =>{
    res.end("Upload Home")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log(`server is running on prot ${process.env.PORT || 3000}`)
})
