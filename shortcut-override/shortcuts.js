// Relies on content scripts running first and so this event listener taking precedence.
document.addEventListener("keydown", e => {
  if (e.ctrlKey) {
    const k = e.key;
    if (k === "l" ||
      !isNaN(parseInt(k))) {
      e.stopImmediatePropagation();
    }
  }
}, true);