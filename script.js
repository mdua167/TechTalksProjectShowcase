// var randomQuotes = ['"Don’t let anyone rob you of your imagination, your creativity, or your curiosity. It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live."  – Mae Jemison, first African American woman astronaut in space','"Ask for consent not consensus." - Celestine Maddy, Global Head of Consumer & Brand Marketing at Pinterest','"Science is not a boy’s game, it’s not a girl’s game. It’s everyone’s game. It’s about where we are and where we’re going. Space travel benefits us here on Earth. And we ain’t stopped yet. There’s more exploration to come." - Nichelle Nichols, former NASA Ambassador and Star Trek actress','“Let us be certain of who we want to be. Let us choose for ourselves our path in life, and let us try to strew that path with flowers.” ― Émilie Du Châtelet, a French woman mathematician in the 1700s','“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.” – Marie Curie'  ]

// var spaceone = $(".spaceone");
// var randomizeBtn = $(".random-quote");

// randomizeBtn.on("click", generateQuote);
// function generateQuote (){ 
//   var random = 5 * Math.random();
//   var rounded = Math.floor(random);
//   console.log(randomQuotes[rounded]);
//   var quote = randomQuotes[rounded];
//   spaceone.append(`<h1 class="secret"><em>${quote}</em></h1>`);
// }

var quotes = [
  '"Don’t let anyone rob you of your imagination, your creativity, or your curiosity. It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live."  – Mae Jemison, first African American woman astronaut in space','"Ask for consent not consensus." - Celestine Maddy, Global Head of Consumer & Brand Marketing at Pinterest','"Science is not a boy’s game, it’s not a girl’s game. It’s everyone’s game. It’s about where we are and where we’re going. Space travel benefits us here on Earth. And we ain’t stopped yet. There’s more exploration to come." - Nichelle Nichols, former NASA Ambassador and Star Trek actress','“Let us be certain of who we want to be. Let us choose for ourselves our path in life, and let us try to strew that path with flowers.” ― Émilie Du Châtelet, a French woman mathematician in the 1700s','“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.” – Marie Curie','“I can excuse everything but boredom. Boring people don’t have to stay that way.” -Hedy Lamarr, Inventor & Actor' 
]


function newQuote()
{
  var randNum = Math.floor(Math.random() * (quotes.length)); 
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum]; 
}


