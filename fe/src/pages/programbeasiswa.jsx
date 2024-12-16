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
    padding-top: 60px;  /* Memberikan ruang di atas untuk navbar */
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
  padding: 15px 20px;  /* Meningkatkan padding navbar agar lebih tinggi */
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
    align-items: flex-start;
    width: 100%;
    background-color: #f8f9fa;
    position: absolute;
    top: 60px;
    right: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled.a`
  color: #000;
  padding: 10px 15px;
  border-radius: 5px;
  transition: 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #fff;
    background-color:rgb(231, 127, 127);
    box-shadow: 0 4px 8px rgba(238, 124, 124, 0.418);
  }

  &.login {
    color: #000;
    background-color:rgb(233, 227, 227);
  }
`;

const Toggler = styled.button`
  display: none;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  color: #000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Container = styled.div`
  margin: 60px auto 20px auto;  /* Memberikan margin atas untuk menghindari tumpang tindih dengan navbar */
  max-width: 800px;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;  /* Memberikan margin agar jarak antara cards dan judul lebih rapat */
`;

const Card = styled.a`
  background-color: #f04f4f;
  color: #000;
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  max-width: 360px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #d03d3d;
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
`;

const App = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar>
        <NavbarBrand>
          <img src={logo} alt="Logo" width="50" height="50" />
          <b>Beasiswa</b>Inspirasi
        </NavbarBrand>
        <Toggler onClick={toggleNav}>&#9776;</Toggler>
        <NavbarNav active={isNavActive}>
          <NavItem>
            <NavLink href="/" className="login">Home</NavLink>
          </NavItem>
        </NavbarNav>
      </Navbar>

      <Container>
        <Title>Program Beasiswa</Title>
        <CardContainer>
          <Card href="identitasdiri">
            <CardTitle>Beasiswa Inspirasi Berprestasi</CardTitle>
            <CardDescription>
              Beasiswa Inspirasi Berprestasi adalah program beasiswa yang didedikasikan untuk mendukung generasi muda Indonesia yang memiliki semangat tinggi untuk meraih prestasi dan memberikan kontribusi positif bagi masyarakat. Program ini bertujuan untuk menciptakan pemimpin masa depan yang berkualitas melalui dukungan pendidikan dan pembinaan.
            </CardDescription>
          </Card>
          <Card href="identitasdiri">
            <CardTitle>Beasiswa Inspirasi Afirmasi</CardTitle>
            <CardDescription>
              Beasiswa Inspirasi Afirmasi adalah program beasiswa yang dirancang untuk memberikan kesempatan lebih luas kepada individu dari kelompok terpinggirkan atau yang menghadapi tantangan sosial-ekonomi tertentu. Dengan fokus pada inklusivitas dan kesetaraan, program ini bertujuan mendukung mereka yang memiliki potensi besar namun kurang memiliki akses terhadap pendidikan berkualitas.
            </CardDescription>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default App;
