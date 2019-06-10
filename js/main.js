const projects = {inView: false, element: document.getElementById("projects")};
const home = {inView: false, element: document.getElementById("home")};
const about = {inView: false, element: document.getElementById("about")};
const contact = {inView: false, element: document.getElementById("contact")};

let height = 0;
let itemLocation = 0;

let currentlyInView;

const minusHeight = (number) => {
  return number - number - number;
}

const checkInView = (element) => {
  currentLocation = element.getBoundingClientRect().y
  currentHeight = element.getBoundingClientRect().height

  if (currentLocation <= window.innerHeight && currentLocation >= minusHeight(currentHeight) ) {
    return true
  }
  return false
}

const transitionActive = (from, to) => {
  if (from != undefined) {
    from.element.classList.remove('active');
  }
  to.element.classList.add('active');
  currentlyInView = to
}

window.onscroll = function (e) {
  projects.inView = checkInView(home.element);
  home.inView = checkInView(about.element);
  about.inView = checkInView(projects.element);
  contact.inView = checkInView(contact.element);

  const items = [projects, home, about, contact];

  items.forEach(function(item) {
    if (item.inView && item != currentlyInView) {
      console.log(item);
      transitionActive(currentlyInView, item);
    }
  })

}
