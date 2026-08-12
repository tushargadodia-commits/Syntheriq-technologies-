import { ServiceItem, ProcessStep, PortfolioProject, WhyChooseUsPillar, FounderInfo } from '../types';

export const COMPANY_INFO = {
  name: 'Syntheriq Technologies',
  tagline: 'Engineering the Future',
  description: 'Syntheriq Technologies is an emerging technology solutions company providing high-performance software engineering, web & mobile applications, AI integration, CRM & ERP systems, and business automation.',
  location: 'West Delhi, Delhi, India - 110041',
  addressShort: 'West Delhi, Delhi 110041',
  email: 'tushar@syntheriqtechnologies.com',
  phone: '+91 9289425381',
  phoneClean: '+919289425381',
  website: 'www.syntheriqtechnologies.com',
  websiteUrl: 'https://www.syntheriqtechnologies.com',
  workingHours: 'Mon - Sat: 9:30 AM - 6:30 PM IST',
};

export const FOUNDER_INFO: FounderInfo = {
  name: 'Tushar',
  role: 'Founder & Chief Technology Lead',
  location: 'West Delhi, India',
  email: 'tushar@syntheriqtechnologies.com',
  bio: 'Driven by a passion for modern software architecture and robust technical execution, Tushar founded Syntheriq Technologies to bridge the gap between complex enterprise goals and elegant, maintainable digital products.',
  philosophy: 'We do not believe in superficial, generic web templates. Every system engineered at Syntheriq Technologies is architected for real scalability, security, transparent communication, and tangible business utility.'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    subtitle: 'Ultra-fast, responsive & search-optimized digital web presence',
    iconName: 'Globe',
    category: 'web',
    shortDesc: 'Custom corporate, brand, and marketing websites built with high-performance modern web frameworks.',
    fullDesc: 'We craft bespoke corporate websites designed for speed, search visibility, and maximum conversion. Our websites feature modern layouts, smooth motion graphics, clean typography, and mobile-first responsiveness.',
    deliverables: [
      'Custom Responsive UI/UX Design',
      'SEO Optimization & Schema Structured Data',
      'CMS Integration or Static High-Performance Deployment',
      'Cross-Browser & Mobile Compatibility',
      'Web Analytics & Performance Benchmarking'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'Node.js'],
    idealFor: 'Businesses needing a high-trust, fast, modern web presence that converts visitors into enterprise inquiries.'
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    subtitle: 'Scalable SaaS platforms, customer portals & web tools',
    iconName: 'Layout',
    category: 'web',
    shortDesc: 'Feature-rich single-page applications, dashboards, and SaaS platforms engineered for demanding workflows.',
    fullDesc: 'From interactive client dashboards to full-scale SaaS platforms, we build secure, modular web applications with real-time data sync, state management, and seamless API integrations.',
    deliverables: [
      'Interactive React & Full-Stack Application Frontend',
      'RESTful & GraphQL Server API Architecture',
      'Role-Based Access Control (RBAC) & Authentication',
      'Real-Time WebSockets & Data Streaming',
      'Database Schema Optimization & Storage'
    ],
    techStack: ['React', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis'],
    idealFor: 'Startups and enterprises launching cloud SaaS tools, internal portals, or customer self-service web platforms.'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    subtitle: 'Native & cross-platform Android and iOS solutions',
    iconName: 'Smartphone',
    category: 'mobile',
    shortDesc: 'High-performance mobile applications built natively and cross-platform for Android and iOS devices.',
    fullDesc: 'We develop intuitive mobile apps optimized for fluid UI, offline support, push notifications, and device hardware integration. We cover the entire product lifecycle from concept to app store publishing.',
    deliverables: [
      'Cross-Platform Android & iOS Application Codebase',
      'Offline Data Caching & Cloud Synchronization',
      'Push Notification Infrastructure',
      'Biometric Security & Mobile Payments',
      'Google Play & Apple App Store Publishing Support'
    ],
    techStack: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Firebase', 'REST APIs'],
    idealFor: 'Companies expanding digital services directly into consumer or field team mobile devices.'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    subtitle: 'Generative AI, smart search, chatbots & predictive models',
    iconName: 'Sparkles',
    category: 'ai',
    shortDesc: 'Custom AI model integration, intelligent chatbots, automated document insights, and recommendation engines.',
    fullDesc: 'We integrate cutting-edge Large Language Models (LLMs), AI assistants, natural language processing, and predictive analytics directly into your existing business software and workflows.',
    deliverables: [
      'Custom Generative AI & Gemini/GPT Integration',
      'Intelligent Customer Service & Knowledge Base Bots',
      'Document Parsing & Automated Data Extraction',
      'AI-Powered Predictive Analytics Dashboards',
      'Vector Database Search & RAG Architecture'
    ],
    techStack: ['Gemini API', 'OpenAI API', 'Python', 'LangChain', 'Pinecone', 'TensorFlow', 'Node.js'],
    idealFor: 'Businesses aiming to automate manual knowledge tasks, improve user engagement, and gain smart insights.'
  },
  {
    id: 'crm-development',
    title: 'CRM Development',
    subtitle: 'Tailored Customer Relationship Management software',
    iconName: 'Users',
    category: 'enterprise',
    shortDesc: 'Custom CRM systems to track leads, manage customer pipelines, automate sales follow-ups, and log deals.',
    fullDesc: 'Off-the-shelf CRMs often add clutter and unwanted recurring license fees. We build lean, custom CRM solutions tailored specifically to your sales workflows, team structure, and reporting requirements.',
    deliverables: [
      'Visual Sales Pipeline & Lead Kanban Stages',
      'Automated Email & WhatsApp Inquiry Routing',
      'Client Interaction History & Activity Logs',
      'Custom Analytics & Sales Performance Reports',
      'Third-Party Payment & Telephony Integrations'
    ],
    techStack: ['React', 'Express.js', 'PostgreSQL', 'Tailwind', 'Chart.js / Recharts', 'REST APIs'],
    idealFor: 'Growing sales teams, agencies, B2B services, and real estate enterprises needing tailored CRM pipelines.'
  },
  {
    id: 'erp-systems',
    title: 'ERP Systems',
    subtitle: 'Centralized Enterprise Resource Planning software',
    iconName: 'Building2',
    category: 'enterprise',
    shortDesc: 'All-in-one management systems unifying inventory, procurement, billing, HR, and operation analytics.',
    fullDesc: 'We design unified ERP systems that connect disparate business departments into one centralized dashboard. Streamline inventory tracking, order management, financial logging, and staff dispatching.',
    deliverables: [
      'Multi-Module ERP Dashboard (Inventory, HR, Finance)',
      'Automated Purchase Orders & Stock Alerts',
      'Role-Based Employee Permission Controls',
      'Custom Financial Reporting & GST Invoicing Modules',
      'Cloud Deployment with Automated Data Backups'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'RESTful Services', 'TypeScript'],
    idealFor: 'Manufacturing, distribution, logistics, and multi-branch companies modernizing core business operations.'
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    subtitle: 'Bespoke enterprise applications engineered to your exact logic',
    iconName: 'Code',
    category: 'enterprise',
    shortDesc: 'End-to-end custom software design, database architecture, legacy modernization, and API engineering.',
    fullDesc: 'When off-the-shelf tools fail to fit your exact operational logic, we build ground-up custom software engineered for reliability, modular architecture, maintainability, and clean code standards.',
    deliverables: [
      'Full Technical Specifications & Architecture Blueprint',
      'Clean Modular Backend & Frontend Codebase',
      'Automated Testing Suite (Unit, Integration & E2E)',
      'Legacy System Data Migration & API Layer',
      'Comprehensive Technical Documentation & Source Code Ownership'
    ],
    techStack: ['TypeScript', 'Node.js', 'Express', 'React', 'Python', 'SQL / NoSQL Databases'],
    idealFor: 'Organizations requiring unique business logic, high-security data compliance, or custom domain tools.'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    subtitle: 'Workflow orchestration, webhooks & process elimination',
    iconName: 'Workflow',
    category: 'enterprise',
    shortDesc: 'Automate repetitive manual operations, data syncing between software, invoice generation, and notifications.',
    fullDesc: 'Eliminate human error and repetitive data entry. We design automated software pipelines that connect your forms, spreadsheets, messaging channels, databases, and third-party APIs into seamless workflows.',
    deliverables: [
      'Custom API Integration & Webhook Listeners',
      'Automated Email / SMS / WhatsApp Notification Triggers',
      'Scheduled Batch Data Processing & Sync Scripts',
      'Document & Invoice Auto-Generation Engine',
      'Real-Time Error Handling & Failure Monitoring'
    ],
    techStack: ['Node.js', 'Python', 'Zapier / Make Webhooks', 'CRON Jobs', 'REST APIs', 'Cloud Functions'],
    idealFor: 'Teams spending excessive hours copying data between applications, generating manual reports, or handling manual notifications.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Requirement Analysis',
    duration: 'Phase 1',
    description: 'We dive deep into your business objectives, target audience, workflow bottlenecks, and technical requirements to define clear milestones.',
    deliverables: ['Requirement Specification Document', 'Project Roadmap & Scope Boundaries', 'Architecture Proposal'],
    icon: 'Search'
  },
  {
    number: '02',
    title: 'UI/UX & Systems Architecture',
    duration: 'Phase 2',
    description: 'We craft intuitive visual wireframes, design systems, and database schemas before writing a single line of production code.',
    deliverables: ['Interactive Wireframes', 'Database Schema Diagram', 'API & Integration Blueprint'],
    icon: 'PenTool'
  },
  {
    number: '03',
    title: 'Agile Software Engineering',
    duration: 'Phase 3',
    description: 'Our development team writes modular, clean, and well-typed code following modern industry standards, with transparent progress demos.',
    deliverables: ['Sprint Code Reviews', 'Staging Environment Preview', 'Modular Component Architecture'],
    icon: 'Code2'
  },
  {
    number: '04',
    title: 'Comprehensive Quality & Security Testing',
    duration: 'Phase 4',
    description: 'We perform rigorous unit testing, cross-browser verification, mobile responsiveness testing, and security checks to ensure rock-solid stability.',
    deliverables: ['QA Test Execution Report', 'Performance & Load Audit', 'Security Audit Check'],
    icon: 'ShieldCheck'
  },
  {
    number: '05',
    title: 'Seamless Production Deployment',
    duration: 'Phase 5',
    description: 'We handle cloud server setup, domain SSL mapping, database seeding, and production deployment with zero downtime.',
    deliverables: ['Live Cloud Deployment', 'SSL & Domain Configuration', 'Full Source Code Ownership Transfer'],
    icon: 'Rocket'
  },
  {
    number: '06',
    title: 'Post-Launch Maintenance & Growth',
    duration: 'Phase 6',
    description: 'We provide ongoing technical support, performance monitoring, feature enhancements, and system maintenance.',
    deliverables: ['24/7 Server Health Monitoring', 'SLA Technical Support', 'Periodic Feature Updates'],
    icon: 'Headphones'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsPillar[] = [
  {
    title: 'Engineering Rigor',
    description: 'We build cleanly architected, maintainable codebases with full TypeScript type-safety, clean folder structures, and zero quick-and-dirty hacks.',
    icon: 'Cpu',
    badge: 'Code Quality'
  },
  {
    title: 'Transparent Communication',
    description: 'Direct founder and technical lead involvement on every project. No middleman delays or vague status reports—you get clear, honest project updates.',
    icon: 'MessageSquareCheck',
    badge: 'Direct Access'
  },
  {
    title: 'Complete Source Ownership',
    description: 'You retain 100% intellectual property rights, repository access, and database ownership upon completion with no vendor lock-in.',
    icon: 'KeyRound',
    badge: '100% Ownership'
  },
  {
    title: 'Lightweight & Ultra-Fast',
    description: 'We build modern web and mobile products optimized for instant load times, minimal bundle sizes, and optimal core web vitals.',
    icon: 'Zap',
    badge: 'Performance'
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems engineered from day one to handle business growth, expanding data volumes, and seamless third-party API expansions.',
    icon: 'Layers',
    badge: 'Future Proof'
  },
  {
    title: 'Long-term Technical Partner',
    description: 'We build enduring client relationships centered on reliability, trust, honest advice, and dedicated post-launch support.',
    icon: 'Handshake',
    badge: 'Client Commitment'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'syntheriq-erp-suite',
    title: 'Enterprise Manufacturing & Inventory ERP',
    category: 'ERP & Systems',
    clientIndustry: 'Industrial Manufacturing & Supply Chain',
    summary: 'A unified enterprise planning portal providing real-time stock tracking, purchase orders, multi-warehouse dispatching, and automated GST billing.',
    challenge: 'The client struggled with fragmented Excel spreadsheets, delayed stock updates between branches, and high human error in manual order entries.',
    solution: 'Engineered a custom React & Node.js ERP system with role-based access control, barcode inventory tracking, and automated stock alerts.',
    keyFeatures: ['Real-time Multi-Warehouse Stock Tracking', 'Automated Purchase Order Workflows', 'GST Invoice Generation & Export', 'Role-based Employee Permissions'],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    impactMetrics: ['Automated 90% of manual stock reconciliation tasks', 'Eliminated inventory data latency across 3 branches', 'Reduced order processing time by 65%'],
    imageBg: 'bg-gradient-to-tr from-blue-100 via-indigo-50 to-purple-100'
  },
  {
    id: 'ai-smart-crm-portal',
    title: 'AI-Enhanced B2B Sales & Leads CRM',
    category: 'CRM & Automation',
    clientIndustry: 'Corporate Real Estate & Commercial Services',
    summary: 'An intuitive CRM portal featuring automated lead ingestion from web forms, WhatsApp routing, deal stages, and smart activity reminders.',
    challenge: 'Sales reps were losing valuable leads due to delayed follow-ups and scattered communication records across personal channels.',
    solution: 'Designed a lightweight custom CRM that auto-captures incoming web leads, assigns reps based on workload, and logs communication histories in one timeline.',
    keyFeatures: ['Visual Drag-and-Drop Deal Pipeline', 'Automated WhatsApp & Email Lead Routing', 'AI Lead Qualification Assistant', 'Sales Analytics & Conversion Reports'],
    techStack: ['React', 'TypeScript', 'Gemini AI API', 'Node.js', 'MongoDB', 'Chart.js'],
    impactMetrics: ['Cut lead response time from 4 hours to 3 minutes', 'Increased lead-to-opportunity conversion rate', 'Centralized 100% of lead communication logs'],
    imageBg: 'bg-gradient-to-tr from-purple-100 via-pink-50 to-rose-100'
  },
  {
    id: 'cross-platform-healthcare-app',
    title: 'Telemedicine & Patient Care Mobile App',
    category: 'Mobile Applications',
    clientIndustry: 'Healthcare & Wellness',
    summary: 'A sleek, cross-platform Android and iOS application enabling patients to book doctor consultations, receive digital prescriptions, and manage medical records.',
    challenge: 'The healthcare provider needed a secure, easy-to-use mobile app that worked seamlessly across both Android and iOS devices.',
    solution: 'Built a React Native mobile application integrated with secure backend APIs, cloud prescription storage, and push notification alerts.',
    keyFeatures: ['Doctor Appointment Scheduling Calendar', 'Digital Prescription & Lab Report Storage', 'Instant SMS & Push Appointment Reminders', 'Secure Patient Data Caching'],
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'Express', 'REST APIs'],
    impactMetrics: ['Achieved 4.8 star average user rating on Play Store', 'Reduced appointment no-shows by 40%', 'Seamless cross-platform Android & iOS execution'],
    imageBg: 'bg-gradient-to-tr from-emerald-100 via-teal-50 to-cyan-100'
  },
  {
    id: 'b2b-ecommerce-web-platform',
    title: 'High-Performance B2B E-Commerce & Portal',
    category: 'Web Applications',
    clientIndustry: 'Wholesale Trade & Distribution',
    summary: 'A lightning-fast B2B catalog and bulk ordering portal with custom pricing tiers, buyer approval workflows, and instant invoice downloads.',
    challenge: 'Legacy phone and email ordering created bottlenecks during seasonal surges, with frequent pricing discrepancies for tiered buyers.',
    solution: 'Developed a custom React web application with account-specific pricing logic, instant search, and automated order confirmation PDFs.',
    keyFeatures: ['Client-Specific Dynamic Pricing Tiers', 'Bulk CSV Order Import & Instant Checkout', 'Instant PDF Purchase Order Generation', 'Real-Time Order Tracking Dashboard'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    impactMetrics: ['Processed 1,200+ bulk orders in the first 60 days', 'Zero order pricing discrepancies reported', '99.9% uptime during peak order periods'],
    imageBg: 'bg-gradient-to-tr from-sky-100 via-blue-50 to-indigo-100'
  }
];

export const AGENCY_COMPARISON = [
  {
    feature: 'Core Focus',
    syntheriq: 'Tailored, clean software engineering built for your specific workflow',
    others: 'Generic pre-built templates customized with basic color changes'
  },
  {
    feature: 'Code Quality',
    syntheriq: 'TypeScript type-safe, modular, well-documented & scalable architecture',
    others: 'Bloated third-party plugins with slow loading times and security risks'
  },
  {
    feature: 'Communication',
    syntheriq: 'Direct access to founder & lead technology engineers throughout the project',
    others: 'Layered account managers passing messages back and forth'
  },
  {
    feature: 'Code Ownership',
    syntheriq: '100% full source code ownership & repository transfer with no monthly lock-in',
    others: 'Proprietary platform lock-in with ongoing mandatory hosting markups'
  },
  {
    feature: 'Post-Launch Support',
    syntheriq: 'Dedicated SLA support, maintenance & continuous feature expansions',
    others: 'Minimal support once project is handed over'
  }
];
