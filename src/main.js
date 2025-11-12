import { DigitalProduct } from './models/DigitalProduct.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { Product } from './models/Product.js';
import { calculateTax } from './utils/taxCalculator.js';
const productsList = [];
productsList.push(new PhysicalProduct("SKU 4011", "Banana Beats", 399, 1));
productsList.push(new DigitalProduct("SKU 4770", "Shevacado, a Memoir", 200, 10));
// function mainProducts(products: any): string{
for (let i = 0; i < productsList.length; i++) {
    console.log(`${productsList[i].displayDetails()}. With tax, thats a total of ${productsList[i].getPriceWithTax()}`);
}
// }
// mainProducts(productsList)
//# sourceMappingURL=main.js.map