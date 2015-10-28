(function() {
    window.callEvent = function(eventID, scope, remove) {
        var $img, eventUrl;
        if (scope == null) {
            scope = 'branding';
        }
        if (remove == null) {
            remove = false;
        }
        eventID = parseInt(eventID);
        if (!window.adfox[scope].events[eventID]) {
            return false;
        }
        eventUrl = window.adfox.branding.events[eventID];
        $img = $('<img src="' + eventUrl + '" />');
        $('#adfox-events').append($img);
        return $img.on('load', function() {
            console.log("event " + scope + ": " + eventID + " called");
            $img.remove();
            if (remove) {
                return delete window.adfox[scope].events[eventID];
            }
        });
    };

}).call(this);
