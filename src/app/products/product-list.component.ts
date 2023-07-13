import { Component } from "@angular/core";
import { Product } from "./product";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: Product[] = [
    {
      "id": 1,
      "name": "Smoothie",
      "onSale": false,
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "qty": 0,
      "starRating": 3.2,
      "inStock": 5,
      "imageUrl": "assets/images/smoothie.png"
    },
    {
      "id": 2,
      "name": "Soda",
      "onSale": false,
      "releaseDate": "March 19, 2021",
      "description": "Refreshing soda.",
      "price": 10.00,
      "qty": 0,
      "starRating": 3.2,
      "inStock": 5,
      "imageUrl": "assets/images/soda.png"
    },
    {
      "id": 3,
      "name": "Fries",
      "onSale": false,
      "releaseDate": "March 19, 2021",
      "description": "Crispy fries.",
      "price": 5.00,
      "qty": 0,
      "starRating": 3.2,
      "inStock": 5,
      "imageUrl": "assets/images/fries.png"
    },
    {
      "id": 4,
      "name": "Hamburger",
      "onSale": false,
      "releaseDate": "March 19, 2021",
      "description": "Delicious hamburger.",
      "price": 20.00,
      "qty": 0,
      "inStock": 5,
      "starRating": 3.2,
      "imageUrl": "assets/images/hamburger.png"
    }
  ];

  addQty(product: Product) {
    if (product.inStock > 0) {
      product.qty++;
      product.inStock--;
    }
  }

  subtractQty(product: Product) {
    if (product.qty > 0) {
      product.qty--;
      product.inStock++;
    }
  }

  cartQty() {
    let sum = 0;
    for (let x = 0; x < this.products.length; x++) {
      sum += this.products[x].qty;
    }
    return sum;
  }

  cartTotal() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].price * this.products[i].qty;
    }
    return total;
  }

  cartFinalPrice() {
    let finalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      let tax = 0.07;
      finalPrice += product.qty * product.price + (product.price * tax);
    }
    return finalPrice.toFixed(2); 
  }
  

  productInStock(product: Product) {
    if (product.inStock > 0) {
      return `${product.name} is in stock!`;
    } else {
      return `${product.name} is out of stock.`;
    }
  }
}
