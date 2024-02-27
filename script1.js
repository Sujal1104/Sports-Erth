const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");

const renderCards = (filter) => {
  if (filter === "all") {
    productCards.forEach((card) => (card.style.display = "flex"));
  } else {
    productCards.forEach((card) => {
      const cardFilter = card.getAttribute("data-category");
      console.log(cardFilter);
      if (cardFilter === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }
};

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;
    console.log(filter);
    renderCards(filter);
  });
});

// const searchFrom = document.querySelector(".search-from");
// console.log(searchFrom);
