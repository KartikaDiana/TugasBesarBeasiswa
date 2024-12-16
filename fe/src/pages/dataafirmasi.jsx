import React, { useState } from "react";
import pieChartIcon from "../assets/piechart.png";
import homeIcon from "../assets/homeicon.png";
import charityIcon from "../assets/charity.png";
import scholarshipIcon from "../assets/scholarship.png";
import logoutIcon from "../assets/logout.png";
import backgroundImg from "../assets/programbg.png"; // Gambar background
import { createGlobalStyle } from 'styled-components';


// Global style untuk background halaman
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    margin: 0;
    font-family: Arial, sans-serif;
    width: 100%;
    min-height: 100vh;
  }
`;

const Dataafirmasi = () => {
  const [beasiswaMenuActive, setBeasiswaMenuActive] = useState(false);

  const toggleBeasiswaMenu = (event) => {
    event.preventDefault();
    setBeasiswaMenuActive(!beasiswaMenuActive);
  };

  return (
    <>
      {/* Terapkan style global */}
      <GlobalStyle />

      <div style={styles.body}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarHeading}>
            <img src={pieChartIcon} alt="Ikon Admin" style={styles.icon} /> Dashboard Admin
          </h2>
          <ul style={styles.sidebarList}>
            <li>
              <a href="submenuadmin" style={styles.sidebarLink}>
                <img src={homeIcon} alt="Home" style={styles.icon} /> Home
              </a>
            </li>
            <li>
              <a href="datadonasi" style={styles.sidebarLink}>
                <img src={charityIcon} alt="Donasi" style={styles.icon} /> Donasi
              </a>
            </li>
            <li>
              <a
                className={beasiswaMenuActive ? "active" : ""}
                onClick={toggleBeasiswaMenu}
                href="#"
                style={styles.sidebarLink}
              >
                <img src={scholarshipIcon} alt="Beasiswa" style={styles.icon} /> Beasiswa
              </a>
              <ul style={beasiswaMenuActive ? styles.submenuActive : styles.submenu}>
                <li><a href="dataafirmasi" style={styles.submenuLink}>Afirmasi</a></li>
                <li><a href="databerprestasi" style={styles.submenuLink}>Berprestasi</a></li>
              </ul>
            </li>
            <li>
              <a href="#" style={styles.sidebarLink}>
                <img src={logoutIcon} alt="Logout" style={styles.icon} /> Logout
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <header style={styles.header}>
            <h1 style={styles.heading}>PERSYARATAN KHUSUS BEASISWA INSPIRASI</h1>
          </header>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Program</th>
                <th>Sertifikat Lomba Internasional</th>
                <th>Sertifikat Lomba Nasional</th>
                <th>Essai</th>
              </tr>
            </thead>
            <tbody>
              {[{ no: 1, name: "Andi", program: "Afirmasi" }, { no: 2, name: "Budi", program: "Berprestasi" }].map(
                (row) => (
                  <tr key={row.no}>
                    <td>{row.no}</td>
                    <td>{row.name}</td>
                    <td>{row.program}</td>
                    <td><input type="file" /></td>
                    <td><input type="file" /></td>
                    <td><input type="file" /></td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const styles = {
  body: {
    display: "flex",
    minHeight: "100vh",
    margin: 0,
  },
  sidebar: {
    width: "240px",
    backgroundColor: "#b31d1d",
    color: "#fff",
    padding: "20px",
    position: "fixed",
    height: "100vh",
    top: 0,
    left: 0,
  },
  sidebarHeading: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "28px",
    marginRight: "10px",
  },
  sidebarList: {
    listStyle: "none",
    padding: 0,
  },
  sidebarLink: {
    textDecoration: "none",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  activeLink: {
    backgroundColor: "#e74c3c",
  },
  submenu: {
    listStyle: "none",
    paddingLeft: "20px",
    display: "none",
  },
  submenuActive: {
    listStyle: "none",
    paddingLeft: "20px",
    display: "block",
  },
  submenuLink: {
    textDecoration: "none",
    color: "#fff",
    display: "block",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    marginLeft: "240px", // Untuk menghindari tumpang tindih dengan sidebar
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
  },
  table: {
    width: "80%",
    margin: "20px auto",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  th: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  },
  td: {
    padding: "10px",
  },
};

export default Dataafirmasi;