import { lazy } from 'react';
import { AuthenticationPath } from '../constants';
import Loadable from '../common/Loadable';
import StaticLayout from '../containers/layout/StaticLayout';
import BlogPage from '@/views/home/BlogPage';
import PrivacyPolicy from '@/views/home/PrivacyPolicy';
import Community from '@/views/home/Community';
import BlogPostPage from '@/containers/Blogpage/BlogPostPage';
import Features from '@/views/home/Features';


export const LoginPage = Loadable(lazy(() => import('../views/auth/Login')));
export const SignPage = Loadable(lazy(() => import('../views/auth/Signup')));
export const ForgotPage = Loadable(lazy(() => import('../views/auth/Forgot')));
export const LandingPage = Loadable(lazy(() => import('../views/home/Landingpage')));
export const About = Loadable(lazy(() => import('../views/home/About')));
export const Contact = Loadable(lazy(() => import('../views/home/ContactSupport')));
export const Dashboard = Loadable(lazy(() => import('../views/home/Dashboard')));
export const Pricing = Loadable(lazy(() => import('../views/home/Pricing')));
export const Terms = Loadable(lazy(() => import('../views/home/TermsAndCondition')));
export const PaymentPage=Loadable(lazy(()=> import ('@/containers/pricing/PaymentPage')));
export const CardCND=Loadable(lazy(()=> import ('../containers/pricing/CardCND')));
export const SuccessPage=Loadable(lazy(()=>import ('../containers/pricing/SuccessPage')));
export const UpiPaymentPage=Loadable(lazy(()=> import ('../containers/pricing/UpiPayment')));
export const PayPalPaymentPage=Loadable(lazy(()=> import ('../containers/pricing/PayPalPage')));
export const PayPal=Loadable(lazy(()=> import ('../containers/pricing/Paypal')));
 


const AuthenticationRoutes = (mode: 'light' | 'dark', toggleTheme: () => void) => ({
  path: AuthenticationPath.Default,
  element: <StaticLayout mode={mode} toggleTheme={toggleTheme} />,
  children: [
     {
      index: true,
      element: <LandingPage />
    },
    
    {
      path: AuthenticationPath.Login,
      element: <LoginPage />
    },
    {
      path: AuthenticationPath.SignPage,
      element: <SignPage />
    },
     {
      path: AuthenticationPath.Forgot,
      element: <ForgotPage />
    },
     {
      path: AuthenticationPath.Blog,
      element: <BlogPage />
    },  {
      path: `${AuthenticationPath.Blog}/:id`,
      element: <BlogPostPage />
    },

    {
      path: AuthenticationPath.PrivacyPolicy,
      element: <PrivacyPolicy/>
    },
    {
     path: AuthenticationPath.About,
     element: <About/>
    },
     {
     path: AuthenticationPath.Community,
     element: <Community/>
    },
     {
     path: AuthenticationPath.Support,
     element: <Contact/>
    }, 
    {
     path: AuthenticationPath.Dashboards,
     element: <Dashboard/>
    },
     {
     path: AuthenticationPath.Pricing,
     element: <Pricing/>
    },
     {
     path: AuthenticationPath.Terms,
     element: <Terms/>
    },
    {
     path: AuthenticationPath.Features,
     element: <Features />
    },
    {
      path: AuthenticationPath.PaymentPage,
      element:<PaymentPage/>
    },
    {
      path: AuthenticationPath.CardCND,
      element:<CardCND/>
    },
    {
      path: AuthenticationPath.SuccessPage,
      element:<SuccessPage/>
    },
    {
      path: AuthenticationPath.UpiPaymentPage,
      element:<UpiPaymentPage/>
    },
    {
      path: AuthenticationPath.PayPalPaymentPage,
      element:<PayPalPaymentPage/>
    },
     {
      path: AuthenticationPath.PayPal,
      element:<PayPal/>
    }
 
   
  ]
});

export default AuthenticationRoutes;
