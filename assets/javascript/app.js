$(document).ready(function(){

  $('button').on('click', function() {
      var player = $(this).data('name');
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: 'GET'
      })

      .done(function(response) {

          console.log(response)

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

            var playerDiv = $('<div/>');

            var p =$('<p/>');

                 p.text(results[i].rating);

            var playerImage = $('<img/>');

                 playerImage.addClass('plyImg')

                   playerImage.attr('src', results[i].images.fixed_height.url);
                   playerImage.attr('data-still', results[i].images.fixed_height_still.url)
                   playerImage.attr('data-animate', results[i].images.fixed_height.url)

                   .attr('data-state', 'still');

                     playerDiv.append(p);

                      playerDiv.append(playerImage);

                       playerDiv.prependTo($('#gifs'));
                             }
                             $('.plyImg').on('click', function() {

                              var state = $(this).attr('data-state');
                                  console.log(this);

                              if (state == 'still') {

                                 $(this).attr('src', $(this).data('animate'));

                                 $(this).attr('data-state', 'animate');

                             } else {

                                 $(this).attr('src', $(this).data('still'));

                                 $(this).attr('data-state', 'still');
                                        }
                                    });
                                });
                        });
