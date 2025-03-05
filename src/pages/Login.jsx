import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess) {
      // Redirige al Home después de 2 segundos
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginSuccess, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '123456') {
      setLoginSuccess(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {loginSuccess ? (
        <div className="p-4 bg-green-100 text-green-700 rounded">
          ¡Login exitoso! Redirigiendo al Home...
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      )}
    </div>
  );
}
