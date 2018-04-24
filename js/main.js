// TYPED TITLE
let typed_title = document.querySelector('#typed_title');
let typed       = new Typed(typed_title, {
  strings: ["Portfolio", "Creations", "Workstation"],
  typeSpeed: 40,
  backSpeed: 50,
  loop: true,
  backDelay: 1200,
  fadeOut: true,
  smartBackspace: false
});
let scrollDownIcon = document.getElementById('scrollDownIcon');

// DOM
let aboutSection          = document.querySelector('.about');
let designedTitle         = document.querySelector('.designedTitle');
let informationList       = document.getElementsByClassName('informationList');
let informationItem       = document.querySelectorAll('.informationItem');
let profileImageContainer = document.getElementsByClassName('profileImageContainer');
let skillsTitle           = document.querySelector('#skillsTitle');
let skills_list           = document.getElementsByClassName('skills_list');
let skill                 = document.getElementsByClassName('skill');
let awardsTitle           = document.getElementById('awardsTitle');
let awards_list_item      = document.getElementsByClassName('awards_list_item'); 
let contactBody           = document.getElementsByClassName('contactBody');

// SCROLL REVEAL FRAMEWORK INITIALIZATION
window.sr = ScrollReveal({ reset: true });

// SCROLL REVEAL ( ABOUT SECTION )
sr.reveal(designedTitle, {
  duration: 1200,
  origin: "left",
  distance: "150px",
  scale: 1
});

sr.reveal(informationList, {
  duration: 750,
  opacity: 0,
  delay: 300,
  distance: '20px',
  scale: 1
});

sr.reveal(informationItem, { 
  duration: 600,
  opacity: 0,
  delay: 400,
  origin: 'left',
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  distance: '90px',
  scale: 1
}, 60);


// SCROLL REVEAL ( PROFILE IMAGE SECTION )
sr.reveal(profileImageContainer, {
  duration: 750,
  opacity: 0,
  distance: '100px',
  delay: 150,
  scale: 1
});

// SCROLL REVEAL ( SKILLS SECTION )
sr.reveal(skillsTitle, {
  duration: 750,
  opacity: 0,
  distance: '50px',
  origin: 'right',
  delay: 0,
  scale: 1
});

sr.reveal(skill, {
  duration: 500,
  opacity: 0,
  delay: 450,
  distance: '100px',
  origin: 'right',
  scale: 1
}, 50);

// SCROLL REVEAL ( AWARDS SECTION )
sr.reveal(awardsTitle, {
  duration: 600,
  opacity: 0,
  delay: 300,
  origin: 'left',
  distance: '100px',
  scale: 1
});

sr.reveal(awards_list_item, {
  duration: 450,
  opacity: 0,
  delay: 500,
  origin: 'left',
  distance: '100px',
  scale: 1
}, 60);

// SCROLL REVEAL ( CONTACT ME SECTION )
sr.reveal(contactBody, {
  duration: 500,
  opacity: 0,
  easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  delay: 200,
  scale: 0.3
});


// MAIN EVENTS //
scrollDownIcon.addEventListener('click', function(event) {
  event.preventDefault();
  
  $('html, body').animate({
    scrollTop: $(this).offset().top + 80 + 'px'
  }, 'slow');
});