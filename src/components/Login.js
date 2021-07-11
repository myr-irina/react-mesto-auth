import React from "react";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setpassword(e.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form">
        <input
          onChange={handleEmailChange}
          className="login__form-input"
          placeholder="Email"
          name="email"
          type="email"
          required
          value={email || ""}
        ></input>
        <input
          onChange={handlePasswordChange}
          className="login__form-input"
          placeholder="Пароль"
          name="password"
          type="text"
          required
          value={password || ""}
        ></input>

        <button className="login__form-submit-btn" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
