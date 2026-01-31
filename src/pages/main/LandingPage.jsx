import { Route, Routes, useLocation } from 'react-router-dom';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import LandingPageBody from "./LandingPageBody";
import Career from "../career/Career";
import { routesPath } from '../../constants';
import About from '../about/About';
import ApplicationEngineering from '../specializations/application-engineering/ApplicationEngineering';
import PlatformEngineering from '../specializations/platform-engineering/PlatformEngineering';
import SalesforceCrm from '../specializations/salesforce-crm/SalesforceCrm';
import CyberSecurity from '../specializations/cyber-security/CyberSecurity';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../../assets/scss/route-animation.scss';
import Blogs from '../blogs/blogs';
import Privacy from '../legal/privacy/Privacy';
import Terms from '../legal/terms/Terms';

export default function LandingPage() {
    const location = useLocation();
    return (
        <>
            <Header />
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="slide" timeout={800}>
                    <Routes>
                        <Route path={routesPath.home} element={<LandingPageBody />} />
                        <Route path={routesPath.career} element={<Career />} />
                        <Route path={routesPath.about} element={<About />} />
                        <Route path={routesPath.applicationEngineering} element={<ApplicationEngineering />} />
                        <Route path={routesPath.platformEngineering} element={<PlatformEngineering />} />
                        <Route path={routesPath.salesforceCrm} element={<SalesforceCrm />} />
                        <Route path={routesPath.cyberSecurity} element={<CyberSecurity />} />
                        <Route path={routesPath.blogs} element={<Blogs />} />
                        <Route path={routesPath.blogById} element={<Blogs />} />
                        <Route path={routesPath.privacy} element={<Privacy />} />
                        <Route path={routesPath.terms} element={<Terms />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </>
    );
}