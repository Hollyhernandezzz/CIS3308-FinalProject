

console.log("pageFunction.ts is running");

const addButton = document.getElementById("add");
const editButton = document.getElementById("edit");
const setButton = document.getElementById("set-budget");

const addCategoryPopup = document.getElementById("category-popup");
const cancelButton = document.getElementById("cancel");


addButton?.addEventListener("click", () => {
    addCategoryPopup?.classList.remove("hidden");
});
cancelButton?.addEventListener("click", () => {
    console.log("cancel");
    addCategoryPopup?.classList.add("hidden");
});

editButton?.addEventListener("click", () => {

});

setButton?.addEventListener("click", () => {

});