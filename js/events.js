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
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('s was pressed');
  }
})
}

function 

$(document).ready(function(){

// call functions here

});
