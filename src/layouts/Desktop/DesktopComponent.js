import React from 'react';
import { Route, Switch } from 'react-router-dom';
import s from './Desktop.module.css';
import { routes } from '../../routes';
import AdminPage from '../../pages/Admin/AdminPage';
import HomePage from '../../pages/Home/HomePage';
import CartPage from '../../pages/Cart/CartPageContainer';
import CartPageModal from '../../pages/Cart/CartModal/CartModal';
import AboutPage from '../../pages/About/AboutPage';
import ContactPage from '../../pages/Contact/ContactPage';
import PrivacyPolicyPage from '../../pages/PrivacyPolicy/PrivacyPolicyPage';
import TermsAndConditionsPage from '../../pages/TermsAndConditions/TermsAndConditionsPage';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import ProtectedRouteUser from '../../components/ProtectedRouteUser/ProtectedRouteUser';
import UserPage from '../../pages/User/UserPageContainer';

const App = ({ location, previousLocation }) => {
  
  let isModal = !!(
    location.state &&
    location.state.modal &&
    previousLocation !== location
  );

  return(
    <div className={s.App}>
      <Header/>
      <div className={s.Content}>
        <Switch location={isModal ? previousLocation : location}>
          <ProtectedRoute path={routes.admin} component={AdminPage}/>
          <Route path={routes.cart} component={CartPage}/>
          <Route path={routes.about} component={AboutPage}/>
          <Route path={routes.contact} component={ContactPage}/>
          <Route path={routes.privacypolicy} component={PrivacyPolicyPage}/>
          <Route path={routes.termsandconditions} component={TermsAndConditionsPage}/>
          <ProtectedRouteUser path={routes.user} component={UserPage}/>
          <Route path={routes.home} component={HomePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
      {isModal ? <Route path={routes.cart} component={CartPageModal}/> : null}
      <Footer/>
    </div>
  );
}

export default App;
