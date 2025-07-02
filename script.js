const ratingButtons = document.querySelectorAll(".rating-btns");
const submitBtn = document.getElementById("submit-btn");
const ratingMainContainer = document.getElementById("rating-main-container");
const thankYouContainer = document.getElementById("thank-you-container");
const selectedRatingSpan = document.querySelector(".selected-rating");

let selectedRating = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    selectedRating = Number(button.textContent);
    console.log(selectedRatingSpan);
    console.log(selectedRating);
  });
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (selectedRating > 0) {
    selectedRatingSpan.textContent = selectedRating;
    ratingMainContainer.style.display = "none";
    thankYouContainer.style.display = "flex";
  } else {
    alert("Please select a rating number before submitting!");
  }
});
