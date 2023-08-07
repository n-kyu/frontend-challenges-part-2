function toggleAccordion(toggles, contents, index) {
    contents.forEach((content, contentIndex) => {
        if (index === contentIndex) {
            content.classList.toggle("show");
            toggles[index].classList.toggle("show");
        } else {
            content.classList.remove("show");
            toggles[contentIndex].classList.remove("show");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const toggles = accordion.querySelectorAll(".accordion__question");
        const contents = accordion.querySelectorAll(
            ".accordion__collapse.collapse"
        );

        toggles.forEach((toggle, index) => {
            toggle.addEventListener("click", () =>
                toggleAccordion(toggles, contents, index)
            );
        });
    });
});
