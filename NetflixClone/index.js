function heroSection(){
  let hero = document.querySelector('#hero-center button');
let emailInput = document.querySelector('#hero-section input');
let errorMessage = document.querySelector('#error-message');

hero.addEventListener('click', function() {
    let email = emailInput.value;

    if (email === '') {
     
        return;
    } else {
        errorMessage.textContent = '';
      
        window.location.href = '/NetflixLoginPage/index.html'
    }
});
emailInput.addEventListener('input', function() {
  if (emailInput.value !== '') {
      errorMessage.textContent = '';
  }
});
}
  
function page5() {
  let accordions = document.querySelectorAll("#part5-center .question");

  accordions.forEach((accordion) => {
    let icon = accordion.querySelector(".icon");
    let answer = accordion.nextElementSibling;

    accordion.addEventListener("click", () => {
      answer.classList.toggle("active");
      if (icon.classList.contains("ri-close-line")) {
        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-add-line");
      } else {
        icon.classList.remove("ri-add-line");
        icon.classList.add("ri-close-line");
      }
    });
  });
}

page5();
heroSection()
