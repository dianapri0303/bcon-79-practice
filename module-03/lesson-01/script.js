// Task-1

const btn1 = document.querySelector(".b-1");
const ar1 = ["random", true, 2, 15, -5];

btn1.onclick = fn1;

function fn1() {
  const out1 = document.querySelector(".out-1");
  out1.textContent = `[ ${ar1} ]`;
}

// Task-2

// Task-1

const btn2 = document.querySelector(".b-2");
const ar2 = ["random", true, 2, 15, -5];

btn2.onclick = fn2;

function fn2() {
  const out2 = document.querySelector(".out-2");
  let result = "";
  for (const item of ar2) {
    result += `${item}`;
  }
  out2.textContent = result;
}

// Task-3

const btn3 = document.querySelector(".b-3");
const ar3 = ["random", true, 2, 15, -5];

btn3.onclick = fn3;

function fn3() {
  const out3 = document.querySelector(".out-3");

  out3.textContent = ar3.length;
}

// Task-4

const btn4 = document.querySelector(".b-4");
const ar4 = Array.from(Array(10).keys(), x => x + 1);
// const ar41 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btn4.onclick = fn4;

function fn4() {
  const out4 = document.querySelector(".out-4");

  out4.textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
}

// Task-5
const btn5 = document.querySelector(".b-5");
const ar5 = Array.from(Array(10).keys(), x => x + 1);

btn5.onclick = fn5;

function fn5() {
  const out5 = document.querySelector(".out-5");

  out5.textContent = ar5[0] + ar5[2] + ar5[3];
}

// Task-6
const btn6 = document.querySelector(".b-6");
const ar6 = ["Діана", "Риби", "Понеділок", "Березень"];
btn6.onclick = fn6;

function fn6() {
  const out6 = document.querySelector(".out-6");
  let result = "";
  // for (const item of ar6) {
  //   result += item + " ";
  // }
  out6.textContent = ar6.join(" ");
}

// Task-7
const btn7 = document.querySelector(".b.7");
const ar7 = [];
btn7.onclick = fn7;

function fn7() {
  const out7 = document.querySelector(".out-7");
  let result = "";
  ar7[7] = "vietnam";
  ar7[6] = "turkey";
  ar7[5] = "italy";

  for (const item of ar7) {
    result += item + " ";
  }
  out7.textContent = result;
}

// Task-8
const btn8 = document.querySelector(".b.8");
const ar8 = [];
btn8.onclick = fn8;
function fn8() {
  const out8 = document.querySelector(".out-8");
  const out81 = document.querySelector(".out-8-1");
  let result = "";
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;
  for (const item of ar8) {
    result += `${item}-`;
  }
  out8.textContent = result;
  out81 = result.length;
}

// Task-9
const ar9 = ["Діана", "Риби", "Понеділок", "Березень"];
const brn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

brn9.onclick = fn9;

function fn9() {
  const lastI = ar9.length - 1;
  console.log("🚀 ~ fn9 ~ lastI:", lastI);
  out9.textContent = ar9[lastI];
}

// Task-10
const ar10 = [100, 200, 300, 400, 700, 121];
const brn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

brn10.onclick = fn10;

function fn10() {
  const lastI = ar10.length - 1;
  out10.textContent = ar10[1] + ar10[lastI];
}

// Task-11
const ar11 = [2, 3, 4, 5, 6, 7];
const brn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

brn11.onclick = fn11;

function fn10() {
  const a1 = ar11[2];
  ar11[2] = ar[4];
  ar11[4] = a1;
  out11.textContent = ar11.join(" ");
}

// Task-12

// Task-13

// Task-14

// Task-15

// Task-16

// Task-17

// Task-18

// Task-19

// Task-20
