import { cn } from "@/lib/utils";
import { AlertTriangle, AlertCircle, Info, Clock } from "lucide-react";

interface Alert {
  id: string;
  type: "critical" | "warning" | "info";
  title: string;
  vehicle: string;
  time: string;
  confidence: number;
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "critical",
    title: "Battery failure predicted",
    vehicle: "Fleet-A-047",
    time: "2 min ago",
    confidence: 94,
  },
  {
    id: "2",
    type: "warning",
    title: "Brake pad wear detected",
    vehicle: "Fleet-B-012",
    time: "15 min ago",
    confidence: 87,
  },
  {
    id: "3",
    type: "warning",
    title: "Engine temperature anomaly",
    vehicle: "Fleet-A-089",
    time: "32 min ago",
    confidence: 76,
  },
  {
    id: "4",
    type: "info",
    title: "Scheduled maintenance due",
    vehicle: "Fleet-C-003",
    time: "1 hour ago",
    confidence: 100,
  },
];

export function AlertsList() {
  const getAlertStyles = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return {
          icon: AlertTriangle,
          bg: "bg-destructive/10",
          border: "border-destructive/30",
          text: "text-destructive",
        };
      case "warning":
        return {
          icon: AlertCircle,
          bg: "bg-warning/10",
          border: "border-warning/30",
          text: "text-warning",
        };
      case "info":
        return {
          icon: Info,
          bg: "bg-info/10",
          border: "border-info/30",
          text: "text-info",
        };
    }
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Active Alerts</h3>
          <p className="text-sm text-muted-foreground">AI-detected anomalies requiring attention</p>
        </div>
        <button className="text-sm text-primary hover:underline">View all</button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const styles = getAlertStyles(alert.type);
          const Icon = styles.icon;

          return (
            <div
              key={alert.id}
              className={cn(
                "flex items-start gap-4 p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:border-primary/30",
                styles.bg,
                styles.border
              )}
            >
              <div className={cn("p-2 rounded-lg", styles.bg)}>
                <Icon className={cn("w-4 h-4", styles.text)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-sm truncate">{alert.title}</p>
                  <span className={cn("text-xs font-mono px-2 py-0.5 rounded-full", styles.bg, styles.text)}>
                    {alert.confidence}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{alert.vehicle}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
