import { useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Position from 'rsuite/esm/Overlay/Position';
import { Link } from 'react-router-dom';
import Historique from '../historique/Historique';
import Favoris from '../favoris/Favoris';
import Annonce from '../annonce/AnnonceFront';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const MyNavBar = ({ active, onSelect, ...props }) => {
    return (
     <Navbar {...props}>
       <Nav onSelect={onSelect} activeKey={active}>
         <Nav.Item eventKey="accueil"><Link to="/Annonce"  style={{textDecoration:'none'}}>Annonces</Link></Nav.Item>
         <Nav.Item eventKey="2">Messages</Nav.Item>
         <Nav.Item eventKey="3"><Link to="/Historique"  style={{textDecoration:'none'}}>Historiques des annonces</Link></Nav.Item>
         <Nav.Item eventKey="4"><Link to="/Favoris"  style={{textDecoration:'none'}}>Favoris</Link></Nav.Item>
         <Nav style={{marginLeft:"300px", marginTop:"10px"}}>
              <InputGroup className="mb-3" size="lg">
                <Form.Control
                placeholder="Entrer le mot"
                />
              <Button variant="outline-secondary" id="button-addon2">
                OK
              </Button>
            </InputGroup>
         </Nav>
         <Nav.Item eventKey="5" >Déconnexion</Nav.Item>
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
