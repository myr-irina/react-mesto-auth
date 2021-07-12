import React from 'react';
import * as auth from '../utils/auth.js';
import {Link} from "react-router-dom";

  function Register () {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    message: '',
  });

  // const [isDataSet, setIsDataSet] = useState(false);
 

  function handleChange(e) {    
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value, 
    });
  };

    function handleSubmit(e) {
      e.preventDefault();
      // auth
      // .register(password, email)
      // .then(() => {
      //   setIsDataSet(true);
      //   history.push("/sign-in");
       
      // })
      // .catch(() => {
      //   setIsDataSet(false);        
      // });  
    };

    return (
      <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__form-input"
          placeholder="Email"
          name="email"
          type="email"
          required
          value={data.email || ""}
          onChange={handleChange}
        ></input>
        <input
          className="login__form-input"
          placeholder="Пароль"
          name="password"
          type="text"
          required
          value={data.password || ""}
          onChange={handleChange}
        ></input>

        <button className="login__form-submit-btn" type="submit">
          Зарегистрироваться
        </button>
        <p>Уже зарегистрированы?
        <Link to="sign-in" className="register__login-link">Войти</Link>
        </p>
      </form>
    </section>
    )
}

export default Register