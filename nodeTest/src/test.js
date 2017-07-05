/**
 * Created by yueqian on 2017/3/2.
 */
// 构造函数
// 使自己的对象多次复制，同时实例根据设置的访问等级可以访问其内部的属性和方法
// 当对象被实例化后，构造函数会立即执行它所包含的任何代码
function myObject(msg) {
    // 特权属性 (公有属性)
    this.myMsg   = msg; // 只在被实例化后的实例中可调用
    this.address = '上海';

    // 特权方法 (公有方法)能被外部公开访问,这个方法每次实例化都要重新构造
    // 而 prototype 是原型共享，所有实例化后，都共同引用同一个
    this.sayAge = function () {
        console.log(name); // 在公有方法中可以访问私有成员
    };

    // 私有属性
    var name = '豪情';
    var age  = 29;
    var that = this;
    // 私有方法
    function sayName() {
        console.log(that.name);
    }

    // 私有和特权成员在函数的内部，在构造函数创建的每个实例中都会包含同样的私有和特权成员的副本，
    // 因而实例越多占用的内存越多
}
// 公有方法
// 适用于通过 new 关键字实例化的该对象的每个实例
// 向 prototype 中添加成员将会把新方法添加到构造函数的底层中去
myObject.prototype.sayHello = function () {
    console.log('hello everyone!');
};

// 静态属性
// 适用于对象的特殊实例，就是作为 Function 对象实例的构造函数本身
myObject.name           = 'china';
// 静态方法
myObject.alertname      = function () {
    console.log(this.name);
};

// 实例化
var m1                  = new myObject('111');
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
// console.log(m1.prototype); //undefined, 实例对象没有 prototype
// console.log(myObject.prototype); //Object
// console.log(myObject.prototype.constructor); //console.log 返回 myObject(msg)，此时 alert() 更清楚，相当于 myObject
// console.log(myObject.prototype.constructor.name); //china, 相当于 myObject.name;