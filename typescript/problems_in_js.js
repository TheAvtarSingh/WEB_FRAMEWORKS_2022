// Dynamic Type causing problem
/* function getProduct(id){
return{id:id,name:`Awsome ${id}`,price:99.5}
} */


function getProduct(id){
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }

  const product = getProduct(1);
//   products Name {With N capital}
  console.log(`The product ${product.Name} costs $${product.price}`);

// get data with id = 1
/* const product = getProduct(1);
console.log(`The Product ${product.name} costs ${product.price}`);
 */

const showProduct = (name,price)=>{
    console.log(`The Product ${name} costs ${price}$.`);
    
}

// Using Both
const products = getProduct(1);
// It does not checks order
showProduct(products.name,products.price);
showProduct(products.name,products.name);
showProduct(products.price,products.name);
showProduct(products.price,products.price);

// Typescript mentioned the Type so it makes an Limitataion
// IDE Will show error if any occur in typescript