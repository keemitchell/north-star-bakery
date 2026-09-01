const favoriteItems = [
    "Sourdough Bread",
    "Croissant",
    "Cinnamon Roll",
    "Cake"
];

function saveFavorite() {
    const favoriteSelect = document.getElementById("favorite-item");
    const favoriteMessage = document.getElementById("favorite-message");
    const preorderLink = document.getElementById("preorder-link");
    const selectedItem = favoriteSelect.value;

    if (selectedItem !== "") {
        localStorage.setItem("favoriteBakeryItem", selectedItem);

        favoriteMessage.textContent =
            "Your favorite item is " + selectedItem + ".";

        preorderLink.innerHTML =
            '<a href="contact.html">Pre-order this item</a>';
    }
}

function loadFavorite() {
    const savedItem = localStorage.getItem("favoriteBakeryItem");
    const favoriteSelect = document.getElementById("favorite-item");
    const favoriteMessage = document.getElementById("favorite-message");
    const preorderLink = document.getElementById("preorder-link");

    if (savedItem) {
        favoriteSelect.value = savedItem;

        favoriteMessage.textContent =
            "Your favorite item is " + savedItem + ".";

        preorderLink.innerHTML =
            '<a href="contact.html">Pre-order this item</a>';
    }
}

const saveButton = document.getElementById("save-favorite");

if (saveButton) {
    saveButton.addEventListener("click", saveFavorite);
    loadFavorite();
}

function validateForm(event) {
    const email = document.getElementById("email");
    const details = document.getElementById("details");

    const emailError = document.getElementById("email-error");
    const detailsError = document.getElementById("details-error");

    let formIsValid = true;

    emailError.textContent = "";
    detailsError.textContent = "";

    if (!email.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        formIsValid = false;
    }

    if (details.value.length < 10) {
        detailsError.textContent = "Please enter at least 10 characters.";
        formIsValid = false;
    }

    if (!formIsValid) {
        event.preventDefault();
    }
}

const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
}