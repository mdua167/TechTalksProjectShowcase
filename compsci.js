
var compSciFigures = ['Grace Hopper','Carol Shaw','The ENIAC Women']

var space = $(".space");
var generateBtn = $(".generate");

generateBtn.on("click", generateCompSciFigure);
function generateCompSciFigure (){ 
  var random = 3 * Math.random();
  var rounded = Math.floor(random);
  var appliedMathFigure = compSciFigures[rounded];
  console.log(appliedMathFigure); 
  if (rounded === 0) {
    space.append(`<h1 class="h22">Learn about... Grace Hopper!</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/meeCAFacrG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }
  if (rounded === 1) {
    space.append(`<h1 class="h22">Learn about... Carol Shaw!</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/a78uBNlI8Z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }
  if (rounded === 2) {
    space.append(`<h1 class="h22">Learn about... The ENIAC Women!</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/Zevt2blQyVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }
  }
