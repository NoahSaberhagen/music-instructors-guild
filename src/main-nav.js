let previousScrollPosition = 0;

const isScrollingDown = () => {
  let currentScrolledPosition = window.scrollY || window.pageYOffset;
  let scrollingDown;

  if (currentScrolledPosition > previousScrollPosition) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }
  previousScrollPosition = currentScrolledPosition;
  return scrollingDown;
};

const nav = document.querySelector('#main-nav');

const handleNavScroll = () => {
  if (isScrollingDown() && !nav.contains(document.activeElement)) {
    nav.classList.add('scroll-down');
    nav.classList.remove('scroll-up')
  } else {
    nav.classList.add('scroll-up');
    nav.classList.remove('scroll-down')
  }
}

// initialize a throttleWait variable
var throttleWait;

const throttle = (callback, time) => {
  // if the variable is true, don't run the function
  if (throttleWait) return;

  // set the wait variable to true to pause the function
  throttleWait = true;

  // use setTimeout to run the function within the specified time
  setTimeout(() => {
    callback();

    // set throttleWait to false once the timer is up to restart the throttle function
    throttleWait = false;
  }, time);
}

window.addEventListener("scroll", () => {
  throttle(handleNavScroll, 250)
});

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(handleNavScroll, 250)
  }
});

// swapping body content
const aboutSection = document.querySelector('#about');


const setSectionsStyleNone = () => {
  let sections = [aboutSection, instructorsSection, contactUsSection];

  sections.forEach((section) => {
    section.setAttribute('style', 'display: none')
  })
}

setSectionsStyleNone()

let currentSection = aboutSection;
currentSection.setAttribute('style', '')

const updateDisplay = (nextSectionId) => {
  console.log(nextSectionId);

  setSectionsStyleNone()

  currentSection = document.querySelector(`#${nextSectionId}`)

  currentSection.setAttribute('style', '')
}

document
  .getElementById('button-about')
  .addEventListener('click', () => updateDisplay('about'))

document
  .getElementById('button-instructors')
  .addEventListener('click', () => updateDisplay('instructors'))

document
  .getElementById('button-contact-us')
  .addEventListener('click', () => updateDisplay('contact-us'))