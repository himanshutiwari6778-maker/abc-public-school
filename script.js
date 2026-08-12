/* ============================================
DHRUV PUBLIC SCHOOL
MODERN WEBSITE JAVASCRIPT
============================================ */

/* =========================
PRELOADER
========================= */

window.addEventListener("load", function () {

const preloader = document.getElementById("preloader");

setTimeout(function () {

if (preloader) {
  preloader.classList.add("hide");
}

}, 600);

});

/* =========================
MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

menuToggle.addEventListener("click", function () {

menuToggle.classList.toggle("open");
mainNav.classList.toggle("open");

document.body.classList.toggle(
  "no-scroll",
  mainNav.classList.contains("open")
);

});

mainNav.querySelectorAll("a").forEach(function (link) {

link.addEventListener("click", function () {

  menuToggle.classList.remove("open");
  mainNav.classList.remove("open");
  document.body.classList.remove("no-scroll");

});

});

}

/* =========================
SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

link.addEventListener("click", function (event) {

const id = link.getAttribute("href");

if (!id || id === "#") return;

const target = document.querySelector(id);

if (target) {

  event.preventDefault();

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}

});

});

/* =========================
HEADER SCROLL EFFECT
========================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", function () {

if (!header) return;

if (window.scrollY > 50) {
header.classList.add("scrolled");
} else {
header.classList.remove("scrolled");
}

});

/* =========================
ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll("nav a");

function updateActiveNavigation() {

let currentSection = "";

sections.forEach(function (section) {

const sectionTop =
  section.offsetTop - 150;

const sectionBottom =
  sectionTop + section.offsetHeight;

if (
  window.scrollY >= sectionTop &&
  window.scrollY < sectionBottom
) {
  currentSection = section.getAttribute("id");
}

});

navItems.forEach(function (link) {

link.classList.remove("active");

if (
  link.getAttribute("href") ===
  "#" + currentSection
) {
  link.classList.add("active");
}

});

}

window.addEventListener(
"scroll",
updateActiveNavigation
);

updateActiveNavigation();

/* =========================
SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(
function (entries, observer) {

  entries.forEach(function (entry) {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

      observer.unobserve(entry.target);

    }

  });

},
{
  threshold: 0.12
}

);

revealElements.forEach(function (element) {

revealObserver.observe(element);

});

/* =========================
COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters() {

if (countersStarted) return;

countersStarted = true;

counters.forEach(function (counter) {

const target =
  Number(counter.dataset.target);

let current = 0;

const duration = 1500;

const startTime = performance.now();

function updateCounter(currentTime) {

  const elapsed =
    currentTime - startTime;

  const progress =
    Math.min(elapsed / duration, 1);

  const eased =
    1 - Math.pow(1 - progress, 3);

  current =
    Math.floor(target * eased);

  counter.textContent =
    current.toLocaleString("en-IN");

  if (progress < 1) {

    requestAnimationFrame(
      updateCounter
    );

  } else {

    counter.textContent =
      target.toLocaleString("en-IN");

  }

}

requestAnimationFrame(
  updateCounter
);

});

}

const statsSection =
document.querySelector(".stats-section");

if (statsSection) {

const statsObserver =
new IntersectionObserver(
function (entries, observer) {

    if (entries[0].isIntersecting) {

      startCounters();

      observer.disconnect();

    }

  },
  {
    threshold: 0.3
  }
);

statsObserver.observe(statsSection);

}

/* =========================
HERO BUTTON
========================= */

const heroAdmissionButton =
document.querySelector(
".hero .primary-btn"
);

if (heroAdmissionButton) {

heroAdmissionButton.addEventListener(
"click",
function () {

  const admission =
    document.getElementById("admission");

  if (admission) {

    admission.scrollIntoView({
      behavior: "smooth"
    });

  }

}

);

}

/* =========================
ADMISSION FORM
→ WHATSAPP
========================= */

const schoolWhatsAppNumber =
"919876543210";

const admissionForm =
document.querySelector(
".admission-form form"
);

if (admissionForm) {

admissionForm.addEventListener(
"submit",
function (event) {

  event.preventDefault();


  const studentName =
    admissionForm
      .querySelector(
        'input[type="text"]'
      )
      .value
      .trim();


  const textInputs =
    admissionForm.querySelectorAll(
      'input[type="text"]'
    );


  const fatherName =
    textInputs.length > 1
      ? textInputs[1].value.trim()
      : "";


  const mobile =
    admissionForm
      .querySelector(
        'input[type="tel"]'
      )
      .value
      .trim();


  const className =
    admissionForm
      .querySelector("select")
      .value;


  const address =
    admissionForm
      .querySelector("textarea")
      .value
      .trim();


  /* VALIDATION */

  if (
    !studentName ||
    !fatherName ||
    !mobile ||
    !className ||
    !address
  ) {

    alert(
      "कृपया Admission Form की सभी जानकारी भरें।"
    );

    return;

  }


  const mobilePattern =
    /^[6-9][0-9]{9}$/;


  if (!mobilePattern.test(mobile)) {

    alert(
      "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।"
    );

    return;

  }


  /* WHATSAPP MESSAGE */

  const message =

`🏫 Dhruv Public School

📋 New Admission Enquiry

👨‍🎓 Student Name:
${studentName}

👨‍👦 Father's Name:
${fatherName}

📱 Mobile Number:
${mobile}

🎓 Class:
${className}

📍 Address:
${address}

यह Admission Enquiry वेबसाइट के Online Admission Form से प्राप्त हुई है।`;

  const whatsappURL =
    "https://wa.me/" +
    schoolWhatsAppNumber +
    "?text=" +
    encodeURIComponent(message);


  window.open(
    whatsappURL,
    "_blank"
  );


  admissionForm.reset();

}

);

}

/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages =
document.querySelectorAll(
".gallery-item img"
);

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById(
"lightboxImage"
);

const closeLightbox =
document.getElementById(
"closeLightbox"
);

galleryImages.forEach(function (image) {

image.addEventListener(
"click",
function () {

  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src =
    image.src;

  lightboxImage.alt =
    image.alt;

  lightbox.classList.add("show");

  document.body.classList.add(
    "no-scroll"
  );

}

);

});

function closeGallery() {

if (!lightbox) return;

lightbox.classList.remove("show");

document.body.classList.remove(
"no-scroll"
);

}

if (closeLightbox) {

closeLightbox.addEventListener(
"click",
closeGallery
);

}

if (lightbox) {

lightbox.addEventListener(
"click",
function (event) {

  if (
    event.target === lightbox
  ) {

    closeGallery();

  }

}

);

}

document.addEventListener(
"keydown",
function (event) {

if (event.key === "Escape") {

  closeGallery();

}

}
);

/* =========================
BACK TO TOP
========================= */

const topButton =
document.getElementById(
"topButton"
);

window.addEventListener(
"scroll",
function () {

if (!topButton) return;

if (window.scrollY > 500) {

  topButton.classList.add("show");

} else {

  topButton.classList.remove("show");

}

}
);

if (topButton) {

topButton.addEventListener(
"click",
function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

);

}

/* =========================
NOTICE BOARD
========================= */

document
.querySelectorAll(".notice")
.forEach(function (notice) {

notice.addEventListener(
  "click",
  function () {

    const message =
      notice.querySelector(
        ".notice-content p"
      );

    if (message) {

      alert(
        "📢 School Notice\n\n" +
        message.textContent
      );

    }

  }
);

});

/* =========================
FACILITY INTERACTION
========================= */

document
.querySelectorAll(".facility-card")
.forEach(function (card) {

card.addEventListener(
  "click",
  function () {

    const title =
      card.querySelector("h3");

    const description =
      card.querySelector("p");

    if (
      title &&
      description
    ) {

      alert(
        title.textContent +
        "\n\n" +
        description.textContent
      );

    }

  }
);

});

/* =========================
CURRENT YEAR
========================= */

const currentYear =
document.getElementById(
"currentYear"
);

if (currentYear) {

currentYear.textContent =
new Date().getFullYear();

}

/* =========================
IMAGE FALLBACK
========================= */

document
.querySelectorAll("img")
.forEach(function (image) {

image.addEventListener(
  "error",
  function () {

    image.style.opacity = "0.4";

  }
);

});

/* =========================
CONSOLE
========================= */

console.log(
"Dhruv Public School modern website loaded successfully."
);
