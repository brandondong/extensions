const deleteWebkitScrollbar = () => {
    for (const sheet of document.styleSheets) {
        let rules;
        try {
            rules = sheet.cssRules;
        } catch {
            // Cross domain stylesheet access blocked.
            continue;
        }
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i];
            if (rule.selectorText === "::-webkit-scrollbar") {
                sheet.deleteRule(i);
                i--;
            }
        }
    }
}

window.addEventListener("load", () => {
    deleteWebkitScrollbar();
});

// Some sites can reintroduce the styling???
let scrollStarted = false;
document.addEventListener("scroll", () => {
    if (scrollStarted) {
        return;
    }

    scrollStarted = true;
    setTimeout(() => {
        deleteWebkitScrollbar();
    });
});

document.addEventListener("scrollend", () => {
    scrollStarted = false;
});