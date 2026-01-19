import { 
  Building2, 
  Receipt, 
  Calculator, 
  FileCheck, 
  BookOpen, 
  Wallet,
  LucideIcon
} from "lucide-react";

export interface SubService {
  name: string;
  slug: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  shortDescription: string;
  subServices: SubService[];
}

export const services: ServiceCategory[] = [
  {
    id: "company-registration",
    name: "Company Registration",
    slug: "company-registration",
    icon: Building2,
    description: "Start your business journey with proper legal structure. We help you register your company with the right business entity type that suits your needs and goals.",
    shortDescription: "Register your business with the right legal structure",
    subServices: [
      { name: "Private Limited Company", slug: "private-limited-company", description: "Ideal for startups and growing businesses with limited liability protection and easy access to funding." },
      { name: "Public Limited Company", slug: "public-limited-company", description: "For larger enterprises looking to raise capital from the public through stock exchanges." },
      { name: "One Person Company", slug: "one-person-company", description: "Perfect for solo entrepreneurs who want the benefits of a company with single ownership." },
      { name: "Sole Proprietorship Firm", slug: "sole-proprietorship-firm", description: "Simplest form of business entity for individual entrepreneurs with minimal compliance." },
      { name: "Section 8 Company Registration", slug: "section-8-company", description: "For non-profit organizations promoting charitable objectives." },
      { name: "Startup India Registration", slug: "startup-india-registration", description: "Get recognized as a startup and avail various government benefits and tax exemptions." },
      { name: "Limited Liability Partnership", slug: "limited-liability-partnership", description: "Combines flexibility of partnership with benefits of limited liability." },
      { name: "Partnership Firm", slug: "partnership-firm", description: "Traditional partnership structure for businesses with multiple partners." },
    ],
  },
  {
    id: "gst",
    name: "GST",
    slug: "gst",
    icon: Receipt,
    description: "Complete GST solutions from registration to return filing. Stay compliant with India's unified tax system with our expert guidance.",
    shortDescription: "Complete GST registration, filing and compliance",
    subServices: [
      { name: "GST Annual Return", slug: "gst-annual-return", description: "File your annual GST return (GSTR-9) accurately and on time." },
      { name: "GST Filing For E-Commerce", slug: "gst-filing-ecommerce", description: "Specialized GST filing services for e-commerce sellers and operators." },
      { name: "GST Modification", slug: "gst-modification", description: "Update or modify your GST registration details hassle-free." },
      { name: "GST Monthly Return", slug: "gst-monthly-return", description: "Regular monthly GST return filing (GSTR-1, GSTR-3B) services." },
      { name: "GST Notices and Litigation", slug: "gst-notices-litigation", description: "Expert assistance in handling GST notices and litigation matters." },
      { name: "GST Cancellation", slug: "gst-cancellation", description: "Proper cancellation of GST registration when no longer required." },
      { name: "GST Cancellation Return", slug: "gst-cancellation-return", description: "Final return filing upon GST registration cancellation." },
      { name: "GST Quarterly Return", slug: "gst-quarterly-return", description: "Quarterly GST return filing for eligible taxpayers." },
      { name: "GST Registration", slug: "gst-registration", description: "New GST registration for businesses exceeding threshold limits." },
      { name: "GST Registration for E-Commerce Sellers", slug: "gst-registration-ecommerce", description: "Mandatory GST registration for online sellers." },
      { name: "Letter of Undertaking (LUT) Registration", slug: "lut-registration", description: "LUT registration for exporters to export without paying GST." },
    ],
  },
  {
    id: "income-tax",
    name: "Income Tax",
    slug: "income-tax",
    icon: Calculator,
    description: "Comprehensive income tax services for individuals and businesses. From ITR filing to handling tax assessments and notices.",
    shortDescription: "Income tax filing, planning and assessments",
    subServices: [
      { name: "12A and 80G Registration", slug: "12a-80g-registration", description: "Tax exemption registration for NGOs and charitable trusts." },
      { name: "80 IAC Tax Exemption", slug: "80-iac-tax-exemption", description: "Tax exemption for eligible startups under Section 80-IAC." },
      { name: "FCRA Registration", slug: "fcra-registration", description: "Registration to receive foreign contributions for NGOs." },
      { name: "Forms 15CA & 15CB", slug: "forms-15ca-15cb", description: "Certificates for foreign remittances and payments." },
      { name: "Income Tax Assessments", slug: "income-tax-assessments", description: "Expert representation during tax assessments and scrutiny." },
      { name: "Income Tax Notice", slug: "income-tax-notice", description: "Professional handling of income tax department notices." },
      { name: "ITR-1 (SAHAJ)", slug: "itr-1-sahaj", description: "For salaried individuals with income up to Rs. 50 lakhs." },
      { name: "ITR-2", slug: "itr-2", description: "For individuals with capital gains or multiple house properties." },
      { name: "ITR-3", slug: "itr-3", description: "For individuals with business or professional income." },
      { name: "ITR-4", slug: "itr-4", description: "For presumptive income under Section 44AD/44ADA." },
      { name: "ITR-5", slug: "itr-5", description: "For partnerships, LLPs, and associations." },
      { name: "ITR-6", slug: "itr-6", description: "For companies other than those claiming exemption." },
      { name: "ITR-7", slug: "itr-7", description: "For trusts, political parties, and institutions." },
      { name: "TDS Return Filing", slug: "tds-return-filing", description: "Quarterly TDS return preparation and filing." },
    ],
  },
  {
    id: "business-licenses",
    name: "Business Licenses",
    slug: "business-licenses",
    icon: FileCheck,
    description: "Get all essential business licenses and certifications. We help you navigate regulatory requirements and obtain necessary approvals.",
    shortDescription: "Essential licenses, registrations and certifications",
    subServices: [
      { name: "BIS Certification", slug: "bis-certification", description: "Bureau of Indian Standards certification for product quality." },
      { name: "Digital Signature Certificate", slug: "digital-signature-certificate", description: "Class 2 and Class 3 DSC for online filings." },
      { name: "ESI Registrations", slug: "esi-registrations", description: "Employee State Insurance registration for employers." },
      { name: "FSSAI Registrations", slug: "fssai-registrations", description: "Food safety license for food business operators." },
      { name: "GEM Registration", slug: "gem-registration", description: "Government e-Marketplace registration for sellers." },
      { name: "IEC Modification", slug: "iec-modification", description: "Update your Import Export Code details." },
      { name: "IEC Registration", slug: "iec-registration", description: "Import Export Code for international trade." },
      { name: "ISI Mark Registration", slug: "isi-mark-registration", description: "ISI certification for manufactured products." },
      { name: "ISO Registration", slug: "iso-registration", description: "International quality management certifications." },
      { name: "LEI Registration", slug: "lei-registration", description: "Legal Entity Identifier for financial transactions." },
      { name: "MSME Registration", slug: "msme-registration", description: "Udyam registration for micro, small, and medium enterprises." },
      { name: "PAN Registration", slug: "pan-registration", description: "Permanent Account Number for tax purposes." },
      { name: "PF Registration", slug: "pf-registration", description: "Provident Fund registration for employers." },
      { name: "Shop and Establishment Registration", slug: "shop-establishment-registration", description: "State-wise shop and establishment license." },
      { name: "TAN Registration", slug: "tan-registration", description: "Tax Deduction Account Number for TDS." },
      { name: "Trademark Registration", slug: "trademark-registration", description: "Protect your brand name and logo legally." },
      { name: "Udyam Registration", slug: "udyam-registration", description: "New MSME registration under Udyam portal." },
    ],
  },
  {
    id: "accounting-compliances",
    name: "Accounting & Compliances",
    slug: "accounting-compliances",
    icon: BookOpen,
    description: "Keep your business compliant with all statutory requirements. Professional accounting and annual compliance services.",
    shortDescription: "Annual compliance and accounting services",
    subServices: [
      { name: "LLP Annual Compliance", slug: "llp-annual-compliance", description: "Complete annual filing requirements for LLPs." },
      { name: "Private Limited Compliances", slug: "private-limited-compliances", description: "Ongoing compliance management for private companies." },
      { name: "Private Limited Company Annual Compliance", slug: "private-limited-annual-compliance", description: "Annual returns and statutory filings for companies." },
      { name: "Partnership Firm Annual Compliance", slug: "partnership-firm-compliance", description: "Yearly compliance requirements for partnership firms." },
      { name: "Due Diligence", slug: "due-diligence", description: "Comprehensive due diligence for mergers and acquisitions." },
    ],
  },
  {
    id: "funds-loans",
    name: "Funds/Loans",
    slug: "funds-loans",
    icon: Wallet,
    description: "Access the right funding for your business growth. We help you prepare documentation and connect with the right financial institutions.",
    shortDescription: "Business funding and loan assistance",
    subServices: [
      { name: "Business Loan", slug: "business-loan", description: "Unsecured and secured business loans for enterprises." },
      { name: "Detailed Project Report", slug: "detailed-project-report", description: "Comprehensive DPR preparation for bank financing." },
      { name: "Project Report", slug: "project-report", description: "Project reports for loan applications and approvals." },
      { name: "Retail Loan", slug: "retail-loan", description: "Personal and retail loan assistance and documentation." },
      { name: "Term Loan", slug: "term-loan", description: "Long-term financing for capital expenditure." },
      { name: "Working Capital Loan", slug: "working-capital-loan", description: "Short-term funding for operational expenses." },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceCategory | undefined => {
  return services.find(service => service.slug === slug);
};

export const getSubServiceBySlug = (serviceSlug: string, subServiceSlug: string): SubService | undefined => {
  const service = getServiceBySlug(serviceSlug);
  return service?.subServices.find(sub => sub.slug === subServiceSlug);
};
