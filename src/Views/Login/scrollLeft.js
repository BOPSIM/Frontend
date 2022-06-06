import $ from "jquery";

export default function moveScrollLeft() {
  var _scrollX = $(".lastest").scrollLeft();
  $(".lastest").scrollLeft(_scrollX + 100);
}
