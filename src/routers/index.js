import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Lunch from "../pages/Lunch";
import Gallery from "../pages/Gallery";
import Reservation from "../pages/Reservation";
import OrderNow from "../pages/OrderNow";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer";
import Drink from "../pages/Drink";
import Dessert from "../pages/Dessert";
import Alacarte from '../pages/Alacarte'

const PageRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/alacarte" component={Alacarte} />
        <Route exact path="/lunch" component={Lunch} />
        <Route exact path="/drink" component={Drink} />
        <Route exact path="/dessert" component={Dessert} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/reservation" component={Reservation} />
        <Route exact path="/order-now" component={OrderNow} />
        <Route exact path="/faq" component={FAQ} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default PageRouter;
