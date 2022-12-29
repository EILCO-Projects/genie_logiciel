import ListItem from "./partials/listItem";
import OtherTopics from "./partials/otherTopics";

export default function ListOfText() {
  var tests = ["2019", "2022", "2020", "2017", "2022", "2007"];

  return (
    <main class="page_content">
      <section class=" mt-5 category_section section_space_lg pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-lg-6">
              <div class="section_heading text-center">
                <h2 class="heading_text">
                  Part 1 : Ph
                  <span class="heading_focus_text">otographs</span>
                </h2>
                <p class="mb-0">
                  Commencez votre test d'entraînement à la compréhension orale
                  du TOEIC, partie 1, maintenant !
                </p>
              </div>
            </div>
          </div>
          <div class="section_heading">
            <div class="row align-items-center">
              <div class="col col-lg">
                <OtherTopics />
              </div>
            </div>
          </div>
          <div class="category_items_wrapper row">
            {tests.map(function (value, _, __) {
              return <ListItem value={value} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
