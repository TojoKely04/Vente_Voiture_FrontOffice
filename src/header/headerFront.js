import { useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Position from 'rsuite/esm/Overlay/Position';
import { Link, useNavigate } from 'react-router-dom';
import Historique from '../historique/Historique';
import Favoris from '../favoris/Favoris';
import Annonce from '../annonce/AnnonceFront';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const MyNavBar = ({ active, onSelect, ...props }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate("/Login");
   }
    const token = localStorage.getItem('token');
    return (
     <Navbar {...props}>
       <Nav onSelect={onSelect}>
         <Nav.Item eventKey="accueil"><Link to="/Annonce"  style={{textDecoration:'none'}}>Annonces</Link></Nav.Item>
         <Nav.Item eventKey="2"><Link to="/Annonce"  style={{textDecoration:'none'}}>Messages</Link></Nav.Item>
         <Nav.Item eventKey="3"><Link to={`/Historique/${token}`}  style={{textDecoration:'none'}}>Historiques des annonces</Link></Nav.Item>
         <Nav.Item eventKey="4"><Link to={`/Favoris/${token}`}  style={{textDecoration:'none'}}>Favoris</Link></Nav.Item>
         <Nav.Item eventKey="5" onClick={logout}>Déconnexion</Nav.Item>
       </Nav>
     </Navbar>
    );
   };
   
   export default function App() {
    const [activeTab, setActiveTab] = useState('accueil');
    return (
     <div>
       <div>
         <MyNavBar active={activeTab} onSelect={setActiveTab} />
       </div>
     </div>
    );}
