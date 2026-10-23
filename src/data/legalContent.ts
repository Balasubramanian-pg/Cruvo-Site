export interface LegalSection {
  title: string;
  content: string[];
}

export interface LegalDocument {
  id: 'privacy' | 'terms' | 'disclosures';
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalDocument = {
  id: 'privacy',
  title: 'Privacy Policy',
  subtitle: 'Digital Personal Data Protection Act, 2023 & IT SPDI Rules, 2011 Compliance Notice',
  lastUpdated: 'October 2025',
  sections: [
    {
      title: '1. Introduction & Statutory Scope',
      content: [
        'Cruvo Consulting ("Cruvo", "we", "us", or "our") is committed to safeguarding the digital privacy of our clients, prospective clients, and website visitors.',
        'This Privacy Policy is published in strict compliance with Section 5 and Section 6 of the Digital Personal Data Protection Act, 2023 ("DPDP Act") and Rule 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules").',
        'By accessing our website (https://cruvo.in) or communicating your business information to us, you acknowledge and consent to the data processing practices outlined in this policy.',
      ],
    },
    {
      title: '2. Personal Data We Collect',
      content: [
        'We collect only the personal and business data strictly necessary to respond to strategic advisory inquiries and deliver management consulting services:',
        '• Identity & Contact Data: Full Name, Official Email Address, Contact Telephone Number.',
        '• Business & Professional Data: Company Name, Industry Sector, Operational Stage, and general high-level operational pain points.',
        '• Technical & Telemetry Data: IP address, browser type, device information, and anonymous usage telemetry collected through essential cookies.',
        'We do not collect sensitive personal financial passwords, biometric records, or Aadhaar credentials through this website.',
      ],
    },
    {
      title: '3. Purpose of Processing',
      content: [
        'Your personal and business data is processed solely for legitimate and specific business purposes under Section 6 of the DPDP Act:',
        '• Assessing eligibility and scheduling strategic CFO consultation sessions.',
        '• Formulating customized advisory proposals, scopes of work, and diagnostic roadmaps.',
        '• Communicating critical updates regarding our services, compliance alerts, and insights.',
        '• Complying with applicable Indian laws, accounting standards, and statutory disclosure mandates.',
        'Cruvo does not sell, rent, monetize, or disclose your personal information to third-party marketing brokers.',
      ],
    },
    {
      title: '4. Rights of the Data Principal',
      content: [
        'Under Chapter III (Sections 11 to 14) of the DPDP Act 2023, you (as the Data Principal) enjoy statutory rights:',
        '• Right to Access: You may request a summary of personal data currently processed by Cruvo and the identities of any authorized processing partners.',
        '• Right to Correction & Erasure: You may request correction of inaccurate data or complete erasure of your personal data when the processing purpose is fulfilled.',
        '• Right of Grievance Redressal: You have the right to register a grievance with our designated Grievance Officer and escalate to the Data Protection Board of India if unresolved.',
        '• Right to Nominate: You may designate an individual to exercise your data rights in the event of death or incapacity.',
      ],
    },
    {
      title: '5. Consent Revocation Protocol',
      content: [
        'Under Section 6(4) of the DPDP Act, you have the statutory right to withdraw your consent at any time with the same ease as giving it.',
        'To withdraw your consent or request data erasure, email us at privacy@cruvo.in or cruvoconsulting@gmail.com with the subject line "DPDP Data Erasure / Consent Revocation Request".',
        'We verify requests and execute data deletion across all operational archives within 72 hours, except where retention is mandated by statutory Indian tax or corporate record-keeping laws.',
      ],
    },
    {
      title: '6. Data Security & Storage in India',
      content: [
        'We enforce industry-standard technical, organizational, and physical safeguards in accordance with Section 43A of the Information Technology Act, 2000.',
        'All client communication, financial diagnostic notes, and inquiry records are stored on secure, encrypted servers adhering to Indian data sovereignty and confidentiality best practices.',
      ],
    },
    {
      title: '7. Statutory Grievance Redressal Officer',
      content: [
        'In compliance with Rule 5(9) of the IT SPDI Rules, 2011 and Rule 3(2) of the Information Technology Rules, 2021, the designated Grievance Officer for Cruvo Consulting is:',
        'Name: Anika Nair, CA',
        'Designation: Grievance & Compliance Officer',
        'Physical Address: Cruvo Consulting Advisory, Pune / Mumbai Region, Maharashtra 411001, India',
        'Direct Email: cruvoconsulting@gmail.com / grievance@cruvo.in',
        'Contact Number: +91 9325094211',
        'Statutory Timelines: All grievances will be acknowledged within 24 to 36 hours and resolved within 15 working days from receipt.',
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
  id: 'terms',
  title: 'Terms of Service',
  subtitle: 'Indian Contract Act, 1872 & Information Technology Act, 2000 Terms of Use',
  lastUpdated: 'October 2025',
  sections: [
    {
      title: '1. Acceptance of Terms',
      content: [
        'These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "Client", or "Visitor") and Cruvo Consulting ("Cruvo"), an advisory entity operating under the laws of the Republic of India.',
        'By browsing, accessing, or transmitting information through https://cruvo.in, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must immediately cease using this website.',
      ],
    },
    {
      title: '2. Scope of Services & Nature of Advisory',
      content: [
        'Cruvo Consulting provides management consulting, fractional CFO advisory, business intelligence systems, and internal financial operational frameworks for small and medium enterprises (SMEs).',
        'General website content, case summaries, turnaround frameworks, and diagnostic self-assessments are published solely for general informational and educational purposes.',
        'Nothing on this website creates a formal consultant-client advisory relationship until a formal, mutually executed Master Services Agreement (MSA) or Statement of Work (SOW) is signed.',
      ],
    },
    {
      title: '3. Intellectual Property Rights',
      content: [
        'All proprietary methodologies, unit-economics frameworks, MIS templates, visual designs, trademarks, text, graphics, and code on this website are the exclusive intellectual property of Cruvo Consulting, protected under the Copyright Act, 1957 and Trade Marks Act, 1999.',
        'Unauthorized reproduction, automated web scraping, data extraction for AI training, public mirroring, or commercial exploitation is strictly prohibited without prior written authorization.',
      ],
    },
    {
      title: '4. User Conduct & Inquiries',
      content: [
        'When submitting information through our contact or diagnostic forms, you represent and warrant that:',
        '• All information submitted is true, accurate, current, and authorized by your business organization.',
        '• You will not transmit malicious code, automated bots, unlawful content, or unsolicited commercial communications.',
        '• You possess the requisite corporate authority to initiate strategic advisory discussions on behalf of your entity.',
      ],
    },
    {
      title: '5. Non-Disclosure & Mutual Confidentiality',
      content: [
        'Cruvo strictly respects the sensitive nature of business financial bottlenecks. Under Section 72A of the IT Act 2000, we treat all financial records, supplier structures, and business context submitted through this website as confidential.',
        'Such information will never be disclosed to third parties, competitors, or external bodies, except as strictly required under formal legal subpoena or statutory regulatory audit.',
      ],
    },
    {
      title: '6. Retainer, Billing & Cancellation Terms',
      content: [
        '• Strategic Discovery Calls: Introductory exploratory calls or diagnostic sessions are conducted without monetary obligation unless a specialized technical audit is agreed in writing.',
        '• Retained Advisory Engagements: Formal fractional CFO retainers are governed by dedicated SOWs specifying deliverables, monthly fees, and milestones.',
        '• Refund & Cancellation: Retainer payments cover allocated professional hours and intellectual capital; fees paid for services already rendered are non-refundable.',
        '• Termination: Either party may terminate a formal engagement upon 14 to 30 days written notice as stipulated in the client SOW.',
      ],
    },
    {
      title: '7. Disclaimer of Warranties ("As-Is")',
      content: [
        'The website and all materials are provided on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied.',
        'While we strive for analytical accuracy, Cruvo does not warrant that website functionality will be uninterrupted, error-free, or completely invulnerable to external cyber incidents.',
      ],
    },
    {
      title: '8. Limitation of Liability',
      content: [
        'To the maximum extent permissible under Section 73 of the Indian Contract Act, 1872:',
        '• Cruvo Consulting, its founder, partners, and advisors shall NOT be liable for any indirect, special, incidental, punitive, or consequential damages whatsoever (including, without limitation, damages for loss of profits, business interruption, loss of business information, or commercial goodwill).',
        '• In no event shall Cruvo’s aggregate monetary liability arising out of or related to website usage exceed ₹10,000 (Ten Thousand Indian Rupees) or the total fees paid by the user to Cruvo in the preceding three (3) months, whichever is lower.',
      ],
    },
    {
      title: '9. Dispute Resolution & Exclusive Jurisdiction',
      content: [
        'These Terms shall be governed by, construed, and enforced in accordance with the substantive laws of the Republic of India.',
        'Any dispute, controversy, or claim arising out of or relating to this website shall first be referred to mutual conciliation for thirty (30) days.',
        'Failing conciliation, disputes shall be resolved by binding arbitration under the Arbitration and Conciliation Act, 1996 by a sole arbitrator mutually agreed upon. The seat and venue of arbitration shall be Pune / Mumbai, Maharashtra, India.',
        'Subject to arbitration, courts situated in Pune / Mumbai, Maharashtra shall possess exclusive territorial jurisdiction.',
      ],
    },
  ],
};

export const REGULATORY_DISCLOSURES: LegalDocument = {
  id: 'disclosures',
  title: 'Regulatory Disclosures & Disclaimers',
  subtitle: 'ICAI Code of Ethics, SEBI Regulations, Consumer Protection Act & Corporate Disclosures',
  lastUpdated: 'October 2025',
  sections: [
    {
      title: '1. ICAI Code of Ethics & Professional Scope Disclaimer',
      content: [
        'Cruvo Consulting is an independent strategic management and operational business consulting firm.',
        'Important Notice regarding the Institute of Chartered Accountants of India (ICAI):',
        '• Founder Anika Nair is a certified member of the Institute of Chartered Accountants of India. However, Cruvo Consulting is a management advisory enterprise and is NOT a practicing CA partnership firm rendering statutory audit, attest functions, or services reserved exclusively for practicing Chartered Accountants under the Chartered Accountants Act, 1949.',
        '• In accordance with Clause (6) and Clause (7) of Part I of the First Schedule to the Chartered Accountants Act, 1949, this website does not constitute an advertisement, solicitation, personal communication, invitation, or inducement to solicit professional accounting or auditing work.',
        '• The contents hereof are purely educational and operational for business executives and do not substitute for formal statutory audits or certified tax filings.',
      ],
    },
    {
      title: '2. SEBI Non-Investment Advisory Statutory Disclaimer',
      content: [
        'Compliance under SEBI (Investment Advisers) Regulations, 2013 and SEBI (Research Analysts) Regulations, 2014:',
        '• Cruvo Consulting is NOT registered with the Securities and Exchange Board of India (SEBI) as an Investment Adviser (RIA), Research Analyst (RA), Merchant Banker, or Portfolio Management Service (PMS).',
        '• Cruvo does not provide stock tips, securities advice, equity trading strategies, public capital market advice, or retail investment portfolio recommendations.',
        '• All references to "capital unlocked", "working capital optimization", and "enterprise value" refer strictly to internal business operational efficiency, inventory cycle acceleration, debtor recovery discipline, and managerial unit-economics.',
      ],
    },
    {
      title: '3. Turnaround Metrics & Case Studies Substantiation',
      content: [
        'In strict compliance with the Consumer Protection Act, 2019 and the Central Consumer Protection Authority (CCPA) Guidelines for Prevention of Misleading Advertisements, 2022:',
        '• Case studies, client testimonials, and performance metrics published on this site (such as "₹1.5Cr+ Working Capital Unlocked", "25% Margin Improvement", or "15% CAC Reduction") reflect real, specific historical consulting engagements.',
        '• *Statutory Disclaimer: Past performance and metrics achieved with historical clients are illustrative case studies. They depend heavily on baseline financial discipline, management execution speed, market dynamics, and supplier cooperation.',
        '• Cruvo Consulting does not promise, represent, or warrant guaranteed financial returns or automated profitability outcomes for any future client.',
      ],
    },
    {
      title: '4. Entity Legal Identification & Corporate Disclosure',
      content: [
        'Pursuant to Section 12(3)(c) of the Companies Act, 2013, the Limited Liability Partnership Act, 2008, and Indian E-Commerce Trade Disclosures:',
        '• Operating Brand: Cruvo Consulting',
        '• Principal Place of Business: Pune / Mumbai Metro Corridor, Maharashtra 411001, India',
        '• Official Electronic Mail: cruvoconsulting@gmail.com',
        '• Official Helpline: +91 9325094211',
        '• Area Served: Republic of India (Pan-India SME Manufacturing & Service Clusters)',
      ],
    },
  ],
};
