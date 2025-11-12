export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `Item: ${this.sku} named ${this.name} costs $${this.price}`;
    }
    getPriceWithTax() {
        let taxRatePercentage = 0;
        return this.price + (this.price / taxRatePercentage);
    }
}
//# sourceMappingURL=Product.js.map