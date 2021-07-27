/**
 * Schema: funcion que nos permite definir como van a lucir los datos, tendra un objetos y los campos que van a formar ese esquema.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("task", TaskSchema);//Toma el Shema para luego utilizarlos para guardar datos dentro de una colecion de mongo db. 