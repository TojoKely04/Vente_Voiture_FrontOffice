import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { COLOR } from "rsuite/esm/utils/constants";
import HeaderFront from '../header/headerFront';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react';

const Liste = () => {
  const { id } = useParams();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
      axios.get('/annonces/Utilisateur/'+id)
        .then(response => {
              console.log(response.data);
              setGroups(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des posts:', error);
        });
  }, []);

   
  const groupList = groups.map(group => {
    return<>
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title><p>Nom : {group.nom}</p></Card.Title>
                <Card.Text>
                <p>Categorie : {group.categorie.categorie}</p>
                <p>Marque : {group.marque.marque}</p>
                <p>Auteur : {group.utilisateur.nom} </p>
                </Card.Text>
                <Button variant="primary"><Link style={{textDecoration:'none' ,  color:'white'}} tag={Link} to={"/Detail/" + group.idAnnonce}>Plus d'informations</Link></Button>
                <Button variant="success"style={{marginLeft:"15px"}}>Ajouter favoris</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
     </>
});

return(
  <>
      <HeaderFront />
      {groupList}
  </>
);
}
export default Liste; 