import { useState, useEffect } from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import NavIcons from './NavIcons';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Global ESC key closes everything
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto h-[64px] flex items-center justify-between px-5">
        <Logo />
        <DesktopNav />
        <NavIcons onMenuOpen={() => setMobileOpen(true)} />
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
