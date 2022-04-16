import { Link, Outlet } from "react-router-dom";
export default function About() {
  return (
    <div>
      <h1>Halaman About</h1>
      <p>
        Halo ini adalah halaman about, untuk halaman lain silahkan klik link
        dibawah ini :
      </p>
      <ul>
        <li>
          <Link to="/about/team">Team</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

// Outlet berguna untuk menampilkan child team keadalam parent about. Komponen ini ditaruh di parentnya.
