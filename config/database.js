//importar o pacote mongoose
const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:Esqueciminhasenha1@fiaptecnico.l4son.mongodb.net/todo_list') 
} 

module.exports = conn
