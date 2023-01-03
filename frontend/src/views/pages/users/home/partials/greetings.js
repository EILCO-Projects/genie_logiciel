export default function Greetings() {
  return (
    <section class="banner_section banner_style_2">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="order-lg-last col col-lg-5">
            <div
              class="banner_image_2"
              style={{
                backgroundImage: "url('/assets/images/shapes/shape_6.png')",
              }}
            >
              <img
                src="/assets/images/banner/banner_img_4.png"
                alt="Person Image"
              />
            </div>
          </div>
          <div class="col col-lg-7">
            <div class="banner_content">
              <h1 class="banner_title wow fadeInUp">
                Rejoignez des millions de personnes sur TOEICBox
              </h1>
              <p class="wow fadeInUp" data-wow-delay=".2s">
                Changer les vies, les entreprises et les nations <br/> en brisant les
                frontières des langues.
              </p>
              <div class="wow fadeInUp" data-wow-delay=".4s">
                <a class="btn btn_primary" href="about.html">
                  <span>
                    <small>Commencer Maintenant</small>
                    <small>Commencer Maintenant</small>
                  </span>
                  <i class="far fa-long-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
