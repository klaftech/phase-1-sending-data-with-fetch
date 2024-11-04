// Add your code here
const docBody = document.querySelector("body")

function handleDomInsert(string){
    const p = document.createElement("p")
    p.textContent = string
    docBody.append(p)
}

function submitData(userName, userEmail){
    const formData = {
        name: userName,
        email: userEmail,
    }
    const optionsObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    }
    return fetch('http://localhost:3000/users',optionsObj)
    .then((response) => response.json())
    .then((data) => handleDomInsert(data.id))
    .catch((error) => handleDomInsert(error))
}

function test(){
    return submitData("Roger","roger@roger.com")
}