(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBQMGv4opFWBZIQwz9wNlMnfaWmXsMBLqk"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const Email = document.getElementById("Email");
    const Password = document.getElementById("Password");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = Email.value;
        const password = Password.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
            var link = 'home.html';
            window.location.replace(link);
           
        }).catch(err => {
            alert(err.message);
        });
        
    });
    
    btnadmin.addEventListener('click', e => {
        const email = adminemail.value;
        const password = adminpassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(adminemail, adminpassword).then(user =>{
            alert("Login Successful :)");
            var link = 'admin.html';
            window.location.assign(link);
           
        }).catch(err => {
            alert(err.message);
        });
        
    });
    

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)");
            
        }).catch(err => {
            alert(err.message);
        });

    });


}());