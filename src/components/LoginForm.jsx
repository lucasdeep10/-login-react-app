import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica y envío de datos
    if (email && password) {
      // Autenticación
      onLogin({ email, password });
    }
  };

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
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
        Iniciar Sesión
      </button>
    </form>
  );
}
