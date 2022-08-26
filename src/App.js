import { useState } from 'react'

/**
 * Autor: Victor Nogueira
 */
function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(null)

  const handleLogin = (e) => {
    const data = {
      email: "eduardo.lino@pucpr.br",
      password: 123456
    }

    if (data.email === email && data.password === parseInt(password)) return setSuccess(true)

    return setSuccess(false)
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button type="submit" onClick={(e) => handleLogin(e)}>Acessar</button>
      </div>
      {success != null && <>
        {success ? <div>Acessado com sucesso!</div> : <div>Usuário ou senha incorretos!</div>}
      </>}
    </div>
  );
}

export default App;
