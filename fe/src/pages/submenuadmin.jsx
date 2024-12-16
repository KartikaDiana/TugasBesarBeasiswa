import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'; // Impor createGlobalStyle
import piechart from '../assets/piechart.png';
import homeicon from '../assets/homeicon.png';
import charity from '../assets/charity.png';
import scholarship from '../assets/scholarship.png';
import logo from '../assets/logo.png';
import hexagon from '../assets/hexagon.png';
import profile from '../assets/profile.png';
import visitor from '../assets/visitor.png';
import logout from '../assets/logout.png';
import backgroundImg from '../assets/programbg.png'; // Mengimpor gambar untuk background

// Global style untuk background halaman
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});  /* Menggunakan gambar yang diimpor */
    background-size: cover;
    background-position: center;
    margin: 0;
    font-family: Arial, sans-serif;
    width: 100%;
    min-height: 100vh;
  }
`;

const Submenuadmin = () => {
  const [beasiswaMenuActive, setBeasiswaMenuActive] = useState(false);

  const toggleBeasiswaMenu = (event) => {
    event.preventDefault(); // Menghindari reload halaman
    setBeasiswaMenuActive(!beasiswaMenuActive);
  };

  return (
    <>
      {/* Terapkan style global */}
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
                <li><a href="dokumen">Dokumen</a></li>
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
            <h1>SISTEM INFORMASI BEASISWA INSPIRASI</h1>
          </header>

          <div className="content">
            {/* Logo dan Stats */}
            <div className="logo">
              <img className="logo-main" src={logo} alt="Logo" />
              <img className="logo-hexagon" src={hexagon} alt="Hexagon" />
            </div>

            <div className="stats">
              <div className="stat-item">
                <div className="icon">
                  <img src={profile} alt="Pendaftar Icon" />
                </div>
                <div>
                  <h2>1020</h2>
                  <p>Pendaftar</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="icon">
                  <img src={visitor} alt="Visitors Icon" />
                </div>
                <div>
                  <h2>2834</h2>
                  <p>Visitors</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="icon">
                  <img src={scholarship} alt="Penerima Icon" />
                </div>
                <div>
                  <h2>10</h2>
                  <p>Penerima</p>
                </div>
              </div>
            </div>
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

            /* Main Content */
            .main-content {
                flex: 1;
                padding: 20px;
            }

            header h1 {
                text-align: center;
                margin-bottom: 20px;
            }

            .logo {
                display: flex;
                justify-content: center;
                margin-bottom: 50px;
            }

            .logo img.logo-main {
                width: 200px;
            }

            .logo img.logo-hexagon {
                width: 180px;
            }

            /* Stats Section */
            .stats {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 20px;
            }

            .stat-item {
                flex: 1;
                min-width: 280px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                padding: 10px;
                display: flex;
                align-items: center;
            }

            .stat-item .icon img {
                width: 140px;
                margin-right: 15px;
                border-left: 7px solid #43d400;
            }

            .stat-item h2 {
                margin: 0;
                font-size: 24px;
                color: #333;
            }

            .stat-item p {
                color: #666;
            }

            /* Submenu Beasiswa */
            .beasiswa-menu {
                display: none;
                list-style-type: none;
                padding-left: 20px;
            }

            .beasiswa-menu.active {
                display: block;
            }

            .beasiswa-menu li a {
                color: #fff;
                text-decoration: none;
                display: block;
                padding: 5px 10px;
                border-radius: 5px;
                transition: background-color 0.3s;
            }

            .beasiswa-menu li a:hover {
                background-color: #e07272;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Submenuadmin;
