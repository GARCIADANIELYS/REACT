import { useState } from 'react';
import './Login.css';

const initial_state = {
  email: '',
  password: ''
};

const Login = () => {

  const [formData, setFormData] = useState(initial_state);

  const handleInput = (ev) => {

  }

  return (
    <div className='main-login-div'>
      <h1 className='login-title'>¡REGÍSTRATE Y FORMA PARTE DEL MUNDO KOMBUCHA!</h1>
      <form className='form-div' onSubmit={(ev) => ev.preventDefault()}>
        <label className='email-label' htmlFor="email">Email:</label>
        <input 
        className='input-field' 
        type="text" 
        id='email' 
        name='email' 
        onInput={handleInput}
        value={formData.email}
        placeholder='email@ejemplo.com'/>

        <label className='password-label' htmlFor="password">Contraseña:</label>
        <input className='input-field' type="password" id='password' name='password' placeholder='7456b8geFF65' />
        
      </form>
    </div>
  )
}

export default Login;