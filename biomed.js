var bioMedFigures = ['Rosalind Franklin','Marie Curie','Elizabeth Blackwell']

var space = $(".space");
var generateBtn = $(".generate");

generateBtn.on("click", generateBioMedFigure);
function generateBioMedFigure (){ 
  var random = 3 * Math.random();
  var rounded = Math.floor(random);
  var bioMedFigure = bioMedFigures[rounded];
  console.log(bioMedFigure); 
  if (rounded === 0) {
    space.append(`<h1 class="h22">Learn about... Rosalind Franklin</h1><br><iframe width="560" height="315" src="https://www.youtube.com/embed/BIP0lYrdirI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }
  if (rounded === 1) {
    space.append(`<h1 class="h22">Learn about... Marie Curie</h1><br><iframe width="560" height="315" src="https://www.youtube.com/embed/w6JFRi0Qm_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }
  if (rounded === 2) {
    space.append(`<h1 class="h22">Learn about... Elizabeth Blackwell</h1><br><iframe width="560" height="315" src="https://www.youtube.com/embed/78TaaLH8z3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }
  }
