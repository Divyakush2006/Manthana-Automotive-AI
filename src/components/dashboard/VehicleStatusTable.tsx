import { cn } from "@/lib/utils";
import { MoreHorizontal, ArrowUpRight } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  status: "healthy" | "warning" | "critical";
  rul: number;
  lastService: string;
  nextAction: string;
}

const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Fleet-A-047",
    status: "critical",
    rul: 12,
    lastService: "2024-01-15",
    nextAction: "Battery replacement",
  },
  {
    id: "2",
    name: "Fleet-A-089",
    status: "warning",
    rul: 34,
    lastService: "2024-01-10",
    nextAction: "Engine inspection",
  },
  {
    id: "3",
    name: "Fleet-B-012",
    status: "warning",
    rul: 45,
    lastService: "2024-01-12",
    nextAction: "Brake service",
  },
  {
    id: "4",
    name: "Fleet-B-023",
    status: "healthy",
    rul: 89,
    lastService: "2024-01-08",
    nextAction: "Routine check",
  },
  {
    id: "5",
    name: "Fleet-C-003",
    status: "healthy",
    rul: 92,
    lastService: "2024-01-05",
    nextAction: "Oil change",
  },
];

export function VehicleStatusTable() {
  const getStatusStyles = (status: Vehicle["status"]) => {
    switch (status) {
      case "healthy":
        return "bg-success/10 text-success border-success/20";
      case "warning":
        return "bg-warning/10 text-warning border-warning/20";
      case "critical":
        return "bg-destructive/10 text-destructive border-destructive/20";
    }
  };

  const getRULColor = (rul: number) => {
    if (rul >= 70) return "text-success";
    if (rul >= 40) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Vehicle Status</h3>
          <p className="text-sm text-muted-foreground">Vehicles requiring immediate attention</p>
        </div>
        <button className="flex items-center gap-1 text-sm text-primary hover:underline">
          View all
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Vehicle
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                RUL (days)
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Last Service
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Next Action
              </th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr
                key={vehicle.id}
                className="border-b border-border/50 hover:bg-muted/30 transition-colors cursor-pointer"
              >
                <td className="py-4 px-4">
                  <span className="font-medium font-mono text-sm">{vehicle.name}</span>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium border capitalize",
                      getStatusStyles(vehicle.status)
                    )}
                  >
                    {vehicle.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={cn("font-mono font-semibold", getRULColor(vehicle.rul))}>
                    {vehicle.rul}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-muted-foreground">{vehicle.lastService}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm">{vehicle.nextAction}</span>
                </td>
                <td className="py-4 px-4">
                  <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
