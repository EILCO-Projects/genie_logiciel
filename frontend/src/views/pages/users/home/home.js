import Benefits from "./partials/benefits";
import Greetings from "./partials/greetings";
import Modules from "./partials/modules";

export default function Home() {
  return (
    <main class="page_content">
      <Greetings />
      <Benefits />
      <Modules />

      <section class="promembership_section decoration_wrap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col col-lg-3">
              <div class="item_image">
                <div class="image_wrap">
                  <img
                    src="/assets/images/meta/thumbnail_img_1.png"
                    alt="Person Image"
                  />
                </div>
                <div
                  class="deco_item deco_img_1"
                  data-parallax='{"rotateZ" : 180, "smoothness": 6}'
                >
                  <img
                    src="/assets/images/shapes/dot_shape_7.png"
                    alt="Shape Image"
                  />
                </div>
              </div>
            </div>
            <div class="col col-lg-6">
              <h2 class="title_text">Nos anciens étudiants témoignent</h2>
            </div>
            <div class="col col-lg-3">
              <a class="btn btn_primary" href="course.html">
                <span>
                  <small>Les témoignages </small>
                  <small>Les témoignages </small>
                </span>
                <i class="far fa-long-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="deco_item deco_img_2"
          data-parallax='{"rotateZ" : 45, "smoothness": 6}'
        >
          <img src="/assets/images/shapes/shape_9.png" alt="Shape Image" />
        </div>
      </section>

      <section class="category_section section_space_md">
        <div class="container"></div>
      </section>

      <section class="getstart_section_2">
        <div class="container">
          <div class="content_box decoration_wrap">
            <div class="row align-items-center">
              <div class="col col-lg-6">
                <div class="item_image">
                  <div class="image_wrap">
                    <img
                      src="/assets/images/meta/thumbnail_img_2.png"
                      alt="Person Image"
                    />
                  </div>
                  <div class="deco_item deco_img_1">
                    <img
                      src="/assets/images/shapes/shape_10.png"
                      alt="Shape Image"
                    />
                  </div>
                  <div
                    class="deco_item deco_img_2"
                    data-parallax='{"rotateZ" : 90, "smoothness": 6}'
                  >
                    <img
                      src="/assets/images/shapes/shape_11.png"
                      alt="Shape Image"
                    />
                  </div>
                </div>
              </div>
              <div class="col col-lg-6">
                <div class="item_content">
                  <h2 class="title_text">Améliorez vos compétences</h2>
                  <p>
                    Donnez à votre équipe les connaissances, l'expérience et la
                    confiance dont elle a besoin pour s'attaquer à n'importe
                    quel problème.
                  </p>
                  <a class="btn btn_primary" href="#!">
                    <span>
                      <small>Commencer</small>
                      <small>Commencer</small>
                    </span>
                    <i class="far fa-long-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="deco_item deco_img_3"
              data-parallax='{"scale" : 0.6, "smoothness": 6}'
            >
              <img src="/assets/images/shapes/shape_12.png" alt="Shape Image" />
            </div>
            <div
              class="deco_item deco_img_4"
              data-parallax='{"scale" : 0.6, "smoothness": 6}'
            >
              <img src="/assets/images/shapes/shape_13.png" alt="Shape Image" />
            </div>
          </div>
        </div>
      </section>

      <section class="event_section section_space_lg"></section>
    </main>
  );
}
