  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAbHvGMOMF50qvQH94wnCgZeeMlHIEugn4",
    authDomain: "xrud-started.firebaseapp.com",
    databaseURL: "https://xrud-started.firebaseio.com",
    projectId: "xrud-started",
    storageBucket: "xrud-started.appspot.com",
    messagingSenderId: "977400731904",
    appId: "1:977400731904:web:28a3276dcb66af79c77be5",
    measurementId: "G-QBVX2B721W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function LoginAction(){
    alert('logado');
  }

  function LogOutAction(){
    alert('deslogado');
  }

  function RegisterAction(){
    alert('Cadastradp');
  }