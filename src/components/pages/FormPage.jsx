<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17a22c3 (feat: 초기 라우트 설정)
import React from 'react';

const formPage = () => {
  return <div>formPage</div>;
};

export default formPage;
<<<<<<< HEAD
=======
import { React, useState } from 'react';
import {
  TextFieldInput,
  TextFieldDropDown,
  TextFieldTextEditor,
  InputStatus,
  DropDownStatus,
} from 'components/commons/form';
const handleInputChange = e => {
  useState(InputStatus.focused);
};

const FormPage = () => {
  //이벤트 핸들러를 통해 TestFieldInput의 상태를 변경할 수 있다.
  const [status, setStatus] = useState(InputStatus.active);
  const [status2, setStatus2] = useState(DropDownStatus.active);
  return (
    <div>
      <TextFieldInput status={status} />
      <TextFieldDropDown status={status2} />
      <TextFieldTextEditor />
    </div>
  );
};

export default FormPage;
>>>>>>> 4c4bff5 (test commit)
=======
>>>>>>> 17a22c3 (feat: 초기 라우트 설정)
