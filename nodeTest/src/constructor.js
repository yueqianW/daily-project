/**
 * Created by yueqian on 2017/3/3.
 */

// es5
function Person(name) {
    this.name    = name;
    this.sayName = function () {
        console.log(this.name);
    }
}
Person.prototype = {
    sayHello: function () {
        console.log('hello111');
    },
    do(){
        console.log('111');
    }
};

// es6
class Person1 {
    constructor(name) {
        var top = 0;

        function test() {
            console.log('101010101');
        }

        this.name    = name;
        this.sayName = function () {
            test();
            console.log(top);
        }
    }
}

Object.assign(Person1.prototype, {
    sayHello(){
        console.log('hello222')
    },
    do(){
        console.log('222');
    },
    del: 'test',

});

var p1 = new Person('p1');
var p2 = new Person1('p2');

p1.__proto__.cat = function () {
    console.log('123456');
}

// p1.sayName();
// p1.sayHello();
// p1.do();
// p1.cat();

p2.sayName();
p2.sayHello();
p2.do();
console.log(p2.del);
