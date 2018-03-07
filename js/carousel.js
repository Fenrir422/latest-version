$('.carousel').carousel({
            interval: false
        });
        stickFooter();
        $('#modalForImages').height($(window).height());
        $(window).resize(function() {
            $('#modalForImages').height($(window).height());
            stickFooter();
        });
        $('.carousel-item').click(function(e) {
            var src = e.currentTarget.children[0].getAttribute('src');
            $('#modalForImages').css('display', 'flex');
           // debugger;
            var cloned = $("#carouselExampleIndicators").clone().wrap('<div/>').parent();
            var replaced = $(cloned).html().replace(/#carouselExampleIndicators/g, '#copiedCarusel')
                .replace(/id="carouselExampleIndicators"/g, 'id="copiedCarusel"');
            var result = '<button type="button" class="close close-button-helper" aria-label="Close">×</button>' + replaced;
            $('#modalForImages').html(result);
            $('#copiedCarusel').carousel({
                interval: false
            });
            $('.close-button-helper, #modalForImages').click(function(e) {
                if(e.target.id == "modalForImages" || e.target.getAttribute('aria-label') == 'Close') {
                  $('#modalForImages').css('display', 'none');
                }
            });
        });
        function stickFooter() {
          var docHeight = $(window).height();
          var footerHeight = $('#footer').height();
          var footerTop = $('#footer').position().top + footerHeight;
          if (footerTop < docHeight) {
            $('#footer').css('margin-top', (docHeight - footerTop) + 'px');
          }
        }