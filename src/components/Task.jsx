import React from "react";

let input = "car car was driving was";
let input2 = "day last day day next next";
let input3 = "I go I shopping I go";

function removeDuplicates(str) {
  const words = str.split(" ");
  const specialWords = {};
  const arrayOfWords = [];

  for (let i = 0; i < words.length; i++) {
    if (!specialWords[words[i]]) {
      specialWords[words[i]] = true;

      arrayOfWords.push(words[i]);
    }
  }

  const string = arrayOfWords.join(" ");

  return string;
}
console.log(removeDuplicates(input));
console.log(removeDuplicates(input2));
console.log(removeDuplicates(input3));

const Task = () => {
  return <></>;
};

export default Task;
