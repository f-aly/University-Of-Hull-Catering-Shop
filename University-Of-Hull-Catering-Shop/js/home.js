// Get the modal
var modal = document.getElementById('loginModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

////////////////// LOGIN /////////////////////

var dummyAccounts = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "buyer1",
        password: "buyer1"
    },
    {
        username: "buyer2",
        password: "buyer2"
    },
]

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(i = 0; i < dummyAccounts.length; i++){
        if (username == dummyAccounts[i].username && password == dummyAccounts[i].password) {


            if (username == 'admin' && password == 'admin') {

                window.location.href = "admin.html";
            }
            else {

                window.location.href = "index.html";
            }

            console.log('Login Successful');
            console.log(`userID: ${username}`);
            localStorage.setItem("currentUserId", username);
            console.log("Stored in local storage as 'currentUserId'");
            document.getElementById("loginFailed").style.visibility = "hidden";
            return
        }
    }
    
    console.error("Login Failed - Details incorrect")
    document.getElementById("loginFailed").style.visibility = "visible";
}


let usernameToDisplay = localStorage.getItem('currentUserId');
document.getElementById("displayUsername").innerHTML = usernameToDisplay;


////////////////////////////////////////////////

function logOut() {
  window.location.href = "home.html";
  localStorage.clear()
}
