import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { useEffect, useRef, useState } from "react";
import NobiaIcon from "../atoms/nobia-icon/NobiaIcon";
import PrimaryButton from "../atoms/button/PrimaryButton";

interface ILoginPage {
  password: string;
  onSubmit: () => void;
}

const LoginPage = ({ password, onSubmit }: ILoginPage) => {
  const passwordRef = useRef<any>(null);
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (passwordRef.current.value === password) {
      setValue("");
      onSubmit();
      return;
    }
    setShowError(true);
  };

  const enterPress = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  useEffect(() => {
    if (showError) {
      setValue("");
      setTimeout(() => {
        setShowError(false);
      }, 1000);
    }
  }, [showError]);

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
    document.addEventListener("keypress", enterPress);
    return () => {
      document.removeEventListener("keypress", enterPress);
    };
  }, []);

  return (
    <Wrapper>
      <Title>&#10003; Simply Projects</Title>
      <Input
        ref={passwordRef}
        type="password"
        value={value}
        placeholder="Who are you?"
        onChange={(e: any) => setValue(e.target.value)}
      />
      <SubmitButton disabled={showError} onClick={handleSubmit}>
        {showError ? "Wrong password" : "Submit"}
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #fff;
  padding: 20px;
`;
const Input = styled.input`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  border-radius: 200px;
  margin-bottom: 20px;
  border: none;
  ::placeholder {
    color: #999;
  }
`;
const SubmitButton = styled(PrimaryButton)<{ disabled: boolean }>`
  border-radius: 200px;
  padding: 15px;
  width: 100%;
  max-width: 200px;
  background-color: #de271d;
  border: 3px solid #de271d;
  transition: background-color 300ms ease;
  :hover {
    background-color: #de271dee;
  }
  :active {
    background-color: #de271dcc;
  }
  ${(p) =>
    p.disabled &&
    `
    background-color: #000;
    border: 3px solid #de271d;
    :hover, :active {
      background-color: #000;
    }
  `}
`;
const Title = styled.h1`
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
  @media (min-width: 400px) {
    font-size: 24px;
  }
  @media (min-width: 600px) {
    font-size: 30px;
  }
`;

export default LoginPage;
