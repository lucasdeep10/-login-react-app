import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 text-center text-xl flex justify-between items-center">
      <div>Mi Catálogo de Productos</div>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
