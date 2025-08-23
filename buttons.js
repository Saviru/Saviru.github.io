const buttons = document.querySelectorAll(".mainBtns");

buttons.forEach(button => {
    button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();
        const { style } = button;

    const right = event.offsetX > rect.width/2;
    const top = event.offsetY < rect.height/2;

    style.removeProperty("--tr");
    style.removeProperty("--br");
    style.removeProperty("--tl");
    style.removeProperty("--bl");

    if(right) {
        button.classList.add("right");
    } else {
        button.classList.remove("right");
    }


    if (top && right) {
        style.setProperty("--tr", "0");
    } else if (!top && right) {
        style.setProperty("--br", "0");
    } else if (!top && !right) {
        style.setProperty("--bl", "0");
    } else if (top && !right) {
        style.setProperty("--tl", "0");
    }

    style.setProperty("--x", `${event.offsetX}px`);
    style.setProperty("--y", `${event.offsetY}px`);

    button.addEventListener("mouseleave", () => {
        const { style } = button;
        style.removeProperty("--tr");
        style.removeProperty("--br");
        style.removeProperty("--bl");
        style.removeProperty("--tl");
    });

});
});
