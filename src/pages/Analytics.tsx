import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const maintenanceCost = [
  { month: "Jul", cost: 45000 },
  { month: "Aug", cost: 52000 },
  { month: "Sep", cost: 48000 },
  { month: "Oct", cost: 41000 },
  { month: "Nov", cost: 38000 },
  { month: "Dec", cost: 35000 },
];

const failureDistribution = [
  { name: "Battery", value: 35, color: "hsl(187 92% 50%)" },
  { name: "Brakes", value: 25, color: "hsl(38 92% 50%)" },
  { name: "Engine", value: 20, color: "hsl(142 71% 45%)" },
  { name: "HVAC", value: 12, color: "hsl(0 72% 51%)" },
  { name: "Other", value: 8, color: "hsl(217 33% 40%)" },
];

const fleetUtilization = [
  { fleet: "Fleet A", utilization: 94 },
  { fleet: "Fleet B", utilization: 87 },
  { fleet: "Fleet C", utilization: 91 },
  { fleet: "Fleet D", utilization: 96 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-bold">Analytics & Insights</h1>
        <p className="text-muted-foreground mt-1">Fleet performance analytics and business intelligence</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-fade-in">
        {[
          { label: "Cost Savings", value: "$127K", subtitle: "vs. reactive maintenance" },
          { label: "Downtime Reduced", value: "67%", subtitle: "YoY improvement" },
          { label: "Prediction Accuracy", value: "94.2%", subtitle: "Model performance" },
          { label: "Fleet Uptime", value: "99.2%", subtitle: "Average availability" },
        ].map((kpi, index) => (
          <div key={index} className="glass-card p-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{kpi.label}</p>
            <p className="text-3xl font-bold font-mono text-primary mt-2">{kpi.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{kpi.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Maintenance Cost Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={maintenanceCost}>
                <defs>
                  <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(187 92% 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(187 92% 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(222 47% 9%)", border: "1px solid hsl(217 33% 17%)", borderRadius: "8px" }} formatter={(v: number) => [`$${v.toLocaleString()}`, "Cost"]} />
                <Area type="monotone" dataKey="cost" stroke="hsl(187 92% 50%)" strokeWidth={2} fill="url(#costGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Failure Distribution</h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={failureDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                  {failureDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "hsl(222 47% 9%)", border: "1px solid hsl(217 33% 17%)", borderRadius: "8px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {failureDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-muted-foreground">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card p-6 animate-fade-in">
        <h3 className="text-lg font-semibold mb-4">Fleet Utilization Rate</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fleetUtilization}>
              <XAxis dataKey="fleet" axisLine={false} tickLine={false} tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} />
              <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(222 47% 9%)", border: "1px solid hsl(217 33% 17%)", borderRadius: "8px" }} />
              <Bar dataKey="utilization" fill="hsl(142 71% 45%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
