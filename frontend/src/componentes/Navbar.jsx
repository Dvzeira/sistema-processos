import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">⚖️ Sistema</div>

      <div className="nav-links">
        <NavLink to="/" end>
          Processos
        </NavLink>

        <NavLink to="/andamentos">
          Andamentos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;