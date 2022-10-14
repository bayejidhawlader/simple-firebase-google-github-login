/**
 
* -------------
* INITIAL SETUP
 * -------------
 1. visit console.fireebase.google.com   //simple-firebase-authentication
 2. create a new firebase project
 3. Visit doc(go to docs): Build > Authentication 
 4. Register web app > Firebase project home > click web > five name (simple-firebase-authentication) and register
 5. Install firebase for your project: npm install firebase
 6. DENGIROUS: get firebase config and put it firebase.init.js
 7. export app from  firebase.init.js
 -----------
   SET UU PROVIDER
   ---------
 8. create auth useng getAuth from firebase by using app frpm firebase.init.app
 9. create a google auth provider. do not forget to use = new GoogleAuthProvider();
 10. go to firebase ? Build > Authencation > sing in method
 11. Enable google sing in method
 12. Create a button for google sng in method with a click handler
 13. Inside the event handler, call singInWithPopUp with auth, provider
 14. after singInWithPopUp .then result, ERROR
 --------------
        DISPLAY DATA
 ----------------

  --------------
        ADD A NEW SING IN METHOD (GITHUB)
 ----------------
 1. enable the sing in method
 2. create github, twitter, fb, etc. app create
 3. 
 
 */
