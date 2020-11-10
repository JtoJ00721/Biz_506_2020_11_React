import React, { useState, useRef, useEffect } from "react";
import PhoneList from "./phoneList";
import PhoneInsert from "./PhoneInsert";
import "../css/PhoneMain.css";

/*
    state형 변수는 값이 변화가 생기면 화면이 자동으로 rendering이 된다.
*/
function PhoneMain(props) {
  const [phoneBooks, setPhoneBooks] = useState([
    //   { id: 1, name: "농농이", number: "010-222-6922", isEdit: false },
    //   { id: 2, name: "빙빙이", number: "010-222-74", isEdit: false },
    //   { id: 3, name: "쩔쩔이", number: "010-111-1111", isEdit: false },
  ]);
  /*
    ref형 변수는 선언과 동시에 .current라는 속성이 만들어지고
    useRef형(초기값) 초기값으로 생성이 된다 ref형 변수는 current속성을 자유롭게 변화시킬수 있고
    값이 변화가 되어도 화면이 rendering 도지 않는다.
  */
  const nextid = useRef(phoneBooks.length && 0);
  /*
    표준 js에서 배열요소를 추가할때 push() 라는 함수를 사용한다.
    react에서는 기존의 배열요소에 어떤값을 추가하는 것이 금지되어 있다.
    기존배열 + 추가될요소를 새로운 배열로 만들고 그 배열을 기존배열로
    대치하는 방법을 사용해야 한다.
  */
  const insertPhoneBook = (name, number) => {
    setPhoneBooks([
      ...phoneBooks,
      {
        id: nextid.current++,
        name: name,
        number: number,
        isEdit: false,
      },
    ]); // end detPhoneBooks
    // insertPhoneBook
  };

  /*
    Effect의 두번째 파라메터를 빈값으로 설정을 하면
    프로젝트가 시작될때, 화면이 rendering 될때 한번만 이벤트가 작동된다.
  */
  useEffect(() => {
    const localStorageBooks = window.localStorage.getItem("phoneBooks");
    setPhoneBooks(JSON.parse(localStorageBooks));

    nextid.current = phoneBooks.length;
  }, []);

  /*리액트의 시스템 이벤트
    phoneBooks 데이터를 감시하고 있다가
    변화가 생기면 내부의 코드를 실행하라
  */
  useEffect(() => {
    // 추가된 데이터가 있으면 전체 phoneBooks를 브라우저의 localStorage에 저장
    // 1. 배열데이터를 문자열화 시킨다
    const stringPhoneBook = JSON.stringify(phoneBooks);
    // 2. localstorage에 phoneBooks라는 이름으로 저장하기
    window.localStorage.setItem("phoneBooks", stringPhoneBook);
  }, [phoneBooks]);

  /*
    id값을 기준으로 phoneBooks에서 전화번호를 제거하기
    전체리스트에서 id에 해당하는 전화번호만 제거한 새로운
    리스트를 만들고 그 리스트를 phoneBooks에 setting
    array.filter()함수를 사용하여 삭제할 id가 있는 데이터만
    제거된 새로운 리스트를 만든다
  */
  const deletePhoneBooks = (id) => {
    const deleteAfterBooks = phoneBooks.filter((phone) => {
      return phone.id !== Number(id);
      // 동등비교 연산자는 값과 type 모두 같아야 true
      // phone.id에 담긴 값은 숫자, id에 받아온 값은 숫자
    });
    setPhoneBooks(deleteAfterBooks);
  };

  const editableBooks = (id) => {
    const editBooks = phoneBooks.map((phone) => {
      if (phone.id === Number(id)) {
        return { ...phone, isEdit: true };
      } else {
        return { ...phone, isEdit: false };
      }
    });
    setPhoneBooks(editBooks);
  };

  const updateBooks = (id, name, number) => {
    const updatePhoneBooks = phoneBooks.map((phone) => {
      if (phone.id === Number(id)) {
        // 선택된 id와 같은 전화번호는 이름, 변호, 등을 update
        return { ...phone, name: name, number: number, isEdit: false };
      } else {
        // 선택된 id와 다른 번호는 isEdit만 false로 바꾸어서 input 박스가 사라지도록
        return { ...phone, isEdit: false };
      }
    });
    setPhoneBooks(updatePhoneBooks);
  };

  return (
    <div className="phoneMain">
      <h3>나만의 전화번호부</h3>
      <PhoneList
        phoneBooks={phoneBooks}
        deletePhoneBooks={deletePhoneBooks}
        editableBooks={editableBooks}
        updateBooks={updateBooks}
      />
      <PhoneInsert insertPhoneBook={insertPhoneBook} />
    </div>
  );
}

export default PhoneMain;
