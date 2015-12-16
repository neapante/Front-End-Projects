var number;
var quoteStore;
function randomizer() {
  var randomNum;
  randomNum = Math.floor(Math.random() * (10 - 1 + 1));
  return randomNum;
}

function randomQuote() {
  var num = randomizer();
  console.log(num);
  var quotes = 
      ["Rejoice always.",
       "Do not quench the spirit.",
       "Do not despise prophecies.",
       "Test all things; hold fast what is good.",
       "Abstain from every form of evil.",
       "But the end of all things is at hand; therefore be serious and watchful in your prayers.",
       "I have no greater joy to hear that my children walk in truth.",
       "Go to the ant, you sluggard! Consider her ways and be wise.",
       "O Lord, our Lord, how excellent is Your name in all the earth.",
       "There are ten horns which you saw are ten kings who received no kingdom as yet, but they receive authority for on hour as kings with the beast."
      ];
  var book =
      ["I Thessalonias 5:16",
       "I Thessalonias 5:19",
       "I Thessalonias 5:20",
       "I Thessalonias 5:21",
       "I Thessalonias 5:22",
       "I Peter 4:7",
       "III John 1:4",
       "Proverbs 6:6",
       "Psalms 8:9",
       "Revelations 17:11"
      ];
  //$("a").attr("data-text", quotes[num]);
  $("#yourQuote").text(quotes[num]);
  $("#yourAuth").text(book[num]);
  //$("#share").attr("data-text", quotes[num]);
  //quoteStore = quotes[num];
  return quotes[num];

}

$(document).ready(function() {
  randomQuote();
  //quoteStore = randomQuote();
  //console.log(quoteStore);
  $(".btn-success").click(function() {
    quoteStore = randomQuote();
    console.log(quoteStore);
    //quoteStore = randomQuote()
  });
  
  /*$("#share").click(function() {
    console.log(quoteStore);
    $(this).attr("data-text", quoteStore);
  });*/
});


//hard coded
/*$(document).ready(function() {
  $(".btn-primary").click(function() {
    $("#yourQuote").text("hello");
  });
  $(".btn-success").click(function() {
    $("#yourQuote").text("how are you?")
  });
   $(".btn-warning").click(function() {
    $("#yourQuote").text("i miss you")
  });
   $(".btn-danger").click(function() {
    $("#yourQuote").text("i love you <3")
  });
});*/