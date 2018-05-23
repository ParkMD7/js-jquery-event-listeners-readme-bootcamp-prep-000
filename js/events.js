//define functions here

function getIt() {
  $('p').on("click", function(){
    return alert('Hey!')
})
}

function frameIt() {
  $('img').on('load', function(){
  return $('img').addClass("tasty")
})
}

function pressIt() {
  
}

$(document).ready(function(){

// call functions here

});
