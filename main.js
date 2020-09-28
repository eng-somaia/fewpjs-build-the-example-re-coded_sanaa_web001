// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll(".like");
console.log(hearts);
const likeHeart = (e) => {
  let heart = e.target;

  mimicServerCall("bogusUrl")
 .then(serverMessage => {
   console.log("hi")
   heart.innerHTML === EMPTY_HEART ? heart.innerHTML = FULL_HEART : heart.innerHTML = EMPTY_HEART
 })
 .catch( error => {
    document.getElementById("modal").className = "";
  });
}
hearts.forEach(h =>{
  h.addEventListener("click",likeHeart)
});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
