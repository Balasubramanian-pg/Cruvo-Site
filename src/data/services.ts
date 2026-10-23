export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'BarChart3' | 'Cpu' | 'TrendingUp';
  highlights: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'fractional-cfo',
    title: 'Fractional CFO Services',
    description:
      'Strategic financial leadership providing C-suite expertise without the full-time cost. We tailor specific frameworks for Indian business realities and regulatory environments.',
    iconName: 'BarChart3',
    highlights: [
      'Custom MIS for manufacturing metrics',
      'Working capital & cash flow optimization',
      'Product/Service-line profitability analysis',
    ],
  },
  {
    id: 'finance-transformation',
    title: 'Finance Transformation',
    description:
      'Move from compliance-heavy data entry to strategy-enabled operations. We implement robust systems that scale from startup chaos to enterprise excellence.',
    iconName: 'Cpu',
    highlights: [
      'End-to-end process automation',
      'ERP implementation & optimization',
      'Internal audit frameworks',
    ],
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description:
      'Convert operational noise into strategic signals. We build analytics frameworks that reveal patterns and guide high-stakes decision-making.',
    iconName: 'TrendingUp',
    highlights: [
      'Customer profitability analysis',
      'Expansion & scenario planning',
      'Competitive benchmarking',
    ],
  },
];
