import React from 'react';
import backgroundImage from '../assets/programbg.png'; // Mengimpor gambar dari folder assets

const Submit = () => {
    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h1 style={styles.heading}>anda sudah membantu!</h1>
                <a href="/" style={styles.btnBack}>Back</a>
            </div>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        background: `url(${backgroundImage}) no-repeat center center`, // Menggunakan gambar latar
        backgroundSize: 'cover', // Menyesuaikan ukuran gambar agar pas dengan layar
        backgroundPosition: 'center', // Menjaga gambar tetap terpusat
    },
    container: {
        textAlign: 'center',
        background: '#ffffff',
        padding: '20px 40px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '20px',
    },
    btnBack: {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#b31d1d',
        border: 'none',
        borderRadius: '4px',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    btnBackHover: {
        backgroundColor: '#e07272',
    },
};

export default Submit;
