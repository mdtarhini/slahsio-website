/*
Needed elements:
*/
//Body
const body = document.getElementsByTagName("body")[0];
const preloaderDiv = document.getElementById("preloader");
const goTopButton = document.getElementById("back-to-top");

//Sidebar
const sidebarMenu = document.getElementById("sidebar-menu");
const sidebarOpener = document.getElementById("sidebar-opener");
const sidebarCloser = document.getElementById("sidebar-closer");
const linksInSidebar = document.getElementsByClassName("nav-link");
//portfolio
const folioItems = document.getElementsByClassName("portfolio-item");
//Photo-slider
const slider = document.getElementById("photo-slider");
const sliderCloser = document.getElementById("slider-closer");
const numberOfImagesDiv = document.getElementById("numberOfImages");
const currentImageDiv = document.getElementById("currentImage");
const imageInSlider = document.getElementById("image-in-slider");
const sliderLeft = document.getElementById("slider-left");
const sliderRight = document.getElementById("slider-right");

/*
Global variables:
*/
let galImages = [];

/*
Global helper functions
*/
const addClassToElement = (element, className) => {
  if (element && className) {
    if (!element.classList.contains(className)) {
      element.classList.add(className);
    }
  }
};
const removeClassFromElement = (element, className) => {
  if (element && className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  }
};
const openSidebar = () => {
  addClassToElement(sidebarMenu, "translate-x-0");
  removeClassFromElement(sidebarMenu, "translate-x-full");
};

const closeSidebar = () => {
  addClassToElement(sidebarMenu, "translate-x-full");
  removeClassFromElement(sidebarMenu, "translate-x-0");
};
const closeSlider = () => {
  slider.classList.add("invisible");
  numberOfImagesDiv.textContent = "";
  currentImageDiv.textContent = "";
  imageInSlider.src = "";
};

const setSliderImage = (index) => {
  const numberOfGalImages = galImages.length;
  numberOfImagesDiv.textContent = numberOfGalImages;
  currentImageDiv.textContent = index + 1;
  imageInSlider.src = galImages[index];
};

//Event listeners
window.onload = () => {
  preloaderDiv.classList.add("hidden");
};

sidebarOpener.addEventListener("click", openSidebar);
sidebarCloser.addEventListener("click", closeSidebar);

//close sidebar on link clicked
for (let iNavLink = 0; iNavLink < linksInSidebar.length; iNavLink++) {
  linksInSidebar[iNavLink].addEventListener("click", closeSidebar);
}

//Attach event listeners for portfolio items interactivity (also in the same time oush the gallery images to an array)
for (let iFolioItem = 0; iFolioItem < folioItems.length; iFolioItem++) {
  const folioItem = folioItems[iFolioItem];

  const galImageAtt = folioItem["attributes"]["galImage"];
  if (galImageAtt) {
    galImages.push(galImageAtt.nodeValue);
  }

  folioItem.addEventListener("mouseenter", () => {
    const overlay = folioItem.getElementsByClassName("overlay")[0];

    overlay.classList.add("z-10");
  });

  folioItem.addEventListener("mouseleave", () => {
    const overlay = folioItem.getElementsByClassName("overlay")[0];
    overlay.classList.remove("z-10");
  });

  folioItem.addEventListener("click", () => {
    slider.classList.remove("invisible");
    setSliderImage(iFolioItem);
  });
}

sliderCloser.addEventListener("click", () => {
  closeSlider();
});

body.onscroll = () => {
  if (!slider.classList.contains("invisible")) {
    closeSlider();
  }
};

imageInSlider.addEventListener("click", () => {
  imageInSlider.classList.toggle("scale-150");
  imageInSlider.classList.toggle("cursor-zoom-out");
});

sliderRight.addEventListener("click", () => {
  let currentImageIndex = Number(currentImageDiv.textContent) - 1;
  if (currentImageIndex === galImages.length - 1) {
    currentImageIndex = -1;
  }
  setSliderImage(currentImageIndex + 1);
});

sliderLeft.addEventListener("click", () => {
  let currentImageIndex = Number(currentImageDiv.textContent) - 1;
  if (currentImageIndex === 0) {
    currentImageIndex = galImages.length;
  }
  setSliderImage(currentImageIndex - 1);
});

// Show or hide the sticky footer button
window.addEventListener("scroll", () => {
  const scroll = this.scrollY;
  const showAt = 700;
  if (scroll < showAt) {
    addClassToElement(goTopButton, "translate-y-full");
    removeClassFromElement(goTopButton, "translate-y-0");
  } else {
    addClassToElement(goTopButton, "translate-y-0");
    removeClassFromElement(goTopButton, "translate-y-full");
  }
});
