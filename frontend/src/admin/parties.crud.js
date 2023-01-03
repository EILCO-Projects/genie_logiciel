import {FieldType,DyCrud } from "dinyad-admin"


export class PartieCrud extends DyCrud {

    constructor(){
        super("http://localhost:8000","/api/parties")
    }

    fieldsConfig(){
        return [
            ["id", FieldType.IdField],
            ["numero", FieldType.IntField],
            ["type", FieldType.TextField],
            ["directions", FieldType.TextareaField],
            //["questions()", FieldType.TextField],
            //["nbTests()",FieldType.IntField,"Nombre de tests",true,false]
        ]
    }

    nbTests(elm){
        return elm.tests.length;
    }
    questions(elm){
        return JSON.stringify(elm.questions)
    }
    
}
