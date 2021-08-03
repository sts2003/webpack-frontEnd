import React from "react";
import MM04Presenter from "./MM04Presenter";
import useInput from "../../hooks/useInput";
import { REGIST_USER } from "./MM04Queries";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

const MM04Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////
  const newEmail = useInput(``);
  const newName = useInput(``);
  const newMobile = useInput(``);
  const newZoneCode = useInput(``);
  const newAddress = useInput(``);

  ///////////////////// - USE STATE - ////////////////////////

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  ///////////////////// - USE MUTATION - ////////////////////////
  const [registUserMutation] = useMutation(REGIST_USER);

  ///////////////////// - USE EFFECT - ////////////////////////

  ///////////////////// - USE HANDLER - /////////////////////////
  const registUserHandler = async () => {
    if (!newEmail.value || newEmail.value.trim() === ``) {
      toast.error(`이름은 필수 입력사항입니다.`);

      return;
    }

    if (!newName.value || newName.value.trim() === ``) {
      toast.error(`이름은 필수 입력사항입니다.`);

      return;
    }

    if (!newMobile.value || newMobile.value.trim() === ``) {
      toast.error(`전화번호는 필수 입력사항입니다.`);

      return;
    }

    if (!newZoneCode.value || newZoneCode.value.trim() === ``) {
      toast.error(`주소는 필수 입력사항입니다.`);

      return;
    }

    if (!newAddress.value || newAddress.value.trim() === ``) {
      toast.error(`주소는 필수 입력사항입니다.`);

      return;
    }

    const { data } = await registUserMutation({
      variables: {
        email: newEmail.value,
        name: newName.value,
        mobile: newMobile.value,
        zoneCode: newZoneCode.value,
        address: newAddress.value,
      },
    });

    if (data.registUser) {
      toast.info(`회원 가입에 성공하였습니다.`);
      history.push("/");
    } else {
      toast.error(`회원 가입에 실패하였습니다.`);
    }
  };

  const searchPostHander = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        newZoneCode.setValue(data.zonecode);
        newAddress.setValue(data.address);
      },
    }).open();
  };
  const moveLinkHandler = (link) => {
    history.push(`${link}`);
  };

  return (
    <MM04Presenter
      newName={newName}
      newEmail={newEmail}
      newMobile={newMobile}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      registUserHandler={registUserHandler}
      searchPostHander={searchPostHander}
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM04Container;
