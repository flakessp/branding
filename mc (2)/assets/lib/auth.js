(function() {
    window.auth = function(target) {
        return setTimeout((function() {
            var $form;
            $form = $('form#auth-form');
            if (target !== '#') {
                $form.find('#promogoto').val(target);
            }
            console.log('auth and redirect to ', target);
            if (target === '#') {
                return target = 'http://vmet.ro/';
            }
        }), 1000);
    };

}).call(this);
