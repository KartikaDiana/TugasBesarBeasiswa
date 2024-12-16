import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'; // Import createGlobalStyle
import piechart from '../assets/piechart.png';
import homeicon from '../assets/homeicon.png';
import charity from '../assets/charity.png';
import scholarship from '../assets/scholarship.png';
import logout from '../assets/logout.png';
import backgroundImg from '../assets/programbg.png'; // Import background image
import { Link } from 'react-router-dom'; // Corrected import for Link

// Global style for the background
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});  /* Use the imported image */
    background-size: cover;
    background-position: center;
    margin: 0;
    font-family: Arial, sans-serif;
    width: 100%;
    min-height: 100vh;
  }
`;

function Dokumen() {
  const [beasiswaMenuActive, setBeasiswaMenuActive] = useState(false);
  const [persyaratanMenuActive, setPersyaratanMenuActive] = useState(false); // New state for Persyaratan menu

  const toggleBeasiswaMenu = (event) => {
    event.preventDefault(); // Prevent page reload
    setBeasiswaMenuActive(!beasiswaMenuActive);
  };

  const togglePersyaratanMenu = (event) => {
    event.preventDefault(); // Prevent page reload
    setPersyaratanMenuActive(!persyaratanMenuActive);
  };

  return (
    <>
      {/* Apply global style */}
      <GlobalStyle />

      <div className="dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>
            <img src={piechart} alt="ikon admin" /> Dashboard Admin
          </h2>
          <ul>
            <li>
              <a href="submenuadmin">
                <img src={homeicon} alt="home" /> Home
              </a>
            </li>
            <li>
              <a href="datadonasi">
                <img src={charity} alt="ikon donasi" /> Donasi
              </a>
            </li>
            <li>
              <a
                className={beasiswaMenuActive ? 'active' : ''}
                onClick={toggleBeasiswaMenu}
                href="#"
              >
                <img src={scholarship} alt="ikon topi" /> Beasiswa
              </a>
              <ul className={`beasiswa-menu ${beasiswaMenuActive ? 'active' : ''}`}>
                <li><a href="datapendaftar">Data Pendaftar</a></li>
                <li><a href="datapenerima">Data Penerima</a></li>
                {/* Persyaratan Menu */}
                <li>
                  <a
                    className={persyaratanMenuActive ? 'active' : ''}
                    onClick={togglePersyaratanMenu}

                  >
                    Dokumen
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="login">
                <img src={logout} alt="logout" /> Logout
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <header>
            <h1>PERSYARATAN KHUSUS BEASISWA INSPIRASI</h1>
          </header>

          <div className="content">
            <h2>Data Dokumen</h2>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nama</th>
                  <th>Program</th>
                  <th>Surat Keterangan Tidak Mampu</th>
                  <th>Sertifikat Lomba Nasional</th>
                  <th>Essai</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{["Andi", "Budi", "Cici", "Doni", "Eva"][index]}</td>
                    <td>{["Afirmasi", "Berprestasi", "Afirmasi", "Berprestasi", "Afirmasi"][index]}</td>
                    <td>
                      <input type="file" name={`surat${index * 2 + 1}`} />
                    </td>
                    <td>
                      <input type="file" name={`surat${index * 2 + 2}`} />
                    </td>
                    <td>
                      <input type="file" name={`essai${index + 1}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <style>
          {`
            /* General Reset */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
            }

            /* Dashboard Layout */
            .dashboard {
                display: flex;
                min-height: 100vh;
                background-color: #f9f9f9;
            }

            /* Sidebar */
            .sidebar {
                width: 240px;
                background-color: #b31d1d;
                color: #fff;
                padding: 20px;
            }

            .sidebar h2 {
                margin-bottom: 20px;
            }

            .sidebar h2 img {
                width: 20px;
                margin-right: 7px;
            }

            .sidebar ul {
                list-style: none;
            }

            .sidebar ul li {
                margin-bottom: 15px;
            }

            .sidebar ul li a {
                text-decoration: none;
                color: #fff;
                display: block;
                padding: 10px;
                border-radius: 5px;
                transition: background 0.3s ease;
            }

            .sidebar ul li a img {
                width: 28px;
                margin-right: 5px;
            }

            .sidebar ul li a:hover,
            .sidebar ul li a.active {
                background-color: #ff4d4d;
            }

            .sidebar ul li .beasiswa-menu {
                display: none;
                padding-left: 20px;
            }

            .sidebar ul li a.active ~ .beasiswa-menu {
                display: block;
            }

            .sidebar ul li .persyaratan-menu {
                display: none;
                padding-left: 20px;
            }

            .sidebar ul li a.active ~ .persyaratan-menu {
                display: block;
            }

            /* Main Content */
            .main-content {
                flex: 1;
                padding: 20px;
            }

            header h1 {
                text-align: center;
                margin-bottom: 20px;
            }

            .content h2 {
                margin-bottom: 20px;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }

            th, td {
                padding: 15px;
                text-align: left;
                border: 1px solid #ddd;
            }

            th {
                background-color: #f4f4f4;
                font-weight: bold;
            }

            tr:nth-child(even) {
                background-color: #f9f9f9;
            }

            tr:hover {
                background-color: #f1f1f1;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Dokumen;
