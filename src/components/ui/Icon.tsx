import {
  Award,
  Briefcase,
  Building2,
  Car,
  Factory,
  FileBarChart,
  GraduationCap,
  Languages,
  type LucideProps,
  MapPin,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Store,
} from "lucide-react";

// Icons named in src/content (by Lucide name). Add new ones here when content uses them.
const icons = {
  Award,
  Briefcase,
  Building2,
  Car,
  Factory,
  FileBarChart,
  GraduationCap,
  Languages,
  MapPin,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Store,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = icons[name as IconName];
  if (!Component)
    throw new Error(`Icon "${name}" is not registered in Icon.tsx`);
  return <Component strokeWidth={1.75} aria-hidden="true" {...props} />;
}
