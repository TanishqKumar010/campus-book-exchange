
/* =========================================
   CAMPUS BOOK EXCHANGE - JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------------
    // HOME PAGE: Change the main heading
    // -------------------------------------

    const mainHeading = document.getElementById("mainHeading");
    const changeHeadingBtn = document.getElementById("changeHeadingBtn");

    if (changeHeadingBtn && mainHeading) {
        changeHeadingBtn.addEventListener("click", function () {
            mainHeading.textContent =
                "Discover, Exchange and Share Knowledge!";
        });
    }

    // -------------------------------------
    // HOME PAGE: Change a featured card
    // -------------------------------------

    const featuredCards = document.querySelectorAll(".featured-card");

    featuredCards.forEach(function (card) {
        card.addEventListener("dblclick", function () {
            card.style.backgroundColor = "#fff4d9";
        });
    });

    // Also provide an explicit button for the required interaction.
    const changeFeaturedColorBtn =
        document.getElementById("changeFeaturedColorBtn");

    if (changeFeaturedColorBtn && featuredCards.length > 0) {
        changeFeaturedColorBtn.addEventListener("click", function () {
            featuredCards[0].style.backgroundColor =
                featuredCards[0].style.backgroundColor === "rgb(255, 244, 217)"
                    ? "#ffffff"
                    : "#fff4d9";
        });
    }

    // -------------------------------------
    // HOME PAGE: Show or hide featured books
    // -------------------------------------

    const toggleBooksBtn = document.getElementById("toggleBooksBtn");
    const featuredBooks = document.getElementById("featuredBooks");

    if (toggleBooksBtn && featuredBooks) {
        toggleBooksBtn.addEventListener("click", function () {
            featuredBooks.classList.toggle("hidden");

            if (featuredBooks.classList.contains("hidden")) {
                toggleBooksBtn.textContent = "Show Featured Books";
            } else {
                toggleBooksBtn.textContent = "Hide Featured Books";
            }
        });
    }

    // -------------------------------------
    // BROWSE PAGE: Request a book
    // -------------------------------------

    const requestButtons = document.querySelectorAll(".request-btn");
    const requestMessage = document.getElementById("requestMessage");

    requestButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.classList.contains("requested-btn")) {
                return;
            }

            const card = button.closest(".available-card");
            const bookTitle = card.querySelector("h3").textContent;

            button.textContent = "Request Sent";
            button.classList.add("requested-btn");
            button.disabled = true;

            if (requestMessage) {
                requestMessage.textContent =
                    'Your request for "' + bookTitle +
                    '" has been recorded for this demonstration.';
                requestMessage.className = "message success";
            }
        });
    });

    // -------------------------------------
    // BROWSE PAGE: Display entered book title
    // -------------------------------------

    const bookTitleInput = document.getElementById("bookTitleInput");
    const showBookBtn = document.getElementById("showBookBtn");
    const bookSearchResult = document.getElementById("bookSearchResult");

    if (showBookBtn && bookTitleInput && bookSearchResult) {
        showBookBtn.addEventListener("click", function () {
            const title = bookTitleInput.value.trim();

            if (title === "") {
                bookSearchResult.textContent =
                    "Please enter a book title first.";
                bookSearchResult.className = "message error";
                return;
            }

            bookSearchResult.textContent =
                "You entered the book title: " + title;
            bookSearchResult.className = "message success";

            bookTitleInput.value = "";
        });

        bookTitleInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                showBookBtn.click();
            }
        });
    }

    // -------------------------------------
    // BROWSE PAGE: Change a book card's style
    // -------------------------------------

    const changeCardBtn = document.getElementById("changeCardBtn");
    const availableCards = document.querySelectorAll(".available-card");

    if (changeCardBtn && availableCards.length > 0) {
        changeCardBtn.addEventListener("click", function () {
            availableCards[0].classList.toggle("highlight-card");

            if (availableCards[0].classList.contains("highlight-card")) {
                changeCardBtn.textContent = "Remove Highlight";
            } else {
                changeCardBtn.textContent = "Highlight First Book";
            }
        });
    }

    // -------------------------------------
    // LIST PAGE: Change form heading size
    // -------------------------------------

    const formHeading = document.getElementById("formHeading");
    const changeHeadingSizeBtn =
        document.getElementById("changeHeadingBtn");

    if (formHeading && changeHeadingSizeBtn) {
        let headingIsLarge = false;

        changeHeadingSizeBtn.addEventListener("click", function () {
            headingIsLarge = !headingIsLarge;

            formHeading.style.fontSize =
                headingIsLarge ? "2.2rem" : "1.65rem";

            changeHeadingSizeBtn.textContent =
                headingIsLarge ? "Reset Heading Size" : "Change Heading Size";
        });
    }

    // -------------------------------------
    // LIST PAGE: Show or hide the form
    // -------------------------------------

    const toggleFormBtn = document.getElementById("toggleFormBtn");
    const bookForm = document.getElementById("bookForm");

    if (toggleFormBtn && bookForm) {
        toggleFormBtn.addEventListener("click", function () {
            bookForm.classList.toggle("hidden");

            if (bookForm.classList.contains("hidden")) {
                toggleFormBtn.textContent = "Show Form";
            } else {
                toggleFormBtn.textContent = "Hide Form";
            }
        });
    }

    // -------------------------------------
    // LIST PAGE: Validate and submit form
    // -------------------------------------

    if (bookForm) {
        bookForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const studentName =
                document.getElementById("studentName").value.trim();

            const bookTitle =
                document.getElementById("newBookTitle").value.trim();

            const authorName =
                document.getElementById("authorName").value.trim();

            const bookCategory =
                document.getElementById("bookCategory").value;

            const bookCondition =
                document.getElementById("bookCondition").value;

            const formMessage = document.getElementById("formMessage");

            if (
                studentName === "" ||
                bookTitle === "" ||
                authorName === "" ||
                bookCategory === "" ||
                bookCondition === ""
            ) {
                formMessage.textContent =
                    "Error: Please fill in all required fields.";
                formMessage.className = "message error";
                return;
            }

            formMessage.textContent =
                "Thank you, " + studentName +
                "! Your book \"" + bookTitle +
                "\" has been listed successfully for this demonstration.";

            formMessage.className = "message success";

            bookForm.reset();
        });
    }

});