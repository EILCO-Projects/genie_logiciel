export default function OtherTopics() {
  return (
    <ul class="tabs_nav nav unordered_list_end" role="tablist">
      <li role="presentation">
        <button
          class="active"
          data-bs-toggle="tab"
          data-bs-target="#tab_javascript"
          type="button"
          role="tab"
          aria-selected="true"
          data-magnetic
        >
          Photographs
        </button>
      </li>
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_python"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
          Questions/Responses
        </button>
      </li>
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_web_development"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
          Short Conversations
        </button>
      </li>
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_art_design"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
          Short Talks
        </button>
      </li>
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_business"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
          Incompletes Sentences
        </button>
      </li>
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_business"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
          Text Completion
        </button>
      </li>{" "}
      <li role="presentation">
        <button
          data-bs-toggle="tab"
          data-bs-target="#tab_business"
          type="button"
          role="tab"
          aria-selected="false"
          data-magnetic
        >
          Reading Comprehension
        </button>
      </li>
    </ul>
  );
}
