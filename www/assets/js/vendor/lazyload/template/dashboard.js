LazyLoad.css([
    '../assets/css/vendor/bootstrap/bootstrap.min.css',
    '../assets/css/custom/mimin.css',
    '../assets/css/custom/dashboard.css',
    '../assets/css/vendor/calendar/fullcalendar.min.css',
    '../assets/css/vendor/animation/spinkit.css'
], function () {
    console.log('CSS - Dashboard CSS (bootstrap,mimin,dashboard,fullcalender,spinkit) loaded');
});

// nested JS loaded based on callback
LazyLoad.js([
    '../assets/js/vendor/lazyload/template/mimin.js'
], function () { 
    LazyLoad.js([
        '../assets/js/custom/dashboard.js'
    ], function () {
        console.log('JS - Dashboard JS (custom dashboard JS) loaded');
    });
});
