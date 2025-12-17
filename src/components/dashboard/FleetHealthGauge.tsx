import { cn } from "@/lib/utils";

interface FleetHealthGaugeProps {
  score: number;
  label: string;
  className?: string;
}

export function FleetHealthGauge({ score, label, className }: FleetHealthGaugeProps) {
  const getColor = (value: number) => {
    if (value >= 80) return "text-success";
    if (value >= 60) return "text-warning";
    return "text-destructive";
  };

  const getGlow = (value: number) => {
    if (value >= 80) return "glow-success";
    if (value >= 60) return "glow-warning";
    return "glow-destructive";
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted/30"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={cn(getColor(score), "transition-all duration-1000")}
          />
        </svg>
        {/* Center value */}
        <div className={cn("absolute inset-0 flex flex-col items-center justify-center", getGlow(score))}>
          <span className={cn("text-3xl font-bold font-mono", getColor(score))}>{score}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Score</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}
