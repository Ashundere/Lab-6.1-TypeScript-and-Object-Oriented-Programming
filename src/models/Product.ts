

export class Product{
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number){
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `${this.name} item with a sku of ${this.sku} costs $${this.price}`
    }

    getPriceWithTax(taxRatePercentage: number): number {
       return this.price + (this.price / taxRatePercentage)
    }
}