
export default function Footer() {
  return (
    <footer class="site_footer">
      <div class="footer_top">
        <div class="container">
          <div class="row justify-content-lg-between">
            <div class="col col-lg-3 col-md-6 col-sm-6">
              <div class="site_logo">
                <a class="site_link" href="index.html">
                  <img
                    src="/assets/images/logo/site_logo_white.png"
                    alt="Education, Online Course, LMS Creative"
                  />
                </a>
              </div>
              <p>
                Tout le monde ne peut pas se permettre de quitter son emploi
                pour apprendre à plein temps. Nous sommes là pour rendre le
                codage plus flexible et plus accessible.
              </p>
              <ul class="social_icon unordered_list">
                <li>
                  <a href="https://www.facebook.com/">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col col-lg-2 col-md-6 col-sm-6">
              <div class="widget">
                <h3 class="widget_title">Liens Utiles</h3>
                <ul class="page_list unordered_list_block">
                  <li>
                    <a href="#!">Anciens TOEICs</a>
                  </li>{" "}
                  <li>
                    <a href="#!">Astuces pour réussir</a>
                  </li>
                  <li>
                    <a href="#!">Tout savoir sur le TOEIC</a>
                  </li>{" "}
                  <li>
                    <a href="#!">Perfectionner ses modules</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-lg-2 col-md-6 col-sm-6">
              <div class="widget">
                <h3 class="widget_title">Partenaires</h3>
                <ul class="page_list unordered_list_block">
                  <li>
                    <a href="#!">Université du Littoral</a>
                  </li>
                  <li>
                    <a href="#!">Ecole d'Ingénieur du Littoral</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-lg-2 col-md-6 col-sm-6">
              <div class="widget">
                <h3 class="widget_title">Désormais disponible sur </h3>
                <ul class="store_btns unordered_list_block">
                  <li>
                    <a href="https://www.apple.com/app-store/" target="_blank">
                      <img src="/assets/images/app_store.png" alt="App Store" />
                    </a>
                  </li>
                  <li>
                    <a href="https://play.google.com/store/" target="_blank">
                      <img
                        src="/assets/images/google_play.png"
                        alt="Google Play"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="footer_bottom">
          <ul class="page_list unordered_list">
            <li>
              <a href="#!">Politiques & CGU</a>
            </li>
            <li>
              <a href="#!">Termes & Conditions</a>
            </li>
            <li>
              <a href="#!">Nous contacter</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
          </ul>
          <p class="copyright_text mb-0">
            © Shellnet 2022 <a href="/">TOEICBox</a> Tous droits reservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
