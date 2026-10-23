export interface BlindspotSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const BLINDSPOTS: BlindspotSlide[] = [
  {
    id: 'blindspot-gut-feeling',
    title: 'Decisions based on gut feeling, not data.',
    description:
      'Founders relying on intuition rather than performance metrics leads to missed opportunities and costly mistakes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Business analytics and metrics chart on display',
  },
  {
    id: 'blindspot-inventory',
    title: 'Inventory pileups draining cash.',
    description:
      'Excess stock ties up working capital and can become obsolete, impacting balance sheet health.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Warehouse racks with excess inventory stock',
  },
  {
    id: 'blindspot-topline',
    title: 'Profitability masked by high topline revenue.',
    description:
      'Healthy sales figures can hide underlying issues where costs are too high, leading to low net margins.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Financial calculations and profit margins analysis',
  },
  {
    id: 'blindspot-spreadsheets',
    title: 'Manual, error-prone spreadsheets.',
    description:
      'Reliance on manual data entry and Excel leads to inconsistencies, inaccuracies, and delays in reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Complex financial spreadsheet with charts and metrics',
  },
];
