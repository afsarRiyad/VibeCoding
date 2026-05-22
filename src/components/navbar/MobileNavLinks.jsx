import { ChevronRight } from "lucide-react";
import { megaMenuData } from "../../data/navbarData";

export default function MobileNavLinks({ shopOpen, setShopOpen }) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-4">

      <a className="block py-3 text-sm font-medium border-b border-gray-100 hover:text-black transition-colors cursor-pointer">
        Home
      </a>

      <div className="border-b border-gray-100">

        <button
          onClick={() => setShopOpen(!shopOpen)}
          className="
            w-full
            flex items-center justify-between
            py-3
            text-sm font-medium
            hover:text-black
            transition-colors
            cursor-pointer
          "
        >
          Shop

          <ChevronRight
            size={16}
            className={`transition-transform duration-200 ${
              shopOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {shopOpen && (
          <div className="pb-4 pl-2">

            {megaMenuData.map((col) => (
              <div key={col.title} className="mb-5">

                <p className="font-bold text-xs uppercase mb-2">
                  {col.title}
                </p>

                {col.sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    {section.heading && (
                      <p className="font-semibold text-xs text-gray-500 uppercase mt-3 mb-1">
                        {section.heading}
                      </p>
                    )}
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="
                          text-sm text-gray-600
                          hover:text-black
                          py-1 cursor-pointer
                          transition-colors
                        "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <a className="block py-3 text-sm font-medium border-b border-gray-100 hover:text-black transition-colors cursor-pointer">
        Blog
      </a>

      <a className="block py-3 text-sm font-medium border-b border-gray-100 hover:text-black transition-colors cursor-pointer">
        Contact
      </a>
    </div>
  );
}
