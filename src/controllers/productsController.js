import { productsData } from '../data/productsData.js';

class Products {
  constructor(initialProducts) {
    this.products = initialProducts;
  }

  getAll() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  // products = { [name]: amount }[]
  buyProducts(products) {
    Object.entries(products).forEach(([name, amount]) => {
      const product = this.products.find((product) => product.name === name);
      if (product) {
        product.amount -= amount;
      }
    });

    return this.getAll();
  }
}

export default new Products(productsData);
