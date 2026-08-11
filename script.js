// ============================================
// ABC PUBLIC SCHOOL - FINAL JAVASCRIPT
// WhatsApp Admission Enquiry
// ============================================


// SCHOOL WHATSAPP NUMBER
// Country code सहित लिखें
// Example: India 91 + mobile number

const schoolWhatsAppNumber = "919876543210";


// ============================================
// SMOOTH NAVIGATION
// ============================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

  link.addEventListener("click", function(event) {

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ============================================
// ADMISSION BUTTON
// ============================================

const admissionButtons =
  document.querySelectorAll(".hero button");

admissionButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const admissionSection =
      document.getElementById("admission");

    if (admissionSection) {

      admissionSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ============================================
// ADMISSION FORM → WHATSAPP
// ============================================

const admissionForm =
  document.querySelector(".admission-form form");


if (admissionForm) {

  admissionForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      // Get form values

      const inputs =
        admissionForm.querySelectorAll(
          'input[type="text"]'
        );


      const studentName =
        inputs[0].value.trim();


      const fatherName =
        inputs[1].value.trim();


      const mobile =
        admissionForm
        .querySelector('input[type="tel"]')
        .value.trim();


      const className =
        admissionForm
        .querySelector("select")
        .value;


      const address =
        admissionForm
        .querySelector("textarea")
        .value.trim();


      // ====================================
      // VALIDATION
      // ====================================

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


      // ====================================
      // MOBILE VALIDATION
      // ====================================

      const mobilePattern =
        /^[6-9][0-9]{9}$/;


      if (!mobilePattern.test(mobile)) {

        alert(
          "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।"
        );

        return;

      }


      // ====================================
      // WHATSAPP MESSAGE
      // ====================================

      const message =
`🏫 ABC Public School

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


      // ====================================
      // WHATSAPP URL
      // ====================================

      const whatsappURL =
        "https://wa.me/" +
        schoolWhatsAppNumber +
        "?text=" +
        encodeURIComponent(message);


      // ====================================
      // OPEN WHATSAPP
      // ====================================

      window.open(
        whatsappURL,
        "_blank"
      );


      // ====================================
      // RESET FORM
      // ====================================

      admissionForm.reset();

    }
  );

}


// ============================================
// GALLERY IMAGE VIEWER
// ============================================

const galleryImages =
  document.querySelectorAll(".gallery-item img");


galleryImages.forEach(function(image) {

  image.style.cursor = "pointer";


  image.addEventListener("click", function() {

    const overlay =
      document.createElement("div");


    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";

    overlay.style.background =
      "rgba(0,0,0,0.88)";

    overlay.style.display =
      "flex";

    overlay.style.alignItems =
      "center";

    overlay.style.justifyContent =
      "center";

    overlay.style.zIndex =
      "9999";

    overlay.style.padding =
      "20px";


    const largeImage =
      document.createElement("img");


    largeImage.src =
      image.src;

    largeImage.alt =
      image.alt;


    largeImage.style.maxWidth =
      "95%";

    largeImage.style.maxHeight =
      "90%";

    largeImage.style.objectFit =
      "contain";

    largeImage.style.borderRadius =
      "10px";


    overlay.appendChild(
      largeImage
    );


    document.body.appendChild(
      overlay
    );


    overlay.addEventListener(
      "click",
      function() {

        overlay.remove();

      }
    );

  });

});


// ============================================
// BACK TO TOP BUTTON
// ============================================

const topButton =
  document.createElement("button");


topButton.innerHTML = "↑";

topButton.setAttribute(
  "aria-label",
  "Back to top"
);


topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";

topButton.style.width = "45px";
topButton.style.height = "45px";

topButton.style.borderRadius = "50%";
topButton.style.border = "none";

topButton.style.background = "#123c69";
topButton.style.color = "white";

topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";

topButton.style.display = "none";

topButton.style.zIndex = "500";


document.body.appendChild(
  topButton
);


window.addEventListener(
  "scroll",
  function() {

    if (window.scrollY > 400) {

      topButton.style.display =
        "block";

    } else {

      topButton.style.display =
        "none";

    }

  }
);


topButton.addEventListener(
  "click",
  function() {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);


// ============================================
// NOTICE BOARD
// ============================================

const notices =
  document.querySelectorAll(".notice");


notices.forEach(function(notice) {

  notice.style.cursor = "pointer";


  notice.addEventListener(
    "click",
    function() {

      const message =
        notice.querySelector("p");


      if (message) {

        alert(
          "School Notice\n\n" +
          message.textContent
        );

      }

    }
  );

});


// ============================================
// FACILITY CARDS
// ============================================

const facilities =
  document.querySelectorAll(
    ".facility-card"
  );


facilities.forEach(function(card) {

  card.addEventListener(
    "click",
    function() {

      const title =
        card.querySelector("h3");

      const description =
        card.querySelector("p");


      if (title && description) {

        alert(
          title.textContent +
          "\n\n" +
          description.textContent
        );

      }

    }
  );

});


// ============================================
// CURRENT YEAR
// ============================================

const footer =
  document.querySelector("footer");


if (footer) {

  const paragraphs =
    footer.querySelectorAll("p");


  if (paragraphs.length > 1) {

    paragraphs[paragraphs.length - 1]
      .textContent =
      "© " +
      new Date().getFullYear() +
      " ABC Public School. All Rights Reserved.";

  }

}


// ============================================
// WEBSITE LOADED
// ============================================

console.log(
  "ABC Public School website loaded successfully."
);