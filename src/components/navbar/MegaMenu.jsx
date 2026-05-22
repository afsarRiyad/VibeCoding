import { megaMenuData } from '../../data/navbarData';

export default function MegaMenu({ open, onMouseEnter, onMouseLeave }) {
  const last = megaMenuData.length - 1;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        absolute left-1/2 -translate-x-1/2 top-[48px]
        w-[920px]
        bg-white border border-gray-100
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        rounded-lg
        p-8
        grid grid-cols-4
        z-50
        transition-all duration-200 ease-out
        origin-top
        ${open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'
        }
      `}
    >
      {megaMenuData.map((col, idx) => (
        <div
          key={col.title}
          className={`
            ${idx === 0 ? 'pr-6' : ''}
            ${idx > 0 && idx < last ? 'px-6' : ''}
            ${idx === last ? 'pl-6' : ''}
            ${idx < last ? 'border-r border-gray-100' : ''}
          `}
        >
          <p className="font-bold mb-3 text-sm">{col.title}</p>

          {col.sections.map((section, sIdx) => (
            <div key={sIdx} className={sIdx > 0 ? 'mt-5' : ''}>
              {section.heading && (
                <p className="font-bold mb-2 text-sm">{section.heading}</p>
              )}
              {section.items.map((item) => (
                <div
                  key={item}
                  className="text-sm text-gray-600 hover:text-black py-1 cursor-pointer transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
