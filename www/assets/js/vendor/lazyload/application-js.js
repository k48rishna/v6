LazyLoad.js([
    'assets/js/vendor/bootstrap/bootstrap.min.js',
    'assets/js/vendor/moment/moment.min.js',
    'assets/js/vendor/sweetalert/sweetalert.min.js',
    'assets/js/vendor/pace/pace.min.js'
], function () {
    console.log('JS - Core JS dependencies (bootstrap,moment,sweetalert,pace) loaded');
});

LazyLoad.js([
    'assets/js/vendor/rsa-assign/jsrsasign-latest-all-min.js',
    'assets/js/vendor/aws/aws-sdk.min.js',
    'assets/js/vendor/aws/jsbn.js',
    'assets/js/vendor/aws/jsbn2.js',
    'assets/js/vendor/aws/sjcl.js',
    'assets/js/vendor/aws/aws-cognito-sdk.min.js',
    'assets/js/vendor/aws/amazon-cognito-identity.min.js',
], function () {
    console.log('JS - JSF (AWS SDK) Dependencies loaded');
});
