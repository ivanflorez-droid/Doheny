// ============================================================================
// SCHOLAS USA × CARRIE ESTELLE DOHENY FOUNDATION — CENTRAL CONTENT FILE
// ----------------------------------------------------------------------------
// Every editable element of the landing page lives here (CMS-style, per brief
// section 19). Edit values below; no component changes needed.
//
// EDITABLE: headlines, paragraphs, images, logos, program targets, impact
// indicators, testimonials, investment ranges, CTA labels, contacts.
//
// INTEGRITY RULES (do not break):
//  - `targets` are PROGRAM TARGETS, never present them as achieved outcomes.
//  - `metrics` carry no numbers until Scholas USA publishes verified outcomes.
//  - `quotes` must only contain real, approved quotations with attribution.
//  - `partners` lists only verified partners — never add the Carrie Estelle
//    Doheny Foundation here.
// ============================================================================

export const ASSETS = {
  logoColor:
    "https://give.scholasusa.org/wp-content/uploads/2026/05/Scholas-USA-Logo.png",
  logoWhite:
    "https://give.scholasusa.org/wp-content/uploads/2026/05/Logo-Scholas-White.png",
  heroImage: "/images/hero-encuentro.webp",
  archbishopPortrait:
    "https://give.scholasusa.org/wp-content/uploads/2026/03/mons-jose-horacio-gomez.webp",
  missionImage: "/images/mision-papa-francisco.webp",
  picoUnionImage: "/images/pico-union-dialogo.webp",
};

export const NAV_LINKS = [
  { id: "mission", href: "#mission", label: "Our Mission" },
  { id: "challenge", href: "#challenge", label: "The Challenge" },
  { id: "model", href: "#model", label: "Our Model" },
  { id: "impact", href: "#impact", label: "Our Impact" },
  { id: "partnership", href: "#partnership", label: "Partnership Opportunity" },
];

export const HERO = {
  eyebrow: "A Catholic-Inspired Mission in Los Angeles",
  headlineLines: [
    "Strengthening Catholic Faith.",
    "Empowering Young Lives.",
    "Transforming Communities.",
  ],
  body: "Inspired by Pope Francis and working alongside the Archdiocese of Los Angeles, Scholas USA creates spaces where young people discover belonging, deepen their connection to faith, strengthen family relationships, and become leaders of service in their communities.",
  primaryCta: { label: "Explore Our Partnership Opportunity", href: "#partnership" },
  secondaryCta: { label: "Discover Our Work in Pico-Union", href: "#pico-union" },
  credibility: "A Catholic-inspired educational movement founded by Pope Francis.",
  imageCaption: {
    kicker: "Culture of Encounter",
    title: "St. Thomas the Apostle Parish, Pico-Union",
  },
};

export const MISSION = {
  eyebrow: "Our Mission",
  headline: "A Mission Inspired by Pope Francis. Rooted in the Communities We Serve.",
  paragraphs: [
    "Scholas USA brings the vision of Pope Francis to life by creating a culture of encounter where young people are heard, families are strengthened, and communities grow through meaningful relationships and service.",
    "Working with the Archdiocese of Los Angeles, we are building a parish-based model that connects youth development with Catholic belonging and long-term community engagement.",
  ],
  facts: [
    { value: "Pope Francis", label: "Founded by" },
    { value: "190 countries", label: "Global Scholas network" },
    { value: "24,000+", label: "Youth & children impacted in the U.S." },
    { value: "2020", label: "Established · Nonprofit" },
  ],
  cta: { label: "Discover Our Catholic Mission", href: "https://scholasusa.org/who-are-we" },
  imageCaption: {
    kicker: "Archdiocese of Los Angeles",
    title: "Parish-based youth & family engagement",
  },
};

export const CHALLENGE = {
  eyebrow: "The Opportunity Before Us",
  headline:
    "Young People Need More Than a Moment of Faith. They Need a Community That Walks With Them.",
  body: [
    "For many young people in underserved Los Angeles communities, economic pressures, social isolation, and limited opportunities for meaningful engagement can weaken their connection to family, community, and parish life.",
    "Catholic parishes have a unique opportunity to become places where young people feel welcomed, develop purpose, discover their capacity to serve, and remain connected beyond sacramental milestones.",
  ],
  cards: [
    {
      icon: "heart",
      accent: "blue",
      title: "Faith & Belonging",
      body: "Helping young people build meaningful, lasting connections with their Catholic communities.",
    },
    {
      icon: "users",
      accent: "yellow",
      title: "Youth & Family Connection",
      body: "Strengthening relationships across generations through dialogue and shared experiences.",
    },
    {
      icon: "hand-heart",
      accent: "green",
      title: "Service & Purpose",
      body: "Empowering young people to transform Catholic values into meaningful action.",
    },
  ],
};

export const MODEL = {
  eyebrow: "The Scholas Model",
  headline: "From Belonging to Leadership. From Faith to Service.",
  body: "Scholas creates safe, welcoming spaces within Catholic communities where young people develop relationships, strengthen their sense of purpose, and become active participants in parish and community life.",
  steps: [
    { number: "01", accent: "deep", title: "Create Safe Spaces", body: "Young people are welcomed, heard, and valued." },
    { number: "02", accent: "blue", title: "Build Relationships", body: "Dialogue strengthens trust, belonging, and connection." },
    { number: "03", accent: "yellow", title: "Develop Leadership", body: "Young people discover their voices and capacity to lead." },
    { number: "04", accent: "red", title: "Strengthen Families", body: "Parents and youth build stronger community connections." },
    { number: "05", accent: "green", title: "Inspire Service", body: "Young people put their values into action." },
  ],
};

export const PICO_UNION = {
  eyebrow: "Our Work in Los Angeles",
  headline: "A Community-Based Model Taking Root in Pico-Union.",
  body: [
    "At St. Thomas the Apostle, Scholas USA is working to strengthen the connection between young people, their families, and parish life.",
    "Through youth dialogue, leadership experiences, family engagement, and service opportunities, this initiative aims to create a lasting foundation for Catholic community participation.",
  ],
  communityFact: "Pico-Union is home to more than 40,000 residents.",
  // PROGRAM TARGETS — not verified completed outcomes. Keep labels honest.
  targets: [
    { value: "300", unit: "Young People", label: "Youth engagement program target", accent: "yellow" },
    { value: "50", unit: "Families", label: "Strong Roots family engagement target", accent: "green" },
  ],
  targetsNote: "Program targets for the initiative — not completed outcomes.",
  cta: {
    label: "Explore Our Community Model",
    href: "https://www.scholasusa.org/support-scholas-usa-los-angeles-pico-union",
  },
  imageCaption: {
    kicker: "Pico-Union, Los Angeles",
    title: "St. Thomas the Apostle parish community",
  },
};

export const IMPACT = {
  eyebrow: "Accountability & Lasting Impact",
  headline: "Measuring What Matters: Faith, Belonging, and Community Engagement.",
  intro: "Our approach connects personal development with measurable participation, stronger relationships, and meaningful service.",
  // No numbers until verified outcomes are published — add a `value` field then.
  metrics: [
    { icon: "heart-handshake", title: "Catholic Belonging", body: "Young people reporting stronger connections to parish life." },
    { icon: "calendar-check", title: "Post-Confirmation Engagement", body: "Continued monthly youth participation beyond sacramental milestones." },
    { icon: "megaphone", title: "Youth Leadership", body: "Youth-led initiatives and service projects in their communities." },
    { icon: "users", title: "Family Participation", body: "Families engaged in community activities and dialogue." },
    { icon: "sprout", title: "Parish Vitality", body: "Sustained youth and family involvement in parish life." },
  ],
  note: "Verified outcomes will be published here as measurement milestones are completed.",
};

export const PARTNERSHIP = {
  eyebrow: "A Partnership for Lasting Impact",
  headline: "Invest in Young People. Strengthen Families. Build the Future of Catholic Communities.",
  body: "An investment in Scholas supports ongoing youth accompaniment, family engagement, leadership development, and service opportunities rooted in Catholic communities.",
  tiers: [
    {
      kicker: "Initial Partnership",
      range: "$25,000 – $50,000",
      name: "Parish-Based Engagement",
      body: "Support parish-based youth and family engagement rooted at St. Thomas the Apostle in Pico-Union.",
      featured: false,
    },
    {
      kicker: "Expansion Opportunity",
      range: "$75,000 – $100,000",
      name: "Replication Across Communities",
      body: "Explore replication of the parish-based model across additional Catholic communities in Los Angeles.",
      featured: true,
    },
  ],
  disclaimer:
    "Investment ranges are proposed opportunities for discussion. They do not represent official grant levels, funding commitments, or prior endorsement by the Carrie Estelle Doheny Foundation.",
  primaryCta: { label: "Discuss a Strategic Partnership", href: "#contact" },
  secondaryCta: { label: "Request a Program Overview", href: "#contact" },
};

export const VOICES = {
  eyebrow: "Voices of Faith and Hope",
  headline: "A Mission Supported by Catholic Leadership.",
  // Verified quote from the official Scholas USA fundraising page.
  quote: {
    text: "I want to thank Pope Francis for starting Scholas, and especially for coming to Los Angeles. I hope this can reach all across the United States.",
    name: "Archbishop José H. Gómez",
    role: "Archdiocese of Los Angeles",
  },
  coverage: [
    {
      label: "Angelus News · Archdiocese of Los Angeles",
      title: "Hear from the Archdiocese about our work with teens",
      href: "https://angelusnews.com/local/la-catholics/scholas-usa-teens-2026/",
    },
    {
      label: "Angelus News · LA Catholics",
      title: "Coverage of the high school Scholas encounter",
      href: "https://angelusnews.com/local/la-catholics/teens-high-school-scholas-event/",
    },
  ],
  youthNote:
    "Youth voices from Pico-Union — verified testimonials from program participants are being gathered with families and will be featured here.",
};

export const PARTNERS = {
  eyebrow: "Working Together",
  headline: "Stronger Communities Begin With Trusted Partnerships.",
  body: "Lasting transformation requires trusted relationships between parishes, families, schools, community organizations, and philanthropic partners.",
  // Verified partners named on official Scholas USA channels only.
  partners: ["Archdiocese of Los Angeles", "QueensCare"],
  note: "Partner relationships as published on official Scholas USA channels.",
};

export const INVITATION = {
  eyebrow: "An Invitation to Partnership",
  headline: "Together, We Can Help a New Generation Live Their Faith Through Belonging and Service.",
  body: "We invite the Carrie Estelle Doheny Foundation to explore how Scholas USA's parish-based model can strengthen youth and family engagement, deepen community connections, and create lasting opportunities for service in Los Angeles.",
  primaryCta: { label: "Start a Partnership Conversation", href: "#contact" },
  secondaryCta: { label: "Learn More About Scholas USA", href: "https://scholasusa.org/" },
};

export const CONTACT = {
  title: "Start a Partnership Conversation",
  subtitle: "Your inquiry connects directly with the Scholas USA leadership team.",
  successTitle: "Thank you — your inquiry has been received.",
  successBody: "The Scholas USA team will review your message and respond to the email address you provided.",
};

export const FOOTER = {
  description:
    "Scholas USA is a Catholic-inspired educational movement founded by Pope Francis, creating a culture of encounter where young people are heard, families are strengthened, and communities grow through relationships and service.",
  links: [
    { label: "Scholas USA Website", href: "https://scholasusa.org/" },
    { label: "Support Scholas USA", href: "https://give.scholasusa.org/" },
    { label: "Partnership Opportunity", href: "#partnership" },
  ],
  contacts: [
    { label: "General inquiries", value: "info@scholasusa.org" },
    { label: "Office of the President", value: "jimena.florez@scholasusa.org" },
  ],
  legal: "Scholas USA is a registered 501(c)(3) nonprofit organization · Tax ID 84-5101258 · Established 2020",
  president: "President & Executive Director: Maria Jimena Florez",
};
