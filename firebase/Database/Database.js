"use strict"

import { getDatabase } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-database.js";
import ModelError from "../models/Modelerror.js";

export default class Connection{
    static conn = null

    constructor(){
        this.getConnection()
    }
    
    async getConnection(){
        try{
            if(Connection.conn === null){
                Connection.conn = await getDatabase()
            }
        }catch(error){
            console.log(new ModelError("Erro na Conexão:" + error));
        }
        return Connection.conn
    }
}