/**函数的定义及使用方法 */

//无参函数的定义和调用
function fun01(): string {
    return '无参函数';
}
console.log("无参函数fun01(): " + fun01());

//有参数函数的定义和调用
function fun02(name: string, age: number): string {
    return `${name}的年龄是：${age}岁。`;
}
console.log('有参函数fun02("gao",20): ' + fun02("gao", 20));

//匿名函数的定义和调用
var fun03 = function (): string {
    return '匿名函数';
}
console.log("匿名函数fun03(): " + fun03());

//无返回值函数的定义和调用
function fun04(): void {
    console.log('gaogaogaogao');
}
fun04();

//可选参数的定义和调用，可选参数必须配置到必选参数的后面
function fun05(name: string, age?: number): string {
    if (age) {
        return `${name} --- ${age}`;
    } else {
        return `${name} ---年龄保密`;
    }
}
console.log('可选参数函数fun05("gao"): ' + fun05('gao'));
console.log('可选参数函数fun05("gao", 30): ' + fun05('gao', 2000));

//默认参数函数定义和调用
function fun06(name: string, age: number = 20): string {
    return `${name} --- ${age}`;
}
console.log('默认参函数fun06("gao"): ' + fun06('gao'));
console.log('默认参函数fun06("gao",300): ' + fun06('gao', 300));

//剩余参数函数定义和调用
function fun07(b: number, ...residue: number[]): number {
    var sum = b;
    for (var i = 0; i < residue.length; i++) {
        sum += residue[i];
    }
    return sum;
}
console.log('剩余参数函数fun07(10,1,2,3):' + fun07(10, 1, 2, 3));
console.log('剩余参数调用02-fun07(100,1,2,3,4,5,6):' + fun07(100, 1, 2, 3, 4, 5, 6));

//重载函数的定义和调用
function fun08(name: string): string;
function fun08(age: number): string;
function fun08(str: any): any {
    if (typeof str === 'string') {
        return '名字:' + str;
    } else {
        return '年龄:' + str;
    }
}
console.log('重载函数fun08("gao"):' + fun08('gao'));
console.log('重载函数fun08(20):' + fun08(20));

//箭头函数定义和调用
console.log('gaogaogao');
setTimeout(() => {
    console.log('gaogaogao被返回函数了');
}, 2000);
let data: string[] = ['gao', 'gaogao', 'gaogaogao'];
data.forEach((line) => console.log(line));