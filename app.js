console.log('JAWS');

$(document).on('click', 'button', function(event) {
  event.preventDefault();
  $('.movie-list').empty();
  $.ajax({
    url: 'http://www.omdbapi.com/?s=' + $('.title').val(),
    method: 'get'
  }).done(function(movie) {
    $.each(movie['Search'], function(key, value) {
      var $newTitle = $('<h1>').text(value.Title);
      $('.movie-list').append($newTitle).addClass('list');
      $('<img />', {
        src: value.Poster,
        width: '200px',
      }).appendTo($('.movie-list'));
    })
  })
})
