$(document).ready(function(t){var n=991;function i(n){t(".cont-main").width(function(){return t(".wrapper").width()-(t(".cont-left").width()+t(".cont-right").width())-n})}function o(){t(window).width()<=n?t(".cont-right").insertBefore(t(".cont-main")):t(".cont-right").insertAfter(t(".cont-main"))}i(0),o(),t(window).resize(function(){t(window).width()>=n?i(0):t(".cont-main").width("initial"),o()}),setInterval(function(){t(window).width()>n?i(0):t(".cont-main").width("initial")},100)});