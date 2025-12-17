import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    positive: boolean;
  };
  status?: "success" | "warning" | "destructive" | "info";
  className?: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  status = "info",
  className,
}: MetricCardProps) {
  const statusColors = {
    success: "text-success border-success/20 bg-success/5",
    warning: "text-warning border-warning/20 bg-warning/5",
    destructive: "text-destructive border-destructive/20 bg-destructive/5",
    info: "text-primary border-primary/20 bg-primary/5",
  };

  const glowStyles = {
    success: "glow-success",
    warning: "glow-warning",
    destructive: "glow-destructive",
    info: "glow-primary",
  };

  return (
    <div
      className={cn(
        "glass-card p-5 card-hover animate-fade-in",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            "p-2.5 rounded-lg border",
            statusColors[status],
            glowStyles[status]
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
              trend.positive
                ? "bg-success/10 text-success"
                : "bg-destructive/10 text-destructive"
            )}
          >
            <span>{trend.positive ? "↑" : "↓"}</span>
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="metric-label">{title}</p>
        <p className="metric-value">{value}</p>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
