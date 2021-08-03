import React, { useState } from "react";
import MM05Presenter from "./MM05Presenter";
import useInput from "../../hooks/useInput";
import { TRY_LOGIN, CHECK_SECRET_CODE } from "./MM05Queries";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

const MM05Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  const inputEmail = useInput("");
  const [tab, setTab] = useState(0);
  const assignment = useInput("");

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  ///////////////////// - USE MUTATION - ////////////////////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);
  const [checkSecretCodeMutation] = useMutation(CHECK_SECRET_CODE);

  ///////////////////// - USE EFFECT - ////////////////////////

  const loginClickHandler = async () => {
    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    if (data.tryLogin) {
      setTab(1);
      toast.info(`이메일이 발송되었습니다.`);
    } else {
      toast.error("가입된 이메일이 아닙니다.");
    }
  };

  const assignmentCheckHandler = async () => {
    const { data } = await checkSecretCodeMutation({
      variables: {
        email: inputEmail.value,
        code: assignment.value,
      },
    });

    if (data.checkSecretCode.result) {
      toast.info("로그인 성공 !!");
      history.push("/");
      sessionStorage.setItem(
        "QW*E*(GSDGVQWVEqQWddQWEQEOk",
        data.checkSecretCode.objectId
      );
      window.location.reload();

      // 사용자 데이터를 JWT TOKEN으로 생성하여 가져온다.
      // 크롬에서 PASSPORT TOKEN을 통해 session에 토큰을 저장하고,
      // 모든 화면에서는 login 상태를 알기 위한 redux || contextAPI를
      // 세팅하여 로그인 상태를 유지하기 위한 처리를 한다.
    } else {
      toast.error("인증코드가 잘못되었습니다.");
    }
  };
  const moveLinkHandler = (link) => {
    history.push(`${link}`);
  };
  return (
    <MM05Presenter
      inputEmail={inputEmail}
      loginClickHandler={loginClickHandler}
      tab={tab}
      assignment={assignment}
      assignmentCheckHandler={assignmentCheckHandler}
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM05Container;
