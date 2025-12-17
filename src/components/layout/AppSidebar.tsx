import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  Cpu,
  Activity,
  Calendar,
  Bell,
  BarChart3,
  Shield,
  Settings,
  ChevronLeft,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Fleet Health", url: "/fleet", icon: Car },
  { title: "Vehicles", url: "/vehicles", icon: Cpu },
  { title: "Predictions", url: "/predictions", icon: Activity },
  { title: "Service Schedule", url: "/schedule", icon: Calendar },
  { title: "Alerts", url: "/alerts", icon: Bell },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Security", url: "/security", icon: Shield },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center w-full")}>
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center glow-primary">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Manthana</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Automotive AI</span>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-1.5 rounded-md hover:bg-sidebar-accent transition-colors",
            collapsed && "absolute left-16 -ml-3 bg-sidebar border border-sidebar-border z-10"
          )}
        >
          <ChevronLeft className={cn("w-4 h-4 text-muted-foreground transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <NavLink
              key={item.url}
              to={item.url}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                "hover:bg-sidebar-accent group",
                isActive && "bg-primary/10 text-primary border border-primary/20",
                !isActive && "text-muted-foreground hover:text-foreground",
                collapsed && "justify-center px-2"
              )}
            >
              <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-primary")} />
              {!collapsed && (
                <span className="text-sm font-medium">{item.title}</span>
              )}
              {isActive && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <NavLink
          to="/settings"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
            "hover:bg-sidebar-accent text-muted-foreground hover:text-foreground",
            collapsed && "justify-center px-2"
          )}
        >
          <Settings className="w-5 h-5" />
          {!collapsed && <span className="text-sm font-medium">Settings</span>}
        </NavLink>
      </div>
    </aside>
  );
}
