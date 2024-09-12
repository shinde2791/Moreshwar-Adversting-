
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "../src/pages/home"
import Marathi_wedding  from './pages/marathi_wedding';
import Hindi_wedding from './pages/hindi_wedding';
import English_wedding from './pages/english_wedding';
import Buddhist_wedding from './pages/buddhist_wedding';
import Your_ownStyle from './pages/ownstyle';
import Birthday_marathi from './pages/birthdaymarathi';
import Birthday_english from './pages/birthdayenglish';
import Own_stylebirthday from './pages/ownbirthday';
import Invitation_card from './pages/invitationcard';
import Commercial_invitation from './pages/commercialinvitation';
import Puja_invitation from './pages/pujainvitation';
import Festival_invitation from './pages/festivalinvitation';
import Commercial_Promotion from './pages/commercialPromotion';
import Construction from './pages/construction';
import Personal from './pages/personalbranding';
import Brandpromtion from './pages/brandpromtion';
import Layout from '../src/layout/layout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marathi_wedding" element={<Marathi_wedding />} />
          <Route path="hindi_wedding" element={<Hindi_wedding />} />
          <Route path="english_wedding" element={<English_wedding />} />
          <Route path="buddhist_wedding" element={<Buddhist_wedding />} />
          <Route path="Your_ownStyle" element={<Your_ownStyle />} />
          <Route path="Birthday_marathi" element={<Birthday_marathi />} />
          <Route path="Birthday_english" element={<Birthday_english />} />
          <Route path="Own_stylebirthday" element={<Own_stylebirthday />} />
          <Route path="Invitation_card" element={<Invitation_card />} />
          <Route path="Commercial_invitation" element={<Commercial_invitation />} />
          <Route path="Puja_invitation" element={<Puja_invitation />} />
          <Route path="Festival_invitation" element={<Festival_invitation/>} />
          <Route path="Commercial_Promotion" element={<Commercial_Promotion/>} />
          <Route path="Construction" element={<Construction/>} />
          <Route path="Personal" element={<Personal/>} />
          <Route path="Brandpromtion" element={<Brandpromtion/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
