import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AlertsList } from "@/components/dashboard/AlertsList";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Bell, AlertTriangle, AlertCircle, CheckCircle, Filter } from "lucide-react";

const Alerts = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Alerts & Notifications</h1>
            <p className="text-muted-foreground mt-1">Real-time AI-detected anomalies and system notifications</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors">
            <Filter className="w-4 h-4" />
            Filter Alerts
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <MetricCard title="Total Active" value="7" subtitle="Unresolved alerts" icon={Bell} status="info" />
        <MetricCard title="Critical" value="2" subtitle="Immediate action" icon={AlertTriangle} status="destructive" />
        <MetricCard title="Warnings" value="5" subtitle="Monitor closely" icon={AlertCircle} status="warning" />
        <MetricCard title="Resolved Today" value="23" subtitle="Successfully handled" icon={CheckCircle} status="success" />
      </div>

      {/* Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsList />
        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Alert Resolution History</h3>
          <div className="space-y-4">
            {[
              { time: "2 hours ago", message: "Battery anomaly resolved - Fleet-B-089", type: "success" },
              { time: "4 hours ago", message: "Scheduled maintenance completed - Fleet-A-023", type: "success" },
              { time: "6 hours ago", message: "False positive dismissed - Fleet-C-012", type: "info" },
              { time: "Yesterday", message: "Emergency brake service completed - Fleet-D-045", type: "success" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                <div className={`w-2 h-2 rounded-full ${item.type === "success" ? "bg-success" : "bg-info"}`} />
                <div className="flex-1">
                  <p className="text-sm">{item.message}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Alerts;
