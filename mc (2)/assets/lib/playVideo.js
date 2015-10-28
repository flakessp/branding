(function() {
    window.playVideo = function(containerID, scope) {
        var $audio, $body, $canvas, $container, $loader, $video, audio, canvas, click, currentTime, duration, finish, init, player, start, timer, timerHandler, video;
        $container = $('#' + containerID);
        $body = $('body');
        $canvas = $container.children('canvas');
        canvas = $canvas.get(0);
        $video = $container.children('video');
        video = $video.get(0);
        $audio = $container.children('audio');
        audio = $audio.get(0);
        $loader = $container.children('.loader');
        player = null;
        currentTime = 0;
        duration = parseInt($video.data('duration'));
        timerHandler = 0;
        timer = function() {
            currentTime += 1;
            if (currentTime >= duration * 0.25) {
                callEvent($video.data('eventQuad_25'), scope, true);
            }
            if (currentTime >= duration * 0.5) {
                callEvent($video.data('eventQuad_50'), scope, true);
            }
            if (currentTime >= duration * 0.75) {
                callEvent($video.data('eventQuad_75'), scope, true);
            }
            if (currentTime >= duration * 0.25) {
                $container.addClass('controls');
            }
            if (currentTime > duration) {
                clearInterval(timerHandler);
                return auth($video.data('endTarget'));
            }
        };
        init = function() {
            $loader.hide();
            return $container.addClass('active');
        };
        start = function() {
            callEvent($video.data('eventStart'), scope);
            return timerHandler = setInterval(timer, 1000);
        };
        click = function() {
            if (currentTime > duration * 0.25) {
                callEvent($video.data('eventClick'), scope);
                return auth($video.data('clickTarget'));
            }
        };
        finish = function() {
            callEvent($video.data('eventFinish'), scope, true);
            return auth($video.data('endTarget'));
        };
        if (device.iphone()) {
            audio.play();
            audio.pause();
            $canvas.on('click', function() {
                return click();
            });
            $canvas.show();
            return player = new jsmpeg($canvas.data('src'), {
                canvas: canvas,
                onload: function() {
                    init();
                    audio.play();
                    player.play();
                    return start();
                },
                onfinished: function() {
                    return finish();
                }
            });
        } else {
            $video.append('<source src="' + $video.data('src') + '" type="video/mp4"/>');
            player = videojs(video, {
                'preload': 'auto'
            });
            player.on('error', function() {
                return auth($video.data('endTarget'));
            }).on('ended', function() {
                return finish();
            }).on('click', function() {
                return click();
            }).on('play', function() {
                return start();
            });
            init();
            player.show();
            return player.play();
        }
    };

}).call(this);
