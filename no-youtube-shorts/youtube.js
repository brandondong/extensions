// declarativeNetRequest is not enough to redirect links to Shorts because link navigation on Youtube is done through Javascript instead of a usual page load.
// To get around this, disable Javascript specifically when a Shorts link is clicked so native anchor tag handling and therefore declarativeNetRequest takes effect.
document.addEventListener("click", e => {
  let node = e.target;
  while (node) {
    if (node instanceof HTMLAnchorElement) {
      if (node.href && node.href.includes("youtube.com/shorts/")) {
        e.stopImmediatePropagation();
      }
      return;
    }
    node = node.parentNode;
  }
}, true);