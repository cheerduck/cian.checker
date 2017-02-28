document.write('<span id="preloader">Ждем обновлений...</span>');

        if (!$.ajax) {
            var script = document.createElement('script');
            script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
            script.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(script);
        }
