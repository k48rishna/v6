/* landing page dependencies */
LazyLoad.js([
    '../assets/js/vendor/jquery/jquery.easing.1.3.min.js',
    '../assets/js/vendor/jquery/jquery.mixitup.min.js',
    '../assets/js/vendor/jquery/jquery.counterup.min.js',
    '../assets/js/vendor/animation/animated-jquery.js',
    '../assets/js/vendor/animation/wow.min.js',
    '../assets/js/vendor/animation/waypoints.min.js',
    '../assets/js/vendor/animation/appear.js',
    '../assets/js/custom/landing.js'
], function () {
    console.log('JS - Landing page JS loaded');
});

LazyLoad.css([
    '../assets/css/vendor/bootstrap/bootstrap.min.css',
    '../assets/css/vendor/bootstrap/bootstrap-modal-carousel.css',
    '../assets/css/vendor/owl/owl.carousel.css',
    '../assets/css/vendor/owl/owl.theme.css',
    '../assets/css/vendor/owl/owl.transitions.css',
    '../assets/css/vendor/animation/animate.css',
    '../assets/css/vendor/animation/animated-text.css',
    '../assets/css/custom/landing.css'
], function () {
    console.log('CSS - Landing page CSS loaded')
});
 
/* Segment IO analytics*/
!function () {
        var analytics = window.analytics = window.analytics || [];
        if (!analytics.initialize)if (analytics.invoked)window.console && console.error && console.error("Segment snippet included twice."); else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "page", "once", "off", "on"];
            analytics.factory = function (t) {
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    e.unshift(t);
                    analytics.push(e);
                    return analytics
                }
            };
            for (var t = 0; t < analytics.methods.length; t++) {
                var e = analytics.methods[t];
                analytics[e] = analytics.factory(e)
            }
            analytics.load = function (t) {
                var e = document.createElement("script");
                e.type = "text/javascript";
                e.async = !0;
                e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(e, n)
            };
            analytics.SNIPPET_VERSION = "3.1.0";
            analytics.load("Q19oixDSxJEdZGm1nP4xPVx3xwY2NV8B");
            analytics.page()
        }
    }();

var aboutNav = document.getElementById('aboutNav');
analytics.trackLink(aboutNav, 'clickedAbout');

var assetsNav = document.getElementById('assetsNav');
analytics.trackLink(assetsNav, 'clickedAssets');

var teamNav = document.getElementById('teamNav');
analytics.trackLink(teamNav, 'clickedTeam');

var ticketingPlatformLink = document.getElementById('ticketingLink');
analytics.trackLink(ticketingPlatformLink, 'clickedTicketing');

var smartRestaurantLink = document.getElementById('restaurantLink');
analytics.trackLink(smartRestaurantLink, 'clickedRestaurant');

var sentimentLink = document.getElementById('sentimentLink');
analytics.trackLink(sentimentLink, 'clickedSentiment'); 