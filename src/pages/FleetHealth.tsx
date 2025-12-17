import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FleetHealthGauge } from "@/components/dashboard/FleetHealthGauge";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Car, Battery, Gauge, Thermometer, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const fleetData = [
  { name: "Fleet A", vehicles: 412, health: 94, active: 398, maintenance: 14 },
  { name: "Fleet B", vehicles: 356, health: 87, active: 312, maintenance: 44 },
  { name: "Fleet C", vehicles: 289, health: 91, active: 271, maintenance: 18 },
  { name: "Fleet D", vehicles: 190, health: 96, active: 186, maintenance: 4 },
];

const componentHealth = [
  { name: "Battery Systems", health: 89, trend: -2.1, icon: Battery },
  { name: "Engine Performance", health: 94, trend: 1.5, icon: Gauge },
  { name: "Thermal Management", health: 91, trend: 0.8, icon: Thermometer },
];

const FleetHealth = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-bold">Fleet Health Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Comprehensive fleet-wide health monitoring and analysis
        </p>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Fleet Availability"
          value="93.4%"
          subtitle="1,167 of 1,247 active"
          icon={Car}
          trend={{ value: 0.8, positive: true }}
          status="success"
        />
        <MetricCard
          title="Avg Health Score"
          value="92.0"
          subtitle="Across all fleets"
          icon={Gauge}
          trend={{ value: 1.2, positive: true }}
          status="success"
        />
        <MetricCard
          title="In Maintenance"
          value="80"
          subtitle="Scheduled service"
          icon={Battery}
          status="warning"
        />
        <MetricCard
          title="Critical Units"
          value="12"
          subtitle="Require immediate attention"
          icon={Thermometer}
          status="destructive"
        />
      </div>

      {/* Fleet Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-6">Fleet Health Scores</h3>
          <div className="grid grid-cols-2 gap-4">
            {fleetData.map((fleet) => (
              <FleetHealthGauge key={fleet.name} score={fleet.health} label={fleet.name} className="mx-auto" />
            ))}
          </div>
        </div>

        <div className="glass-card p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-6">Fleet Statistics</h3>
          <div className="space-y-4">
            {fleetData.map((fleet) => (
              <div key={fleet.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
                <div>
                  <p className="font-semibold">{fleet.name}</p>
                  <p className="text-sm text-muted-foreground">{fleet.vehicles} vehicles</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Active</p>
                    <p className="font-mono text-success">{fleet.active}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Maintenance</p>
                    <p className="font-mono text-warning">{fleet.maintenance}</p>
                  </div>
                  <div className={cn(
                    "w-16 h-8 rounded-lg flex items-center justify-center font-mono font-semibold text-sm",
                    fleet.health >= 90 ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  )}>
                    {fleet.health}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Health */}
      <div className="glass-card p-6 animate-fade-in">
        <h3 className="text-lg font-semibold mb-6">Component Health Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {componentHealth.map((component) => (
            <div key={component.name} className="p-4 rounded-lg bg-muted/30 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <component.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{component.name}</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="metric-value">{component.health}%</p>
                  <p className="text-sm text-muted-foreground">Health Score</p>
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-sm",
                  component.trend >= 0 ? "text-success" : "text-destructive"
                )}>
                  {component.trend >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{Math.abs(component.trend)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FleetHealth;
