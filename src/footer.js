export function createFooter(content) {
  let reviewsContainer = document.createElement("div");
  reviewsContainer.id = "reviews-container";

  let reviews = document.createElement("iframe");
  reviews.id = "reviews";
  reviews.src = "https://widgets.sociablekit.com/google-reviews/iframe/125356";
  reviews.loading = "lazy";

  content.appendChild(reviewsContainer);
  reviewsContainer.appendChild(reviews);
}
