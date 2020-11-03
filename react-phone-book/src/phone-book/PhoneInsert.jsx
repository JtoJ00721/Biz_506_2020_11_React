import React from "react";

// onClickSave함수의 실제 사용은
// Insert 컴포넌트에서 실행하기
const PhoneInsert = ({ onClickSave }) => {
  return (
    <form>
      <input placeholder="이름" />
      <input placeholder="전화번호" />
      <button onClick={onClickSave} type="button">
        저장
      </button>
    </form>
  );
};

export default PhoneInsert;
