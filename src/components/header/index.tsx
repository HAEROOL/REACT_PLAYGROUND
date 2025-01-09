import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/">TodoList</Link>
      <Link to="/post">Api</Link>
    </nav>
  );
}
