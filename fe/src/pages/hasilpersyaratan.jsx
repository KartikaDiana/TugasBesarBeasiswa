import React, { useState } from 'react';

function Hasilpersyaratan() {
  const [files, setFiles] = useState({
    SKTM: Array(5).fill(null),
    SPPO: Array(5).fill(null),
    Essai: Array(5).fill(null),
  });

  const handleFileChange = (index, type, event) => {
    const newFiles = { ...files };
    newFiles[type][index] = event.target.files[0];
    setFiles(newFiles);
  };

  return (
    <div className="container">
      <style>
        {`
          /* General Reset */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }

          body {
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
            display: flex;
            flex-direction: column;
            height: 100vh;
          }

          .sidebar h3 {
            margin-bottom: 20px;
            font-size: 24px;
            text-align: center;
          }

          .sidebar ul {
            list-style: none;
            padding: 0;
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

          .sidebar ul li a:hover,
          .sidebar ul li a.active {
            background-color: #ff4d4d;
          }

          /* Main content */
          .main-content {
            flex: 1;
            padding: 20px;
            background-color: white;
          }

          .main-content h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 28px;
            color: #333;
          }

          table {
            width: 70%;
            margin: 20px auto;
            border-collapse: collapse;
          }

          th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: left;
            font-size: 16px;
          }

          th {
            font-weight: bold;
            background-color: #f2f2f2;
          }

          td {
            font-weight: normal;
          }

          .upload-btn {
            background-color: #ff4d4d;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 5px;
          }

          /* Flexbox layout for Sidebar and Main Content */
          .container {
            display: flex;
            min-height: 100vh;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .sidebar {
              width: 100px;
              padding: 10px;
            }

            .sidebar h3 {
              display: none;
            }

            .sidebar ul li a {
              font-size: 14px;
              padding: 8px;
            }

            .main-content {
              padding: 10px;
            }

            table {
              width: 100%;
            }
          }
        `}
      </style>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="menu-icon">☰</div>
        <h3>Dashboard Admin</h3>
        <ul>
          <li>🏠 <a href="#">Dashboard Admin</a></li>
          <li>💰 <a href="#">Donasi</a></li>
          <li className="active">🎓 <a href="#">Beasiswa</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">PERSYARATAN KHUSUS</h1>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Surat Keterangan Tidak Mampu</th>
              <th>Surat Pernyataan Penghasilan Orang Tua</th>
              <th>Essai</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {Array.from({ length: 5 }, (_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <button className="upload-btn">🔼</button>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(index, 'SKTM', e)}
                  />
                </td>
                <td>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(index, 'SPPO', e)}
                  />
                </td>
                <td>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(index, 'Essai', e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hasilpersyaratan;
