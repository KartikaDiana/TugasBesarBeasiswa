import React from 'react';

const Homeadmin = () => {
  const styles = {
    /* General Reset */
    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      backgroundColor: '#f9f9f9',
    },
    /* Sidebar */
    sidebar: {
      width: '240px',
      backgroundColor: '#b31d1d',
      color: '#fff',
      padding: '20px',
      height: '100vh',
      boxSizing: 'border-box',
    },
    sidebarH2: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    sidebarUl: {
      listStyle: 'none',
      padding: '0',
    },
    sidebarUlLi: {
      margin: '10px 0',
    },
    sidebarUlLiA: {
      color: 'white',
      textDecoration: 'none',
      display: 'block',
      padding: '10px',
      borderRadius: '5px',
      transition: 'background 0.3s',
    },
    sidebarUlLiAImg: {
      width: '28px',
      marginRight: '5px',
      display: 'flex',
      justifyContent: 'center',
      minWidth: 'calc(60px - ((4px + 6px) * 2))',
    },
    sidebarUlLiAActive: {
      backgroundColor: '#ff4d4d',
    },
    sidebarUlLiBeasiswaMenu: {
      display: 'none',
      paddingLeft: '20px',
    },
    sidebarUlLiBeasiswaMenuActive: {
      display: 'block',
    },
    /* Main Content */
    mainContent: {
      flex: 1,
      padding: '20px',
      backgroundColor: 'white',
    },
    headerH1: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '50px',
    },
    logoMain: {
      width: '200px',
    },
    logoHexagon: {
      width: '180px',
    },
    /* Stats Section */
    stats: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px',
    },
    statItem: {
      flex: 1,
      minWidth: '280px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    statIcon: {
      width: '140px',
      marginRight: '15px',
      borderLeft: '7px solid #43d400',
    },
    statH2: {
      margin: 0,
      fontSize: '24px',
      color: '#333',
    },
    statP: {
      color: '#666',
    },
    /* Table Style */
    table: {
      width: '70%',
      margin: '20px auto',
      borderCollapse: 'collapse',
    },
    thTd: {
      border: '1px solid black',
      padding: '10px',
      textAlign: 'left',
      fontSize: '16px',
    },
    th: {
      fontWeight: 'bold',
      backgroundColor: '#f2f2f2',
    },
    td: {
      fontWeight: 'normal',
    },
    /* Responsive Design */
    '@media (max-width: 768px)': {
      stats: {
        flexDirection: 'column',
      },
      sidebar: {
        width: '100px',
      },
      sidebarH2: {
        display: 'none',
      },
    },
  };

  return (
    <div style={styles.body}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarH2}>
          <img src="images/pie-chart.png" alt="ikon admin" style={{ width: '20px', marginRight: '7px' }} />
          Dashboard Admin
        </h2>
        <ul style={styles.sidebarUl}>
          <li style={styles.sidebarUlLi}>
            <a href="#" className="active" style={styles.sidebarUlLiA}>
              <img src="images/homeicon.png" alt="home" style={styles.sidebarUlLiAImg} />
              Home
            </a>
          </li>
          <li style={styles.sidebarUlLi}>
            <a href="donasi.html" style={styles.sidebarUlLiA}>
              <img src="images/charity.png" alt="donasi" style={styles.sidebarUlLiAImg} />
              Donasi
            </a>
          </li>
          <li style={styles.sidebarUlLi}>
            <a href="beasiswa.html" id="beasiswa-toggle" style={styles.sidebarUlLiA}>
              <img src="images/scholarship.png" alt="ikon beasiswa" style={styles.sidebarUlLiAImg} />
              Beasiswa
            </a>
            <ul className="beasiswa-menu" style={styles.sidebarUlLiBeasiswaMenu}>
              <li>
                <a href="daftar.html" style={styles.sidebarUlLiA}>Data Pendaftar</a>
              </li>
              <li>
                <a href="penerima.html" style={styles.sidebarUlLiA}>Data Penerima</a>
              </li>
              <li>
                <a href="persyaratan.html" style={styles.sidebarUlLiA}>Dokumen</a>
              </li>
            </ul>
          </li>
          <li style={styles.sidebarUlLi}>
            <a href="#" style={styles.sidebarUlLiA}>
              <img src="images/logout.png" alt="logout" style={styles.sidebarUlLiAImg} />
              Log Out
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <header>
          <h1 style={styles.headerH1}>SISTEM INFORMASI BEASISWA INSPIRASI</h1>
        </header>
        <div style={styles.logo}>
          <img className="logo-main" src="images/logo.png" alt="Logo" style={styles.logoMain} />
          <img className="logo-hexagon" src="images/hexagon.png" alt="Hexagon" style={styles.logoHexagon} />
        </div>

        <div style={styles.stats}>
          <div style={styles.statItem}>
            <div className="icon" style={styles.statIcon}>
              <img src="images/profile.png" alt="Pendaftar Icon" />
            </div>
            <div>
              <h2 style={styles.statH2}>1020</h2>
              <p style={styles.statP}>Pendaftar</p>
            </div>
          </div>

          <div style={styles.statItem}>
            <div className="icon" style={styles.statIcon}>
              <img src="images/visitor.png" alt="Visitors Icon" />
            </div>
            <div>
              <h2 style={styles.statH2}>2834</h2>
              <p style={styles.statP}>Visitors</p>
            </div>
          </div>

          <div style={styles.statItem}>
            <div className="icon" style={styles.statIcon}>
              <img src="images/scholarship.png" alt="Penerima Icon" />
            </div>
            <div>
              <h2 style={styles.statH2}>10</h2>
              <p style={styles.statP}>Penerima</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.thTd}>No.</th>
              <th style={styles.thTd}>Nama</th>
              <th style={styles.thTd}>Program</th>
              <th style={styles.thTd}>Nilai Rapot</th>
              <th style={styles.thTd}>IPK</th>
              <th style={styles.thTd}>Program Studi</th>
              <th style={styles.thTd}>Tempat, Tanggal Lahir</th>
              <th style={styles.thTd}>Alamat</th>
              <th style={styles.thTd}>Jenis Kelamin</th>
              <th style={styles.thTd}>Agama</th>
              <th style={styles.thTd}>No.Telp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.thTd}>1</td>
              <td style={styles.thTd}>Andi</td>
              <td style={styles.thTd}>Afirmasi</td>
              <td style={styles.thTd}>90.13</td>
              <td style={styles.thTd}>3.79</td>
              <td style={styles.thTd}>Pendidikan Ilmu Komputer</td>
              <td style={styles.thTd}>Bandung, 17 Oktober 2004</td>
              <td style={styles.thTd}>Jalan Cempaka No.1</td>
              <td style={styles.thTd}>Laki-laki</td>
              <td style={styles.thTd}>Islam</td>
              <td style={styles.thTd}>08965372817</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homeadmin;
