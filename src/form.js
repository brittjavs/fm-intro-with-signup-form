function validate(){
    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    if (firstName.value == ""){
        let firstNameError = document.getElementsByClassName("first-name-error")
        firstName[0].id = "visible"
    }
    if (lastName.value == ""){
        
    }
    if (email.value == ""){
        
    }
    if (password.value == ""){
        
    }
}