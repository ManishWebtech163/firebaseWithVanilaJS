let userRow = document.getElementById('userRow')

function createUserCollection(user) {
    // firebase.firestore().collection("users")
    // .doc(user)

    firebase.firestore().collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        rfToken: user.refreshToken,
        userId: user.uid,
        phonenumber: user.phoneNumber

    }).then((res) => {
        console.log(res)
    }).catch((e) => {
        console.log(e)
    })
}

// ---get user info--
async function getUserInfo(userID) {
    console.log(userID, "userIDuserID")
    await firebase.firestore().collection("users").doc("WqgsFgs7amYOXxTBoFxZwePvhu62").get().then((res) => {
        console.log(res, "getUserInfo")
    })
}
