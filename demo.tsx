var meroname: string = "Manish"

let num: number = 200

// Can't assign like these
// num = "manish";

var myName = true ? 100 : 200

let payment: 'esewa' | 'khalti';
payment = 'esewa'

let numbers = [1,2,3, "Amrit"]

let numbers = [1,2,3]
let numbers: number[] [1,2,3, "Amrit"] // error

let names: string[] = ["Amrit"]

let userDirection:'up' | 'down' | 'right' | 'left' = "haha"

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let userDirection: Direction = "Up"








enum Direction {
    Up,
    Down,
    Left,
    Right
}

let userDirection: Direction = Direction.Up;


// give object data type
let user: {
    name: string,
    age: number
} = {
    name: "Amrit",
    age: 22
}

// next waty to give object datatype
interface UserType {
    name: string,
    age: number,
    city: string | number | boolean,
    area ?: string
}

let user1:UserType = {
    name: "Amrit",
    age: 22,
    city : true
}

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let userDirection: Direction = Direction.Up;


// give object data type
let user: {
    name: string,
    age: number
} = {
    name: "Amrit",
    age: 22
}

// next waty to give object datatype
interface UserType {
    name: string,
    age: number,
    city: string | number | boolean,
    area ?: string
}

let user1:UserType = {
    name: "Amrit",
    age: 22,
    city : true
}

interface Me {
    name: string,
    age: number,
    isNepali : boolean
}

let me:Me = {
    age: 22,
    name: "Amrit",
    isNepali : true
}

enum Role {
    Designer = "designer",
    Developer = "developer"
}

interface Employee extends Me {
    role: Role
}

let employee:Employee = {
    age: 22,
    name: "Amrit",
    isNepali: true,
    role: Role.Designer
}

type haha = string | number | boolean | number[]
let userId: haha = "85632"


let haha:any = "anything";

type personalDetail = {
    name: string,
    role: Role
}

let personalDetail:personalDetail = {
    name: "amrit",
    role: Role.Developer
}


type SoftwareDeveloper = {
    name: string,
    role: Role
    language: string,
}

type Language = {
    language: string,
}

type SoftwareDeveloper1 = personalDetail & Language 

let softwareDeveloper: SoftwareDeveloper1 = {
    name: "Amrit",
    role: Role.Developer,
    language: "JavaScript"
}

// give type to function

function haa(num: number):string {
    console.log(num+1)
    return "hehe"
}
haa(123)

// function addTwoNumber (num1: number, num2: number): number {
//     return num1 + num2
// }


// Generics Understand

function addTwoNumber (num1: number, num2: number): number {
    return num1 + num2
}

function addTwoString(str1: string, str2: string): string {
    return str1 + str2
}

function addTwoString2(str1: boolean, str2: boolean): boolean {
    return str1 + str2
}

// Generics helps to define function type dynamically

function addJPani<T, U>(data1:T, data2:U) {
    console.log("haha")
}

// addJPani<string>("1", "1")
addJPani<number, string>(1, "2")
addJPani<string, number>("hi", 2)


// use Generics in interface

interface Data<T, U> {
    first: T,
    second: U
}

let data:Data<string, number> = {
    first : "123",
    second: 123
}


interface Data2 {
    name: string,
    age: number,
    isNepali : boolean
}

class Developer {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello(name: Data2) {
        // array comes all mean you can do like sayHello(name:(number | string)[])

    }
}

let amrit = new Developer("hha", 33)

