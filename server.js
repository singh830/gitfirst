let totalPrice = 0;

async function handleSubmit(event) {
    try {
        event.preventDefault();
        const price = event.target.price.value;
        const name = event.target.name.value;
        
        const obj = {
            price,
            name,
          
        };

        const response = await axios.post('https://crudcrud.com/api/933f8d9ea6014de28153d37434a32919/Products', obj);

        showUserOnScreen(response.data);
        updateTotalPrice(response.data.price);
        console.log(response);
    } catch (err) {
        document.body.innerHTML = document.body.innerHTML + "<h4>something went wrong</h4>";
        console.log(err);
    }
}

async function fetchProducts() {
    try {
        const response = await axios.get('https://crudcrud.com/api/63da8d0f52e34ac48e54410dab6f6422/Products');

        console.log(response);

        for (let i = 0; i < response.data.length; i++) {
            showUserOnScreen(response.data[i]);
            updateTotalPrice(response.data[i].price);
        }
        
    } catch (err) {
        console.log(err);
    }
}



async function DeleteUser(id, price) {
    try {
      removeUserFromScreen(id);
      updateTotalPrice(-parseFloat(price));
      const res = await axios.delete('https://crudcrud.com/api/933f8d9ea6014de28153d37434a32919/Products/${id}');
      console.log(res);
    } catch (err) {
        console.log(err);
    }
}



function showUserOnScreen(obj) {
    document.getElementById('price').value = '';
    document.getElementById('name').value = '';

    const parentNode = document.getElementById('listofproducts');
    const childNode = document.createElement('li');

    
    childNode.id = obj._id;
    childNode.innerHTML = `${obj.name}-${obj.price}
        <button onclick="DeleteUser('${obj._id}','${obj.price}')">Delete product</button>`;

    parentNode.appendChild(childNode);
}




function removeUserFromScreen(id) {
    const parentNode = document.getElementById('listofproducts');
    const childNodeToBeRemoved = document.getElementById(id);

    if (childNodeToBeRemoved) {
        parentNode.removeChild(childNodeToBeRemoved);
    }
}

function updateTotalPrice(price){
  totalPrice+=parseFloat(price);
  const totalElement=document.getElementById('totalPrice');
  totalElement.textContent =$`totalPrice.toFixed(2)`;
}


window.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
})