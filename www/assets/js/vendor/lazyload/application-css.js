LazyLoad.css([
              '//s3-us-west-2.amazonaws.com/liquid.acnapi.io/fonts/themify-icons.css',
              '//s3-us-west-2.amazonaws.com/liquid.acnapi.io/fonts/font-awesome.min.css',
              '//s3-us-west-2.amazonaws.com/liquid.acnapi.io/fonts/simple-line-icons.css',
              '//fonts.googleapis.com/css?family=Poppins:400,300,500',
              '//fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,400italic,600italic'
], function () {
    console.log('CSS - Fonts (sourcesans,poppins) and Icon fonts (fontawesome,themify,simpleline) loaded');
});

LazyLoad.css([
    'assets/css/vendor/sweetalert/sweetalert.css',
    'assets/css/vendor/pace/pace.css'
   ], function () {
    console.log('CSS - Generic CSS (sweetalert,pace) loaded')
});