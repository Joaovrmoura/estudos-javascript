"use strict"

export default class Status{
    #nome

    static NAVEGATE = new Status('NAVEGATE')
    static EDITING = new Status('EDITING')
    static DELETE = new Status('delete')
    static ADD = new Status('ADD')

    constructor(nome){
        this.nome = nome
    }
}