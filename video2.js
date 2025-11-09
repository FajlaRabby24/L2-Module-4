//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //

// const commonFriendsSlow = (usersA, usersB) => {
//   console.log("hello");
//   const startTime = performance.now();

//   const commmonFriends = [];

//   usersA.forEach((userA) => {
//     usersB.forEach((userB) => {
//       if (userA.id === userB.id) {
//         commmonFriends.push(userB);
//       }
//     });
//   });

//   const endTime = performance.now();

//   return {
//     count: commmonFriends.length,
//     timeTookTofinish: endTime - startTime,
//   };
// };

// console.log(commonFriendsSlow(usersA, usersB));

const commonFriendsFast = (usersA, usersB) => {
  console.log("hello");
  const startTime = performance.now();

  const commmonFriends = [];

  const idList = new Set(usersA.map((user) => user.id));

  usersB.forEach((userB) => {
    if (idList.has(userB.id)) {
      commmonFriends.push(userB);
    }
  });

  const endTime = performance.now();

  return {
    count: commmonFriends.length,
    timeTookTofinish: endTime - startTime,
  };
};

console.log(commonFriendsFast(usersA, usersB));
