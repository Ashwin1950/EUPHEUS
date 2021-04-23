const form = document.querySelector("#send");
const firebaseConfig = {
    apiKey: "AIzaSyBQMGv4opFWBZIQwz9wNlMnfaWmXsMBLqk",
    authDomain: "eupheus-d7976.firebaseapp.com",
    projectId: "eupheus-d7976",
    storageBucket: "eupheus-d7976.appspot.com",
    messagingSenderId: "1038134148139",
    appId: "1:1038134148139:web:87e23d80e4690df0c0fe6e",
    measurementId: "G-BSEFH4C1GE"
  };
  
firebase.initializeApp(firebaseConfig);
  
var db = firebase.firestore();
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection("eupheus").add({
        name : form.name.value,
        email : form.email.value,
        message :  form.message.value,
        number : form.phone.value,
        })
        .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
        console.error("Error adding document: ", error);
    });
})