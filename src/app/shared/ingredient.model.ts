export class Ingredient {
    constructor(public name: string, public amount: number) {}
//so the above will automatically give us properties with the names we specify here as argument names.
//so simply add an accessor- public infront of the property.
}
//The above approach is new and simple way. Where above is angular gives us a shortcut.
/*
export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}  */