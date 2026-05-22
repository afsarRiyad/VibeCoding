import { useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative flex items-center">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="z-10 cursor-pointer hover:scale-110 transition-all duration-200"
        aria-label="Toggle search"
      >
        {open ? <X size={20} /> : <Search size={20} />}
      </button>

      <div
        className={`
          absolute right-0 top-1/2 -translate-y-1/2
          flex items-center overflow-hidden
          transition-all duration-300 ease-out
          bg-white border border-gray-200 rounded-md shadow-sm
          ${open ? 'w-[230px] opacity-100 pr-3' : 'w-0 opacity-0 border-transparent pr-0'}
        `}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent outline-none py-2 pl-11 pr-2 text-sm"
        />
      </div>
    </div>
  );
}
