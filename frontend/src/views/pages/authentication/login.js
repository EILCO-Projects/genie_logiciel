import { useState } from "react";
import { Navigate } from "react-router-dom"
import handleChange from "./handleChange";
import axios from "axios"
import UserSession from "./UserSession"

export default function Login() {

  const [redirect, setRedirect] = useState({ state: false, to: "/" })

  const [data, setData] = useState({})
  const [info, setInfo] = useState({ error: false })

  const validate = async (e) => {
    e.preventDefault()
    try {
      const r = await axios.post("http://localhost:8000/auth/login", data)
      if (r.data.auth) {
        UserSession.setUser(r.data.user)
    
        setRedirect({state:true,to:"/user"})
      }
      else {
        setInfo({ error: true, text: "Authentification echouée !" })
      }
    } catch (e) {
     
      setInfo({ error: true, text:  "Authentification echouée !"  })
    }
  }

  if (redirect.state) {
    console.log("yes")
    return <Navigate to={redirect.to} />
  }

  return (
    <main class="page_content">
      <section class="page_banner decoration_wrap">
        <div class="container text-center">
          <h1 class="page_heading mb-2">Je me  connecte</h1>
          <p class="mb-0">Je m'identifie pour continuer</p>
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
              <form action="#" onChange={(e) => handleChange(e, data, setData)} >
                <div class="register_form signup_login_form">
                  <div className="text-danger text-center my-3">{info.error && info.text}</div>
                  <div class="form_item">
                    <input
                      type="email"
                      name="email"
                      placeholder="Adresse mail"
                      required
                    />
                  </div>
                  <div class="form_item">
                    <input
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                      required
                    />
                  </div>
                  <div class="remenber_forget row mb-3 align-items-center justify-content-between">
                    <div class="col col-6">
                      <div class="checkbox_item mb-0">
                        <input id="checkbox_remenber" type="checkbox" />
                        <label for="checkbox_remenber">
                          Se souvenir de moi
                        </label>
                      </div>
                    </div>
                    <div class="col col-6">
                      <div class="forget_password text-end">
                        <a href="#!">Mot de passe oublié ?</a>
                      </div>
                    </div>
                  </div>
                  <button  class="btn btn_primary mb-5" onClick={validate}>
                    <span>
                      <small>Se connecter</small>
                      <small>Se connecter</small>
                    </span>
                    <i class="fal fa-paper-plane ms-2"></i>
                  </button>
                  <p class="mb-0 text-center">
                    Pas encore de compte ? <a href="/signup">Je m'inscris</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
