import { DyDashboard } from "dinyad-admin";
import { ListVocabualaireCrud } from "./listvocab.crud";
import { VocabualaireCrud } from "./vocab.crud";
import {faUser,faSheetPlastic,faParagraph,faList,faLanguage} from "@fortawesome/free-solid-svg-icons";
import { UserCrud } from "./user.crud";
import { TestCrud } from "./test.crud";
import { PartieCrud } from "./parties.crud";
import "./dashboard.css"

export class Dashboard extends DyDashboard{
    menusConfig(){
        return [
            ["Users",new UserCrud(),faUser],
            ["Tests", new TestCrud(),faSheetPlastic],
            ["Parties",new PartieCrud(),faParagraph],
            ["Listes Vocab",new ListVocabualaireCrud(),faList],
            ["Vocabulaires",new VocabualaireCrud(),faLanguage],
            
        ]
    }
}