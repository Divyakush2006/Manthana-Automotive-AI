import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Brain, TrendingUp, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const predictionData = [
  { component: "Battery", predictions: 23 },
  { component: "Brakes", predictions: 18 },
  { component: "Engine", predictions: 12 },
  { component: "HVAC", predictions: 9 },
  { component: "Transmission", predictions: 7 },
];

const confidenceTrend = [
  { day: "Mon", confidence: 91 },
  { day: "Tue", confidence: 89 },
  { day: "Wed", confidence: 93 },
  { day: "Thu", confidence: 87 },
  { day: "Fri", confidence: 94 },
  { day: "Sat", confidence: 92 },
  { day: "Sun", confidence: 95 },
];

const predictions = [
  {
    id: "1",
    vehicle: "Fleet-A-047",
    component: "Battery Pack",
    prediction: "Capacity degradation",
    rul: 12,
    confidence: 94,
    severity: "critical" as const,
    recommendedAction: "Schedule immediate replacement",
  },
  {
    id: "2",
    vehicle: "Fleet-B-012",
    component: "Brake System",
    prediction: "Pad wear threshold",
    rul: 45,
    confidence: 87,
    severity: "warning" as const,
    recommendedAction: "Schedule brake service within 2 weeks",
  },
  {
    id: "3",
    vehicle: "Fleet-A-089",
    component: "Cooling System",
    prediction: "Thermal efficiency drop",
    rul: 34,
    confidence: 76,
    severity: "warning" as const,
    recommendedAction: "Inspect coolant levels and pump",
  },
  {
    id: "4",
    vehicle: "Fleet-C-041",
    component: "Tire System",
    prediction: "Tread depth warning",
    rul: 67,
    confidence: 82,
    severity: "info" as const,
    recommendedAction: "Monitor and schedule rotation",
  },
];

const Predictions = () => {
  const getSeverityStyles = (severity: "critical" | "warning" | "info") => {
    switch (severity) {
      case "critical": return "bg-destructive/10 text-destructive border-destructive/20";
      case "warning": return "bg-warning/10 text-warning border-warning/20";
      case "info": return "bg-info/10 text-info border-info/20";
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-bold">Failure Predictions & RUL</h1>
        <p className="text-muted-foreground mt-1">AI-powered predictive analytics for maintenance optimization</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Active Predictions"
          value="47"
          subtitle="Across all fleets"
          icon={Brain}
          status="info"
        />
        <MetricCard
          title="Avg Confidence"
          value="91.2%"
          subtitle="Model accuracy"
          icon={TrendingUp}
          trend={{ value: 2.3, positive: true }}
          status="success"
        />
        <MetricCard
          title="Avg RUL"
          value="42 days"
          subtitle="Remaining useful life"
          icon={Clock}
          status="warning"
        />
        <MetricCard
          title="Critical Alerts"
          value="3"
          subtitle="Immediate action needed"
          icon={AlertTriangle}
          status="destructive"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Predictions by Component</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={predictionData} layout="vertical">
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} />
                <YAxis dataKey="component" type="category" axisLine={false} tickLine={false} tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} width={100} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222 47% 9%)",
                    border: "1px solid hsl(217 33% 17%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="predictions" fill="hsl(187 92% 50%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Model Confidence Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={confidenceTrend}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} />
                <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222 47% 9%)",
                    border: "1px solid hsl(217 33% 17%)",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="confidence" stroke="hsl(142 71% 45%)" strokeWidth={2} dot={{ fill: "hsl(142 71% 45%)", strokeWidth: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Predictions List */}
      <div className="glass-card p-6 animate-fade-in">
        <h3 className="text-lg font-semibold mb-6">Active Predictions</h3>
        <div className="space-y-4">
          {predictions.map((pred) => (
            <div key={pred.id} className="flex items-center gap-6 p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors cursor-pointer">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono font-semibold">{pred.vehicle}</span>
                  <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium border", getSeverityStyles(pred.severity))}>
                    {pred.severity}
                  </span>
                </div>
                <p className="text-sm">{pred.component}: {pred.prediction}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-mono font-bold text-warning">{pred.rul}</p>
                <p className="text-xs text-muted-foreground">days RUL</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-mono font-bold text-success">{pred.confidence}%</p>
                <p className="text-xs text-muted-foreground">confidence</p>
              </div>
              <div className="flex-1 text-right">
                <p className="text-sm text-muted-foreground">{pred.recommendedAction}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Predictions;
