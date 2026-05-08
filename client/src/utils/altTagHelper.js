/**
 * Image Alt Tag Best Practices & Implementation Guide
 * For Mindframe India React Frontend
 * Last Updated: May 8, 2026
 */

// ============================================================================
// ALT TAG GENERATION HELPER UTILITY
// ============================================================================

/**
 * Utility function to generate SEO-friendly alt tags
 * Place this in: client/src/utils/altTagHelper.js
 */

export const imageAltTags = {
  // Hero & Banner Images
  heroWebDevelopment: "Professional web design and development services showcasing responsive websites",
  heroAppDevelopment: "Mobile app development team creating iOS and Android applications",
  heroBranding: "Brand identity and logo design services for digital agencies",
  heroDigitalMarketing: "Digital marketing strategies and campaign management dashboard",
  heroTelevision: "Television commercial production and broadcast advertising services",
  
  // Service Section Images
  serviceWebDev: "Web development service icons representing design, development, and deployment",
  serviceAppDev: "Mobile application development across iOS and Android platforms",
  serviceDesign: "Creative design services including UI/UX and graphic design",
  serviceSEO: "Search engine optimization tools and analytics dashboard",
  
  // Team & People Images
  teamMember: (name) => `${name} - Mindframe India team member and marketing expert`,
  teamPhoto: "Mindframe India creative team collaborating on marketing campaigns",
  teamHeadshot: (name, role) => `${name}, ${role} at Mindframe India`,
  
  // Portfolio & Work Images
  caseStudyImage: (clientName, industry) => `${clientName} digital marketing case study - ${industry} industry results`,
  campaignImage: (brandName, campaignType) => `${brandName} ${campaignType} advertising campaign execution`,
  resultsDashboard: "Marketing campaign results dashboard showing improved KPIs and ROI",
  
  // Office & Environment
  officePhoto: "Mindframe India office workspace and creative studio environment",
  meetingRoom: "Team meeting and collaborative workspace at Mindframe India office",
  workspacePhoto: "Modern office setup with designers and developers working on projects",
  
  // Client Logos
  clientLogo: (clientName) => `${clientName} client logo - worked with Mindframe India`,
  clientLogoGrid: "Collection of prestigious client logos and brands worked with Mindframe India",
  
  // Product & Service Screenshots
  websiteScreenshot: (brandName) => `${brandName} website screenshot showing responsive design`,
  appScreenshot: (appName) => `${appName} mobile app interface screenshot`,
  dashboardScreenshot: "Analytics dashboard interface showing marketing metrics and analytics",
  
  // Blog & Content Images
  blogFeaturedImage: (blogTitle) => `${blogTitle} - digital marketing blog featured image`,
  articleImage: (topic) => `Visual guide for ${topic} - digital marketing article`,
  infographic: (topic) => `Infographic: ${topic} in digital marketing`,
  
  // Advertisement & Campaign Visuals
  adCreative: (brand, platform) => `${brand} advertisement creative for ${platform} social media`,
  outdoorAd: (location, brand) => `${brand} outdoor billboard advertising in ${location}`,
  printAd: (brand, publication) => `${brand} print advertisement in ${publication}`,
  
  // Social Media & Digital Assets
  socialMediaGraphic: (platform, topic) => `Social media graphic for ${platform} - ${topic}`,
  socialPost: (platform) => `Mindframe India social media post on ${platform}`,
  instagramPost: "Mindframe India Instagram post showcasing latest project or insights",
  
  // Videos & Thumbnails
  videoThumbnail: (title) => `Video thumbnail: ${title}`,
  testimonialVideo: (name, company) => `Video testimonial from ${name} of ${company} about Mindframe services`,
  tutorialThumbnail: (topic) => `Tutorial video thumbnail: ${topic} guide`,
  
  // Certification & Award
  awardImage: (awardName) => `${awardName} award received by Mindframe India`,
  certificationImage: (certName) => `${certName} certification badge`,
  achievementBadge: "Achievement and recognition badge for industry awards",
  
  // Generic Images
  placeholder: "Placeholder image for Mindframe India",
  icon: (iconName) => `${iconName} icon`,
  illustrationImage: (topic) => `Illustration for ${topic}`,
  decorativeImage: "Decorative element in Mindframe India design",
};

// ============================================================================
// ALT TAG EXAMPLES BY PAGE TYPE
// ============================================================================

/**
 * SERVICE PAGES
 * Pattern: [Service Name] [Action/Benefit] [Context]
 */
const servicePageExamples = {
  heading: "Professional Web Development Services - Creating Responsive Websites",
  subheading: "Web design and development services for e-commerce, healthcare, and enterprise solutions",
  hero: "Web development team working on laptop showing code and design process",
  serviceIcon1: "Web development service icon representing custom website creation",
  serviceIcon2: "Responsive design icon showing website on multiple devices - mobile, tablet, desktop",
  benefit1: "Developer working on web application with modern JavaScript frameworks",
  benefit2: "Website analytics dashboard showing improved search engine rankings",
  caseStudyBefore: "E-commerce website before optimization - slow load times and poor design",
  caseStudyAfter: "E-commerce website after redesign - improved conversions and user experience",
  chart: "Graph showing 150% increase in website traffic after web development services",
  cta: "Contact form for free web development consultation with Mindframe India",
};

/**
 * PORTFOLIO & CASE STUDY PAGES
 * Pattern: [Client Name] [Project Type] [Result/Benefit]
 */
const portfolioPageExamples = {
  caseStudyImage1: "TechCorp website redesign showing modern responsive design and improved load times",
  caseStudyImage2: "E-commerce platform development with shopping cart and payment integration",
  resultMetric1: "Chart showing 200% increase in online sales after e-commerce website redesign",
  resultMetric2: "Analytics graph displaying 3x improvement in website conversion rate",
  beforeAfter: "Before and after comparison of outdated website versus modern responsive design",
  teamWorking: "Mindframe India development team collaborating on client project",
  clientMeeting: "Project kickoff meeting with client discussing digital marketing strategy",
  deliverables: "Website design mockups and prototypes on designer's screen",
};

/**
 * BLOG & ARTICLE PAGES
 * Pattern: [Topic] + [Key Point] or [Descriptive Scene]
 */
const blogPageExamples = {
  featuredImage: "Featured image for blog post: 10 Digital Marketing Trends in 2024",
  heroImage: "Blog article hero image showing digital marketing dashboard and analytics",
  bodyImage1: "Screenshot of Google Analytics dashboard showing website traffic metrics",
  bodyImage2: "Social media marketing calendar planning template for marketing teams",
  infographic: "Infographic showing digital marketing funnel from awareness to conversion",
  authorPhoto: "Headshot of Priya Sharma, Digital Marketing Manager at Mindframe India",
  relatedImage: "Related article image: How to Create Viral Social Media Content",
  downloadImage: "Preview of downloadable digital marketing checklist PDF",
};

/**
 * TEAM & ABOUT PAGES
 * Pattern: [Person Name] [Role] [Context]
 */
const teamPageExamples = {
  teamPhoto: "Mindframe India leadership team photo - founders and directors",
  memberPhoto: "Rajeesh Patel - Creative Director and Co-founder at Mindframe India",
  departmentPhoto: "Design team members collaborating on brand identity project",
  officePhoto: "Mindframe India modern office space with open collaborative workspace",
  aboutHero: "Mindframe India creative agency team in office environment",
  missionImage: "Mission visualization - helping businesses grow through digital marketing",
  valueIcon1: "Icon representing Innovation core value of Mindframe India",
  valueIcon2: "Icon representing Creativity core value of Mindframe India",
  valueIcon3: "Icon representing Excellence core value of Mindframe India",
};

/**
 * TESTIMONIAL & SOCIAL PROOF PAGES
 * Pattern: [Client/Person Name] [Company] [Result/Quote]
 */
const testimonialPageExamples = {
  clientPhoto: "Client testimonial video thumbnail from ABC Corporation CEO",
  clientLogo: "ABC Corporation company logo - client of Mindframe India",
  ratingImage: "5-star rating and testimonial from satisfied client",
  resultHighlight: "Testimonial from client showing 300% ROI improvement after campaign",
  successStory: "Success story: How Mindframe increased sales by 250% through digital marketing",
};

// ============================================================================
// ALT TAG IMPLEMENTATION PATTERNS
// ============================================================================

/**
 * IMPLEMENTATION PATTERNS BY ELEMENT TYPE
 */

// Pattern 1: Hero Banner Images
export const heroImagePattern = `
<img 
  src="banner.jpg" 
  alt="[Service/Page Name] - [Primary Benefit] - [Company Name]"
/>
Example: <img alt="Web Development Services - Custom Responsive Websites - Mindframe India" />
`;

// Pattern 2: Product/Service Screenshots
export const screenshotPattern = `
<img 
  src="screenshot.jpg" 
  alt="[Product Name] [Feature] screenshot showing [Key Element]"
/>
Example: <img alt="WordPress website builder screenshot showing drag-and-drop interface" />
`;

// Pattern 3: Team/People Photos
export const peoplePhotoPattern = `
<img 
  src="photo.jpg" 
  alt="[Name], [Title] at [Company Name]"
/>
Example: <img alt="Sarah Johnson, Lead Designer at Mindframe India" />
`;

// Pattern 4: Before/After Comparison
export const beforeAfterPattern = `
<img 
  src="before.jpg" 
  alt="Before: [Old State] - [Metric]"
/>
<img 
  src="after.jpg" 
  alt="After: [New State] - [Metric] [Improvement]"
/>
Example: 
<img alt="Before optimization: Slow website with poor design" />
<img alt="After optimization: Fast responsive website with improved conversions" />
`;

// Pattern 5: Chart/Data Visualization
export const chartPattern = `
<img 
  src="chart.jpg" 
  alt="[Chart Type] showing [Key Metric] [Improvement Percentage] increase over [Time Period]"
/>
Example: <img alt="Line graph showing 45% increase in website traffic over 6 months" />
`;

// Pattern 6: Icon Images
export const iconPattern = `
<img 
  src="icon.svg" 
  alt="[Icon Description] icon"
/>
Example: <img alt="Responsive design icon" />
`;

// Pattern 7: Decorative/Background Images
export const decorativePattern = `
<img 
  src="decoration.jpg" 
  alt="Decorative background element"
/>
OR
<img 
  src="decoration.jpg" 
  alt="" 
  aria-hidden="true"
/>
(Use aria-hidden for purely decorative images)
`;

// ============================================================================
// LENGTH GUIDELINES
// ============================================================================

/**
 * ALT TEXT LENGTH RECOMMENDATIONS
 * - Short: 5-10 words (icons, small graphics)
 * - Medium: 10-20 words (product images, screenshots)
 * - Long: 20-125 words (detailed images, infographics)
 * - Maximum: 125 characters (some readers truncate longer text)
 */

export const altTextGuidelines = {
  tooShort: "Logo", // ❌ Not descriptive enough
  good: "Mindframe India company logo with gold accents", // ✅ Better
  tooLong: "The Mindframe India logo which is a modern design with gold accents and features a stylized frame that represents our commitment to framing your brand in the best possible light", // ❌ Too verbose
  
  tooShortScreenshot: "Screenshot", // ❌ Not specific
  goodScreenshot: "Analytics dashboard showing website traffic metrics and conversion rate", // ✅ Better
  
  tooShortPhoto: "Team", // ❌ Not descriptive
  goodPhoto: "Mindframe India creative team collaborating on marketing strategy in office", // ✅ Better
};

// ============================================================================
// SEO IMPACT OF ALT TAGS
// ============================================================================

/**
 * BENEFITS OF PROPER ALT TAGS
 * 1. Accessibility - Screen readers can describe images to visually impaired users
 * 2. SEO - Search engines index images with relevant alt text
 * 3. Context - Provides context if image fails to load
 * 4. User Experience - Improves overall page quality
 * 5. Image Search - Images appear in Google Images with better descriptions
 */

// ============================================================================
// COMMON MISTAKES TO AVOID
// ============================================================================

export const altTextMistakes = {
  mistake1: {
    bad: 'alt="image"',
    good: 'alt="Mindframe India team photo at office"',
    reason: "Generic alt text provides no value",
  },
  mistake2: {
    bad: 'alt="photo123"',
    good: 'alt="Web design mockup for e-commerce website"',
    reason: "Filename is not descriptive",
  },
  mistake3: {
    bad: 'alt="Click here"',
    good: 'alt="Visit Mindframe India services page"',
    reason: "Doesn't describe the image content",
  },
  mistake4: {
    bad: 'alt="Mindframe logo Mindframe logo"',
    good: 'alt="Mindframe India company logo"',
    reason: "Keyword stuffing - repeat keywords",
  },
  mistake5: {
    bad: 'alt=""',
    good: 'alt="Team working on project together"',
    reason: "Empty alt text is inaccessible",
  },
  mistake6: {
    bad: 'alt="graphic"',
    good: 'alt="Chart showing 200% increase in sales after digital marketing campaign"',
    reason: "Too generic, not descriptive enough",
  },
};

// ============================================================================
// ACCESSIBILITY CONSIDERATIONS
// ============================================================================

/**
 * FOR SCREEN READERS
 * - Use specific, descriptive language
 * - Include context and purpose
 * - Describe key elements (people, text, data)
 * - Keep under 125 characters ideally
 * - Use natural language, not technical terms
 */

export const accessibilityTips = {
  describe: "Describe what the image shows, not 'image of'",
  context: "Include relevant context (location, time, purpose)",
  people: "Name people if they're key to understanding",
  data: "For charts, describe the data and trend",
  actionable: "For buttons/links, describe action user can take",
  consistency: "Use consistent terminology across site",
};

// ============================================================================
// EXPORT HELPER FUNCTION
// ============================================================================

export function generateImageAlt(type, options = {}) {
  const {
    pageName,
    serviceName,
    clientName,
    metric,
    improvement,
    personName,
    personRole,
    topic,
  } = options;

  switch (type) {
    case "service-hero":
      return `${serviceName} services - Professional agency offering high-quality solutions - Mindframe India`;
    case "service-benefit":
      return `${serviceName} benefit showing ${metric} improvement`;
    case "case-study":
      return `${clientName} case study results - ${improvement}% improvement in ${metric}`;
    case "team-member":
      return `${personName}, ${personRole} at Mindframe India`;
    case "blog-featured":
      return `Featured image for blog post: ${topic}`;
    case "chart":
      return `Graph showing ${improvement}% improvement in ${metric}`;
    default:
      return "";
  }
}

export default {
  imageAltTags,
  servicePageExamples,
  portfolioPageExamples,
  blogPageExamples,
  teamPageExamples,
  testimonialPageExamples,
  altTextGuidelines,
  altTextMistakes,
  generateImageAlt,
};
