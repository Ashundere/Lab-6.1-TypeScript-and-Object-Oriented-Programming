

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
        return `Item: ${this.sku} named ${this.name} costs $${this.price}`
    }

    getPriceWithTax(): number {
        let taxRatePercentage : number = 0
       return this.price + (this.price / taxRatePercentage)
    }
}