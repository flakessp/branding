(function() {
    window.adfox = window.adfox || {};

    $(function() {



        if (window.adfox['join-internet']) {
            data = window.adfox['join-internet'];
            $('#banner-0').addClass('video-banner');
            $('#banner-0 video').data({
                src: data.url + 'converted.mp4',
                clickTarget: data.click_url,
                endTarget: data.finish_url,
                errorTarget: data.error_url,
                duration: data.duration,
                eventClick: 1,
                eventStart: 2,
                eventQuad_25: 3,
                eventQuad_50: 4,
                eventQuad_75: 5,
                eventFinish: 6
            });
        }
        $('#content .video-banner').each(function() {
            var $audio, $canvas, $this, $video, src_url;
            $this = $(this);
            $video = $this.find('video').eq(0);
            src_url = $video.data('src').split('converted.mp4')[0];
            $video.addClass('video-js vjs-default-skin vjs-fullscreen');
            $audio = $('<audio controls="false">').attr({
                src: src_url + 'converted.mp3'
            }).appendTo($this);
            return $canvas = $('<canvas></canvas>').data({
                src: src_url + 'converted.mpg'
            }).appendTo($this);
        });



        $('body').on('click', 'a', function(e) {
            var $this, scope;
            e.preventDefault();
            $this = $(this);
            scope = 'branding';
            if ($this.is('#join-internet')) {
                scope = 'join-internet';
            }
            if ($this.data('eventClick')) {
                callEvent($this.data('eventClick'), scope);
            }
            if ($this.data('launchVideo')) {
                return playVideo($this.data('launchVideo'), scope);
            } else {
                return auth($this.attr('href'));
            }
        });
    });

}).call(this);
