import React, { useState } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "농농이", number: "010-222-69" },
    { id: 2, name: "빙빙이", number: "010-111-74" },
    { id: 3, name: "쩔쩔이", number: "010-4008-4785" },
  ]);
  return (
    <>
      <PhoneInsert />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
