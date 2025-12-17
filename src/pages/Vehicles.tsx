import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Search, Filter, MoreVertical, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Vehicle {
  id: string;
  name: string;
  fleet: string;
  model: string;
  year: number;
  status: "healthy" | "warning" | "critical" | "maintenance";
  health: number;
  rul: number;
  lastLocation: string;
  nextService: string;
}

const vehicles: Vehicle[] = [
  { id: "1", name: "Fleet-A-001", fleet: "Fleet A", model: "Tesla Model 3", year: 2023, status: "healthy", health: 98, rul: 156, lastLocation: "Depot A", nextService: "2024-02-15" },
  { id: "2", name: "Fleet-A-047", fleet: "Fleet A", model: "Tesla Model Y", year: 2022, status: "critical", health: 45, rul: 12, lastLocation: "Route 7", nextService: "Immediate" },
  { id: "3", name: "Fleet-B-012", fleet: "Fleet B", model: "Ford E-Transit", year: 2023, status: "warning", health: 72, rul: 45, lastLocation: "Depot B", nextService: "2024-01-25" },
  { id: "4", name: "Fleet-B-023", fleet: "Fleet B", model: "Ford E-Transit", year: 2022, status: "healthy", health: 89, rul: 89, lastLocation: "Route 3", nextService: "2024-02-01" },
  { id: "5", name: "Fleet-C-003", fleet: "Fleet C", model: "Rivian EDV", year: 2023, status: "healthy", health: 95, rul: 112, lastLocation: "Depot C", nextService: "2024-02-20" },
  { id: "6", name: "Fleet-A-089", fleet: "Fleet A", model: "Tesla Model 3", year: 2023, status: "warning", health: 68, rul: 34, lastLocation: "Route 12", nextService: "2024-01-22" },
  { id: "7", name: "Fleet-D-015", fleet: "Fleet D", model: "Mercedes eSprinter", year: 2023, status: "maintenance", health: 85, rul: 78, lastLocation: "Service Center", nextService: "In Progress" },
  { id: "8", name: "Fleet-C-041", fleet: "Fleet C", model: "Rivian EDV", year: 2022, status: "healthy", health: 91, rul: 98, lastLocation: "Route 5", nextService: "2024-02-10" },
];

const getStatusStyles = (status: Vehicle["status"]) => {
  switch (status) {
    case "healthy": return "bg-success/10 text-success border-success/20";
    case "warning": return "bg-warning/10 text-warning border-warning/20";
    case "critical": return "bg-destructive/10 text-destructive border-destructive/20";
    case "maintenance": return "bg-info/10 text-info border-info/20";
  }
};

const Vehicles = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Vehicle Management</h1>
            <p className="text-muted-foreground mt-1">Monitor and manage individual vehicle health</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6 animate-fade-in">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search vehicles..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-muted/50 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors">
          <Filter className="w-4 h-4" />
          Filters
        </button>
        <select className="h-10 px-4 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
          <option>All Fleets</option>
          <option>Fleet A</option>
          <option>Fleet B</option>
          <option>Fleet C</option>
          <option>Fleet D</option>
        </select>
        <select className="h-10 px-4 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
          <option>All Status</option>
          <option>Healthy</option>
          <option>Warning</option>
          <option>Critical</option>
          <option>Maintenance</option>
        </select>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="glass-card p-5 card-hover cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-mono font-semibold">{vehicle.name}</p>
                <p className="text-xs text-muted-foreground">{vehicle.fleet}</p>
              </div>
              <button className="p-1 rounded hover:bg-muted transition-colors">
                <MoreVertical className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium border capitalize",
                  getStatusStyles(vehicle.status)
                )}>
                  {vehicle.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Health</span>
                <span className={cn(
                  "font-mono font-semibold",
                  vehicle.health >= 80 ? "text-success" : vehicle.health >= 60 ? "text-warning" : "text-destructive"
                )}>
                  {vehicle.health}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">RUL</span>
                <span className="font-mono text-sm">{vehicle.rul} days</span>
              </div>

              <div className="pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground">{vehicle.model} ({vehicle.year})</p>
                <p className="text-xs text-muted-foreground mt-1">📍 {vehicle.lastLocation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Vehicles;
