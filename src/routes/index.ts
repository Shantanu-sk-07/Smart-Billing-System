// import { createBrowserRouter } from 'react-router-dom';

// // routes
// import AuthenticationRoutes from './AuthenticationRoutes.tsx';
// import MainRoutes from './MainRoutes';

// // ==============================|| ROUTING RENDER ||============================== //

// const router = createBrowserRouter([MainRoutes,AuthenticationRoutes], {
//   basename: import.meta.env.VITE_APP_BASE_NAME
// });

// export default router;
import { createBrowserRouter } from 'react-router-dom';
import AuthenticationRoutes from './AuthenticationRoutes';
import MainRoutes from './MainRoutes';
 
const createAppRouter = (mode: 'light' | 'dark', toggleTheme: () => void) => {
  return createBrowserRouter(
    [MainRoutes, AuthenticationRoutes(mode, toggleTheme)],
    {
      basename: import.meta.env.VITE_APP_BASE_NAME
    }
  );
};
 
export default createAppRouter;
 
 