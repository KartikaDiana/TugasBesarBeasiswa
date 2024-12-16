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

function Donasi() {
  const [beasiswaMenuActive, setBeasiswaMenuActive] = useState(false);

  // Data Donasi sebagai array objek
  const dataDonasi = [
    { no: 1, nama: 'acine', jumlah: 'Rp 500.000', tanggal: '12 Desember 2024' },
    { no: 2, nama: 'didikar', jumlah: 'Rp 1.000.000', tanggal: '14 Desember 2024' },
    { no: 3, nama: 'syasyahihi', jumlah: 'Rp 250.000', tanggal: '15 Desember 2024' },
  ];

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
                onClick={toggleBeasiswaMenu} // Ganti dengan onClick
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
            <h2>DATA DONASI</h2>
            <table className="donasi-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Donatur</th>
                  <th>Jumlah Donasi</th>
                  <th>Tanggal Donasi</th>
                </tr>
              </thead>
              <tbody>
                {dataDonasi.map((donasi) => (
                  <tr key={donasi.no}>
                    <td>{donasi.no}</td>
                    <td>{donasi.nama}</td>
                    <td>{donasi.jumlah}</td>
                    <td>{donasi.tanggal}</td>
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

            .donasi-table {
                width: 100%;
                border-collapse: collapse;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
            }

            .donasi-table th, .donasi-table td {
                padding: 15px;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }

            .donasi-table th {
                background-color: #f4f4f4;
                color: #333;
                font-weight: bold;
            }

            .donasi-table tr:nth-child(even) {
                background-color: #f9f9f9;
            }

            .donasi-table tr:hover {
                background-color: #f1f1f1;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Donasi;
