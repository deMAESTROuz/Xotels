  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });


document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card_row_col");

  cards.forEach(card => {
    const plusBtn = card.querySelector(".card_row_col_box_1_btn");
    const minusBtn = card.querySelector(".card_row_col_1_box_btn");
    const answer = card.querySelector(".card_row_col_1");

    // boshlang‘ich holat
    answer.style.display = "none";
    minusBtn.style.display = "none";

    plusBtn.addEventListener("click", () => {
      answer.style.display = "block";
      plusBtn.style.display = "none";
      minusBtn.style.display = "inline-block";
    });

    minusBtn.addEventListener("click", () => {
      answer.style.display = "none";
      plusBtn.style.display = "inline-block";
      minusBtn.style.display = "none";
    });
  });
});