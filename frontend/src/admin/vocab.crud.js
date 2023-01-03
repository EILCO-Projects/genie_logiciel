import {FieldType,DyCrud } from "dinyad-admin"
import { ListVocabualaireCrud } from "./listvocab.crud"

export class VocabualaireCrud extends DyCrud {

    constructor(){
        super("http://localhost:8000","/api/vocab")
    }

    fieldsConfig(){
        return [
            ["id", FieldType.IdField],
            ["mot", FieldType.TextField],
            ["traduction", FieldType.TextField],
            ["note", FieldType.TextField],
            ["listId",FieldType.SelectType,"Liste",false],
            ["list()",FieldType.TextField,"Liste",true,false],
           
        ]
    }
    dataSourceConfig(){
        return [
            ["listId" , new ListVocabualaireCrud() ,"nom"]
        ]
    }

    list(elem){
        return elem.list.nom
    }
    
   
}
