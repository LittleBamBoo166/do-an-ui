import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ForgotPasswordPage,
  LoginPage,
  LogoutPage,
  RegisterPage,
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
  Empty,
  Email,
  ProfilePage,
  AboutUsPage,
  EventPage,
  EventsPage,
  AdminEventsPage,
  AdminEventPage,
  AdminEditEventPage,
  AdminUsersPage,
  AdminLocalOfficerPage
} from "./pages";

import AuthService from "./services";

import HomePage from "./HomePage.react";
import FormElementsPage from "./FormElementsPage.react";
import PricingCardsPage from "./interface/PricingCardsPage.react";
import CardsDesignPage from "./interface/CardsDesignPage.react";
import StoreCardsPage from "./components/StoreCardsPage.react.js";
import IconPage from "./components/IconPage.react.js";
import ChartsPage from "./interface/ChartsPage.react";
import GalleryPage from "./GalleryPage.react";
import MapCardsPage from "./components/MapCardsPage.react";
import BlogPage from "./components/BlogPage.react";

import "tabler-react/dist/Tabler.css";
import "./App.css";
import AdminAddEventPage from "./pages/event/AdminAddEventPage.react";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/400" component={Error400} />
          <Route exact path="/401" component={Error401} />
          <Route exact path="/403" component={Error403} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
          <Route exact path="/503" component={Error503} /> 

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/about" component={AboutUsPage} />


          <Route exact path="/user-management" component={AdminUsersPage}/>
          <Route exact path="/user-management/local-officers" component={AdminLocalOfficerPage}/>

          <Route exact path="/events" component={EventsPage}/>
          <Route exact path="/events/:id" component={EventPage}/>
          <Route exact path="/event-management" component={AdminEventsPage}/>
          <Route exact path="/event-management/:id" component={AdminEventPage}/>
          <Route exact path="/add-events" component={AdminAddEventPage}/>
          <Route exact path="/edit-events/:id" component={AdminEditEventPage}/>
          
          <Route component={Error404} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
