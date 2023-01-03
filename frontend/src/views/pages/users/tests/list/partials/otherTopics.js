export default function OtherTopics() {
  return (
    <ul class="tabs_nav nav unordered_list_center" role="tablist">
      <li role="presentation">
        <button
          class="active"
          data-bs-toggle="tab"
          data-bs-target="#tab_tt"
          type="button"
          role="tab"
          aria-selected="true"
          data-magnetic
        >
          Tests terminés
        </button>
      </li>
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_tnt"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
         Tests non terminés
        </button>
      </li>
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_tnc"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
          Tests non commencés
        </button>
      </li>
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_v"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
          Vocabulaires
        </button>
      </li>
      
    </ul>
  );
}
