$(document).ready(function () {
    "use strict";
//-------- 14 Range-Slider ui js --------
    
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 410],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

});