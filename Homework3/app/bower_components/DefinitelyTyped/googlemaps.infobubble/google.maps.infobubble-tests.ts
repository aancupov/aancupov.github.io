/// <reference path="../googlemaps/google.maps.d.ts" />
/// <reference path="google.maps.infobubble.d.ts" />

function test_options() {
    var options: google.maps.infobubble.InfoBubbleOptions;
    options = {};

    options.arrowPosition = 50;
    options.arrowSize = 15;
    options.arrowStyle = 0;
    options.backgroundColor = "#000";
    options.borderColor = "#000";
    options.borderRadius = 5;
    options.borderWidth = 1;
    options.disableAnimation = false;
    options.disableAutoPan = false;
    options.maxHeight = 300;
    options.maxWidth = 300;
    options.minHeight = 300;
    options.minWidth = 300;
    options.padding = 10;
    options.shadowStyle = 1;
}

function test_bubble() {
    var map: google.maps.Map;
    var marker: google.maps.Marker;
    var bubble: google.maps.infobubble.InfoBubble;

    bubble.open(map, marker);
    var isOpen = bubble.isOpen();
    bubble.close();
}