-------------------------------------------------------------
(A) Pre-requiste
-------------------------------------------------------------

(1) AngularJS/NodeJS Environment, Chrome/Safari Browser for for Testing

(2) Git Clone project off BitBucket Repo (git clone https://YOUR-USERNAME@bitbucket.org/digital-ninja/frontend-liquidlean-angular.git)

-------------------------------------------------------------
(B) How to run locally?
-------------------------------------------------------------

(1) Type in your command prompt (Window) or terminal (Mac) to change the directory path to the project that had cloned. Eg. cd dirname/digital-ninja/frontend-liquidlean-angular

(2) Type in the command prompt/terminal, "node server" to fire up http web server

(3) To access our LiquidLean Dashboard, click on "login" on landing page to access custom login

    * Custom Login
    * username: beta.acnapi
      password: b3t4.acnapi

    * Landing Page Use-Case Login
    * username: digitalmobility
      password: fcHxdhFkq6uHURkm

(4) Sit back and enjou the magic!

-------------------------------------------------------------
(C) File structure
-------------------------------------------------------------
(1) Most of the files are found within WWW folder, you can find 

* Custom CSS: assets/css/custom
* CSS libraries: assets/css/vendor path

(2) Other Angular Specific Files

* Angular Controller: controller.js
* Dependencies : index.html
* Views: www/views

-------------------------------------------------------------
(D) Application Flow
-------------------------------------------------------------
**For API usage refer to http://swagger.acnapi.io/#/ as reference**

(1) Landing Page

   * Find out more information about our LiquidLean page, a contact us feedback form will trigger an API call to fire up a feedback request through our custom API

(2) Dashboard

   * Over here we pull trello cards using trello API employed through our API Gateway Lambda Services.
   * You can also access other tabs to view risk/issues board, hiring pipeline easily on the left and top nav bar

(3) Issues / Risk Page

   * Users can find issues and risk of our existing project on this page, we will pull these from our trello Risk&Issues board dynamically, do tag them with appropriate tags for them to show up correctly

(4) Hiring Pipeline

   * Users can find information of our API/Liquidlean team here, to add a new member under appropriate team. Click on 'Add Member' button, this will trigger a firebase API call to store these information on our Firebase backend
   * Liquidlean Team: https://beta-acnapi.firebaseio.com/collections2
   *  API Team: https://beta-acnapi.firebaseio.com/collections

(5) Assets Page

  * Users can find information about assets card and do searches queries here for easy sprint planning.

-------------------------------------------------------------
(E) Libraries andEmployed
-------------------------------------------------------------
* TBC