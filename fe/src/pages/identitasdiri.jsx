import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from '../assets/logo.png';  // Pastikan path ini benar untuk logo
import backgroundImg from '../assets/programbg.png'; // Mengimport gambar untuk background

// Global style untuk background halaman
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImg});  /* Menggunakan gambar yang diimport */
    background-size: cover;
    background-position: center;
    margin: 0;
    font-family: Arial, sans-serif;
    width: 100%;
  }
`;

const Navbar = styled.nav`
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
`;

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #000;

  img {
    margin-right: 10px;
  }
`;

const NavbarNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.active ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #f8f9fa;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  margin: 0 15px;

  a {
    color: #000;
    padding: 10px 15px;
    border-radius: 5px;
    transition: 0.3s ease;
    text-decoration: none; /* Menghilangkan underline */
  }

  a:hover {
    color: #fff;
    background-color: #f04f4f;
    box-shadow: 0 4px 8px rgba(238, 124, 124, 0.418);
  }
`;

const Toggler = styled.button`
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 100px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Menu = styled.div`
  width: 30%;

  button {
    display: block;
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #f04f4f;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s;
    font-size: 1.2rem;
    text-decoration: none;
  }

  button:hover {
    background-color: #e64a19;
  }

  .Submit {
    background-color: #b31d1d;
  }

  .Submit:hover {
    background-color: #e07272;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  background: #f9f9f9;
  padding: 40px;
  border-radius: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #b31d1d;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #e64a19;
  }
`;

const IdentitasDiri = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <GlobalStyle /> {/* Menambahkan global style untuk background gambar */}
      <Navbar>
        <NavbarBrand>
          <img src={logo} alt="Logo" width="50" height="50" />
          <b>Beasiswa</b>Inspirasi
        </NavbarBrand>
        <Toggler onClick={() => setMenuActive(!menuActive)}>&#9776;</Toggler>
        <NavbarNav active={menuActive}>
          <NavItem>
            <a href="programbeasiswa">Back</a>
          </NavItem>
        </NavbarNav>
      </Navbar>
      <Container>
        <Header>IDENTITAS DIRI</Header>
        <MainContent>
          <Menu>
            <button>Identitas Diri</button>
            <a href="riwayatakademik"><button>Riwayat Akademik</button></a>
            <a href="persyaratankhususins"><button>Persyaratan khusus</button></a>
            <a href="pengumumanL"><button>Pengumuman</button></a>
            <a href="hasilsubmit"><button className="Submit">Submit</button></a>
          </Menu>
          <Content>
            <form action="submit_pendaftaran.html" method="post">
              <FormGroup>
                <label htmlFor="NIK">NIK</label>
                <input type="text" id="NIK" name="NIK" placeholder="Masukkan NIK" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="Nama">Nama</label>
                <input type="text" id="Nama" name="Nama" placeholder="Masukkan Nama Lengkap" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="TTL">Tanggal Lahir</label>
                <input type="date" id="TTL" name="TTL" placeholder="Masukkan Tanggal Lahir" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="Alamat">Alamat</label>
                <input type="text" id="Alamat" name="Alamat" placeholder="Masukkan Alamat" required />
              </FormGroup>
              <SubmitButton type="submit">Simpan</SubmitButton>
            </form>
          </Content>
        </MainContent>
      </Container>
    </>
  );
};

export default IdentitasDiri;
