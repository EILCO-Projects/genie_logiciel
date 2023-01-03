import {FieldType,DyCrud } from "dinyad-admin"

export class TestCrud extends DyCrud {

    constructor(){
        super("http://localhost:8000","/api/tests")
    }

    fieldsConfig(){
        return [
            ["id", FieldType.IdField],
            ["numero", FieldType.IntField],
            ["nom", FieldType.TextField],
            ["annee", FieldType.IntField],
            ["nbParties()",FieldType.IntField,"Nombre de parties",true,false]
        ]
    }

    nbParties(elm){
        return elm.parties.length>0?elm.parties[0].directions:"";
    }
    
}
