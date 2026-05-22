import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../../data/navbarData';
import MegaMenu from './MegaMenu';

export default function DesktopNav() {
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  return (
    <div className="hidden lg:flex flex-1 justify-center">
      <nav className="flex items-center gap-10 text-sm font-medium">

        {/* Home */}
        <a href={NAV_LINKS[0].href} className="text-gray-700 hover:text-black transition-colors">
          {NAV_LINKS[0].label}
        </a>

        {/* Shop with mega menu */}
        <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
          <button className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors cursor-pointer">
            Shop
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* hover bridge so the mega menu doesn't close while moving mouse to it */}
          <div className="absolute top-full left-0 w-full h-5" />

          <MegaMenu open={megaOpen} onMouseEnter={openMega} onMouseLeave={closeMega} />
        </div>

        {/* Blog & Contact */}
        {NAV_LINKS.slice(1).map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-700 hover:text-black transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
