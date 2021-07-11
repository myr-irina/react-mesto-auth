import React from 'react'

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setpassword] =React.useState('')

    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
      setpassword(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();

    }

    return (
      <section className="auth__content">
        <form className="popup__field-form">
          <h2 className="popup__heading">Вход</h2>
            <input onChange={handleEmailChange} className="popup__field-input popup__field-input-email" placeholder="Email" name="email" type="email" required value={email || ''}>
            </input>
            <input onChange={handlePasswordChange} className="popup__field-input popup__field-input-password" placeholder="Пароль" name="password" type="text" required value={password || ''}>
            </input>
          <button className="popup__button" type="submit" onSubmit={handleSubmit}>Войти</button>
        </form>
      </section>
    )
}

export default Login