import { Outlet } from 'react-router-dom';
import Header from './static/Header';
import Footer from './static/Footer';

interface StaticLayoutProps {
  mode?: 'light' | 'dark';
  toggleTheme?: () => void;
}

const StaticLayout = ({ mode = 'light', toggleTheme = () => {} }: StaticLayoutProps) => {
  return (
    <main>
      {/* Header now receives mode and toggleTheme */}
      <Header mode={mode} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default StaticLayout;
