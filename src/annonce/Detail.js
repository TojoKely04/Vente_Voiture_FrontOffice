import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../header/header';
import { Label , Input, Form, FormGroup, Container } from 'reactstrap';
import HeaderFront from '../header/headerFront';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Detail(){
    const [details, setDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`/annonces/${id}`);
            setDetails(result.data);
            console.log(result.data);
            console.log(details);
        };
        fetchData();
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();

    const apropos = () => {
        return <>
            <Card.Text>
                <p>Nom : {details.nom}</p>
            </Card.Text>
            {/* <Card.Text>
                <p>Date de publication : {details.datePublication}</p>
            </Card.Text>
            <Card.Text>
                <p>Catégories : {details.categorie.categorie} </p> 
            </Card.Text>
            <Card.Text>
                <p>Marque : {details.marque.marque}</p>
            </Card.Text>
            <Card.Text>
                <p>Couleur : {details.couleur}</p>
            </Card.Text>
            <Card.Text>
                    <p>Moteur : {details.moteur.moteur}</p>
            </Card.Text>
            <Card.Text>
                <p>Kilometrage : {details.anneeSortie}</p>
            </Card.Text>
            <Card.Text>
                <p>Année de sortie : {details.anneeSortie}</p>
            </Card.Text>
            <Card.Text>
                    <p>Vitesse : {details.boiteVitesse.vitesse}</p>
            </Card.Text>
            <Card.Text>
                    <p>Enérgie : {details.energie.energie}</p>
            </Card.Text>
            <Card.Text>
                <p>Prix de vente : {details.prix}</p>
            </Card.Text> 
            <Card.Text>
                    <p>Auteur: {details.utilisateur.nom}</p>
            </Card.Text> */}
        </>
    };
    
    return(
        <div>
            {console.log(details.categorie)}
            <HeaderFront/>
                <Container>
                    <Card className="horizontal-card">
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img alt="Card image"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Details De L'Annonce</Card.Title>
                                    {apropos()}
                                    <Card.Text>
                                        <Button variant="success">Status :</Button>{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>
        </div>
    );
};
export default Detail; 