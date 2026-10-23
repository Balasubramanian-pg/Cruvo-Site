export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export const STATS: StatItem[] = [
  {
    id: 'stat-capital',
    value: '₹1.5Cr+',
    label: 'Working Capital Unlocked',
  },
  {
    id: 'stat-margin',
    value: '25%',
    label: 'Margin Improvement',
  },
  {
    id: 'stat-cac',
    value: '15%',
    label: 'CAC Reduction',
  },
  {
    id: 'stat-experience',
    value: '3+ Yrs',
    label: 'SME Focus',
  },
];
