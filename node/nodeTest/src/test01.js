// 构造函数
// 使自己的对象多次复制，同时实例根据设置的访问等级可以访问其内部的属性和方法
// 当对象被实例化后，构造函数会立即执行它所包含的任何代码

class myObject {


    constructor(msg) {
        this.myMsg   = msg;
        this.address = '上海';
        this.sayAge  = function () {
            console.log(this.name);
        };

        // 私有属性
        var name = '豪情';
        var age  = 29;
        var that = this;

        // 私有方法
        function sayName() {
            alert(that.name);
        }
    }

    sayHello() {
        console.log('hello everyone!');
    };

    // static name = 'china';
    static alertname() {
        console.log(this.name)
    };
}

myObject.name = 'china';


// 实例化
var m1 = new myObject('111');
//---- 测试属性 ----//
// console.log(myObject.name); //china
// console.log(m1.name); //undefined, 静态属性不适用于一般实例
// console.log(m1.constructor.name); //china, 想访问类的静态属性，先访问该实例的构造函数，然后在访问该类静态属性
// console.log(myObject.address); //undefined, myObject 中的 this 指的不是函数本身，而是调用 address 的对象，而且只能是对象
// console.log(m1.address); // 上海 此时 this 指的是实例化后的 m1

//---- 测试方法 ----//
// myObject.alertname(); //china, 直接调用函数的类方法
// m1.alertname(); //FF: m1.alertname is not a function, alertname 是 myObject 类的方法，和实例对象没有直接关系
// m1.constructor.alertname(); //china, 调用该对象构造函数（类函数）的方法（函数）
// m1.sayHello(); //hello everyone, myObject 类的 prototype 原型下的方法将会被实例继承
// myObject.sayHello(); //myObject.sayHello is not a function，sayHello 是原型方法，不是类的方法

//---- 测试 prototype ----//
console.log(m1.prototype); //undefined, 实例对象没有 prototype
console.log(myObject.prototype); //Object
console.log(myObject.prototype.constructor); //console.log 返回 myObject(msg)，此时 alert() 更清楚，相当于 myObject
console.log(myObject.prototype.constructor.name); //china, 相当于 myObject.name;