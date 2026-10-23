export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface FeaturedCaseStudy {
  title: string;
  challenge: string;
  intervention: string;
  metrics: CaseStudyMetric[];
}

export interface QuickWin {
  id: string;
  title: string;
  description: string;
  result: string;
}

export const FEATURED_CASE_STUDY: FeaturedCaseStudy = {
  title: 'Apparel Manufacturing Turnaround',
  challenge:
    'High sales but low cash availability. The founder lacked visibility into which product lines were actually profitable.',
  intervention:
    'Implemented unit-economics tracking and weekly MIS reviews. Restructured procurement based on production cycles.',
  metrics: [
    { value: '₹1.5Cr', label: 'Capital Unlocked' },
    { value: '60%', label: 'Shift to Profit' },
    { value: '100%', label: 'Cash Visibility' },
  ],
};

export const QUICK_WINS: QuickWin[] = [
  {
    id: 'quickwin-tech',
    title: 'Tech Consultancy',
    description: 'Implemented cost-center reporting to identify efficient teams.',
    result: 'Uncovered a vertical with 45% Net Margin.',
  },
  {
    id: 'quickwin-d2c',
    title: 'D2C Startup',
    description: 'Linked marketing spend directly to contribution margin tracking.',
    result: 'Reduced CAC by 10% while stable.',
  },
];
