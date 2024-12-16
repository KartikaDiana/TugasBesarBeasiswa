import React, { useState } from "react";
import { createGlobalStyle } from "styled-components"; // Impor createGlobalStyle
import backgroundImg from "../assets/loginbg.png"; // Mengimpor gambar untuk background
import logo from "../assets/logo.png"; // Mengimpor logo dengan benar

// Global style untuk background halaman
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});  /* Menggunakan gambar yang diimport */
    background-repeat: no-repeat;  /* Gambar tidak berulang */
    background-size: cover;  /* Menyesuaikan ukuran background */
    background-position: center;  /* Gambar berada di tengah */
    background-attachment: fixed;  /* Agar background tetap saat di-scroll */
    margin: 0;
    font-family: Arial, sans-serif;
    width: 100%;
    padding-top: 140px;  /* Memberikan ruang di atas untuk navbar */
  }
`;

const Login = () => {
  // State untuk menangkap input form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // Styling inline untuk komponen Login
  const styles = {
    container: {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "300px",
      margin: "0 auto",
    },
    logo: {
      margin: "0 auto 20px",
      display: "block",
      width: "80px",
    },
    formGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      boxSizing: "border-box",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    select: {
      width: "100%",
      padding: "8px",
      boxSizing: "border-box",
      border: "1px solid #ccc",
      borderRadius: "4px",
      appearance: "none",
    },
    btn: {
      display: "block",
      width: "280px",
      backgroundColor: "#b31d1d",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      margin: "0 auto",
    },
    btnHover: {
      backgroundColor: "#e07272",
    },
    register: {
      marginTop: "15px",
      fontSize: "14px",
    },
    link: {
      color: "#b31d1d",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  // Fungsi untuk menangani login
  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload form
    if (role === "admin") {
      window.location.href = "/submenuadmin"; // Redirect ke submenu admin
    } else if (role === "user") {
      window.location.href = "/programbeasiswa"; // Redirect ke program beasiswa
    } else {
      alert("Pilih role terlebih dahulu!"); // Validasi jika role belum dipilih
    }
  };

  return (
    <>
      <GlobalStyle /> {/* Menambahkan GlobalStyle untuk background image */}
      <div style={styles.container}>
        {/* Menampilkan logo dengan benar */}
        <img src={logo} alt="Logo" style={styles.logo} />
        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Masukkan Email Anda"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state email
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state password
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="role" style={styles.label}>
              Role:
            </label>
            <select
              id="role"
              name="role"
              style={styles.select}
              value={role}
              onChange={(e) => setRole(e.target.value)} // Update state role
            >
              <option value="">Pilih Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button
            type="submit"
            style={styles.btn}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e07272")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#b31d1d")}
          >
            Login
          </button>
        </form>
        <div style={styles.register}>
          Belum punya akun?{" "}
          <a href="register" style={styles.link}>
            Daftar di sini
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
