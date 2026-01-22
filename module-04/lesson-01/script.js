// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

// Task 6
const obj6 = {
  b: 17,
  e: 22,
};

// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");
btn15.onclick = () => {
  fn15(obj15);
};

function fn15(object) {
  let result15 = "";
  for (const key in object) {
    for (const number of object[key]) {
      result15 += `${number} `;
    }
  }
  out15.innerHTML = result15;
}

// Task 16
const obj16 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

const btn16 = document.querySelector(".b-16");
const out16 = document.querySelector(".out-16");
btn16.onclick = () => {
  fn16(obj16);
};

function fn16(object) {
  let result = "";

  for (const key in object) {
    result += object[key].name + " ";
  }
  out16.textContent = result;
}

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");
btn17.onclick = fn17;

function fn17() {
  let str = "";
  for (const key in obj17) {
    for (const innerKey in obj17[key]) {
      innerKey;
      if (obj17[key][innerKey] > 30) {
        str += `${obj17[key].name} `;
      }
    }
  }
  out17.innerHTML = str;
}

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

const b18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

const b19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");
const inp19 = document.querySelector(".i-19");
b19.onclick = fn19;

function fn19() {
  const station = inp19.value;
  for (const key in obj19) {
    if (obj19[key].includes(station)) {
      out19.innerHTML = `${key}`;
    }
  }
  out19.innerHTML = "";
}

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
