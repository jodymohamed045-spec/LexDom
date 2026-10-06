/**
 * LexDom - Knowledge Base, Sample Contracts & Legal Rules Database
 * Curated for Startups, Venture Deals, and Cross-Border Governing Laws
 */

const JURISDICTIONS = {
  delaware: {
    id: 'delaware',
    name: 'US - Delaware',
    flag: '🇺🇸',
    fullName: 'State of Delaware (DGCL & Chancery Court)',
    courtName: 'Delaware Court of Chancery',
    arbitrationDefault: 'AAA / JAMS (Wilmington or New York)',
    description: 'Gold standard for US and venture-backed tech startups. Highly predictable case law and corporate statutes.',
    keyStatutes: ['Delaware General Corporation Law (DGCL)', 'Chancery Court Rules', 'Uniform Commercial Code (UCC) Art. 2']
  },
  ksa: {
    id: 'ksa',
    name: 'Saudi Arabia (KSA)',
    flag: '🇸🇦',
    fullName: 'Kingdom of Saudi Arabia (New Commercial Companies Law 1443H)',
    courtName: 'المحاكم التجارية ومحاكم العمل السعودية',
    arbitrationDefault: 'SCCA (Saudi Center for Commercial Arbitration - Riyadh)',
    description: 'Governed by Royal Decree M/132 (New Companies Law) and Labor Law Royal Decree M/51. Rigorous on Sharia compliance, public policy, and mandatory severance.',
    keyStatutes: ['نظام الشركات الجديد 1443هـ', 'نظام العمل السعودي', 'نظام التحكيم السعودي 1433هـ']
  },
  egypt: {
    id: 'egypt',
    name: 'Egypt (مصر)',
    flag: '🇪🇬',
    fullName: 'Arab Republic of Egypt (Law 72/2017 & Law 159/1981)',
    courtName: 'المحاكم الاقتصادية ومحاكم الاستثمار',
    arbitrationDefault: 'CRCICA (Cairo Regional Centre for International Commercial Arbitration)',
    description: 'Governed by Egyptian Civil Code (Sanhouri), Investment Law 72 of 2017, and Commercial Companies Law 159. Economic courts specialize in startup and corporate disputes.',
    keyStatutes: ['قانون الاستثمار رقم 72 لسنة 2017', 'قانون الشركات رقم 159 لسنة 1981', 'القانون المدني المصري (العقد شريعة المتعاقدين)']
  },
  uae: {
    id: 'uae',
    name: 'UAE - DIFC / ADGM',
    flag: '🇦🇪',
    fullName: 'Dubai International Financial Centre (DIFC) / ADGM',
    courtName: 'DIFC Courts (English Common Law Jurisdiction)',
    arbitrationDefault: 'DIAC (Dubai International Arbitration Centre)',
    description: 'Independent English-language common law jurisdiction within the UAE with specialized commercial and tech precedent.',
    keyStatutes: ['DIFC Companies Law No. 5 of 2018', 'DIFC Contract Law No. 6 of 2004', 'DIFC Employment Law No. 2 of 2019']
  },
  uk: {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    fullName: 'England & Wales (Companies Act 2006)',
    courtName: 'High Court of Justice (Chancery & Commercial Court)',
    arbitrationDefault: 'LCIA (London Court of International Arbitration)',
    description: 'Premier common law center for venture debt, BVCA standard term sheets, and international commerce.',
    keyStatutes: ['Companies Act 2006', 'Unfair Contract Terms Act 1977', 'Arbitration Act 1996']
  }
};

const COURT_CATEGORIES = [
  {
    id: 'economic',
    nameEn: 'Economic & Startup Court',
    nameAr: 'المحكمة الاقتصادية وتأسيس الشركات',
    badge: '🏛️ Commercial',
    description: 'Venture investments, founder equity, commercial contracts, IP dilution, and corporate governance disputes.'
  },
  {
    id: 'family',
    nameEn: 'Family & Personal Status Court',
    nameAr: 'محكمة الأسرة والأحوال الشخصية',
    badge: '👨‍👩‍👧‍👦 Personal Status',
    description: 'Family office trusts, marital partition of startup shares, prenuptial business equity ringfencing, and inheritance succession.'
  },
  {
    id: 'labor',
    nameEn: 'Labor & Employment Court',
    nameAr: 'محكمة العمل والعمال',
    badge: '💼 Labor & Talent',
    description: 'Non-compete clauses, employee IP invention assignment, stock option vesting cliff, and severance disputes.'
  },
  {
    id: 'arbitration',
    nameEn: 'Investment & Commercial Arbitration',
    nameAr: 'التحكيم التجاري ومنازعات الاستثمار',
    badge: '⚖️ Arbitration',
    description: 'Cross-border dispute resolution under UNCITRAL, CRCICA, SCCA, or DIFC-LCIA rules.'
  },
  {
    id: 'civil',
    nameEn: 'Civil & General Commercial Court',
    nameAr: 'المحكمة المدنية والتجارية العامة',
    badge: '📜 Civil Law',
    description: 'Breach of contract, property leases, default indemnities, and tort liability.'
  },
  {
    id: 'ip',
    nameEn: 'Intellectual Property & Patents',
    nameAr: 'الملكية الفكرية وبراءات الاختراع',
    badge: '💡 IP & Tech',
    description: 'Software copyright, algorithm trade secrets, patent assignment, and trademark licensing.'
  }
];

const SAMPLE_CONTRACTS = [
  {
    id: 'sample-safe',
    name: 'YC_PostMoney_SAFE_SeedRound_SeriesA.pdf',
    title: 'Seed Round YC Post-Money SAFE (Series A Bridge)',
    category: 'economic',
    defaultLaw: 'delaware',
    fileSize: '1.4 MB',
    riskScore: 78,
    riskLevel: 'HIGH RISK',
    summary: 'Contains hazardous uncapped founder personal indemnity, an ambiguous valuation cap calculation, and an involuntary 3-year non-compete clause.',
    loopholes: [
      {
        id: 'lh-1',
        title: 'Unlimited Personal Founder Indemnification',
        severity: 'CRITICAL',
        courtContext: 'Economic & Startup Court',
        statuteRef: 'Delaware Chancery precedent (In re Trados) & UCC 2-719',
        clauseLocation: 'Section 8.3 (Indemnification and Liabilities)',
        rawText: 'The Founder personally and unconditionally covenants to indemnify, defend, and hold harmless the Investor and its affiliates from and against any and all losses, claims, damages, liabilities, and expenses (including unrestricted legal fees), without cap or limitation in amount or time, arising out of any alleged breach of representations or startup operational shortfall.',
        whyRisky: 'This is a catastrophic founder trap. It removes the corporate veil, holding the individual founder personally liable with their personal bank accounts and home without any cap (market standard caps indemnity at fees received or proceeds).',
        secureRewrite: 'The Company (and explicitly not the Founders in their individual personal capacity) shall indemnify the Investor against third-party claims resulting directly from willful misconduct or gross negligence, provided that the Company’s aggregate cumulative liability under this Agreement shall in no event exceed the total Purchase Amount paid by the Investor hereunder, with claims expiring 12 months post-closing.',
        legalRationale: 'Re-establishes the corporate liability shield, eliminates personal founder exposure, institutes a market-standard cap pegged to the investment sum, and sets a 12-month expiration window.'
      },
      {
        id: 'lh-2',
        title: 'Unilateral & Worldwide 3-Year Non-Compete Post-Departure',
        severity: 'CRITICAL',
        courtContext: 'Labor & Employment Court',
        statuteRef: 'Delaware Non-Compete Strict Scrutiny & FTC Rules',
        clauseLocation: 'Section 11.2 (Restrictive Covenants)',
        rawText: 'Upon cessation of Founder’s relationship with the Company for any reason whatsoever, Founder shall not directly or indirectly engage in, advise, invest in, or consult for any business entity in any tech or internet sector anywhere globally for a duration of thirty-six (36) consecutive months.',
        whyRisky: 'Overly broad geographic scope (worldwide) and duration (3 years) prevents the founder from earning a livelihood and may be struck down as punitive or hold the founder hostage.',
        secureRewrite: 'For a period of twelve (12) months following voluntary resignation without Good Reason, Founder shall not directly establish or serve as chief executive of a Directly Competing Business operating within the Company’s primary active commercial market, provided the Company pays Founder a monthly garden leave stipend equal to 60% of base salary during such restriction.',
        legalRationale: 'Reduces restriction to 12 months, limits scope to directly competing core businesses, narrows geography to active markets, and mandates paid garden leave.'
      },
      {
        id: 'lh-3',
        title: 'Predatory 2x Participating Liquidation Preference Trap',
        severity: 'HIGH RISK',
        courtContext: 'Economic & Startup Court',
        statuteRef: 'NVCA Model Term Sheet Standards & DGCL § 151',
        clauseLocation: 'Section 4.1 (Liquidation & Deemed Dissolution)',
        rawText: 'In the event of any Liquidation Event, Investor shall receive an amount equal to two times (2.0x) the original Purchase Amount plus declared dividends before any distribution to Common Stockholders, and shall thereafter share pro-rata in all remaining assets on an as-converted basis ("Full Double Dip").',
        whyRisky: 'Participating liquidation preferences strip founders and early employees of returns in moderate exits. Standard seed deals are strictly 1x Non-Participating.',
        secureRewrite: 'In the event of any Liquidation Event, Investor shall be entitled to receive, prior to Common Stockholders, an amount equal to one time (1.0x) the original Purchase Amount (Non-Participating), or alternatively convert to Common Stock to receive its pro-rata share, whichever yields the higher payout, but not both.',
        legalRationale: 'Restores the startup ecosystem gold standard (1.0x Non-Participating), eliminating the double-dip penalty on founders.'
      },
      {
        id: 'lh-4',
        title: 'Ambiguous Governing Law & Foreign Dispute Forum',
        severity: 'MEDIUM',
        courtContext: 'Commercial Arbitration',
        statuteRef: 'FAA § 2 & Delaware Uniform Arbitration Act',
        clauseLocation: 'Section 16.4 (Governing Law & Forum)',
        rawText: 'This Agreement shall be construed in accordance with whatever jurisdiction the Investor selects at the time of claim filing, and disputes shall be heard in Investor’s domestic municipal courts without right of jury trial.',
        whyRisky: 'Unilateral forum selection puts the startup at severe disadvantage and creates immediate litigation expense asymmetry.',
        secureRewrite: 'This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware. Any dispute arising out of or in connection with this Agreement shall be finally resolved by binding arbitration administered by the American Arbitration Association (AAA) in Wilmington, Delaware, before a single neutral arbitrator.',
        legalRationale: 'Ensures equal predictability, bilateral neutral arbitration, and prevents unilateral forum shopping by either party.'
      }
    ],
    marketBenchmarks: {
      valuationCap: { actual: '$6.5M Cap (Uncapped MFN)', standard: '$8M - $12M Cap', rating: 'Below Median' },
      vestingSchedule: { actual: '5 Years with 2-Year Cliff', standard: '4 Years with 1-Year Cliff (Monthly thereafter)', rating: 'Overly Restrictive' },
      liquidationPref: { actual: '2.0x Participating ("Double Dip")', standard: '1.0x Non-Participating', rating: 'Dangerous Trap' },
      founderIndemnity: { actual: 'Uncapped Personal Guarantee', standard: 'Corporate Only / Capped to Proceeds', rating: 'Critical Vulnerability' },
      nonCompeteDuration: { actual: '36 Months Worldwide', standard: '12 Months Localized with Garden Leave', rating: 'Severely Harsh' }
    }
  },
  {
    id: 'sample-ksa-employment',
    name: 'KSA_Saudi_Founder_Employment_IP_Pact.docx',
    title: 'KSA Startup Executive Employment & IP Transfer Agreement',
    category: 'labor',
    defaultLaw: 'ksa',
    fileSize: '890 KB',
    riskScore: 72,
    riskLevel: 'HIGH RISK',
    summary: 'Subject to Saudi Labor Law and Commercial Law. Contains non-compliant end-of-service forfeiture and broad IP seizure of pre-startup inventions.',
    loopholes: [
      {
        id: 'lh-ksa-1',
        title: 'Forfeiture of Statutory End-of-Service Gratuity (مكافأة نهاية الخدمة)',
        severity: 'CRITICAL',
        courtContext: 'محكمة العمل والعمال',
        statuteRef: 'المادة 84 والمادة 85 من نظام العمل السعودي (قواعد آمرة لا يجوز الاتفاق على مخالفتها)',
        clauseLocation: 'البند 9 (مستحقات انتهاء العلاقة العمالية)',
        rawText: 'يتنازل المؤسس/الموظف التنفيذي صراحة وغير مشروط عن أي حق في المطالبة بمكافأة نهاية الخدمة أو بدلات الإجازات أو مكافآت التفرغ المقررة نظاماً في حال استقالته أو تركه العمل لأي سبب.',
        whyRisky: 'بموجب المادة 84 من نظام العمل السعودي، مكافأة نهاية الخدمة حق أصيل آمر، والتنازل عنها مسبقاً باطل بطلاناً مطلقاً أمام المحاكم العمالية السعودية ويعرض الشركة لغرامات من وزارة الموارد البشرية.',
        secureRewrite: 'تستحق مكافأة نهاية الخدمة والمستحقات النظامية طبقاً لأحكام المواد (84) و(85) من نظام العمل السعودي، ويتم احتسابها على أساس الأجر الفعلي الأخير، مع جواز تسوية أي مبالغ أو قروض قائمة مستحقة للشركة بموجب إقرار مالي معتمد.',
        legalRationale: 'التوافق مع القواعد الآمرة لنظام العمل السعودي وتجنب بطلان العقد أمام الهيئات العمالية.'
      },
      {
        id: 'lh-ksa-2',
        title: 'مصادرة الملكية الفكرية السابقة للمؤسس دون استثناء (IP Carve-Out Absence)',
        severity: 'CRITICAL',
        courtContext: 'الملكية الفكرية وبراءات الاختراع',
        statuteRef: 'نظام براءات الاختراع والتصميمات التخطيطية والأنظمة التجارية السعودية',
        clauseLocation: 'البند 13 (التنازل الشامل عن الابتكارات)',
        rawText: 'تعتبر جميع الابتكارات والبرمجيات وقواعد البيانات والأفكار التي طورها المؤسس سواء قبل توقيع هذا العقد أو أثنائه، وسواء تمت في أوقات العمل أو خارجه، ملكاً خالصاً للشركة دون مقابل إضافي.',
        whyRisky: 'يجرد المؤسس من أي كود برمجي أو براءة اختراع طورها في حياته السابقة للشركة (Pre-existing IP)، مما يحرمه من حقوقه الشخصية.',
        secureRewrite: 'تقتصر حقوق الملكية الفكرية المتنازل عنها للشركة على الابتكارات والمصنفات التي يتم تطويرها بعد تاريخ سريان هذا العقد والتي تتعلق مباشرة بمجال عمل الشركة وباستخدام مواردها، مع استثناء قائمة الابتكارات السابقة المرفقة في الملحق (أ) التي تظل ملكية خاصة للمؤسس.',
        legalRationale: 'حماية الملكية الفكرية السابقة للمؤسس وحصر التنازل على ما ينتج خصيصاً لمشروع الشركة الحالي.'
      }
    ],
    marketBenchmarks: {
      valuationCap: { actual: 'SAR 12M Cap (SAFEs Framework)', standard: 'SAR 15M - 20M Pre-Seed KSA', rating: 'Slightly Below' },
      vestingSchedule: { actual: '4 Years with 1-Year Cliff', standard: '4 Years with 1-Year Cliff', rating: 'Market Standard' },
      liquidationPref: { actual: '1.0x Non-Participating', standard: '1.0x Non-Participating', rating: 'Safe' },
      founderIndemnity: { actual: 'Joint & Several Labor Liability', standard: 'Corporate Labor Shield', rating: 'High Risk' },
      nonCompeteDuration: { actual: '24 Months in entire GCC', standard: '12 Months strictly in KSA (Art. 83)', rating: 'Needs Revision' }
    }
  },
  {
    id: 'sample-egypt-shareholders',
    name: 'Egypt_Founders_Shareholders_Pact_2026.pdf',
    title: 'اتفاقية المساهمين وتأسيس شركة ناشئة - القانون المصري (المحكمة الاقتصادية)',
    category: 'economic',
    defaultLaw: 'egypt',
    fileSize: '1.1 MB',
    riskScore: 82,
    riskLevel: 'HIGH RISK',
    summary: 'اتفاقية استثمار وتوزيع حصص تخضع لقانون الشركات 159 وقانون الاستثمار 72. تحتوي على شروط باطلة متعلقة بحرمان الشريك من الأرباح وشرط تحكيم معيب.',
    loopholes: [
      {
        id: 'lh-eg-1',
        title: 'شرط الأسد وحرمان الشريك المؤسس من الأرباح (Lion Clause / شرط باطل)',
        severity: 'CRITICAL',
        courtContext: 'المحكمة الاقتصادية وتأسيس الشركات',
        statuteRef: 'المادة 515 من القانون المدني المصري والمادة 41 من قانون الشركات 159 لسنة 1981',
        clauseLocation: 'المادة 7 (توزيع الأرباح السنوية)',
        rawText: 'يحق للمستثمر الرئيسي الانفراد بكامل أرباح الشركة القابلة للتوزيع لمدة ثلاث سنوات مالية متتالية، ولا يحق للمؤسسين المطالبة بأي توزيعات حتى استرداد رأس المال كاملاً مضافاً إليه عائد 25%، مع إلزام المؤسسين بتحمل الخسائر إن وجدت.',
        whyRisky: 'هذا البند يمثل "شرط الأسد" المنهي عنه صراحة في القانون المصري، وهو باطل بطلاناً مطلقاً بنص المادة 515 مدني، وقد يؤدي لبطلان عقد الشركة برمته أمام المحكمة الاقتصادية.',
        secureRewrite: 'توزع الأرباح الصافية القابلة للتوزيع بعد استقطاع الاحتياطيات القانونية وفقاً للنسب المقررة في النظام الأساسي للشركة، مع منح المستثمر أولوية استرداد أرباح ممتازة لا تتجاوز 1.0x من رأس ماله المسدد دون حرمان أي شريك من حقه في الأرباح أو إعفائه من الخسائر بما يوافق أحكام القانون.',
        legalRationale: 'إلغاء شرط الأسد الباطل واستبداله بآلية أسهم ممتازة قانونية تتوافق مع قانون الشركات المصري والمحاكم الاقتصادية.'
      },
      {
        id: 'lh-eg-2',
        title: 'شرط تحكيم غامض وغير مانع لاختصاص القضاء المصري (Flawed Arbitration Clause)',
        severity: 'HIGH RISK',
        courtContext: 'التحكيم التجاري ومنازعات الاستثمار',
        statuteRef: 'قانون التحكيم المصري رقم 27 لسنة 1994 وقواعد مركز القاهرة الإقليمي (CRCICA)',
        clauseLocation: 'المادة 19 (فض المنازعات)',
        rawText: 'في حال نشوء أي خلاف، يجوز لأي طرف اللجوء للتحكيم أو القضاء أيهما يراه مناسباً، دون تحديد مقر التحكيم أو القانون الإجرائي الحاكم.',
        whyRisky: 'الشرط التخييري ("يجوز اللجوء للتحكيم أو القضاء") يعتبر شرط تحكيم غير مانع ويسقط الدفع بوجود التحكيم، مما يفتح الباب لدعاوى كيدية ونزاعات اختصاص تستمر لسنوات.',
        secureRewrite: 'أي نزاع ينشأ عن هذا العقد أو يتعلق به يتم حسمه نهائياً بالتحكيم وفقاً لقواعد مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA)، وتكون هيئة التحكيم من محكم واحد، ويكون مقر التحكيم القاهرة، ولغة التحكيم هي العربية، ويكون الحكم نهائياً وباتاً وملزماً للطرفين.',
        legalRationale: 'صياغة شرط تحكيم نموذجي مانع وصريح يحسم النزاع بسرعة تحت مظلة مركز معتمد معترف بأحكامه دولياً.'
      }
    ],
    marketBenchmarks: {
      valuationCap: { actual: 'EGP 35M Cap', standard: 'EGP 45M - 60M Seed', rating: 'Slightly Below' },
      vestingSchedule: { actual: '3 Years Unvested Immediate', standard: '4 Years with 1-Year Cliff', rating: 'Unbalanced' },
      liquidationPref: { actual: 'Predatory Lion Clause', standard: '1.0x Non-Participating', rating: 'Illegal / Void' },
      founderIndemnity: { actual: 'Unlimited Personal Cheques (شيكات ضمان)', standard: 'Corporate Only', rating: 'Critical Hazard' },
      nonCompeteDuration: { actual: '5 Years all Egypt Governorates', standard: '12-24 Months Specialized', rating: 'Exorbitant' }
    }
  },
  {
    id: 'sample-family-estate',
    name: 'Family_Business_Founder_Equity_Protection_Pact.pdf',
    title: 'حماية أصول المؤسس وعقود الأسرة وحصص الملكية (محكمة الأسرة والمدني)',
    category: 'family',
    defaultLaw: 'egypt',
    fileSize: '750 KB',
    riskScore: 68,
    riskLevel: 'MODERATE RISK',
    summary: 'تنظيم الذمة المالية للشركاء المؤسسين وحماية أسهم الشركة الناشئة من المنازعات الأسرية وقضايا النفقات والوصاية والتركات.',
    loopholes: [
      {
        id: 'lh-fam-1',
        title: 'خلط الذمة المالية للشركة بالذمة المالية الشخصية وحسابات الأسرة',
        severity: 'CRITICAL',
        courtContext: 'محكمة الأسرة والأحوال الشخصية',
        statuteRef: 'قانون الولاية على المال وقانون الأسرة وقواعد الذمة المالية المستقلة',
        clauseLocation: 'البند 5 (حق السحب والضمانات الأسرية)',
        rawText: 'تعتبر أصول الشركة وعوائدها ضامناً شخصياً ومباشراً لأي التزامات عائلية أو نفقات خاصة بالمؤسسين دون فصل بين الحساب البنكي التجاري والذمة الخاصة.',
        whyRisky: 'يعرض حساب الشركة المصرفي للحجز القضائي في دعاوى الأسرة أو الحراسة أو النفقات، مما يشل أعمال الشركة الناشئة ويمنع استلام استثمارات الفنتشر كابيتال.',
        secureRewrite: 'تتمتع الشركة بشخصية اعتبارية وذمة مالية مستقلة تماماً ومفصولة عن الذمم الشخصية للمؤسسين وأسرهم، ولا يجوز رهن أو الحجز على أي أصل من أصول الشركة لسداد أي التزام أسري أو شخصي، وتقتصر حقوق الغير على الأرباح الموزعة فعلياً للمؤسس فقط.',
        legalRationale: 'فصل الذمة المالية لحماية الكيان التجاري من نزاعات الأحوال الشخصية وتمكين المستثمرين من الاطمئنان لسلامة الأصول.'
      }
    ],
    marketBenchmarks: {
      valuationCap: { actual: 'Family Trust Protected', standard: 'Ring-fenced Holding Entity', rating: 'Needs Ringfence' },
      vestingSchedule: { actual: 'Inheritance Succession Rule', standard: 'Standard Buy-Sell Vesting', rating: 'Specialized' },
      liquidationPref: { actual: '1.0x Equal Parity', standard: '1.0x Preferred Class', rating: 'Normal' },
      founderIndemnity: { actual: 'Co-mingled Personal Assets', standard: 'Strict Legal Separation', rating: 'High Risk' },
      nonCompeteDuration: { actual: 'Lifetime Family Pledge', standard: '2 Years Commercial Only', rating: 'Unenforceable' }
    }
  }
];

const JURISDICTION_COMPARISON_MATRIX = {
  'delaware_vs_egypt': {
    title: 'Delaware C-Corp (DGCL) vs Egyptian Law 72 / 159',
    countryA: 'US - Delaware',
    countryB: 'Egypt (مصر)',
    points: [
      {
        metric: 'Corporate Veil & Founder Liability Shield',
        countryAStatus: 'Extremely Strong. Chancery Court strictly preserves limited liability unless fraud or sham is proven.',
        countryBStatus: 'Strong generally, but founders often face customary pressure for personal bank checks (شيكات بنكية) which carry criminal liability under Egyptian law.',
        recommendation: 'Never sign personal security checks. Form a Delaware or DIFC Holding entity over the local Egyptian LLC (WLL).'
      },
      {
        metric: 'Non-Compete Enforceability',
        countryAStatus: 'Subject to reasonableness test in duration (<12mo) and geography. Strict scrutiny for employees.',
        countryBStatus: 'Article 686 of Civil Code: Enforceable if worker had access to secrets, limited in time/place, but courts rarely grant injunctive relief (only monetary damages).',
        recommendation: 'Enforce non-competes through international arbitration seats rather than local civil tribunals.'
      },
      {
        metric: 'Convertible Instruments (SAFEs & Notes)',
        countryAStatus: 'Standard industry norm. Highly efficient, no notarization or ministry approval needed.',
        countryBStatus: 'SAFEs are not a native statutory instrument under Law 159. They require structuring as promise-to-subscribe or debt-to-equity conversion through GAFI.',
        recommendation: 'Issue SAFEs out of a Delaware/Cayman/DIFC top-co with a local operating subsidiary in Cairo.'
      },
      {
        metric: 'Dispute Resolution & Speed',
        countryAStatus: 'Chancery Court is world-renowned for expert judges and fast decisions (3 to 6 months for injunctions).',
        countryBStatus: 'Economic courts are specialized, but litigation can take 1.5 to 3 years. Institutional arbitration (CRCICA) is fast and high-quality.',
        recommendation: 'Specify CRCICA Arbitration in Cairo for local contracts, or LCIA/Delaware for international equity.'
      }
    ]
  },
  'delaware_vs_ksa': {
    title: 'Delaware C-Corp (DGCL) vs Saudi Arabia (New Companies Law 1443H)',
    countryA: 'US - Delaware',
    countryB: 'Saudi Arabia (KSA)',
    points: [
      {
        metric: 'Startup Instruments (SAFEs & Preferred Shares)',
        countryAStatus: 'Native and ubiquitous (YC Post-Money SAFE, Series Seed, NVCA).',
        countryBStatus: 'New Companies Law 1443H officially recognizes Simplified Joint Stock Companies (شركة المساهمة المبسطة - SJSC) which now allow preferred shares, convertible bonds, and classes of shares!',
        recommendation: 'Use SJSC structure in KSA to issue preferred shares locally, or maintain Delaware top-co with SCCA arbitration.'
      },
      {
        metric: 'Labor Protections & Severance',
        countryAStatus: 'At-will employment standard in most states; minimal statutory severance requirements unless contractual.',
        countryBStatus: 'Saudi Labor Law Art. 84/85: Mandatory non-waivable End of Service Gratuity (مكافأة نهاية الخدمة). Termination without valid cause results in severe compensation under Art. 77.',
        recommendation: 'Ensure all founder and employee agreements strictly comply with Saudi Labor Law mandatory articles.'
      },
      {
        metric: 'Arbitration & Enforcement',
        countryAStatus: 'FAA and New York Convention member. Enforceable in federal and state courts.',
        countryBStatus: 'Saudi Arbitration Law 1433H and Enforcement Courts are highly active and rapid, enforcing arbitral awards unless contrary to Islamic Sharia.',
        recommendation: 'Draft dispute clauses referencing SCCA (Saudi Center for Commercial Arbitration) in Riyadh.'
      }
    ]
  },
  'egypt_vs_uae': {
    title: 'Egypt Economic Law vs UAE DIFC / ADGM Common Law',
    countryA: 'Egypt (مصر)',
    countryB: 'UAE - DIFC (Common Law)',
    points: [
      {
        metric: 'Legal System Tradition',
        countryAStatus: 'Civil Law based on the Franco-Egyptian Sanhouri Code. Statutorily driven with Economic Court rulings.',
        countryBStatus: 'Pure English Common Law with precedent doctrine, English judges, and global VC familiarity.',
        recommendation: 'Regional MENA venture rounds overwhelmingly favor DIFC holding structures with operating subsidiaries in Egypt.'
      },
      {
        metric: 'Vesting & ESOP Enforceability',
        countryAStatus: 'ESOPs require GAFI approval and special general assembly resolutions; phantom shares or promise-to-sell are often used.',
        countryBStatus: 'Direct ESOP and option pools are supported natively with standard share pledge and nominee structures.',
        recommendation: 'Pool ESOP equity in a DIFC Foundation or Holding company for frictionless employee granting.'
      }
    ]
  }
};
