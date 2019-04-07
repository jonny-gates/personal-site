const projects = document.getElementById("projects");



document.getElementById("projects-btn").addEventListener("click", (event) => {
  projects.scrollIntoView(true);
  console.log(document.getElementById("projects-btn"));
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
