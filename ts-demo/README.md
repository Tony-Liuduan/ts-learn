## TS类型

### js 7种动态类型

>  因为它们在运行时使用

* Undefined
* Null
* Boolean
* Number
* String
* Object
* Symbol

### ts 静态类型

> 静态类型在编译时（无需运行代码）被确定。静态类型可以预测动态类型的值，这可以帮助在无需运行代码的情况下警告你可能出现的错误


#### 基本静态类型：10个

* undefined
* null
* boolean
* number
* string
* any: `未知类型`
* void: `未制定函数返回值`
* object: `类似接口，叫内联注释`
* array: `string[] || Array<string> || (number | string)[]`
* tuple: `元组是一个包含固定数量的元素和相关类型的数组 [string, number, boolean]`
* enum: `枚举，用enum定义变量`
* never: `用于给函数throw error返回值类型`



#### 类型推断：变量定义时，编辑器根据初始值给变量定义类型

> jsx: as, 还没想到在哪使用？


#### 接口：interface

```javascript
interface Animal {
    kind: string;
    weight?: number; // 可选类型
    readonly a: number;
}
```


#### 泛型

* 泛型函数 `foo<T>(a: T); T变量类型，通过<>定义给方法定义，foo<string>("test")调用` 
* 泛型接口
* 泛型类: `泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。`


#### 联合类型：`number|string`

> 表示A或B类型

```javascript
let v: string | number | false = 1;
```



#### 交集类型：`&`

> 表示A且B类型

```javascript
type Student = {
    id: string;
    age: number;
};
type Employee = {
    companyId: string;
};
let person: Student & Employee;
person.age = 21; // ✅
person.companyId = 'SP302334'; // ✅
person.id = '10033402'; // ✅
person.name = 'Henry'; // ❌ - name does not exist in Student & Employee
```


#### 类

* public
* protected: `只能在类和子类中访问，实例不可用`
* private: `只能在类中访问，实例不可用`
* extends: `继承，如果有constructor，它必须调用super()，它会执行基类的构造函数`
* super: `用于子类在方法中调用父类方法，父类方法中的this指向当前子类的实例`
* readonly: `将属性设置为只读`
* static: `静态属性`
* abstract: `抽象类，用于继承？？？不晓得`
* :ClassName: `定义类实例属性`
* :typeof ClassName: `定义静态属性类`
* 接口可以继承类: `interface Point3d extends Point {}`



#### 函数

* 剩余参数: `...args: string[]`



#### 类型别名

* type: `定义类型别名关键字`

```javascript
type Name = string;
type Container<T> = { value: T };
// 类似接口
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

type abming = Array<string>;
```


#### 字符串字面量类型

```javascript
type Easing = "ease-in" | "ease-out" | "ease-in-out";
```


#### 数字字面量类型

```javascript
type Easing = 1 | 2 | 3;
```

