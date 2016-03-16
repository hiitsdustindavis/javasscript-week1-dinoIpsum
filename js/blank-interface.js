
$(document).ready(function() {
  $('#dinosaurPick').click(function() {
    $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1', function(response) {
      console.log(response);

      $('.dinoWord').text("You picked " + response + "!");
      
    });

  });
});
