const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");

function openMenu() {
  sidebar.style.display = "flex";
  sidebar.style.animation = "";
  sidebar.style.animation = "sidebarIn 1s 0s forwards";
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeMenu() {
  sidebar.style.animation = "";
  sidebar.style.animation = "sidebarOut 1s 0s forwards";
  setTimeout(close, 1200);
}

function close() {
  sidebar.style.display = "none";
  document.body.style.overflow = ""; // Restore scrolling
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);


// Main dropdown toggle (e.g. Courses)
document.querySelectorAll('[data-dropdown]').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    toggle.classList.toggle('active');
    toggle.nextElementSibling.classList.toggle('active');
  });
});

// Sub-dropdown toggle (e.g. Web Development)
document.querySelectorAll('[data-subdropdown]').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    toggle.classList.toggle('active');
    toggle.nextElementSibling.classList.toggle('active');
  });
});



// YOUTUBE VIDEO

const openBtn = document.getElementById("open-video");
const modal = document.getElementById("video-modal");
const closeBtn = document.getElementById("close-video");
const iframe = document.getElementById("youtube-video");
const videoURL = "https://www.youtube.com/embed/Jox6R5-rIH0?autoplay=1";

openBtn.addEventListener("click", () => {
  iframe.src = videoURL;
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  iframe.src = "";
  modal.style.display = "none";
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    iframe.src = "";
    modal.style.display = "none";
  }
});



// FAQ

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector(".accordion-icon");

  // Close all initially
  content.style.height = "0px";

  header.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("open");

    // Close all
    accordions.forEach((acc) => {
      acc.classList.remove("open");
      acc.querySelector(".accordion__content").style.height = "0px";
    });

    if (!isOpen) {
      accordion.classList.add("open");
      content.style.height = content.scrollHeight + "px";
    }
  });
});

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const icon = header.querySelector("i");
    icon.classList.toggle("rotate");

    const content = header.nextElementSibling;
    content.classList.toggle("open"); // Add your expand logic here
  });
});



// POPUP

document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("popupForm").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("popupForm").style.display = "none";
});

// Optional: Close form when clicking outside the form content
window.addEventListener("click", (e) => {
  const popup = document.getElementById("popupForm");
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
