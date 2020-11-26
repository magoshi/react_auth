import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function Login() {
  const history = useHistory()

  const [inputs, setInputs] = useState({
    email:'',
    password:'',
  })

  const [error, setError] = useState()

  async function handleSubmit(event){
    event.preventDefault();
    const response = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    if(response.status === 200) {
        return history.push('/secret')
    }
    return setError('Повторите вход')
  }

  function handleChange({target: {name, value}}){
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  const { email, password} = inputs;

  return (
    <>
    <form onSubmit={handleSubmit}>
      email:
      <label name="email" type="email" onChange={handleChange} required value={email}></label>
    </form>

    <form action="">
      Password:
      <label name="password" type="password" onChange={handleChange} required value={password}></label>
    </form>
    <button type="submit">Войти</button>
    <h1>{error}</h1>
    </>
  )
}
