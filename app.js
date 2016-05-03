console.log('JAWS');

$(document).on('click', 'button', function(event) {
  event.preventDefault();
  $('.movie-list').empty();
  $.ajax({
    url: 'http://www.omdbapi.com/?s=' + $('.title').val(),
    method: 'get'
  }).done(function(movie) {
    $.each(movie['Search'], function(key, value) {
      var $newDiv = $('<div>');
      var $newTitle = $('<h4>').text(value.Title);
      var $newImage = $('<img />', {
        src: value.Poster,
        width: '200px',
      });
      var $blah = $newDiv.addClass('list').append($newTitle).append($newImage);
      $('.movie-list').append($blah);
    })
  })
})

// $('<img />', {
//   src: value.Poster,
//   width: '200px',
// }).appendTo($('.movie-list'));
