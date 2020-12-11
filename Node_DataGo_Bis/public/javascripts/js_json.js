let jsonData = { name: "농농이", tel: "010-222-2222", age: 17 };

// json객체의 속성을 이용하여 값 읽기
console.log(jsonData.name);
console.log(jsonData.tel);
console.log(jsonData.age);

// 마치 배열의 값을 읽는 것처럼 사용하는데
// 요소를 문자열로 사용하여 값 읽기
console.log(jsonData["name"]);
console.log(jsonData["tel"]);
console.log(jsonData["age"]);

// 각 요소를 문자열 변수로 선언한 후
// 변수를 이용하여 값을 읽는 방법
let nameStr = "name";
let telStr = "tel";
let ageStr = "age";

console.log(jsonData[nameStr]);
console.log(jsonData[telStr]);
console.log(jsonData[ageStr]);

let strArray = ["name", "tel", "age"];
strArray.forEach((title) => {
  console.log(jsonData[title]);
});

// {key:value} 형식의 JSON 데이터에서
// key 부분만 추출하여 배열로 만들기
let jsonKey = jsonData.keys();
jsonKey.forEach((key) => {
  console.log(jsonData[key]);
});
