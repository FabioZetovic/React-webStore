import Pocetna from "./Stranice/Pocetna";
import React from 'react';
import ListaProdukta from "./Stranice/ListaProdukta";
import Proizvod from "./Stranice/Proizvod";
import Registriraj from "./Stranice/Registriraj";
import Logiraj from "./Stranice/Logiraj";
import Kosarica from "./Stranice/Kosarica";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Uspjeh from "./Stranice/Uspjeh";
import { useState } from "react";
import Novine from "./Components/Novine";
import { UserContext } from './Context/UserCont';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const App = () => {
  const [gmail, setGmail] = useState();
  
  const osob = useSelector(state=>state.user.currentuser);

  

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ gmail, setGmail }}>
          <Switch>
            <Route path="/Novine" component={Novine} />
            <Route path="/Uspjeh" component={Uspjeh} />
            <Route exact path="/" component={Pocetna} />
            <Route path="/Kosarica" component={Kosarica} />
            <Route path="/Logiraj">{osob ? <Redirect to="/" /> : (<Logiraj />) }</Route>
            
            <Route path="/ListaProdukta/:category" component={ListaProdukta} />
            <Route path="/Proizvod/:id" component={Proizvod} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;