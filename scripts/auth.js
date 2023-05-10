
function signup(event) {
    event.preventDefault()
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password).then(async (res) => {
        // --set user name--
        await firebase.auth().currentUser.updateProfile({
            displayName: document.getElementById("userNameSignUp").value
        })
        // --verify email link send--
        await firebase.auth().currentUser.sendEmailVerification().then(() => {
            alert("Send Link for verify email")
        })
        console.log(firebase.auth().currentUser)
        let user = firebase.auth().currentUser
        //---also set user detials in firestore---
        createUserCollection(user)

    }).catch((err) => {
        console.log(err)
    })
}


function signIn(event) {
    event.preventDefault()

    let getEmail = document.getElementById("loginEmail").value
    let getPassword = document.getElementById("loginPassword").value
    firebase.auth().signInWithEmailAndPassword(getEmail, getPassword).then((res) => {
        console.log(res)
    }).catch((e) => {
        console.log(e)
    })

}


function logout() {
    firebase.auth().signOut().then(() => {
        alert("Sign Out Success")
        removeLocalValues("userDetials")
    }).catch((e) => {
        console.log(e)
    })
}
