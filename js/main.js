const projects = document.getElementById("projects");



document.getElementById("projects-btn").addEventListener("click", (event) => {
  projects.scrollIntoView(true);
  console.log(document.getElementById("projects-btn"));
});
