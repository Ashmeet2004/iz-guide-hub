export interface ServiceContent {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  whyChooseUs: string[];
}

export const servicesContent: Record<string, ServiceContent> = {
  "company-registration": {
    slug: "company-registration",
    heroTitle: "Company Registration Services",
    heroSubtitle: "Start your business journey with the right legal structure. Our expert team guides you through every step of company registration in India.",
    overview: "Whether you're a solo entrepreneur or planning to start with multiple partners, choosing the right business structure is crucial for your success. We provide end-to-end company registration services including name approval, documentation, incorporation, and post-incorporation compliance. Our team has successfully registered over 5000+ companies across India.",
    benefits: [
      "Limited Liability Protection for your personal assets",
      "Easy access to funding from investors and banks",
      "Enhanced credibility with customers and vendors",
      "Tax benefits and exemptions for startups",
      "Perpetual succession - business continues regardless of changes",
      "Easy transfer of ownership through shares"
    ],
    features: [
      { title: "Name Reservation", description: "We help you choose and reserve a unique company name through the RUN (Reserve Unique Name) process with MCA." },
      { title: "Document Preparation", description: "Complete preparation of MOA, AOA, and all incorporation documents as per Companies Act, 2013." },
      { title: "DSC & DIN", description: "Obtain Digital Signature Certificates and Director Identification Numbers for all directors." },
      { title: "ROC Filing", description: "File all necessary forms with Registrar of Companies for smooth incorporation." },
      { title: "Certificate of Incorporation", description: "Receive your company's Certificate of Incorporation with CIN and PAN/TAN." },
      { title: "Post-Incorporation Support", description: "Bank account opening, GST registration, and initial compliance setup." }
    ],
    process: [
      { step: "01", title: "Consultation", description: "Discuss your business plans and recommend the best company structure for your needs." },
      { step: "02", title: "Name Approval", description: "Search and reserve your preferred company name with MCA within 2-3 days." },
      { step: "03", title: "Documentation", description: "Prepare and collect all required documents including ID proofs, address proofs, and MOA/AOA." },
      { step: "04", title: "Incorporation", description: "File SPICe+ form and receive Certificate of Incorporation within 7-10 days." }
    ],
    faqs: [
      { question: "What is the minimum capital required to start a Private Limited Company?", answer: "There is no minimum capital requirement for Private Limited Company registration in India. You can start with as little as ₹1." },
      { question: "How many directors are required for company registration?", answer: "A Private Limited Company requires minimum 2 directors and 2 shareholders. For OPC, only 1 director is needed. For LLP, minimum 2 designated partners are required." },
      { question: "How long does the company registration process take?", answer: "With all documents ready, company registration typically takes 7-15 business days. Name reservation takes 2-3 days and incorporation another 5-7 days." },
      { question: "Can NRIs or foreigners be directors in an Indian company?", answer: "Yes, NRIs and foreign nationals can be directors. However, at least one director must be an Indian resident who has stayed in India for 182 days or more in the previous year." }
    ],
    whyChooseUs: [
      "5000+ companies successfully registered",
      "Expert CA and CS team with 20+ years experience",
      "100% online process - no office visits required",
      "Transparent pricing with no hidden charges",
      "Free consultation and business advisory",
      "Post-incorporation compliance support"
    ]
  },
  "gst": {
    slug: "gst",
    heroTitle: "GST Services",
    heroSubtitle: "Complete GST solutions from registration to return filing. Stay compliant with India's unified tax system with our expert guidance.",
    overview: "Goods and Services Tax (GST) is India's comprehensive indirect tax that replaced multiple cascading taxes. Whether you need new registration, monthly/quarterly/annual return filing, or assistance with GST notices, our dedicated GST team ensures 100% compliance. We have filed over 50,000+ GST returns and maintain a 99.9% accuracy rate.",
    benefits: [
      "Legal compliance and avoid penalties",
      "Claim Input Tax Credit on purchases",
      "Expand business across India seamlessly",
      "Build credibility with B2B customers",
      "Access to government tenders and contracts",
      "Simplified tax structure with online filing"
    ],
    features: [
      { title: "GST Registration", description: "Quick and hassle-free GST registration within 3-5 working days with ARN tracking." },
      { title: "GSTR-1 Filing", description: "Outward supply return filing on 11th of every month with invoice matching." },
      { title: "GSTR-3B Filing", description: "Monthly summary return with tax payment before 20th of every month." },
      { title: "Annual Returns", description: "GSTR-9 annual return and GSTR-9C reconciliation for turnover above ₹5 Cr." },
      { title: "E-Way Bills", description: "Generation and management of e-way bills for goods transportation." },
      { title: "GST Notices", description: "Expert handling of show cause notices, assessments, and litigation." }
    ],
    process: [
      { step: "01", title: "Document Collection", description: "Gather PAN, Aadhaar, address proof, bank details, and business registration documents." },
      { step: "02", title: "Application Filing", description: "Submit GST registration application on the official portal with all documents." },
      { step: "03", title: "Verification", description: "Complete Aadhaar authentication or physical verification as required." },
      { step: "04", title: "GSTIN Allotment", description: "Receive your 15-digit GSTIN and start issuing GST invoices." }
    ],
    faqs: [
      { question: "Who needs to register for GST?", answer: "GST registration is mandatory if your aggregate turnover exceeds ₹40 lakhs (₹20 lakhs for special category states). It's also mandatory for e-commerce sellers, inter-state suppliers, and certain other categories regardless of turnover." },
      { question: "What is the due date for GST return filing?", answer: "GSTR-1 is due on 11th of the following month, GSTR-3B on 20th of the following month. For quarterly filers, returns are due on 22nd/24th of the month following the quarter." },
      { question: "Can I claim Input Tax Credit on all purchases?", answer: "ITC can be claimed on goods and services used for business purposes, provided you have valid tax invoices and the supplier has filed their returns. Certain items like personal vehicles, food & beverages are blocked from ITC." },
      { question: "What happens if I miss the GST filing deadline?", answer: "Late filing attracts interest @ 18% per annum on tax due, plus late fee of ₹50/day (₹25 CGST + ₹25 SGST) subject to maximum ₹10,000 per return." }
    ],
    whyChooseUs: [
      "50,000+ GST returns filed with 99.9% accuracy",
      "Dedicated GST experts and consultants",
      "Real-time reconciliation with GSTR-2B",
      "ITC optimization to maximize tax savings",
      "GST notice and litigation support",
      "Monthly compliance reminders and tracking"
    ]
  },
  "income-tax": {
    slug: "income-tax",
    heroTitle: "Income Tax Services",
    heroSubtitle: "Comprehensive income tax services for individuals and businesses. From ITR filing to handling tax assessments and notices.",
    overview: "Income tax compliance is essential for every earning individual and business in India. Our team of experienced CAs helps you navigate the complex tax landscape, maximize legitimate deductions, and ensure timely filing. We specialize in all ITR forms from ITR-1 to ITR-7 and provide expert representation before income tax authorities.",
    benefits: [
      "Maximize tax savings through legal deductions",
      "Avoid penalties with timely compliance",
      "Proper documentation for loan applications",
      "Visa processing requires ITR filing",
      "Carry forward losses for future offset",
      "Build financial credibility and track record"
    ],
    features: [
      { title: "ITR Filing", description: "Expert filing of all ITR forms - ITR-1 to ITR-7 based on income sources and entity type." },
      { title: "Tax Planning", description: "Strategic tax planning to minimize liability through investments, deductions, and exemptions." },
      { title: "TDS Compliance", description: "TDS return filing and TDS certificates generation for employers and businesses." },
      { title: "Advance Tax", description: "Calculate and pay advance tax on time to avoid interest under Section 234B and 234C." },
      { title: "Tax Notice Response", description: "Professional handling of scrutiny notices, intimation orders, and assessments." },
      { title: "Appeals & Representation", description: "Representation before CIT(Appeals), ITAT, and settlement commission." }
    ],
    process: [
      { step: "01", title: "Data Collection", description: "Gather Form 16, bank statements, investment proofs, and other income documents." },
      { step: "02", title: "Income Computation", description: "Calculate total income from all sources and applicable deductions." },
      { step: "03", title: "Tax Calculation", description: "Compute tax liability and verify TDS credits from Form 26AS." },
      { step: "04", title: "Filing & Verification", description: "File ITR online and complete e-verification via Aadhaar OTP or EVC." }
    ],
    faqs: [
      { question: "Which ITR form should I file?", answer: "ITR-1 for salary income up to ₹50 lakhs, ITR-2 for capital gains/multiple properties, ITR-3 for business income, ITR-4 for presumptive income. Companies file ITR-6 and NGOs file ITR-7." },
      { question: "What is the due date for filing income tax returns?", answer: "For individuals without audit requirement: July 31st. For businesses requiring audit: October 31st. For transfer pricing cases: November 30th." },
      { question: "Can I file revised return if I made a mistake?", answer: "Yes, you can file a revised return before the end of the relevant assessment year (March 31st of the year following the financial year) or before completion of assessment, whichever is earlier." },
      { question: "What are the consequences of not filing ITR?", answer: "Non-filing can result in penalty up to ₹10,000, interest on tax due, inability to carry forward losses, and prosecution for tax evasion in serious cases." }
    ],
    whyChooseUs: [
      "Certified CAs with 20+ years experience",
      "10,000+ ITRs filed annually",
      "Tax saving consultation included",
      "Secure data handling and confidentiality",
      "Notice support at no extra cost",
      "Quick processing within 24-48 hours"
    ]
  },
  "business-licenses": {
    slug: "business-licenses",
    heroTitle: "Business Licenses & Registrations",
    heroSubtitle: "Get all essential business licenses and certifications. Navigate regulatory requirements with ease.",
    overview: "Operating a business in India requires various licenses and registrations depending on your industry, location, and activities. From FSSAI for food businesses to ISO certification for quality management, our team helps you obtain all necessary approvals quickly and efficiently. We handle the entire process from application to certificate delivery.",
    benefits: [
      "Legal compliance to operate your business",
      "Access to government schemes and subsidies",
      "Build customer trust with certifications",
      "Required for import/export activities",
      "Participate in government tenders",
      "Professional credibility in the market"
    ],
    features: [
      { title: "FSSAI License", description: "Food safety registration and licensing for food manufacturing, processing, and retail." },
      { title: "ISO Certification", description: "Quality management system certifications including ISO 9001, 14001, 22000, 27001." },
      { title: "Trademark Registration", description: "Protect your brand identity with trademark registration and monitoring." },
      { title: "Import Export Code", description: "IEC registration for businesses engaged in international trade." },
      { title: "MSME/Udyam", description: "Udyam registration for availing MSME benefits and government schemes." },
      { title: "Digital Signature", description: "Class 2 and Class 3 DSC for secure online transactions and filings." }
    ],
    process: [
      { step: "01", title: "Requirement Analysis", description: "Identify all licenses required based on your business type, location, and activities." },
      { step: "02", title: "Documentation", description: "Prepare and compile all necessary documents for each license application." },
      { step: "03", title: "Application Filing", description: "Submit applications through respective government portals with proper fee payment." },
      { step: "04", title: "Follow-up & Delivery", description: "Track applications, respond to queries, and deliver certificates upon approval." }
    ],
    faqs: [
      { question: "Which FSSAI license do I need - registration or license?", answer: "Registration is for small businesses with turnover up to ₹12 lakhs. State license for ₹12-20 crore turnover, and Central license for larger businesses, importers, and manufacturers." },
      { question: "How long does trademark registration take?", answer: "Trademark registration typically takes 12-18 months if there are no objections. However, you get TM symbol protection immediately upon filing." },
      { question: "Is MSME registration mandatory?", answer: "MSME/Udyam registration is not mandatory but highly recommended to avail benefits like priority lending, lower interest rates, protection against delayed payments, and government tender preferences." },
      { question: "What is the validity of IEC code?", answer: "IEC (Import Export Code) has lifetime validity. It doesn't require renewal but needs to be updated annually on the DGFT portal." }
    ],
    whyChooseUs: [
      "All licenses under one roof",
      "Expert handling reduces rejection chances",
      "Faster processing than self-filing",
      "Transparent tracking and updates",
      "Post-issuance compliance support",
      "Affordable pricing with no hidden costs"
    ]
  },
  "accounting-compliances": {
    slug: "accounting-compliances",
    heroTitle: "Accounting & Compliance Services",
    heroSubtitle: "Keep your business compliant with all statutory requirements. Professional accounting and annual compliance services.",
    overview: "Every registered business entity in India has mandatory compliance requirements with various regulatory authorities like MCA, Income Tax, and GST. Non-compliance can lead to heavy penalties, disqualification of directors, and even striking off the company. Our dedicated compliance team ensures you never miss a deadline.",
    benefits: [
      "Avoid penalties and prosecution",
      "Maintain company's active status",
      "Protect director's DIN from disqualification",
      "Clean compliance track for M&A activities",
      "Ready financials for loan applications",
      "Peace of mind with expert handling"
    ],
    features: [
      { title: "Annual Filings", description: "File AOC-4 (financial statements) and MGT-7 (annual return) with MCA on time." },
      { title: "Statutory Audit", description: "Complete audit of financial statements by qualified Chartered Accountants." },
      { title: "Book Keeping", description: "Maintain proper books of accounts as per Companies Act and accounting standards." },
      { title: "Board Meetings", description: "Ensure proper conduct of board meetings and maintain minutes as required." },
      { title: "Statutory Registers", description: "Maintain all statutory registers like register of members, directors, charges, etc." },
      { title: "Due Diligence", description: "Comprehensive due diligence for mergers, acquisitions, and investments." }
    ],
    process: [
      { step: "01", title: "Data Collection", description: "Collect bank statements, invoices, receipts, and other financial documents." },
      { step: "02", title: "Bookkeeping", description: "Record all transactions and prepare trial balance and ledgers." },
      { step: "03", title: "Financial Statements", description: "Prepare Balance Sheet, P&L statement, and notes to accounts." },
      { step: "04", title: "Filing & Compliance", description: "Complete statutory audit and file annual returns with MCA." }
    ],
    faqs: [
      { question: "When is the due date for annual filing with MCA?", answer: "AOC-4 is due within 30 days of AGM (maximum by November 30). MGT-7 is due within 60 days of AGM (maximum by December 31). AGM must be held by September 30." },
      { question: "What happens if annual returns are not filed?", answer: "Late filing attracts additional fee of ₹100/day. Continued non-compliance can lead to striking off the company and disqualification of directors for 5 years." },
      { question: "Is audit mandatory for all companies?", answer: "Every company registered under Companies Act 2013 requires statutory audit, regardless of turnover or profit. Only small companies may get exemption from internal audit." },
      { question: "What are the consequences of not maintaining proper books?", answer: "Non-maintenance of books can lead to imprisonment up to 1 year and fine up to ₹1.5 lakh for officers in default. It also creates issues during tax assessments." }
    ],
    whyChooseUs: [
      "Dedicated compliance calendar and reminders",
      "In-house CA team for audits",
      "Real-time compliance dashboard",
      "Clean track record over 15 years",
      "Fixed annual packages available",
      "Expert support for notice handling"
    ]
  },
  "funds-loans": {
    slug: "funds-loans",
    heroTitle: "Funding & Loan Services",
    heroSubtitle: "Access the right funding for your business growth. Expert assistance in loan documentation and bank liaison.",
    overview: "Securing the right funding is crucial for business growth, whether you're starting up, expanding, or managing working capital needs. Our team helps you navigate the complex loan landscape, prepare compelling project reports, and liaise with banks and NBFCs to get the best terms. We have facilitated over ₹500 crores in business financing.",
    benefits: [
      "Access to multiple lenders and best rates",
      "Professional project reports increase approval chances",
      "Faster processing with proper documentation",
      "Guidance on government subsidy schemes",
      "Working capital optimization",
      "Restructuring support if facing issues"
    ],
    features: [
      { title: "Project Reports", description: "Detailed Project Reports (DPR) for bank loans, MUDRA, PMEGP, and other schemes." },
      { title: "Working Capital", description: "Cash credit, overdraft, and bill discounting facilities for operational needs." },
      { title: "Term Loans", description: "Long-term financing for machinery, equipment, and capital expenditure." },
      { title: "Business Loans", description: "Unsecured and secured business loans from banks and NBFCs." },
      { title: "MUDRA Loans", description: "Shishu, Kishore, and Tarun loans under PM MUDRA Yojana up to ₹10 lakhs." },
      { title: "Loan Restructuring", description: "Assistance in loan restructuring and one-time settlement negotiations." }
    ],
    process: [
      { step: "01", title: "Requirement Assessment", description: "Understand your funding needs, purpose, and repayment capacity." },
      { step: "02", title: "Document Preparation", description: "Prepare project reports, financial projections, and loan application documents." },
      { step: "03", title: "Lender Matching", description: "Identify suitable banks/NBFCs and submit applications with follow-up." },
      { step: "04", title: "Disbursement Support", description: "Complete documentation, security creation, and ensure smooth disbursement." }
    ],
    faqs: [
      { question: "What documents are needed for a business loan?", answer: "Typically required: Business registration documents, PAN/Aadhaar, bank statements (12-24 months), ITR (2-3 years), GST returns, financial statements, and property documents for secured loans." },
      { question: "What is the interest rate for business loans?", answer: "Interest rates vary from 8% to 24% depending on the lender, loan type, security offered, and borrower's profile. PSU banks typically offer lower rates than NBFCs." },
      { question: "Can a new business get a loan?", answer: "Yes, new businesses can avail MUDRA loans up to ₹10 lakhs without collateral. For larger loans, typically 2-3 years of business vintage is required, but startups with strong projections can get term loans." },
      { question: "What is the processing time for business loans?", answer: "Unsecured business loans can be processed in 3-7 days. Term loans and working capital facilities typically take 2-4 weeks. Government scheme loans may take 4-8 weeks." }
    ],
    whyChooseUs: [
      "₹500+ crores funding facilitated",
      "Relationships with 50+ lenders",
      "95%+ loan approval success rate",
      "End-to-end documentation support",
      "Best interest rate negotiation",
      "Post-disbursement compliance support"
    ]
  }
};

export const getServiceContent = (slug: string): ServiceContent | undefined => {
  return servicesContent[slug];
};
