var questionArray;
$.getJSON("https://jsonblob.com/api/jsonBlob/117fb042-3927-11ea-8ac3-d1dc488ac337", function(data) {
  questionArray = data.questions;
});

/* BACKUP
{
{
  "questions": [
    "Have you ever been told you look like someone famous, who was it?",
    "If you were famous, what would you be famous for?",
    "What was your least favorite food as a child? Do you still hate it or do you love it now?",
    "If you had to eat one meal everyday for the rest of your life what would it be?",
    "what’s the best piece of advice you’ve ever been given?",
    "What is your favorite item you’ve bought this year?",
    "What is your absolute dream job?",
    "What would the title of your autobiography be?",
    "Say you’re independently wealthy and don’t have to work, what would you do with your time?",
    "If you had to delete all but 3 apps from your smartphone, which ones would you keep?",
    "Who is your favorite Disney hero or heroine? Would you trade places with them?",
    "What would your dream house be like?",
    "What fictional family would you be a member of?",
    "What is your favorite television show?",
    "What would your superpower be and why?",
    "What’s your favorite tradition or holiday?",
    "What fictional world or place would you like to visit?",
    "What is your favorite breakfast food?",
    "What is your favorite time of the day and why?",
    "Coffee or tea?",
    "Teleportation or flying?",
    "What is your favorite TV show?",
    "What book, movie read/seen recently you would recommend and why?",
    "If you had a time machine, would go back in time or into the future?",
    "Do you think you could live without your smartphone (or other technology item) for 24 hours?",
    "What is your favorite dessert?",
    "What was your favorite game to play as a child?",
    "What fictional world or place would you like to visit?",
    "What’s your favorite place of all the places you’ve travelled?",
    "What is your favorite meal to cook and why?",
    "Are you a morning person or a night person?",
    "Are you a cat person or a dog person?",
    "What languages do you know how to speak?",
    "Popcorn or M&Ms?",
    "You can have an unlimited supply of one thing for the rest of your life, what is it? ",
    "If you could hang out with any cartoon character, who would you choose and why?",
    "If you could live anywhere in the world for a year, where would it be?",
    "If you could choose any person from history to be your imaginary friend, who would it be and why?",
    "If you could see one movie again for the first time, what would it be and why?",
    "If you could bring back any fashion trend what would it be?",
    "If you could live in any country, where would you live?",
    "If you could rename yourself, what name would you pick?",
    "If you could instantly become an expert in something, what would it be?",
    "If you had to teach a class on one thing, what would you teach?",
    "If you could magically become fluent in any language, what would it be?",
    "If you could be immortal, what age would you choose to stop aging at and why?",
    "Would you rather lose all of your money or all of your pictures?",
    "Would you rather have invisibility or flight?",
    "What’s the best thing you’ve got going on in your life at the moment?",
    "What are some of your favorite games to play?",
    "What takes a lot of time but is totally worth it?",
    "What is the most amazing fact you know?",
    "What website or app doesn’t exist, but you really wish it did?",
    "What’s your favorite type of day? (weather, temp, etc.)",
    "What is the most clever or funniest use of advertising you’ve seen?",
    "How into self-improvement are you?",
    "What food do you love that a lot of people might find a little odd?",
    "If you could start a charity, what would it be for?",
    "What was the funniest thing you’ve seen recently online?",
    "If you could choose your dreams, what would you prefer to dream about?", 
    "What's your favorite meal?", 
    "What's your favorite season and why?", 
    "What's your favorite quote? ", 
    "What's your favorite fruit?", 
    "If you could go back in time, would you?", 
    "Coffee or tea ? ", 
    "What's your ultimate goal?", 
    "What's your absolute favorite book?", 
    "What do you miss from your childhood? ", 
    "What languages do you wish to speak? why?", 
    "You Have To Wear A T-Shirt With One Word On It For One Year. Which Word Do You Choose?", 
    "Are You A Listener Or A Talker?", 
    "What Book Has Influenced You Greatly? How?", 
    " If You Can Give One Sentence Advice About How To Live Life, What Would It Be?", 
   " What’s your favorite personal possession and why?",
"What was your favorite class in school?",
"Do you have a personal hero?",
"What are you currently reading?",
"What’s the most memorable vacation you’ve ever taken?",
"What superpower would you like to have?"
  ]
}
*/

var used = [];

$("#newQuestionBtn").click(function() {
  var arrayIndex;
  do {
    arrayIndex = Math.floor(Math.random()*questionArray.length);
  } while(used.indexOf(arrayIndex) !== -1);
  used.push(arrayIndex);
  $("#question").addClass("zoomOut");
  $("#newQuestionBtn").addClass("wobble");


  setTimeout(function() {
    $("#question").removeClass("zoomOut").addClass("zoomIn").text(questionArray[arrayIndex]);
    $("#newQuestionBtn").removeClass("wobble");
    setTimeout(function() {
      $("#question").removeClass("zoomIn");
    },1000);
  },1000);
  

document.getElementById("total").innerHTML=Object.keys(questionArray).length;


//document.getElementById("total").innerHTML=arrayIndex;
});



    function send(){
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("PUT", "https://api.jsonbin.io/b/5e21d101b236b871b36389bd", true);
req.setRequestHeader("Content-type", "application/json");
req.send('{"name": "Hello World"}');

       // return this.http.post("https://jsonblob.com/api/jsonBlob/607fb569-3915-11ea-8ac3-55ffa05d244c", {questions:document.getElementById("newQ").value});
    }



// List Element
const ul = document.querySelector('#newQ'); 

// GitHub API URL
const url = 'https://jsonblob.com/api/jsonBlob/607fb569-3915-11ea-8ac3-55ffa05d244c';


// post body data 
const user = {ul};

// request options
const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
}

// send POST request
fetch(url, options)
    .then(res => res.json())
    .then(res => console.log(res));
/*
fetch(url)
    .then(res => res.json())
    .then(data => {
          // iterate over users
    data.map((questions) => {
        appendNode(ul, li);

})
    }).catch(err => {
        console.error('Error: ', err);
    });

    const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}
//https://jsonblob.com/117fb042-3927-11ea-8ac3-d1dc488ac337.
https://api.jsonbin.io/b/5e21bd438d761771cc928585
*/