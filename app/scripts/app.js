var sensor = (function() {
    'use strict';
    var devicemotion,
        deviceorientation;

    devicemotion = function(e) {
        console.log('devicemotion detected.');
        window.removeEventListener('devicemotion', function() {}, false);

        console.log('removed devicemotion');
        // Get the current acceleration values in 3 axes and find the greatest of these

        var acc = e.acceleration,
            maxAcc = Math.max(acc.x, acc.y, acc.z),
            // Get the acceleration values including gravity and find the greatest of these
            accGravity = e.accelerationIncludingGravity,
            maxAccGravity = Math.max(accGravity.x, accGravity.y, accGravity.z);

        $('#motionX').text(acc.x);
        $('#motionY').text(acc.y);
        $('#motionZ').text(acc.z);
        $('#maxAccel').text(maxAcc);
        $('#accelGravity').text(maxAccGravity);

        setTimeout(function() {
            window.addEventListener('devicemotion', devicemotion, false);
        }, 1000);
    };

    deviceorientation = function(e) {
        var isPortrait = window.orientation % 180 === 0;
        $('#devOrientation').text(isPortrait ? 'portrait' : 'landscape');
    };

    /* Adding the events: */
    window.addEventListener('devicemotion', devicemotion, false);
    console.log('added devicemotion listener');

    window.addEventListener('deviceorientation', deviceorientation, false);
    console.log('added deviceorientation listener');
    return {

    };
})();