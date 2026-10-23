export interface ProcessStep {
  stepNumber: number;
  title: string;
  timeline: string;
  description: string;
  highlights: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery Sprint',
    timeline: 'Weeks 1-2',
    description:
      'Deep dive into your financial data, tools, and challenges. Identify immediate opportunities for improvement.',
    highlights: ['Diagnostic insights', 'Quick wins implementation'],
  },
  {
    stepNumber: 2,
    title: 'Foundation Fixes',
    timeline: 'Weeks 3-6',
    description:
      'Clean, verify, and structure financial data. Establish robust MIS systems and reporting frameworks.',
    highlights: ['Data integrity', 'Trustworthy live reporting'],
  },
  {
    stepNumber: 3,
    title: 'Strategic Layering',
    timeline: 'Weeks 7-12',
    description:
      'Translate financial data into strategic decisions. Implement capital allocation, cost optimization, and profitability frameworks.',
    highlights: ['Actionable 90-day roadmap', 'Strategic decision support'],
  },
  {
    stepNumber: 4,
    title: 'Monthly Strategic Reviews',
    timeline: 'Ongoing',
    description:
      'Regular check-ins with CXO-level summaries to recalibrate strategies and drive informed decision-making.',
    highlights: ['Real-time adjustments', 'Performance recalibration'],
  },
];
