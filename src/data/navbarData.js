export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
];

/**
 * Single source of truth for all Shop dropdown content.
 * Used by both MegaMenu (desktop) and MobileNavLinks (drawer).
 *
 * Shape:
 *   megaMenuData: Array<{
 *     title: string          — column heading (Men, Women, …)
 *     sections: Array<{
 *       heading?: string     — optional sub-heading inside the column
 *       items: string[]      — list of links
 *     }>
 *   }>
 */
export const megaMenuData = [
  {
    title: 'Men',
    sections: [
      {
        items: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Jackets', 'Blazers & Coats'],
      },
      {
        heading: 'Indian & Festive Wear',
        items: ['Kurtas & Kurta Sets', 'Sherwanis'],
      },
    ],
  },
  {
    title: 'Women',
    sections: [
      {
        items: ['Kurtas & Suits', 'Sarees', 'Ethnic Wear', 'Lehenga Cholis', 'Jackets'],
      },
      {
        heading: 'Western Wear',
        items: ['Dresses', 'Jumpsuits'],
      },
    ],
  },
  {
    title: 'Footwear',
    sections: [
      {
        items: ['Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters'],
      },
      {
        heading: 'Product Features',
        items: ['360 Product Viewer', 'Product with Video'],
      },
    ],
  },
  {
    title: 'Kids',
    sections: [
      {
        items: [
          'T-Shirts',
          'Shirts',
          'Jeans',
          'Trousers',
          'Party Wear',
          'Innerwear & Thermal',
          'Track Pants',
          'Value Pack',
        ],
      },
    ],
  },
];
