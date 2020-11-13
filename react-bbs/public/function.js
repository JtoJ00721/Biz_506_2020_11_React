// 선언된 함수를 호출하여 사용하기
f1();

// JS의 고전적인 함수 선언
function f1() {
  console.log("나는 자연인이다");
}

// 2세대 함수 선언방식
// 2세대 방식은 반드시 사용(호출)하기 정에 먼저 선언이 되야 한다.
// f2();
const f2 = function () {
  console.log("내가 고자라니");
};
f2();

const f3 = function () {
  return 20 + 30;
};
console.log(f3());

const f4 = function (num1, num2) {
  return num1 + num2;
};
console.log(f4(69, 74));
console.log(f4());

// 신세대 화살표 함수
const f5 = () => {
  console.log("Deep♂ Dark♂ Fantasy♂");
};
f5();

const f6 = () => {
  return 2222 + 6974;
};
console.log(f6());

const f7 = () => "노옹농이";
console.log(f7());

const f8 = (arg) => arg * arg; // 매개변수가 1개만 있을때에는 (괄호) 생략가능
console.log(f8(6974));
/**
 * 화살표 함수
 * function 키워드를 제외하고 선언
 * 함수이름 = (매개변수) => { 함수본체 }
 *
 * 매개변수가 없을때
 * 함수이름 = () => { 함수본체 }
 *
 * 매개변수가 1개만 있을때
 * 함수이름 = 매개변수 => { 함수본체 }
 *
 * 매개변수가 2개 이상일때
 * 함수이름 = (매개1, 매개2) => { 함수본체 }
 *
 * 함수본체에 단지 return만 필요로 할때
 * 함수이름 = () => 리턴값(리턴식)
 * 함수이름 = 매개변수 = > 리턴값(리턴식)
 *
 * 단, 함수본체에 다른 연산식들이 필요할 경우는 함수본체를 {} 로 묶어야 한다
 * 함수이름 = (매개1, 맥2) => {
 *      const 함계 = 매개1 + 매개2;
 *      return 합계
 * }
 */
