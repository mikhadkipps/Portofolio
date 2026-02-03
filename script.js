function syncLinkedInLogos(scope = document) {
  const isDark = document.body.classList.contains("dark");

  scope.querySelectorAll(".linkedin-img").forEach(img => {
    img.src = isDark ? img.dataset.dark : img.dataset.light;
  });
}

/* ================= WINDOW REGISTRY ================= */
const openWindows = Object.create(null);
let topZ = 300;

/* ================= Z-INDEX ================= */
const bringToFront = (win) => {
  win.style.zIndex = ++topZ;
};

/* ================= DRAG ================= */
function makeDraggable(win) {
  // Disable dragging on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return;
  }

  let dragging = false;
  let startX = 0, startY = 0;
  let startLeft = 0, startTop = 0;

  win.addEventListener("mousedown", (e) => {
    if (!e.target.closest(".title-bar")) return;
    if (e.target.closest(".close-btn")) return;

    dragging = true;
    bringToFront(win);

    startX = e.clientX;
    startY = e.clientY;

    const rect = win.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;

    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const padding = 10;

    const maxLeft = window.innerWidth - win.offsetWidth - padding;
    const maxTop = window.innerHeight - win.offsetHeight - padding;

    win.style.left =
      Math.max(padding, Math.min(startLeft + dx, maxLeft)) + "px";
    win.style.top =
      Math.max(padding, Math.min(startTop + dy, maxTop)) + "px";
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
    document.body.style.userSelect = "";
  });
}

/* ================= WINDOW CONTENT ================= */
const windowConfig = {
  about: {
    title: "about",
    width: window.innerWidth < 768 ? '95vw' : window.innerWidth < 1024 ? '90vw' : 800,
    height: 'auto',
    content: `
      <div class="about-static">
        <div class="profile-card">
          <img src="./images/duck.jpeg" class="profile-img">
          <div class="profile-info">
            <h1 id="myname-title">Mikha Dwight</h1>
            <p class="profile-subtitle">Fresh graduate web developer</p>
          </div>
        </div>
      </div>

      <div class="about-scroll">
        <p id="education">&nbsp; &nbsp;&nbsp; Hi! I'm Mikha a web developer i..<br>
        &nbsp; &nbsp;&nbsp; • create wireframes <br>
        &nbsp; &nbsp;&nbsp; • do front-end web development <br>
        <br>

        <h1 id="ScrollAbout"><b>Education</b></h1>
        <dv id="education">
          <p>&nbsp;&nbsp;&nbsp; Bachelor of Science in Information Systems</p>
          <p class="education-detail">&nbsp; &nbsp; Gunadarma University 2025</p>
        </dv><br>

        <h1 id="ScrollAbout"><b>Language Proficiency</b></h1>
        <p id="education">&nbsp;&nbsp;&nbsp;
          Native <span id="language"><b>Indonesia</b></span>,
          Advanced <span id="language"><b>English</b></span>
        </p><br>

        <h1 id="ScrollAbout"><b>Other Things I Want to Learn</b></h1>
        <p id="education">
          &nbsp; &nbsp;&nbsp; • Game Development <br>
          &nbsp; &nbsp;&nbsp; • Software Development <br>
        </p>
      </div>
    `
  },

  works: {
  title: "works",
  width: window.innerWidth < 768 ? '95vw' : window.innerWidth < 1024 ? '90vw' : 1000,
  height: 'auto',
  content: `
    <div class="works-layout">

      <div class="works-column">
        <h2 class="works-title">TOOLS</h2>
        <div class="tag-list">
          <span class="tag">Adobe After Effects</span>
          <span class="tag">Ink Scape</span>
          <span class="tag">Whimsical</span>
          <span class="tag">Figma</span>
          <span class="tag">Canva</span>
          <span class="tag">Microsoft Word</span>
          <span class="tag">Microsoft Power Point</span>
          <span class="tag">Microsoft Office</span>

        </div>
      </div>

      <div class="works-column">
        <h2 class="works-title">SKILLS</h2>
        <div class="tag-list">
          <span class="tag">MySQL</span>
          <span class="tag">PHP</span>
          <span class="tag">C</span>
          <span class="tag">JavaScript</span>
          <span class="tag">HTML / CSS</span>
        </div>
      </div>
    </div>

  <div>
    <h2 class="dev-title"> DEVELOPMENT</h2>
  </div>
    <div class="dev-card">
      <div class="dev-image">
        <img class="works-image" src="./images/homepage_Deborah.png">
      </div>

      <div class="dev-info">
        <h3 class="project-title">Deborah Store Accessory E-commerce Website</h3>

        <p class="dev-desc">
         A custom-built e-commerce website developed for a
         small accessory store to manage products and customer orders. <br>
         <b>Role : </b> Full-stack Developer</b> <br>
         <b>Tech Stack : </b> Native PHP, MySQL, HTML, and CSS.<br>
         <b>Key Features : </b>
         Accessory product catalog with images, pricing, and categories
         Product search functionality
         Shopping cart and checkout system
         User accounts with order history
         Admin dashboard for managing products and orders
        </p>
      </div>
    </div>

    <div class="dev-card">
      <div class="dev-image">
        <img class="works-image small-works-image" src="./images/AkiNini.png">
      </div>

      <div class="dev-info">
        <h3 class="project-title">AkiNini Catering E-commerce Website</h3>

        <p class="dev-desc">
         A custom-built e-commerce website developed for a
         small accessory store to manage products and customer orders. <br>
         <b>Role : </b> Full-stack Developer</b> <br>
         <b>Key Features : </b>
          Designed the UI/UX for AkiNini Catering using Figma, creating wireframes and high-fidelity mockups.
          Developed a consistent design system and improved navigation for a smooth user experience.
          Iterated on designs based on feedback to enhance usability and visual clarity.
        </p>
      </div>
    </div>

    <div>
    <h2 class="dev-title"> Other Dev Project</h2>

      <ul class="other-dev-item">
        <p class="dev-desc">• This website! </p>
  </div>
  `},

 links: {
  title: "links",
  width: window.innerWidth < 768 ? '95vw' : 380,
  height: 'auto',
  content: `
    <div class="links-container">

      <a href="https://www.linkedin.com/in/mikha-dwight-b1943a327/" target="_blank" class="link-item">
        <img
          src="./images/linkedin.png"
          data-light="./images/linkedin.png"
          data-dark="./images/linkedin_dark.png"
          class="linkedin-img"
          alt="LinkedIn"
        >
        <span class="link-label">LinkedIn</span>
      </a>

      <a href="https://www.instagram.com/mippuw/" target="_blank" class="link-item">
        <img
          src="./images/instagram.png"
          data-light="./images/instagram.png"
          data-dark="./images/instagram_dark.png"
          class="linkedin-img"
          alt="Instagram"
        >
        <span class="link-label">Instagram</span>
      </a>

    </div>
  `
},
  contact: {
    title: "contact",
    width: window.innerWidth < 768 ? '95vw' : 500,
    height: 'auto',
    content: `
      <p><b>mail me!</b></p>
      <div class="profile-card-contact">
        <img src="./images/cartoonme2.png" class="profile-img-contact">
      </div>
      <p class="contact-line">
      easy way to reach me is via email. You can
        mail me at: <br>
        <a href="mailto:mikhadwight@gmail.com" class="contact-email-link">
          mikhadwight@gmail.com
        </a>
      </p>
    `
  }
};

/* ================= UI SOUNDS ================= */
// global audio settings
const setAudio = (src, volume = 0.1) => {
  const sound = new Audio(src);
  sound.volume = volume; // set volume
  sound.originalVolume = volume; // store original volume
  return sound;
};

// sounds
const audio = setAudio('./audios/open_sound.mp3', 0.3);       // open window
const closeAudio = setAudio('./audios/close_sound.mp3', 0.3);  // close window
const cringSound = setAudio('./audios/cring_sound.mp3', 0.3); // copy email
const duckHoverSound = new Audio("audios/duck_sound.mp3");
duckHoverSound.volume = 0.3;
const moonSound = setAudio('./audios/moon_btn.mp3', 0.3);     // moon button
const sunSound = setAudio('./audios/sun_btn.mp3', 0.3);       // sun button
const unmuteSound = setAudio('./audios/pop_close.mp3', 0.1);  // unmute sound
const imageOpenSound = setAudio('./audios/image_open.mp3', 0.3); // image modal open

/* ================= OPEN WINDOW ================= */
function openWindow(type, button) {
  if (openWindows[type]) {
    bringToFront(openWindows[type]);
    return;
  }

  const cfg = windowConfig[type];
  if (!cfg) return;

  const rect = button.getBoundingClientRect();
  const padding = 12;
  const gap = 10;

  const win = document.createElement("div");
  win.className = "window";
  win.style.width = cfg.width + "px";
  if (cfg.height) win.style.height = cfg.height + "px";

  win.innerHTML = `
  <div class="title-bar popup-bar">
    <span>${cfg.title}</span>
    <button class="close-btn">[ ✕ ]</button>
  </div>
  <div class="content ${type === "works" ? "scrollable-content" : ""}">


    ${cfg.content}
  </div>
`;

  // play CLOSE sound on close button click
  const closeBtn = win.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeAudio.currentTime = 0;
      closeAudio.play();
    });
  }

  document.body.appendChild(win);
  // ✅ sync LinkedIn logo with current theme
if (type === "links") {
  const isDark = document.body.classList.contains("dark");

  win.querySelectorAll(".linkedin-img").forEach(img => {
    img.src = isDark ? img.dataset.dark : img.dataset.light;
  });
}


  const w = win.offsetWidth;
  const h = win.offsetHeight;

  let left = rect.left + rect.width / 2 - w / 2;
  let top = rect.top - h - gap;

  left = Math.max(padding, Math.min(left, window.innerWidth - w - padding));
  if (top < padding) top = rect.bottom + gap;
  top = Math.max(padding, Math.min(top, window.innerHeight - h - padding));

  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    // Slide up animation for mobile
    Object.assign(win.style, {
      left: "50%",
      top: "100%",
      transform: "translateX(-50%) translateY(100%)",
      opacity: "0",
      transition: "transform .3s ease, opacity .3s ease"
    });

    bringToFront(win);
    requestAnimationFrame(() => {
      win.style.transform = "translateX(-50%) translateY(0)";
      win.style.opacity = "1";
      audio.currentTime = 0;
      audio.play();
    });
  } else {
    // Original scale animation for desktop/tablet
    Object.assign(win.style, {
      left: left + "px",
      top: top + "px",
      transform: "scale(0.85)",
      opacity: "0",
      transition: "transform .12s ease, opacity .25s ease"
    });

    bringToFront(win);
    requestAnimationFrame(() => {
      win.style.transform = "scale(1)";
      win.style.opacity = "1";
      audio.currentTime = 0;
      audio.play();
    });
  }

  openWindows[type] = win;

  win.querySelector(".close-btn").onclick = () => {
    win.style.transform = "scale(0.85)";
    win.style.opacity = "0";
    setTimeout(() => {
      win.remove();
      delete openWindows[type];
    }, 200);
  };

  makeDraggable(win);
  win.addEventListener("mousedown", () => bringToFront(win));

  // Add image modal functionality for works window
  if (type === "works") {
    const worksImages = win.querySelectorAll(".works-image");
    worksImages.forEach(worksImage => {
      worksImage.style.cursor = "pointer";
      worksImage.addEventListener("click", () => {
        openImageModal(worksImage.src, worksImage.alt);
      });
    });
  }

  // Add sound for LinkedIn and Instagram links
  if (type === "links") {
    const linkItems = win.querySelectorAll('.link-item');
    linkItems.forEach(item => {
      item.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
      });
    });
  }
}

/* ================= EVENTS ================= */
document.querySelectorAll(".status-item").forEach(btn => {
  btn.addEventListener("click", () => {
    openWindow(btn.dataset.window, btn);
  });
});

document.addEventListener("click", (e) => {
  const link = e.target.closest(".contact-email-link");
  if (!link) return;

  e.preventDefault();
  const email = link.textContent.trim();
  navigator.clipboard.writeText(email);

  cringSound.currentTime = 0;
  cringSound.play();

  const original = link.textContent;
  link.textContent = "copied!";
  link.style.pointerEvents = "none";

  setTimeout(() => {
    link.textContent = original;
    link.style.pointerEvents = "auto";
  }, 1200);
});

/* ================= MUTE BUTTON & DUCK SOUND ================= */
mySong.volume = 0.3; // 30% volume
mySong.loop = true;  // 🔁 LOOP THE MUSIC


// collect all sounds in one place
const allSounds = [mySong, audio, closeAudio, cringSound, duckHoverSound, moonSound, sunSound, unmuteSound, imageOpenSound];


let isMuted = false;
const muteBtn = document.getElementById("muteBtn");
const muteIcon = muteBtn.querySelector("i");

muteBtn.onclick = () => {
  isMuted = !isMuted;

  allSounds.forEach(sound => {
    sound.muted = isMuted;
  });

  // Play unmute sound if unmuting
  if (!isMuted) {
    unmuteSound.currentTime = 0;
    unmuteSound.play();
  }

  // switch icon
  muteIcon.className = isMuted
    ? "fa-solid fa-volume-xmark"
    : "fa-solid fa-volume-high";
};

// duck hover sound on icon
let duckCooldown = false;
const duckIcon = document.getElementById("icon");

duckIcon.addEventListener("mouseenter", () => {
  if (duckCooldown || isMuted) return;

  duckHoverSound.currentTime = 0;
  duckHoverSound.play();

  duckCooldown = true;
  setTimeout(() => duckCooldown = false, 600); // prevent spam
});

/* ================= DARK MODE ================= */

// toggle via moon button (SAFE, no undefined error)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("#themeBtn");
  if (!btn) return;

  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// restore theme on reload - always start in light mode
document.body.classList.remove("dark");
localStorage.setItem("theme", "light");

/* ================= DARK MODE ================= */

function toggleTheme() {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );

  console.log("dark mode:", document.body.classList.contains("dark"));

  // Play sound based on theme
  if (document.body.classList.contains("dark")) {
    moonSound.currentTime = 0;
    moonSound.play();
  } else {
    sunSound.currentTime = 0;
    sunSound.play();
  }

  // Change theme button icon based on theme
  const themeIcon = document.querySelector('.header-btn[onclick="toggleTheme()"] i');
  if (document.body.classList.contains("dark")) {
    themeIcon.className = "fa-regular fa-moon";
  } else {
    themeIcon.className = "fa-regular fa-sun";
  }

  // Change button images based on theme
  const aboutImg = document.querySelector('button[data-window="about"] img');
  const worksImg = document.querySelector('button[data-window="works"] img');
  const linksImg = document.querySelector('button[data-window="links"] img');
  const contactImg = document.querySelector('button[data-window="contact"] img');

  if (document.body.classList.contains("dark")) {
    aboutImg.src = "./images/about_dark.png";
    worksImg.src = "./images/works_dark.png";
    linksImg.src = "./images/links_dark.png";
    contactImg.src = "./images/contact_dark.png";
  } else {
    aboutImg.src = "./images/about.png";
    worksImg.src = "./images/works.png";
    linksImg.src = "./images/links.png";
    contactImg.src = "./images/contact.png";
  }

  // Sync LinkedIn logos based on theme
  syncLinkedInLogos();
}

/* ================= IMAGE MODAL ================= */
function openImageModal(src, alt) {
  // Play image open sound
  imageOpenSound.currentTime = 0;
  imageOpenSound.play();

  // Create modal elements
  const modal = document.createElement("div");
  modal.className = "image-modal";

  const modalContent = document.createElement("div");
  modalContent.className = "image-modal-content";

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  const closeBtn = document.createElement("button");
  closeBtn.className = "image-modal-close";
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = () => closeImageModal(modal);

  modalContent.appendChild(img);
  modalContent.appendChild(closeBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Show modal
  requestAnimationFrame(() => modal.classList.add("show"));

  // Close on click outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeImageModal(modal);
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", function escHandler(e) {
    if (e.key === "Escape") {
      closeImageModal(modal);
      document.removeEventListener("keydown", escHandler);
    }
  });
}

function closeImageModal(modal) {
  modal.classList.remove("show");
  setTimeout(() => modal.remove(), 300);
}

// Set initial theme button icon to sun (light mode)
const themeIcon = document.querySelector('.header-btn[onclick="toggleTheme()"] i');
themeIcon.className = "fa-regular fa-sun";

// Set initial button images to light mode
const aboutImg = document.querySelector('button[data-window="about"] img');
const worksImg = document.querySelector('button[data-window="works"] img');
const linksImg = document.querySelector('button[data-window="links"] img');
const contactImg = document.querySelector('button[data-window="contact"] img');

aboutImg.src = "./images/about.png";
worksImg.src = "./images/works.png";
linksImg.src = "./images/links.png";
contactImg.src = "./images/contact.png";

// switch linkedin images based on theme
document.querySelectorAll(".linkedin-img").forEach(img => {
  img.src = document.body.classList.contains("dark")
    ? img.dataset.dark
    : img.dataset.light;
});

// 🔁 switch LinkedIn logos based on theme
document.querySelectorAll(".linkedin-img").forEach(img => {
  img.src = document.body.classList.contains("dark")
    ? img.dataset.dark
    : img.dataset.light;
});

// ensure correct LinkedIn logo on window open
if (document.body.classList.contains("dark")) {
  win.querySelectorAll(".linkedin-img").forEach(img => {
    img.src = img.dataset.dark;
  });
}

