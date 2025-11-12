import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        return this.price + (this.price / 10);
    }
    get getWeight() {
        return `This product weighs ${this.weight} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map