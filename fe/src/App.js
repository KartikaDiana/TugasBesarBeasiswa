import React from 'react';
import Homeadmin from './pages/homeadmin';
import Datadonasi from './pages/datadonasi';
import Datapendaftar from './pages/datapendaftar';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import Hasildonasi from './pages/hasildonasi';
import Inputdonasi from './pages/inputdonasi';
import Penglolbaff from './pages/penglolbaff';
import Penglolbins from './pages/penglolbins';
import PengumumanL from './pages/pengumumanL';
import PengumumanTL from './pages/pengumumanTL';
import Dataafirmasi from './pages/dataafirmasi';
import Submit from './pages/hasilsubmit';
import Programbeasiswa from './pages/programbeasiswa';
import Identitasdiri from './pages/identitasdiri';
import Datapenerima from './pages/datapenerima';
import Hasilpersyaratan from './pages/hasilpersyaratan';
import Persyaratankhususins from './pages/persyaratankhususins';
import Persyaratankhususaff from './pages/persyaratankhususaff';
import Dokumen from './pages/dokumen';
import Riwayatakademik from './pages/riwayatakademik';
import databerprestasi from './pages/databerprestasi';
import Submenuadmin from './pages/submenuadmin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Databerprestasi from './pages/databerprestasi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homeadmin" element={<Homeadmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hasildonasi" element={<Hasildonasi />} />
        <Route path="/inputdonasi" element={<Inputdonasi />} />
        <Route path="/hasilsubmit" element={<Submit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/datadonasi" element={<Datadonasi />} />
        <Route path="/datapendaftar" element={<Datapendaftar />} />
        <Route path="/dataafirmasi" element={<Dataafirmasi />} />
        <Route path="/datapenerima" element={<Datapenerima />} />
        <Route path="/penglolbaff" element={<Penglolbaff />} />
        <Route path="/penglolbins" element={<Penglolbins />} />
        <Route path="/pengumumanL" element={<PengumumanL />} />
        <Route path="/pengumumanTL" element={<PengumumanTL />} />
        <Route path="/programbeasiswa" element={<Programbeasiswa />} />
        <Route path="/databerprestasi" element={<Databerprestasi />} />
        <Route path="/identitasdiri" element={<Identitasdiri />} />
        <Route path="/hasilpersyaratan" element={<Hasilpersyaratan />} />
        <Route path="/dokumen" element={<Dokumen />} />
        <Route path="/persyaratankhususins" element={<Persyaratankhususins />} />
        <Route path="/persyaratankhususaff" element={<Persyaratankhususaff />} />
        <Route path="/riwayatakademik" element={<Riwayatakademik />} />
        <Route path="/submenuadmin" element={<Submenuadmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
