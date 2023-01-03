import { useState } from "react";
import { Navigate } from "react-router-dom"
import handleChange from "./handleChange";
import axios from "axios"
import UserSession from "./UserSession"

export default function Signup() {
  const [redirect, setRedirect] = useState({ state: false, to: "/" })

  const [data, setData] = useState({})
  const [info, setInfo] = useState({ error: false })

  const validate = async (e) => {
    e.preventDefault()
    try {
      const r = await axios.post("http://localhost:8000/auth/signup", data)
      if (r.data.auth) {
        UserSession.setUser(r.data.user)
    
        setRedirect({state:true,to:"/user"})
      }
      else {
        setInfo({ error: true, text: "Inscription echouée !" })
      }
    } catch (e) {
      console.log(e)
     
      setInfo({ error: true, text:  "Inscription echouée !"  })
    }
  }

  if (redirect.state) {
    
    return <Navigate to={redirect.to} />
  }
  return (
    <main class="page_content">
      <section class="page_banner decoration_wrap">
        <div class="container text-center">
          <h1 class="page_heading mb-2">Je m'inscris</h1>
          <p class="mb-0">
            Déjà inscrit ? <a href="/login">Je me connecte</a>
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
      <div class="register_section section_space_lg pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-lg-5">
              <form action="#" onChange={(e) => handleChange(e, data, setData)}>
                <div class="register_form signup_login_form">
                  <div class="form_item">
                    <input name="nom" placeholder="Nom" />
                  </div>
                  <div class="form_item">
                    <input name="prenom" placeholder="Prenom" />
                  </div>
                  <div class="form_item">
                    <input type="email" name="email" placeholder="Adresse email" />
                  </div>
                  <div class="form_item">
                    <input
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                    />
                  </div>
                  {/* <div class="form_item">
                    <input
                      type="password"
                      name="cpassword"
                      placeholder="Confirmation mot de passe"
                    />
                  </div> */}
                  <button class="btn btn_primary mb-5" onClick={validate}>
                    <span>
                      <small>Valider</small>
                      <small>Valider</small>
                    </span>
                    <i class="fal fa-paper-plane ms-2"></i>
                  </button>

                  <p class="text-center">- Ou je me connecte avec -</p>

                  <ul class="social_icon unordered_list_center">
                    <li>
                      <a class="bg_facebook" href="https://www.facebook.com/">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a class="bg_twitter" href="https://twitter.com/">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a class="bg_google" href="https://www.google.com/">
                        <i class="fab fa-google"></i>
                        <i class="fab fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
