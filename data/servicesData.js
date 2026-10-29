import {
  Badge,
  FileCheck,
  Car,
  Briefcase,
  CreditCard,
  Ticket,
  ShieldCheck,
  FileText,
  UserCheck,
  Landmark,
  Home,
  HeartPulse,
  GraduationCap,
  Scale,
  Stethoscope,
  Stamp,
  Compass,
  FileSpreadsheet,
  Award
} from "lucide-react";

/**
 * Registry of icons mapped by string identifier.
 * Includes all icons required for all 17 service categories.
 */
export const ICON_MAP = {
  Badge,
  FileCheck,
  Car,
  Briefcase,
  CreditCard,
  Ticket,
  ShieldCheck,
  FileText,
  UserCheck,
  Landmark,
  Home,
  HeartPulse,
  GraduationCap,
  Scale,
  Stethoscope,
  Stamp,
  Compass,
  FileSpreadsheet,
  Award
};

/**
 * Service categories catalogue configuration.
 * Fully defines all 17 official service categories.
 */
export const serviceCategories = [
  {
    id: "pan",
    icon: "CreditCard",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "ration",
    icon: "FileText",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "certificates",
    icon: "FileCheck",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "insurance",
    icon: "ShieldCheck",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "msme",
    icon: "Briefcase",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "gst",
    icon: "FileSpreadsheet",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "shop_act",
    icon: "Stamp",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "itr",
    icon: "Scale",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "property_tax",
    icon: "Home",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "employment_education",
    icon: "GraduationCap",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "legal_documents",
    icon: "FileText",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "gov_id_welfare",
    icon: "Badge",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "land_records",
    icon: "Compass",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "banking_utilities",
    icon: "Landmark",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "business_ip",
    icon: "Award",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "business_misc",
    icon: "Car",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  },
  {
    id: "welfare_schemes",
    icon: "HeartPulse",
    color: "text-orange-500",
    bg: "bg-white",
    iconBg: "bg-orange-50"
  }
];

/**
 * Retrieves the list of individual services for a category using current translations.
 * Supports structured array lists (t.services.items) or delimiter-separated descriptor strings (t.services.desc).
 *
 * @param {string} categoryId - The unique ID of the category.
 * @param {object} t - The active translation dictionary.
 * @returns {string[]} An array of localized service names.
 */
export function getCategoryServices(categoryId, t) {
  if (!t || !t.services) return [];

  // Preferred: structured items array for all 17 categories
  if (Array.isArray(t.services.items?.[categoryId])) {
    return t.services.items[categoryId];
  }

  // Fallback: delimiter-separated descriptor string
  const desc = t.services.desc?.[categoryId];
  if (!desc || typeof desc !== "string") return [];

  return desc
    .split(/[.,।]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}
