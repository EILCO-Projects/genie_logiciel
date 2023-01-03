export default function ListItem({ value }) {
  return (
    <div class="col col-lg-3 col-md-6 col-sm-6">
      <div
        class="category_item"
        style={{
          backgroundImage: "url('/assets/images/shapes/dot_shape_3.png')",
        }}
      >
        <a href="course_details.html" data-magnetic data-cursor="-opaque">
          <span class="item_icon">
            <ul class="post_meta post_meta unordered_list">
              <li class="date_text">
              
                <span class="d-block ">
                  <strong style={{ fontSize: "25px" }} class="d-block">
                    {value.annee}  
                  </strong>
                </span>
              </li>
            </ul>
          </span>
          <strong class="item_title">{value.nom} {value.numero}</strong>
          <small class="item_counter" style={{ color: "green" }}>
            {" "}
            <i class="fas fa-check"></i> Terminé
          </small>
        </a>
      </div>
    </div>
  );
}
