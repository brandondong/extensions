// declarativeNetRequest is not enough to redirect links because link navigation on Youtube is done through Javascript instead of a usual page load.
// To get around this, disable Javascript specifically when a target link is clicked so native anchor tag handling and therefore declarativeNetRequest takes effect.
document.addEventListener("click", e => {
  let node = e.target;
  while (node) {
    if (node instanceof HTMLAnchorElement) {
      if (node.href &&
        (node.href.includes("youtube.com/shorts/") || node.href.includes("youtube.com/@") || node.href.includes("youtube.com/channel/"))) {
        e.stopImmediatePropagation();
      }
      return;
    }
    node = node.parentNode;
  }
}, true);

document.addEventListener("keydown", e => {
  const k = e.key;
  if (k === "Escape") {
    // Prevent exiting theater mode.
    e.stopImmediatePropagation();
  } else if (k !== "0" && !isNaN(parseInt(k))) {
    // Don't navigate to random points of the video accidentally.
    e.stopImmediatePropagation();
  }
}, true);
