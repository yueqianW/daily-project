/**
 * Created by shen on 17-2-25.
 */

class C {

    constructor() {
        console.log(this);
    }

    fun1() {
    }
}

class D extends C {

    constructor() {
        super();
    }

    fun1() {
    }
}

// XXX A
function A() {
}
A.prototype.fun1 = function () {
};

// XXX B
function B() {
    A.call(this);
}

function _wrapper() {
    this.constructor = B;
}
_wrapper.prototype = A.prototype;

B.prototype = new _wrapper();

B.prototype.fun1 = function () {
};

let a = new A();
let b = new B();

let c = new C();
let d = new D();

console.log(a);
console.log(b);
