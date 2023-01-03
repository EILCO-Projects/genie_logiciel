import UserSession from "../../authentication/UserSession";
import CountryList from "./partials/country";

export default function Profile() {
  const user = UserSession.getUser()
  return (
    <main class="page_content">
      <section class="page_banner decoration_wrap">
        <div class="container text-center">
          <h1 class="page_heading mb-2">
            <span class="d-lg-block">Compléter votre</span> profile maintenant.
          </h1>
          <p class="mb-0">
            Compléter votre dossier pour une meilleure expérience
          </p>
        </div>
        <div
          class="deco_item deco_img_1"
          data-parallax='{"y" : -200, "smoothness": 6}'
        >
          <img
            src="/assets/images/shapes/line_shape_1.png"
            alt="Line Shape Image"
          />
        </div>
        <div
          class="deco_item deco_img_2"
          data-parallax='{"y" : 200, "smoothness": 6}'
        >
          <img
            src="/assets/images/shapes/dot_shape_2.png"
            alt="Line Shape Image"
          />
        </div>
      </section>
      <section class="membership_section section_space_lg pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-lg-8">
              <form action="#">
                <div class="register_form">
                  <div class="row">
                    <div class="col col-md-6">
                      <div class="form_item m-0">
                        <label for="input_firstname" class="input_title">
                          Nom
                        </label>
                        <input
                          id="input_firstname"
                          type="text"
                          name="nom"
                          placeholder="Rakibul"
                          defaultValue={user.nom}
                        />
                      </div>
                    </div>
                    <div class="col col-md-6">
                      <div class="form_item m-0">
                        <label for="input_lastname" class="input_title">
                          Prénom
                        </label>
                        <input
                          id="input_lastname"
                          type="text"
                          name="prenom"
                          placeholder="Dewan"
                          defaultValue={user.prenom}
                          
                        />
                      </div>
                    </div>
                    <div class="col col-md-6">
                      <div class="form_item m-0">
                        <label for="select_country" class="input_title">
                          Pays
                        </label>
                        <CountryList />
                      </div>
                    </div>
                    <div class="col col-md-6">
                      <div class="form_item m-0">
                        <label for="input_email" class="input_title">
                          Adresse Mail
                        </label>
                        <input
                          id="input_email"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          defaultValue={user.email}
                        />
                      </div>
                    </div>
                    <div class="col col-md-6">
                      <div class="form_item m-0">
                        <label for="input_phone" class="input_title">
                          Numéro de Téléphone
                        </label>
                        <input
                          id="input_phone"
                          type="tel"
                          name="phone"
                          placeholder="+33 0 00 00 00 00"
                          defaultValue={user.phone}
                        />
                      </div>
                    </div>
                    <div class="col col-md-6">
                      <div class="form_item m-0">
                        <label for="input_birthdate" class="input_title">
                          Date de naissance
                        </label>
                        <input
                          id="input_birthdate"
                          type="date"
                          name="birthdate"
                        />
                      </div>
                    </div>
                    <div class="col col-md-12">
                      <div class="form_item m-0">
                        <label for="select_country" class="input_title">
                          Profession
                        </label>
                        <select id="select_country" name="country" defaultValue={user.prefession}>
                          <option value="Afghanistan">Élèves</option>
                          <option value="Åland Islands">Étudiants</option>
                          <option value="Albania">Travailleurs</option>
                          <option value="Algeria">Autres</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div class="text-center">
                    <button type="submit" class="btn btn_primary">
                      <span>
                        <small>Mettre à jour</small>
                        <small>Mettre à jour</small>
                      </span>
                      <i class="fal fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>



      </section>
     
    </main>
  );
}
