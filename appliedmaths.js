var appliedMathFigures = ['The "Hidden Figures": Mary Jackson, Katherine Johnson and Dorothy Vaughan', 'Dame Mary Lucy Cartwright', 'Sofia Kovalevsky']

var space = $(".space");
var generateBtn = $(".generate");

generateBtn.on("click", generateAppliedMathFigure);
function generateAppliedMathFigure (){ 
  var random =  3 * Math.random();
  var rounded = Math.floor(random);
  var appliedMathFigure = appliedMathFigures[rounded];
  console.log(appliedMathFigure); 

  if (rounded === 0) {
    space.append(`<h1 class="h22">Learn about... <br>The "Hidden Figures": Mary Jackson, Katherine Johnson and Dorothy Vaughan</h1><br><a href = "https://www.space.com/35430-real-hidden-figures.html"> <img src = "./pictures/hiddenfigures.jpeg"> </a>`);
  }
  if (rounded === 1) {
    space.append(`<h1 class="h22">Learn about... <br>Dame Mary Lucy Cartwright</h1><br><a href = "https://scientificwomen.net/women/cartwright-mary-140"> <img src = "./pictures/marycartwright.jpeg"> </a>`);
  }
  if (rounded === 2) {
    space.append(`<h1 class="h22">Learn about... <br>Sofia Kovalevskaya</h1><br><a href = "https://scientificwomen.net/women/kovalevsky-sofia-50"><img src = "./pictures/sofiakovalevskaya.jpeg"> </a>`);
  }
  }

/* 
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
 */