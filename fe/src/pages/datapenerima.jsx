import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import piechart from '../assets/piechart.png';
import homeicon from '../assets/homeicon.png';
import charity from '../assets/charity.png';
import scholarship from '../assets/scholarship.png';
import logout from '../assets/logout.png';
import backgroundImg from '../assets/programbg.png';

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

const Datapenerima = () => {
  const [beasiswaMenuActive, setBeasiswaMenuActive] = useState(false);

  const toggleBeasiswaMenu = (event) => {
    event.preventDefault();
    setBeasiswaMenuActive(!beasiswaMenuActive);
  };

  return (
    <>
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
            <h1>DATA PENERIMA</h1>
          </header>
          <div className="content">
            <table className="datapenerima-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nama</th>
                  <th>Program</th>
                  <th>Nilai Rapot</th>
                  <th>IPK</th>
                  <th>Program Studi</th>
                  <th>Tempat, Tanggal Lahir</th>
                  <th>Alamat</th>
                  <th>Jenis Kelamin</th>
                  <th>Agama</th>
                  <th>No. Telp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Andi</td>
                  <td>Afirmasi</td>
                  <td>90.13</td>
                  <td>3.79</td>
                  <td>Pendidikan Ilmu Komputer</td>
                  <td>Bandung, 17 Oktober 2004</td>
                  <td>Jalan Cempaka No.1</td>
                  <td>Laki-laki</td>
                  <td>Islam</td>
                  <td>08965372817</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Arial, sans-serif;
            }

            .dashboard {
              display: flex;
              min-height: 100vh;
              background-color: #f9f9f9;
            }

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

            .main-content {
              flex: 1;
              padding: 20px;
            }

            header h1 {
              text-align: center;
              margin-bottom: 20px;
            }

            .datapenerima-table {
              width: 100%;
              border-collapse: collapse;
              background-color: #fff;
              border: 1px solid #ddd;
              border-radius: 8px;
              overflow: hidden;
            }

            .datapenerima-table th, .datapenerima-table td {
              padding: 15px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }

            .datapenerima-table th {
              background-color: #f4f4f4;
              color: #333;
              font-weight: bold;
            }

            .datapenerima-table tr:nth-child(even) {
              background-color: #f9f9f9;
            }

            .datapenerima-table tr:hover {
              background-color: #f1f1f1;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Datapenerima;
