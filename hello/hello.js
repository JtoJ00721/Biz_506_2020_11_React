console.log("안뇽", "반갑지롱");
console.log("69 + 74 =", 69 + 74);

var num1;
let num2;
const num3 = 100;

num1 = 1;
num2 = 2;
// num3 = 3

const myfunc = function (num) {
  console.log(num);
};

myfunc(6974);
myfunc("에엑따 !!!");

const callfunc = function (call) {
  call("뿌ㅇ에에엙!!!!!!");
};
// facade 패턴
// 함수를 다른 함수의 매개변수로 전달하여
// 함수 내부에서 실행하도록 하는 패턴
callfunc(myfunc);

// 변수 : 1개의 값을 저장하는 메모리 공간
// 배열, JSON 객체 : 1개 이상의 값을 저장하고 활용하는 메모리 구조형

// 배열선언하기
// 배열은 같은 종류의 데이터들을 주로 사용한다.
// 다른 type(숫자, 문자열)의 데이터를 저장할 수 있지만
// 일반적으로 그렇게 사용하지 않는다.
let yee름 = ["농농이", "빙빙이", "쩔쩔이"];
console.log(yee름[0]);

// JSON 객체
// key:value 쌍으로 이루어진 종류가 다른 데이터들을 저장할때 사용한다.
// 다수의 데이터를 저장ㄷ하는 용도로 아주 많이 사용하는 type이다
let 약 = { 이름: "청춘폭☆8", 재료: "심영" };
console.log(약["이름"]);

// 이름 배열에 심영이 데이터를 추가하고 싶다
// 전통적인 방법
yee름.push("심영");
console.log(yee름);

yee름 = [...yee름, "시라소니"];
console.log(yee름);

// 저언통
// JSON객체의 어떤 요소 값을 변경하고 싶을때
약["이름"] = "심영환";
// 요소가 없으면 만들면 되지
약["물질"] = "니트로글리세린";
console.log(약);

// 아유 새로와
// JSON객체의 어떤 요소 값을 변경하고 싶을때
약 = { ...약, 이름: "심영환" };
// 요소가 없으면 만들면 되지
약 = { ...약, 물질: "니트로글리세린" };
console.log(약);
