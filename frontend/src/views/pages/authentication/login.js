export default function Login() {
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
            src="assets/images/shapes/line_shape_1.png"
            alt="Line Shape Image"
          />
        </div>
        <div
          class="deco_item deco_img_2"
          data-parallax='{"y" : 200, "smoothness": 6}'
        >
          <img
            src="assets/images/shapes/dot_shape_2.png"
            alt="Line Shape Image"
          />
        </div>
      </section>
      <div class="register_section section_space_lg pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-lg-5">
              <form action="#">
                <div class="register_form signup_login_form">
                  <div class="form_item">
                    <input
                      type="email"
                      name="email"
                      placeholder="Adresse mail"
                    />
                  </div>
                  <div class="form_item">
                    <input
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
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
                  <button type="submit" class="btn btn_primary mb-5">
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
