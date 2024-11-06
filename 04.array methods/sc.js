let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//! 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

/* let filtered = arr.filter(item => item.name.startsWith("t"));
  console.log(filtered); */

//! 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

/* let count = 0;
  arr.forEach(item => {
  if (item.name.startsWith("t") && item.name.endsWith("t")) {
    count++;
  }
  });
  console.log(count); */

//! 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "keylerinin cemini tapin

/* let sum = 0;
arr.forEach((item) => {
  if (item.name.startsWith("t") && item.name.endsWith("t")) {
    sum += item.key;
  }
});
console.log(sum); */

//! 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

/* arr.forEach((item) => {
    (item.name.endsWith("t"))
} ... */

// !5) "name"-i en uzun olan obyekti tapin

arr.forEach((item) => {
   item.name.length
});

// ...





