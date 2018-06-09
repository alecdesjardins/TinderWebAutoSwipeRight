var names = ["Ashley",  "Julia"] //change these to what names you like
var likeButton = document.getElementsByClassName("recsGamepad__button--like")[0];
var dislikeButton = document.getElementsByClassName("recsGamepad__button--dislike")[0];
var nameField = document.getElementsByClassName("Ell")[0];
a = setInterval(
    function(){
          if (names.includes(nameField.innerHTML)) {
              likeButton.click()
          } else {
              dislikeButton.click();
          }
    },1000) //1000 is 1 second, this can be changed i.e 2000 = 2 seconds
