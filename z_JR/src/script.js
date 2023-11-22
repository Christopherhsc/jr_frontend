window.addEventListener('resize', function() {
    var nameLink = document.getElementById('name-link');
    if (window.innerWidth < 1250) {
      nameLink.innerHTML = 'Jennifer <br> <span>Rasmussen</span>';
    } else {
      nameLink.innerHTML = 'Jennifer <span>Rasmussen</span>';
    }
  });
  
  // Typing animation
  var typed = new Typed(".typing", {
    strings: [
      "Din kommende | Personlige træner",
      "Din kommende | Kostvejleder",
      "Din kommende | Coach! ^5000",
    ],
  
    typeSpeed: 40,
    backSpeed: 0,
    backDelay: 1500,
    startDelay: 1500,
    loop: true,
    smartBackspace: true,
    showCursor: false,
  });
  
  var typed = new Typed(".quotes", {
    strings: [
      "^3000 <h3>Kristiane: ⭐⭐⭐⭐⭐</h3><br> &quot;Med hjælp fra Jennifer, har jeg fundet en kærlighed til træning og til mig selv, som jeg aldrig troede jeg ville finde. Jeg kan se og mærke fantastiske resultater, som jeg ikke har kunnet få uden Jennifers hjælp og vejledning. Vægttab, opbygning af muskelmasse, mere energi til hverdagen, et klarere hoved samt en overordnet ro i kroppen er bl.a. nogle af de mange resultater jeg selv har bemærket! Jennifer er utrolig motiverende, sød og afslappet og så er hun bare enormt dygtig til både at forklare øvelser, men også til at vise hvordan man får allermest ud af sin træning - hun er hele pakken og jeg kan slet ikke anbefale hende nok. &quot; ",
      "^3000 <h3>Maria: ⭐⭐⭐⭐⭐</h3><br> &quot;Jeg var på udkig efter en personlig træner, som var i stand til at forstå mine behov og mål og dermed skabe et ordentligt kost- og træningsprogram - målrettet mig. Det fandt jeg i Jennifer.<br>Efter et rygestop og overgangsalder har det været svært, at fastholde den vægt jeg befandt mig bedst i. Jennifer har formået at være min inspiration og motivationskilde, især de dage hvor det har været hårdt. Hun er min personlige træner og hun har gjort en meget stor forskel for mig&quot; ",
    ],
    smartBackSpace: true,
    typeSpeed: 10,
    backDelay: 10000,
    loop: true,
    showCursor: false,
  });
  
  // Styling header
  $(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
    });
  });
  
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    // Toggle the active class on the menu toggle
    this.classList.toggle("active");
  });
  
  // Get all the menu items
  var menuItems = document.querySelectorAll(".menu li a");
  
  // Loop through each menu item and attach a click event listener
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      // Remove the active class from the menu toggle
  
      document.querySelector(".menu-toggle").classList.remove("active");
    });
  });
  
  var modalBtns = document.getElementsByClassName("openModalBtn");
  var modals = document.getElementsByClassName("modal");
  
  for (var i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener("click", function() {
      var modalId = this.getAttribute("data-modal");
      var modal = document.getElementById(modalId);
      modal.style.display = "flex";
      
      modal.addEventListener("click", function(event) {
        var navbar = document.getElementById('navbar'); // Replace 'navbar' with the actual ID of your navbar element
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  }
  
  var closeBtns = document.getElementsByClassName("close");
  
  for (var j = 0; j < closeBtns.length; j++) {
    closeBtns[j].addEventListener("click", function() {
      this.parentElement.parentElement.style.display = "none";
    });
  }