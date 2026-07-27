// ==============================
// Elements
// ==============================

const shareBtn = document.querySelector(".share-btn");
const shareBox = document.querySelector(".share");
const bottom = document.querySelector(".bottom");

// ==============================
// Toggle Share
// ==============================

shareBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    shareBtn.classList.toggle("active");
    shareBox.classList.toggle("active");
    bottom.classList.toggle("active");

});

// ==============================
// Close When Clicking Outside
// ==============================

document.addEventListener("click", (e) => {

    if (
        !shareBox.contains(e.target) &&
        !shareBtn.contains(e.target)
    ) {

        closeShare();

    }

});

// ==============================
// Prevent Closing When Clicking
// Inside Share Box
// ==============================

shareBox.addEventListener("click", (e) => {

    e.stopPropagation();

});

// ==============================
// Close On Escape Key
// ==============================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeShare();

    }

});

// ==============================
// Close Function
// ==============================

function closeShare() {

    shareBtn.classList.remove("active");
    shareBox.classList.remove("active");
    bottom.classList.remove("active");

}