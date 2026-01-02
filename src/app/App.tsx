import { RouterProvider } from 'react-router-dom';
import { NavigationScroll } from '@/common'
import router from '@/routes';
import { useEffect } from 'react';
import { CssBaseline } from '@mui/material';

const App = () => {
   useEffect(() => {
    // Check if running in Electron
    if (window.ipcRenderer) {
      window.ipcRenderer.on('main-process-message', (_event, message) => {
        console.log("Received:", message)
      })
    }
  }, [])
  return (
      <NavigationScroll>
         <CssBaseline />
          <RouterProvider router={router} />
        
      </NavigationScroll>
  )
}

export default App