/*
 * @Author: liuduan
 * @Github: https://github.com/Tony-Liuduan
 * @Date: 2019-09-08 17:19:35
 * @LastEditors: liuduan
 * @LastEditTime: 2019-09-09 14:30:50
 * @Description: 类型
 */




/*


TypeScript中的数据类型有：

undefined :
number:数值类型;
string : 字符串类型;
boolean: 布尔类型；
enum：枚举类型；
any : 任意类型，一个牛X的类型；
void：空类型；
Array : 数组类型;
Tuple : 元祖类型；
null ：空类型。

*/
let n: number = 1;
let n1: number = NaN;
// let n2 number = undefined;
// let n3: number = null;




let s: string = "s";



let b: boolean = true;
// let b1: boolean = undefined;




enum REN {
    nan,
    nv = "女",
}
console.log(typeof REN.nan, REN.nv); // number 0, "女"



let aa: any = ["1", 2];


let arr: Array<number> = [1, 2];


let x = 10;

let list = [10, 22, 4, null, 5];

let list1: any[] = [1, "2", null];


let v: string | number | boolean = false;


function error(message: string): never {
    throw new Error(message);
}

let someValue = "a";

let strLength: number = (someValue as string).length;


class App {
    public readonly username: string;
    private age: number;
    constructor(name: string, age?: number) {
        this.username = name;
        this.age = age!;
    }

    private log() {
        console.log("log", this.username);
    }

    protected message() {
        console.log("thiszhixiang ", this);
        // console.log("message", this.username);
    }

    public say() {
        console.log("say", this.username);
    }
}

class App1 extends App {

    haha() {
        super.message();
        // console.log(this.age);
    }
}

const app: App = new App("lili", 10);
// app.username = "aaa";
// app.log();
// app.message();
// app.say();
// app.age = 1;

const app1: App1 = new App1("sasa");
console.log(app1);
app1.haha();
console.log(app);
const app2: typeof App1 = App1;
console.log(app2);



function doo<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

let doo1: <T>(arg: T[]) => T[] = doo;
let doo2: { <U>(arg: U[]): U[] } = doo;

interface Ge {
    <T>(arg: T[]): T[];
}

let doo3: Ge = doo;

interface Ge1<T> {
    (arg: T[]): T[];
}

let doo4: Ge1<string> = doo;



class Gaa<T> {
    list: T;
    constructor(l: T) {
        this.list = l;
    }
}


interface ys {
    len: number;
}

let fooo: <T extends ys>(arg: T) => T = <T extends ys>(arg: T): T => {
    console.log(arg.len);
    return arg;
};


fooo({
    len: 1
})

type abming = Array<string>;

let a: abming = ["1"];
type Alias = { num: number }
interface Interface {
    num: number;
}


function aaa<T extends Alias>(o: T): T {
    console.log(o.num);
    return o;
}

aaa({
    num: 1,
})