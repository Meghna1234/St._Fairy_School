  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDpeke3e2tvwQ3gbvRLz_S_vLXXF0EE28Q",
      authDomain: "kwitter-5846f.firebaseapp.com",
      databaseURL: "https://kwitter-5846f-default-rtdb.firebaseio.com",
      projectId: "kwitter-5846f",
      storageBucket: "kwitter-5846f.appspot.com",
      messagingSenderId: "824518306701",
      appId: "1:824518306701:web:ece7fcf2888007403b2bc4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
