// Write your code below:
function handleFormSubmit(event){

    event.preventDefault();

    let myObj = {
         username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value
      
    };

    let myObj_serial = JSON.stringify(myObj);

    axios.post("https://crudcrud.com/api/0933ebc0a37a49e2b0f72780263fd8f8/appointmentsDate",myObj)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
    // localStorage.setItem(myObj.email, myObj_serial);

  
  const  string=myObj.username+"-"+myObj.email+"-"+myObj.phone
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(string);
    newLi.appendChild(newLiText);
    const list = document.querySelector("ul");
    list.appendChild(newLi);
}

module.exports = handleFormSubmit;
