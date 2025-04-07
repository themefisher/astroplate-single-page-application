import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyle: "none",
        }}
      >
        <li>
          <Link
            to="/dashboard"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/settings"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
