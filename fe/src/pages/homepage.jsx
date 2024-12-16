import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo_Bi.png';
import Buku from '../assets/Buku.png';
import Uang from '../assets/Uang.png';
import Isola from '../assets/Isola.png';


function Homepage() {
  const toggleMenu = () => {
    const nav = document.getElementById('navbarNav');
    nav.classList.toggle('active');
  };

  return (
    <>
      <style>
        {`
          * {
            padding: 0;
            margin: 50;
            box-sizing: border-box;
          }

          body {
            font-family: Arial, sans-serif;
            padding-top: 100px;
            align-item: center;
          }

          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #f8f9fa;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
          }

          .navbar-brand {
            display: flex;
            align-items: center;
            font-weight: bold;
            color: #000;
          }

          .navbar-brand img {
            margin-right: 10px;
          }

          .navbar-nav {
            list-style: none;
            display: flex;
            align-items: center;
          }

          .nav-item {
            margin: 0 15px;
          }

          .nav-link {
            color: #000;
            padding: 10px 15px;
            border-radius: 5px;
            transition: 0.3s ease;
          }

          .nav-link:hover {
            color: #fff;
            background-color: #f04f4f;
            box-shadow: 0 4px 8px rgba(238, 124, 124, 0.418);
          }

          .nav-link.active {
            font-weight: bold;
            color: #f04f4f;
          }

          .nav-link_login .login {
            color: #fff;
            background-color: #f04f4f;
            border-radius: 5px;
            padding: 10px 15px;
            display: inline-block;
            transition: 0.3s ease;
          }

          .nav-link_login .login:hover {
            background-color: #d03c3c;
            box-shadow: 0 4px 8px rgba(238, 124, 124, 0.418);
          }

          a {
            text-decoration: none;
          }

          a:focus, a:active {
            outline: none;
            text-decoration: none;
          }

          .toggler {
            display: none;
            font-size: 30px;
            background: none;
            border: none;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .navbar-nav {
                display: none;
                flex-direction: column;
                width: 100%;
                background-color: #f8f9fa;
                position: absolute;
                top: 60px;
                left: 0;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                text-align: right;
            }
            .navbar-nav.active {
                display: flex;
            }

            .toggler {
                display: block;
                color: #000;
            }
        }

        .Isi {
        justify-content: center;
        margin-left: 50px;
        margin-right: 50px;
        align-item: center;
        }

          /* Hero Section */
          .hero {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 50px 20px;
            text-align: center;
            background-color: #fff;
        }
            .hero-container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px;
            max-width: 1200px;
        }

            .hero-logo {
            max-width: 300px;
            height: auto;
            }

            .hero-content {
            max-width: 600px;
            text-align: left;
            }

            .hero-content h1 {
            font-size: 2.5rem;
            line-height: 1.4;
            margin-bottom: 15px;
            color: #333;
            }

            .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: #555;
            }

            .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f04f4f;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            }

            .btn:hover {
            background-color: #d03c3c;
            }

            /* About Section */
            .about-section {
            padding: 50px 20px;
            background-color: #ffff;
            }

            .about-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #ffcccc;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            max-width: 800px;
            margin: 0 auto;
            }

            .about-text {
            flex: 1;
            padding: 20px;
            background-color: #f04f4f;
            border-radius: 10px;
            color: #000000;
            max-width: 500px;
            text-align: justify;
            }

            .about-text h3 {
            text-align: center;
            margin-bottom: 15px;
            font-size: 1.5rem;
            }

            .about-text p {
            line-height: 1.6;
            }

            /* Responsive Breakpoint */
            @media (max-width: 768px) {
            .hero-content {
                text-align: center;
            }

            .about-container {
                flex-direction: column;
                text-align: center;
            }
            }

            /* Informasi Beasiswa Section */
            .informasi {
            padding: 50px 20px;
            background-color: #ffff;
            text-align: center;
            font-family: sans-serif;
            }

            .informasi h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #333;
            }

            .informasi-cards {
            display: flex;
            justify-content: center;
            gap: 150px;
            flex-wrap: wrap;
            margin-top: 20px;
            }

            .card {
            background-color: #f04f4f;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 300px;
            text-align: center;
            padding: 20px;
            transition: transform 0.3s ease;
            }

            .card:hover {
            transform: translateY(-10px);
            }

            .card img {
            width: 80px;
            height: 80px;
            margin-bottom: 10px;
            }

            .card h3 {
            font-size: 1.5rem;
            color: #000000;
            margin-bottom: 10px;
            }

            .card p {
            font-size: 1rem;
            color: #050505;
            margin-bottom: 0;
            }

            /* Responsiveness for Informasi Cards */
            @media (max-width: 768px) {
            .informasi-cards {
                flex-direction: column;
                align-items: center;
            }

            .card {
                width: 90%;
            }
            }

            /* Awal Timeline */
            .body {
            font-family: Arial, sans-serif;
            background-color: #fdf5f5;
            position: relative;
            }
            .timeline {
            display: flex;
            flex-direction: column;
            align-items: center;
            }
            .timeline-box {
            background-color: #e63946;
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            margin: 10px 0;
            width: 300px;
            text-align: center;
            font-weight: bold;
            position: relative;
            }
            .timeline-box.light {
            background-color: #f76c6c;
            }
            .timeline-box::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 20px;
            background-color: #e63946;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            }
            .timeline-box:last-child::after {
            display: none;
            }
            .background-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            }

            /* Akhir Timeline */

            /* awal Bantuan */

            .bantuan {
            text-align: center;
            padding: 30px 20px;
            margin-top: 90px;
            }

            .section-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            letter-spacing: 1px;
            }

            .bantuan-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #ffcccc;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            max-width: 800px;
            margin: 0 auto;
            }

            .bantuan-image {
            width: 100%;
            max-width: 300px;
            border-radius: 10px;
            margin-bottom: 20px;
            }

            .bantuan-content p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: justify;
            }

            .btn {
            display: inline-block;
            background-color: #ff4444;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 25px;
            text-decoration: none;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            }

            .btn:hover {
            background-color: #e63939;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
            }

            /* Akhir Bantuan */

            /Awal/
            /* Kontribusi Section */
            .kontribusi {
            max-width: 800px;
            margin: 20px auto;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            }

            /* Header */
            .kontribusi-header {
            background-color: #ffcccc;
            padding: 20px;
            text-align: center;
            }

            .kontribusi-header h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            }

            .kontribusi-header p {
            font-size: 16px;
            color: #333;
            }

            .kontribusi-footer {
            background-color: #e60000;
            color: #fff;
            padding: 20px;
            text-align: center;
            }

            .kontribusi-footer h3 {
            font-size: 20px;
            margin-bottom: 10px;
            }

            .kontribusi-footer p {
            margin: 5px 0;
            font-size: 14px;
            }

            .kontribusi-footer a {
            color: #fff;
            text-decoration: underline;
            }

        `}
      </style>

      <nav className="navbar">
        <div className="navbar-brand">
          <img src={Logo} alt="Logo" width="50" height="50" />
          <b>Beasiswa</b> Inspirasi
        </div>
        <button className="toggler" onClick={toggleMenu}>&#9776;</button>
        <ul className="navbar-nav" id="navbarNav">
          <li className="nav-item">
            <a className="nav-link" href="#Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Profil">Profil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Informasi">Informasi</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Jadwal">Jadwal</a>
          </li>
          <li className="nav-item nav-link_login">
            <Link to="/login" className="login">Login/Daftar</Link>
          </li>
        </ul>
      </nav>

<div className="Isi">
      <section className="hero" id="Home">
        <div className="hero-container">
          <img src={Logo} alt="Logo" className="hero-logo" />
          <div className="hero-content">
            <h1>Bantuan Biaya Pendidikan<br />Untuk Mahasiswa Terinspirasi<br />2023/2024</h1>
            <p>Jenjang S1</p>
            <Link to="/login" className="btn">Login/Daftar</Link>
          </div>
        </div>
      </section>

      <section className="about-section" id="Profil">
        <div className="about-container">
          <div className="about-text">
            <h3>BEASISWA INSPIRASI</h3>
            <p>
              Beasiswa Inspirasi Alumni UPI adalah program bantuan biaya pendidikan yang dirancang untuk mendukung mahasiswa jenjang S1 yang mengalami kesulitan finansial, 
              tetapi memiliki semangat dan tekad kuat untuk menyelesaikan pendidikannya. Program ini didanai sepenuhnya oleh kontribusi para alumni Universitas Pendidikan Indonesia 
              (UPI) yang ingin berperan aktif dalam mendukung generasi penerus yang berprestasi dan berdedikasi.
            </p>
          </div>
        </div>
      </section>

      <section className="informasi" id="Informasi">
        <h2>Informasi Beasiswa</h2>
        <div className="informasi-cards">
          <div className="card">
            <img src={Buku} alt="Berprestasi" />
            <h3>Berprestasi</h3>
            <p>Beasiswa untuk mahasiswa dengan prestasi akademik atau non-akademik.</p>
          </div>
          <div className="card">
            <img src={Uang} alt="Afirmasi" />
            <h3>Afirmasi</h3>
            <p>Beasiswa khusus untuk mahasiswa dengan kemampuan finansial yang menmadai.</p>
          </div>
        </div>
      </section>

      <h1 className="text-center" style={{ textAlign: "center", marginTop: "90px" }} id="Jadwal">Timeline BI</h1>
      <div className="timeline">
        <div className="timeline-box">
          Sosialisasi<br />
          <small>27 November 2024</small>
        </div>
        <div className="timeline-box">
          Pendaftaran<br />
          <small>27 November 2024 - 20 Desember 2024</small>
        </div>
        <div className="timeline-box">
          Seleksi Administrasi<br />
          <small>25 Desember 2024 - 10 Januari 2025</small>
        </div>
        <div className="timeline-box">
          Pengumuman<br />
          <small>15 Januari 2025</small>
        </div>
        <div className="timeline-box">
          Pencairan<br />
          <small>1 Februari 2025</small>
        </div>
      </div>

      <section className="bantuan">
        <h1 className="section-title">BANTUAN UNTUK MAHASISWA</h1>
        <div className="bantuan-container">
          <img src={Isola} alt="Gedung UPI" className="bantuan-image" />
          <div className="bantuan-content">
            <p>
              Setiap bantuan yang Anda berikan akan menjadi pijakan kokoh bagi para mahasiswa penerima untuk
              mewujudkan cita-cita mereka. Lebih dari itu, program ini membuka jalan bagi mereka untuk menjadi pribadi
              yang inspiratif, yang kelak dapat menjadi penerus semangat kepedulian dan kontribusi sebagai alumni UPI
              yang menginspirasi generasi selanjutnya.
            </p>
            <Link to="/inputdonasi" className="btn">Ayo bantu!</Link>
          </div>
        </div>
      </section>

      <section className="kontribusi">
        <div className="kontribusi-header">
          <h1>Kontribusi Beasiswa Inspirasi (BI)</h1>
          <p>
            Beasiswa Inspirasi memberikan langkah baru dan optimis bagi mahasiswa Indonesia yang
            terpilih berkontribusi dalam membentuk masa depan. Melalui program ini, mahasiswa terpilih
            mendapatkan dukungan finansial yang akan mendukung proses pembelajaran mereka menjadi lebih maksimal.
          </p>
        </div>
        <div className="kontribusi-footer">
          <h3>Beasiswa Inspirasi</h3>
          <p>Kelompok 2<br />Pendidikan Ilmu Komputer</p>
          <p>Email: <a href="mailto:info@upi.edu">info@upi.edu</a></p>
          <p>&copy; Hak Cipta Kelompok Beasiswa dan Universitas Pendidikan Indonesia &copy; 2024</p>
        </div>
      </section>
</div>
    </>
  );
}

export default Homepage;
