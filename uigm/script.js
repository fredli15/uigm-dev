document.addEventListener('DOMContentLoaded', function() {
  const profileIcons = document.querySelectorAll('.profile-icon');
  const subIconSets = document.querySelectorAll('.sub-icons');

  profileIcons.forEach(icon => {
      icon.addEventListener('click', function() {
          const target = this.getAttribute('data-target');
          subIconSets.forEach(set => set.classList.remove('active'));
          document.getElementById(`${target}-sub-icons`).classList.add('active');
      });
  });
});

function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  menu.classList.toggle('show');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active'); // Toggle active class to show/hide sidebar
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('active'); // Close the sidebar
}

function toggleSearch() {
  const searchForm = document.querySelector('.search-form');
  const rightMenuItems = document.querySelectorAll('.right-menu li');

  // Toggle the active class to show/hide the search form
  searchForm.classList.toggle('active');

  // Adjust the right menu items margin when search form is active
  rightMenuItems.forEach(item => {
    item.style.marginLeft = searchForm.classList.contains('active') ? '10px' : '20px';
  });
}





let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  setTimeout(showSlides, 3000); // Change slide every 8 seconds
}

