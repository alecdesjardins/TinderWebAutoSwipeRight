var element = document.getElementsByClassName("recsGamepad__button--like");
a = setInterval(
    function(){
          element[0].click()
          },1000) //1000 is 1 second, this can be changed i.e 2000 = 2 seconds

//to stop the auto swiper, type the following console
clearInterval(a)
