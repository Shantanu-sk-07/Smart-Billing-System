import { useEffect } from 'react';
// import Layout from '../containers/layout/static/Header'; 
// import DashboardPage from '../views/dashboardPages/DashboardPage';
import ERPMedoLogin from '@/views/auth/ERPMedoLogin';

function App() {
 useEffect(() => {
    // Check if running in Electron
    if (window.ipcRenderer) {
      window.ipcRenderer.on('main-process-message', (_event, message) => {
        console.log("Received:", message)
      })
    }
  }, [])
  
  return (
    <>
    {/* <Layout><DashboardPage /></Layout> */}    
      <ERPMedoLogin/>
      
    </>
  );
}

export default App;
