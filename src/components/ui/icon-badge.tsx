import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
}

export function IconBadge({ icon: Icon, className }: IconBadgeProps) {
  return (
    <motion.div
      className={cn(
        "bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-colors duration-300",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
    </motion.div>
  );
}
