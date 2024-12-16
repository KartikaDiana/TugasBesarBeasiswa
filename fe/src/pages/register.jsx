import React from 'react';
import logo from '../assets/logo.png';  
import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../assets/loginbg.png'; // Pastikan ini mengarah ke file yang benar

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});  /* Menggunakan gambar yang diimpor */
    background-size: cover;
    background-position: center;
    margin: 0;
    font-family: Arial, sans-serif;
    width: 100%;
    min-height: 100vh;
    padding: 0;  /* Menghilangkan padding */
    display: flex;
    justify-content: center;
    align-items: center;  /* Memastikan konten berada di tengah */
    overflow-x: hidden;
  }
`;

const Register = () => {
  return (
    <>
      <GlobalStyle /> {/* Menambahkan GlobalStyle di sini */}
      <div style={styles.formContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="nama" style={styles.label}>Nama Panjang:</label>
            <input type="text" id="nama" name="nama" placeholder="Masukkan Nama Lengkap" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="program" style={styles.label}>Program Studi:</label>
            <input type="text" id="program" name="program" placeholder="(Misalnya: Pendidikan Ilmu Komputer)" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="ttl" style={styles.label}>Tempat, Tanggal:</label>
            <input type="text" id="ttl" name="ttl" placeholder="(Contoh: Bandung, 10 Agustus 2005)" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="alamat" style={styles.label}>Alamat:</label>
            <textarea id="alamat" name="alamat" placeholder="Masukkan Alamat Lengkap" style={styles.textarea}></textarea>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="gender" style={styles.label}>Jenis Kelamin:</label>
            <select id="gender" name="gender" style={styles.input}>
              <option value="" disabled selected>Pilih</option>
              <option value="pria">Pria</option>
              <option value="wanita">Wanita</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="agama" style={styles.label}>Agama:</label>
            <input type="text" id="agama" name="agama" placeholder="(Contoh: Islam)" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="telepon" style={styles.label}>Nomor Telepon:</label>
            <input type="tel" id="telepon" name="telepon" placeholder="(Contoh: 0895xxxxxxxx)" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input type="email" id="email" name="email" required placeholder="Masukkan Email Anda" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input type="password" id="password" name="password" placeholder="Masukkan Password" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="pilih" style={styles.label}>Role:</label>
            <select id="pilih" name="pilih" style={styles.input}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <a href="programbeasiswa" style={styles.btn}>Daftar</a>
          <p style={styles.loginLink}>
            Sudah memiliki akun? <a href="login" style={styles.loginLinkText}>Login</a>
          </p>
        </form>
      </div>
    </>
  );
};

const styles = {
  formContainer: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '500px',
    marginTop: '50px',  // Jeda dari atas
    marginBottom: '50px', // Jeda dari bawah
  },
  logo: {
    display: 'block',
    margin: '0 auto 20px',
    width: '50px',
  },
  formGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'none',
    marginBottom: '10px',
  },
  btn: {
    display: 'block',
    width: '480px',
    backgroundColor: '#b31d1d',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    marginTop: '20px',
  },
  loginLink: {
    marginTop: '15px',
    fontSize: '14px',
  },
  loginLinkText: {
    color: '#b31d1d',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Register;
