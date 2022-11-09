import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../page-not-found";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Main, Container } from "./styles";

function AuthPage() {
  const { type } = useParams();

  if (type !== "login" && type !== "register") return <PageNotFound />;

  return (
    <Main>
      <Container>
        {type === "login" && <LoginPage />}
        {type === "register" && <RegisterPage />}
      </Container>
    </Main>
  );
}

export default AuthPage;
