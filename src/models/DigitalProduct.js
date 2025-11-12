import { Product } from "./Product.js";
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    get getFileSize() {
        return `This product is ${this.fileSize} mb large`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map