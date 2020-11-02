import React, { useState } from "react";
import Message from "./Message";

const InOut = () => {
  const [message, setMessage] = useState("농농이!");
  const onClickEnter = () => {
    // react에서는 변수(state변수)는 절대
    // 직접적으로 값을 변경하지 않도록 해야 한다.
    // 값을 변경하려면
    // 반드시 setter method를 통해서 수행해야 한다.
    // message = "안뇽";
    setMessage("반갑지롱");
  };
  const onClickLeave = () => {
    setMessage("바이바이");
  };

  // 다른 컴포넌트에 변수 전달하기
  // 변수면 = 값 형태로 컴포넌트에 설정한다.
  // Message msg = {message} : Message 컴포넌트에
  // msg라는 이름의 변수를 전달하고 거기에
  // message state 변수값을 복사하여 전달한다.
  return (
    <div>
      <button onClick={onClickEnter}>입장하기</button>
      <button onClick={onClickLeave}>퇴장하기</button>
      <Message msg={message} />
    </div>
  );
};

export default InOut;
