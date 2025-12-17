import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Shield, Eye, AlertTriangle, CheckCircle, Lock, UserX } from "lucide-react";
import { cn } from "@/lib/utils";

const securityEvents = [
  { id: "1", type: "anomaly", message: "Unusual login pattern detected", user: "admin@manthana.com", time: "10 min ago", severity: "warning" },
  { id: "2", type: "access", message: "API rate limit exceeded", user: "fleet-api-key", time: "25 min ago", severity: "info" },
  { id: "3", type: "compliance", message: "Data export audit completed", user: "system", time: "1 hour ago", severity: "success" },
  { id: "4", type: "threat", message: "Blocked unauthorized access attempt", user: "unknown", time: "2 hours ago", severity: "critical" },
];

const Security = () => {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-destructive/10 text-destructive border-destructive/20";
      case "warning": return "bg-warning/10 text-warning border-warning/20";
      case "info": return "bg-info/10 text-info border-info/20";
      case "success": return "bg-success/10 text-success border-success/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-bold">Security & Compliance</h1>
        <p className="text-muted-foreground mt-1">UEBA monitoring and security posture management</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <MetricCard title="Security Score" value="94" subtitle="Excellent posture" icon={Shield} status="success" />
        <MetricCard title="Active Sessions" value="47" subtitle="Authenticated users" icon={Eye} status="info" />
        <MetricCard title="Threats Blocked" value="12" subtitle="Last 24 hours" icon={AlertTriangle} status="warning" />
        <MetricCard title="Compliance" value="100%" subtitle="All checks passed" icon={CheckCircle} status="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Events */}
        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-6">Recent Security Events</h3>
          <div className="space-y-4">
            {securityEvents.map((event) => (
              <div key={event.id} className={cn("p-4 rounded-lg border", getSeverityStyles(event.severity))}>
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-sm">{event.message}</p>
                  <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium capitalize", getSeverityStyles(event.severity))}>
                    {event.severity}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{event.user}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Access Control */}
        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-6">Access Control Status</h3>
          <div className="space-y-4">
            {[
              { label: "Multi-Factor Authentication", status: "Enabled", icon: Lock, enabled: true },
              { label: "Role-Based Access Control", status: "Active", icon: Shield, enabled: true },
              { label: "Session Timeout", status: "30 minutes", icon: Eye, enabled: true },
              { label: "Failed Login Lockout", status: "5 attempts", icon: UserX, enabled: true },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-success/10 border border-success/20">
                    <item.icon className="w-4 h-4 text-success" />
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                <span className="text-sm text-success">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Security;
