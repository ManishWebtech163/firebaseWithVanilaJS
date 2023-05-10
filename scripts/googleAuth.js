const provider = new firebase.auth.GoogleAuthProvider()

function signWithGoogle() {
    firebase.auth().signInWithPopup(provider).then((res) => {
        console.log(res.user, "google user")
        setLocalValues("userDetials", res.user)
    }).catch((e) => {
        console.log(e)
    })
}