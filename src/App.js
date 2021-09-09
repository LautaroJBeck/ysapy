import ArticuloMenu from "./components/ArticuloMenu";
import Contacto from "./components/Contacto";
import SobreNosotros from "./components/SobreNosotros";
import Header from "./components/Header";
import {HashRouter,Switch,Route} from "react-router-dom"
import MenuYsapy from "./components/menu/MenuYsapy";
import ArticuloBienvenida from "./components/ArticuloBienvenida";




function App() {
  return (
    <>
      <HashRouter>

          <Switch>
            <Route exact path="/">
              <Header/>
              <ArticuloBienvenida/>
              <SobreNosotros/>
              <ArticuloMenu/>
              <Contacto/>  
            </Route>

            <Route exact path="/menu">

              <MenuYsapy/>

            </Route>
            <Route exact path="*">
              <ArticuloBienvenida/>
              <SobreNosotros/>
              <ArticuloMenu/>
              <Contacto/>  
            </Route>
            </Switch>
      </HashRouter>

    </>
  );
}

export default App;
