// Animate elements on scroll
const animatedElements = document.querySelectorAll(".animate");

function animateOnScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // change after 50px scroll
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function animateTimeline() {
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateTimeline);
window.addEventListener('load', animateTimeline);


// --- NEW: Hamburger menu logic ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Optional: Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ✅ MATRIX SCRAMBLE LOOPING EFFECT (Mixed Upper + Lower Case)
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("matrix-title");
  if (!el) return;

  const originalText = el.textContent;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let interval = null;

  function scrambleOnce() {
    let frame = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      let output = "";
      for (let i = 0; i < originalText.length; i++) {
        if (i < frame) {
          output += originalText[i];
        } else if (originalText[i] === " ") {
          output += " ";
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      el.textContent = output;
      frame++;

      if (frame > originalText.length) {
        clearInterval(interval);
      }
    }, 60);
  }

  scrambleOnce();
  setInterval(scrambleOnce, 3000); // repeat every 3 seconds
});



// ✅ Scroll-down arrow hides when user scrolls down
const scrollArrow = document.querySelector('.scroll-down');

window.addEventListener('scroll', () => {
  if (!scrollArrow) return;
  if (window.scrollY > 100) {
    scrollArrow.classList.add('hidden');
  } else {
    scrollArrow.classList.remove('hidden');
  }
});

// ✅ Optional: smooth scroll to next section when clicked
scrollArrow?.addEventListener('click', () => {
  const nextSection = document.querySelector('#about');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
});


window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill-fill');
  const triggerBottom = window.innerHeight * 0.8;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < triggerBottom) {
      skill.classList.add('animated');
    }
  });
});

window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill');
  const triggerBottom = window.innerHeight * 0.8;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    const percentText = skill.querySelector('.percent').innerText;
    const percentValue = parseInt(percentText.replace('%', ''));
    const fill = skill.querySelector('.skill-fill');

    if (skillTop < triggerBottom) {
      fill.style.width = percentValue + '%';
    }
  });
});
