import './App.css';
import React from 'react';
import Detail from './annonce/Detail';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Annonce from './annonce/AnnonceFront';
import Historique from './historique/Historique';
import Favoris from './favoris/Favoris';
import PrivateRoute from './login/PrivateRoute ';
import Login from './login/LoginSingUp';

function App(){
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return(
    <>
      <div>
      <Router>
      <Routes>
      <Route element={<PrivateRoute/>}>
              <Route exact path ="/" element={<Annonce />} />
              <Route exact path="/Annonce" element= {<Annonce/>} />
              <Route path ="/Detail/:id" element={<Detail/>}/>
              <Route path="/Historique/:token" element={<Historique/>} />
              <Route path="/Favoris/:token" element={<Favoris/>} />
      </Route>
      <Route exact path="/Login" element= {<Login/>} />

          </Routes>
        </Router>
      </div>  
  </>
  );
}
export default App;

