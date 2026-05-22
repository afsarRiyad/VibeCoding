import { useRef, useState } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useBodyLock } from '../../hooks/useBodyLock';
import Logo from './Logo';
import MobileNavLinks from './MobileNavLinks';

export default function MobileDrawer({ open, onClose }) {
  const drawerRef = useRef(null);
  const [shopOpen, setShopOpen] = useState(false);
  useBodyLock(open);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]
          transition-opacity duration-300 lg:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`
          fixed top-0 left-0 z-50
          h-screen w-[min(360px,90vw)]
          bg-white flex flex-col
          shadow-[0_10px_40px_rgba(0,0,0,0.12)]
          transition-transform duration-300 ease-out
          lg:hidden
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-all duration-200"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <MobileNavLinks shopOpen={shopOpen} setShopOpen={setShopOpen} />

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-5 flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-black/70 hover:text-black transition-colors">
            <Heart size={18} />
            Wishlist
          </button>

          <button className="flex items-center gap-2 text-sm text-black/70 hover:text-black transition-colors">
            <ShoppingBag size={18} />
            Cart
            <span className="min-w-[18px] h-[18px] rounded-full bg-black text-white text-[10px] flex items-center justify-center px-1">
              3
            </span>
          </button>

          <button className="ml-auto bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition-colors">
            Login
          </button>
        </div>
      </aside>
    </>
  );
}
