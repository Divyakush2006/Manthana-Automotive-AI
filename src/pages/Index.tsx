import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { FleetHealthGauge } from "@/components/dashboard/FleetHealthGauge";
import { AgenticFlow } from "@/components/dashboard/AgenticFlow";
import { AlertsList } from "@/components/dashboard/AlertsList";
import { FleetOverviewChart } from "@/components/dashboard/FleetOverviewChart";
import { VehicleStatusTable } from "@/components/dashboard/VehicleStatusTable";
import { Car, Activity, Wrench, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-bold">Overview Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Real-time fleet monitoring powered by Agentic AI
        </p>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total Vehicles"
          value="1,247"
          subtitle="Active in fleet"
          icon={Car}
          trend={{ value: 2.4, positive: true }}
          status="info"
          className="delay-100"
        />
        <MetricCard
          title="Health Score"
          value="94.2%"
          subtitle="Fleet average"
          icon={Activity}
          trend={{ value: 1.8, positive: true }}
          status="success"
          className="delay-200"
        />
        <MetricCard
          title="Pending Actions"
          value="23"
          subtitle="Scheduled today"
          icon={Wrench}
          trend={{ value: 5.2, positive: false }}
          status="warning"
          className="delay-300"
        />
        <MetricCard
          title="Active Alerts"
          value="7"
          subtitle="Require attention"
          icon={AlertTriangle}
          trend={{ value: 12.5, positive: false }}
          status="destructive"
          className="delay-400"
        />
      </div>

      {/* Agentic Flow */}
      <div className="mb-6">
        <AgenticFlow />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Fleet Health Section */}
        <div className="glass-card p-6 animate-fade-in delay-200 overflow-hidden">
          <h3 className="text-lg font-semibold mb-6">Fleet Health Overview</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <FleetHealthGauge score={94} label="Fleet A" className="flex-shrink-0" />
            <FleetHealthGauge score={87} label="Fleet B" className="flex-shrink-0" />
            <FleetHealthGauge score={91} label="Fleet C" className="flex-shrink-0" />
          </div>
        </div>

        {/* Chart Section */}
        <div className="lg:col-span-2">
          <FleetOverviewChart />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts */}
        <div className="lg:col-span-1">
          <AlertsList />
        </div>

        {/* Vehicle Table */}
        <div className="lg:col-span-2">
          <VehicleStatusTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
