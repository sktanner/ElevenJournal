const { log } = require("console");

/* *************************
*** USER SIGNUP ***
************************** */
function userSignUp() {
     console.log('userSignUp Function Called')
    
    let userEmail = document.getElementById("emailSignup").value
    let userPass = document.getElementById("pwdSignup").value

    let newUserData = {
        user: {
            email: userEmail,
            password: userPass
        }
    }

    console.log(`newUserData --> ${newUserData.user.email} ${newUserData.user.password}`);
    

    fetch(`http://localhost:3000/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let token = data.sessionToken
        localStorage.setItem('sessionToken', token)
        tokenChecker()
    })
    .catch(err => {
        console.error(err)
    })
}
    
    /* *************************
    *** USER LOGIN ***
    ************************** */
    function userLogin() {
        let userEmail = document.getElementById('emailLogin').value
        let userPass = document.getElementById('pwdLogin').value
        console.log(userEmail, userPass)

        let userData = {
            user: {
                email: userEmail,
                password: userPass
            }
        }
        console.log(userData)

        fetch(`http://localhost:3000/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let token = data.sessionToken
            localStorage.setItem('sessionToken', token)
            tokenChecker()
        })
        .catch(err => {
            console.error(err)
        })
    }
    
    
    /* *************************
    *** USER LOGOUT ***
    ************************** */
    function userLogout() {
        localStorage.setItem('sessionToken', undefined)
        console.log(`sessionToken --> ${localStorage.sessionToken}`)
        tokenChecker()
    }
    
    
    /* *************************
     *** TOKEN CHECKER FUNCTION ***
    ************************** */
    function tokenChecker() {
     console.log('tokenChecker Function Called')
    }
    tokenChecker()    