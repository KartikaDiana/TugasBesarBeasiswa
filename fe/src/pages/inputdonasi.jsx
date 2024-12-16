import React, { useState } from "react";
import backgroundImg from "../assets/programbg.png"; // Pastikan path benar

function Inputdonasi() {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [bukti, setBukti] = useState(null);

  const styles = {
    body: {
      margin: "0",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100vh",
      position: "relative",
      backgroundImage: `url(${backgroundImg})`, // Gambar background
      backgroundSize: "cover", // Agar gambar memenuhi layar
      backgroundPosition: "center", // Posisi gambar di tengah
      backgroundRepeat: "no-repeat", // Jangan ulang gambar
    },
    container: {
      background: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      maxWidth: "900px",
      width: "100%",
      color: "#000",
      textAlign: "center",
      position: "absolute",
      top: "15vh",
    },
    header: {
      backgroundColor: "#b31d1d",
      padding: "10px",
      fontSize: "18px",
      fontWeight: "bold",
      borderRadius: "8px 8px 0 0",
    },
    formGroup: {
      margin: "15px 0",
      textAlign: "left",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontSize: "14px",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      boxSizing: "border-box",
      border: "1px solid #ccc",
    },
    button: {
      backgroundColor: "#b31d1d",
      color: "#fff",
      padding: "10px",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
      width: "100%",
      border: "none",
      transition: "background-color 0.3s ease", // Menambahkan transisi hover
    },
    buttonHover: {
      backgroundColor: "#e07272", // Warna tombol saat hover
    },
    bankInfo: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px 0",
    },
    bankCard: {
      backgroundColor: "#fff",
      color: "#000",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      fontSize: "12px",
      flex: "1",
      margin: "5px",
    },
    bankLogo: {
      marginBottom: "10px",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Alihkan ke halaman hasildonasi
    window.location.href = "hasildonasi";
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>DONASI</div>
        <div style={styles.bankInfo}>
          <div style={styles.bankCard}>
            <div style={styles.bankLogo}>🔹 BRI</div>
            No. Rek: 123456789 (a.n. Donasi)
          </div>
          <div style={styles.bankCard}>
            <div style={styles.bankLogo}>🔹 BCA</div>
            No. Rek: 987654321 (a.n. Donasi)
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="nama" style={styles.label}>
              Nama:
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama Anda"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="jumlah" style={styles.label}>
              Jumlah Donasi:
            </label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              placeholder="Contoh: 100000"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="bukti" style={styles.label}>
              Bukti Donasi:
            </label>
            <input
              type="file"
              id="bukti"
              name="bukti"
              onChange={(e) => setBukti(e.target.files[0])}
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inputdonasi;
