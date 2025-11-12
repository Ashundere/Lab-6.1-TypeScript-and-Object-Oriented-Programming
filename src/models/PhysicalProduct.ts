import {Product} from "./Product.js"

export class PhysicalProduct extends Product {
    weight: number;

    constructor (sku: string, name: string, price: number, weight: number){
    super(sku, name, price)
    this.weight = weight
    }

    getPriceWithTax(){
        return this.price + (this.price / 10)
    }
    get getWeight(): string {
        return `This product weighs ${this.weight} kg`
    }
}