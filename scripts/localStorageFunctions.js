function setLocalValues(key, values) {
    localStorage.setItem(key, JSON.stringify(values))
}


function removeLocalValues(key) {
    localStorage.removeItem(key)
}