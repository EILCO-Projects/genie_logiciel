import {FieldType,DyCrud } from "dinyad-admin"



export class UserCrud extends DyCrud {

    constructor(){
        super("http://localhost:8000","/api/users")
    }

    fieldsConfig (){
        return [
            ["id", FieldType.IdField],
            ["nom", FieldType.TextField],
            ["prenom",FieldType.TextField,"Prénom"],
            ["email",FieldType.TextField],
            ["password",FieldType.PasswordField,"Mot de passe",false],
            ["age",FieldType.IntField,"Age",false],
            ["role",FieldType.TextField,"Rôle",true,false],
        ]
    }
}
