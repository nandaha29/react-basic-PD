import React from 'react';
import {Route, Switch} from "react-router-dom";

//call pages
import Ppn from './pages/Ppn';
import Cicilan from './pages/Cicilan';
import Bmi from './pages/Bmi';
import Konversi from './pages/Konversi';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Ppn} />
        <Route path="/Cicilan" component={Cicilan} />
        <Route path="/Bmi" component={Bmi} />
        <Route path="/Konversi" component={Konversi} />
    </Switch>
)
export default Utama;