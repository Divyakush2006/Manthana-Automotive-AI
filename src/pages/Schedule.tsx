import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Calendar, Clock, CheckCircle, Wrench, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  id: string;
  vehicle: string;
  type: "preventive" | "corrective" | "emergency";
  task: string;
  scheduledDate: string;
  scheduledTime: string;
  assignedTo: string;
  status: "scheduled" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
}

const scheduleItems: ScheduleItem[] = [
  { id: "1", vehicle: "Fleet-A-047", type: "emergency", task: "Battery Pack Replacement", scheduledDate: "2024-01-18", scheduledTime: "09:00", assignedTo: "Tech Team A", status: "scheduled", priority: "high" },
  { id: "2", vehicle: "Fleet-B-012", type: "preventive", task: "Brake Pad Service", scheduledDate: "2024-01-20", scheduledTime: "14:00", assignedTo: "Tech Team B", status: "scheduled", priority: "medium" },
  { id: "3", vehicle: "Fleet-D-015", type: "corrective", task: "HVAC System Repair", scheduledDate: "2024-01-18", scheduledTime: "10:30", assignedTo: "Tech Team C", status: "in-progress", priority: "medium" },
  { id: "4", vehicle: "Fleet-A-089", type: "preventive", task: "Cooling System Inspection", scheduledDate: "2024-01-22", scheduledTime: "11:00", assignedTo: "Tech Team A", status: "scheduled", priority: "low" },
  { id: "5", vehicle: "Fleet-C-003", type: "preventive", task: "Oil Change & Filter", scheduledDate: "2024-01-19", scheduledTime: "08:00", assignedTo: "Tech Team D", status: "completed", priority: "low" },
];

const Schedule = () => {
  const getTypeStyles = (type: ScheduleItem["type"]) => {
    switch (type) {
      case "emergency": return "bg-destructive/10 text-destructive border-destructive/20";
      case "corrective": return "bg-warning/10 text-warning border-warning/20";
      case "preventive": return "bg-info/10 text-info border-info/20";
    }
  };

  const getStatusStyles = (status: ScheduleItem["status"]) => {
    switch (status) {
      case "completed": return "bg-success/10 text-success";
      case "in-progress": return "bg-warning/10 text-warning";
      case "scheduled": return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityIndicator = (priority: ScheduleItem["priority"]) => {
    switch (priority) {
      case "high": return "bg-destructive";
      case "medium": return "bg-warning";
      case "low": return "bg-success";
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Service Schedule</h1>
            <p className="text-muted-foreground mt-1">AI-orchestrated maintenance scheduling and tracking</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            New Schedule
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <MetricCard title="Scheduled Today" value="8" subtitle="Service appointments" icon={Calendar} status="info" />
        <MetricCard title="In Progress" value="3" subtitle="Active services" icon={Clock} status="warning" />
        <MetricCard title="Completed" value="156" subtitle="This week" icon={CheckCircle} status="success" />
        <MetricCard title="Technicians" value="12" subtitle="Available today" icon={Wrench} status="info" />
      </div>

      {/* Schedule Table */}
      <div className="glass-card p-6 animate-fade-in">
        <h3 className="text-lg font-semibold mb-6">Upcoming Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Vehicle</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Task</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Date & Time</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Assigned To</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {scheduleItems.map((item) => (
                <tr key={item.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-1.5 h-8 rounded-full", getPriorityIndicator(item.priority))} />
                      <span className="font-mono font-medium text-sm">{item.vehicle}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium border capitalize", getTypeStyles(item.type))}>
                      {item.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm">{item.task}</td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm font-medium">{item.scheduledDate}</p>
                      <p className="text-xs text-muted-foreground">{item.scheduledTime}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">{item.assignedTo}</td>
                  <td className="py-4 px-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium capitalize", getStatusStyles(item.status))}>
                      {item.status.replace("-", " ")}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-sm text-primary hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
