function getAllProduct(){

const product = fetch(`https://api.escuelajs.co/api/v1/products`)
     .then((res) => res.json())

    //  .then((data) => {           //here data refer the object fect with the help of API
      //  console.log(data);
      return product
    //  })
}

export{ getAllProduct}
