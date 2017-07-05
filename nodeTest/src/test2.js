/**
 * Created by yueqian on 2017/3/2.
 */
console.log('-------------')

// let Person = new class {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log(this.name);
//     }
// }('nihao');
//
// Person.sayName();


function f() {

    n = 5;
    {
        var n = 10;
        {
            var n = 6;
        }
    }
    return n;
}
f();
console.log(n);
