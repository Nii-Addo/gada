import React from "react";
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import {Layout} from './components/layout';
import Home from './pages/home';
import "./style.css";

const AppRoutes = () =>{
  return(
    <>
     <Switch>
       <Layout>
        <Route exact path="/">
          <Home/>
        </Route>
       </Layout>
     </Switch>
    </>
  )
}
export default function App() {
  return (
    <Router>
      {/* <AppRoutes/> */}
      <Home/>
    </Router>
  );
}
