import { FieldType, DyCrud } from "dinyad-admin"
import { UserCrud } from "./user.crud"

export class ListVocabualaireCrud extends DyCrud {

    constructor() {
        super("http://localhost:8000", "/api/listvocab")
    }

    fieldsConfig() {
        return [
            ["id", FieldType.IdField],
            ["nom", FieldType.TextField],
            ["userId", FieldType.SelectType,"User",false],
            ["user()",FieldType.TextField,"User",true,false]
        ]
    }
    
    dataSourceConfig() {
        return [
            ["userId", new UserCrud(), "prenom"]
        ]
    }

    user(elem){
        return elem.user.prenom + " " +elem.user.nom;
    }

    // getAll(){
    //     return Promise.resolve([
    //         {id : Math.floor(Math.random() * 1000),user : {} ,nom : "Non"},
    //         {id : Math.floor(Math.random() * 1000),user : {} ,nom : "Non"},
    //         {id : Math.floor(Math.random() * 1000),user : {} ,nom : "Non"},
    //         {id : Math.floor(Math.random() * 1000),user : {} ,nom : "Non"}
    //     ])
    // }

    

}
