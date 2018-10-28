var random_result;
var losses = 0;
var wins = 0;
var newTotal = 0;


var resetAndStart = function() {
    $('.crystal').empty();
    // image array
    var images = [
     'https://study.com/cimages/multimages/16/photogemsapphire.jpg',
     'https://cynthiarenee.com/wp-content/uploads/2017/09/featuredgem-Tanzanite.jpg', 
     'https://cynthiarenee.com/wp-content/uploads/2017/09/featuredgem-Sunstone.jpg', 
     'https://www.ajsgem.com/sites/default/files1/blue-apatite-400.jpg'];
// This generates the random target number.
random_result = Math.floor(Math.random() * 111) + 19;
// console.log(random_number);

$('#result').html('Random Number: ' + random_result);

// This generates the random numbers and the four crystals.
for(var i = 0; i < 4; i++){
  var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);
    var crystal = $('<div>');
        crystal.attr({
            'class': 'crystal',
            'data-random': random
        });

        crystal.css({
            "background-image":"url('" + images[i] + " ')",
            "background-size":"cover"
        });
        // crystal.html(random);
    
        $('.crystals').append(crystal);
        $('newTotal').html(newTotal);
    }
}
resetAndStart();

$('.crystal').on('click', function () {
  var num = parseInt($(this).attr('data-random'));
  console.log(newTotal);
  newTotal += num;
  $('#newTotal').html(newTotal);

//This part keeps track of losses.   
  if(newTotal > random_result) {
      console.log("you lost")
      losses++;
      $("#losses").html(losses);
      newTotal = 0;
      
      resetAndStart();
  }
// This section keeps track of wins.
  else if(newTotal === random_result) {
      console.log('you win!!')
      wins++;
      $('#wins').html(wins);
      newTotal = 0;
     
      resetAndStart();
  }
});
