export const ROUTE_PATHS = {
  HOME: "/",
} as const;

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  requirement: string;
  city: string;
}

export const COMPANY_INFO = {
  name: "Airteknics",
  legalName: "Airteknics Industrial Solutions",
  tagline: "Karnataka's Leading Dealer of Industrial PVC Curtains, Air Curtains and Commercial Doors",
  address: "Legacy Celino, Thanisandra, Bangalore 560 092, India",
  phone: "080 4230 3723",
  whatsapp: "+918042303723",
  email: "sales@airteknics.com",
  workingHours: "Mon to Sat: 9:00 AM - 6:00 PM",
  website: "www.airteknics.com",
  copyright: "© 2026 Airteknics. All rights reserved.",
  socialLinks: {
    facebook: "#",
    linkedin: "#",
    twitter: "#"
  },
  productSpecs: {
    pvcCurtains: [
      { label: "Material", value: "High-Grade Flexible PVC" },
      { label: "Transparency", value: "95%+ Optical Clarity" },
      { label: "Temp Range", value: "-15°C to +50°C" },
      { label: "Thickness", value: "2mm, 3mm, 5mm" },
      { label: "Widths", value: "200mm, 300mm, 400mm" }
    ]
  },
  industries: [
    "Warehousing & Logistics",
    "Food Processing",
    "Cold Storage",
    "Pharmaceuticals",
    "Hospitality & Restaurants",
    "Manufacturing Units"
  ],
  keyBenefits: [
    "Energy Efficiency",
    "Contamination Control", 
    "Noise Reduction",
    "Industrial Durability",
    "Seamless Passage"
  ],
  benefits: [
    {
      title: "Energy Efficiency",
      description: "Maintains internal ambient temperature, reducing energy costs by up to 30%."
    },
    {
      title: "Contamination Control",
      description: "Creates a barrier against dust, fumes, and contaminants while allowing easy passage."
    },
    {
      title: "Noise Reduction",
      description: "Significantly dampens industrial noise between different work zones."
    },
    {
      title: "Industrial Durability",
      description: "UV-stabilized and impact-resistant materials designed for heavy-duty B2B use."
    },
    {
      title: "Seamless Passage",
      description: "Allows smooth movement of personnel and equipment without compromising environmental control."
    }
  ]
};

/**
 * Utility function to format phone numbers for tel: links
 */
export function formatPhoneForLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/**
 * Utility function to format WhatsApp links
 */
export function formatWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/[^\d+]/g, "");
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}

/**
 * Utility to smooth scroll to anchor elements
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
