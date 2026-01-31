import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import LandingPageBody from "./LandingPageBody";
import { routesPath } from '../../constants';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../../assets/scss/route-animation.scss';

const Career = lazy(() => import('../career/Career'));
const About = lazy(() => import('../about/About'));
const ApplicationEngineering = lazy(() => import('../specializations/application-engineering/ApplicationEngineering'));
const PlatformEngineering = lazy(() => import('../specializations/platform-engineering/PlatformEngineering'));
const SalesforceCrm = lazy(() => import('../specializations/salesforce-crm/SalesforceCrm'));
const CyberSecurity = lazy(() => import('../specializations/cyber-security/CyberSecurity'));
const Blogs = lazy(() => import('../blogs/blogs'));
const Privacy = lazy(() => import('../legal/privacy/Privacy'));
const Terms = lazy(() => import('../legal/terms/Terms'));

function PageLoader() {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid #f3f3f3',
                borderTop: '3px solid #00c6ff',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
            }} />
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

export default function LandingPage() {
    const location = useLocation();
    return (
        <>
            <Header />
            <Suspense fallback={<PageLoader />}>
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="slide" timeout={250}>
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
            </Suspense>
            <Footer />
        </>
    );
}
