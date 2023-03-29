(function () {
  window.onload = function () {
    const btnPro = document.getElementById("btn-pro");
    const btnSyndic = document.getElementById("btn-syndic");
    const btnPart = document.getElementById("btn-part");
    const form = document.getElementById("Form");
    const formPart = document.getElementById("Form2");
    const title = document.querySelectorAll("label");

    // Les formulaire sont cachés au chargement de la page

    form.style.display = `none`;
    formPart.style.display = `none`;

    // Au click sur les boutons formulaire , le formulaire choisi apparait ou disparait

    btnPro.addEventListener("click", function () {
      if (form.style.display == "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
    });

    btnSyndic.addEventListener("click", function () {
      if (form.style.display == "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
    });

    btnPart.addEventListener("click", function () {
      if (formPart.style.display == "none") {
        formPart.style.display = "block";
      } else {
        formPart.style.display = "none";
      }
    });

    // Si un autre formulaire est ouvert au click il disparait et est remplacé par le bon

    btnPart.addEventListener("click", function () {
      if (form.style.display == "block") {
        form.style.display = "none";
      } else {
        form.style.display = "none";
      }
    });

    btnSyndic.addEventListener("click", function () {
      if (formPart.style.display == "block") {
        formPart.style.display = "none";
      } else {
        formPart.style.display = "none";
      }
    });

    btnPro.addEventListener("click", function () {
      if (formPart.style.display == "block") {
        formPart.style.display = "none";
      } else {
        formPart.style.display = "none";
      }
    });
  };
})();
