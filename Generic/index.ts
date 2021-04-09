//generic with class 

class ArrayOfNumbers {
    constructor(public collection: number[]){}

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]){}

    get(index: number):string{ //:string is return value
        return this.collection[index]
    }
}

class ArrayOfAnything<T> { //whatever pass inside 
    constructor(public collection: T[]){}

    get(index:number):T{
        return this.collection[index]
    }
}

const arr = new ArrayOfAnything(['A', 'b', 'c'])


// generic with function 

function printString(arr:string[]):void{
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
        
    }
}

function printNumber(arr:number[]):void{
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
        
    }
}

function printAnything<T>(arr:T[]): void{ //console -> void  no return 
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
        
    }
}

printAnything([1,'b'])



//Generic contraints 

class Car{
    print(){
        console.log('I am a Car');
        
    }
}

class House{
    print(){
        console.log('I am a House');
        
    }
}

interface Printable{
    print(): void
}

function printHouseOrCar<T extends Printable>(arr: T[]): void{
    for(let i=0; i<arr.length; i++){
        arr[i].print()
    }
}

printHouseOrCar([new House(), new House()])