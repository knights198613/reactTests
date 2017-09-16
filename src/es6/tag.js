/**
 * Created by Franco on 2017/9/14
 *
 */

function tag(s1, v1, v2) {
    console.log(s1[0]);
    console.log(s1[1]);
    console.log(s1[2]);
    console.log(v1);
    console.log(v2);
    let d = "Ok";
    return d;
}
let a = 5;
let b = 10;
const tg = tag`Hello ${ a + b} World ${a * b}`;

console.log(tg);

console.log`123`;

function ac(strings) {
    console.log(strings[0]);
    console.log(strings.raw[0]);
}

ac`First line\nSecond title`;