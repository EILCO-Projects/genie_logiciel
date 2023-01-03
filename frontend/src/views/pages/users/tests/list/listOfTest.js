import ListItem from "./partials/listItem";
import OtherTopics from "./partials/otherTopics";
import UserSession from "../../../authentication/UserSession";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function ListOfText() {
  const [tests,setTests] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/tests").then((r)=>{
      setTests(r.data)
      console.log(r)
    })
  },[])


  const user = UserSession.getUser()

  
  return (
    <main class="page_content">
      <section class=" mt-5 category_section section_space_lg pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-lg-8">
              <div class="section_heading text-center">
                <h2 class="heading_text">
                  Bonjour {user && user.prenom}
                </h2>
                <p class="mb-0">
                  Commencez votre test d'entraînement à la compréhension orale
                  du TOEIC, gérer vos tests
                </p>
              </div>
            </div>
          </div>
        </div>
     

        <div class="details_info_tab section_space_lg pt-0">
          <div class="container">
            <div class="row justify-content-lg-between">
              <div class="col col-lg-12 ">
                <ul class="nav justify-content-center" role="tablist">
                  <li role="presentation">
                    <button class="active" data-bs-toggle="tab" data-bs-target="#tab_tt" type="button" role="tab" aria-selected="true">
                      Tests terminés
                    </button>
                  </li>
                  <li role="presentation">
                    <button data-bs-toggle="tab" data-bs-target="#tab_tc" type="button" role="tab" aria-selected="false">
                      Tests commencés
                    </button>
                  </li>
                  <li role="presentation">
                    <button data-bs-toggle="tab" data-bs-target="#tab_tnc" type="button" role="tab" aria-selected="false">
                      Tests non commencés
                    </button>
                  </li>
                  <li role="presentation">
                    <button data-bs-toggle="tab" data-bs-target="#tab_v" type="button" role="tab" aria-selected="false">
                      Vocabulaires
                    </button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="tab_tt" role="tabpanel">
                  <h3 class="details_info_title">Terminés</h3>
                    <div class="category_items_wrapper row" id="tab_javascript">
                      {tests&&  tests.map(function (value) {
                        return <ListItem value={value} />;
                      })}
                    </div>
                  </div>

                  <div class="tab-pane fade" id="tab_tc" role="tabpanel">
                  <h3 class="details_info_title">Non terminés</h3>
                    <div class="category_items_wrapper row" id="tab_javascript">
                      {tests&& tests.map(function (value) {
                        return <ListItem value={value} />;
                      })}
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab_tnc" role="tabpanel">
                  <h3 class="details_info_title">Nouveaux tests</h3>
                    <div class="category_items_wrapper row" id="tab_javascript">
                      {tests&& tests.map(function (value) {
                        return <ListItem value={value} />;
                      })}
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab_v" role="tabpanel">
                  <h3 class="details_info_title">Vos listes de vocabulaires</h3>
                    <div class="category_items_wrapper row" id="tab_javascript">
                      {tests&& tests.map(function (value) {
                        return <ListItem value={value} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
