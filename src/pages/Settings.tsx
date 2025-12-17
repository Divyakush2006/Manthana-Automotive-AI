import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Database, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const settingsSections = [
  {
    title: "Profile Settings",
    icon: User,
    description: "Manage your account information and preferences",
    settings: [
      { id: "email-notifications", label: "Email Notifications", enabled: true },
      { id: "two-factor", label: "Two-Factor Authentication", enabled: true },
    ]
  },
  {
    title: "Notification Preferences",
    icon: Bell,
    description: "Configure how you receive alerts and updates",
    settings: [
      { id: "critical-alerts", label: "Critical Alerts", enabled: true },
      { id: "maintenance-reminders", label: "Maintenance Reminders", enabled: true },
      { id: "weekly-reports", label: "Weekly Reports", enabled: false },
    ]
  },
  {
    title: "Security Settings",
    icon: Shield,
    description: "Manage security and access controls",
    settings: [
      { id: "session-timeout", label: "Auto Session Timeout", enabled: true },
      { id: "ip-restriction", label: "IP Restriction", enabled: false },
    ]
  },
  {
    title: "Display Preferences",
    icon: Palette,
    description: "Customize your dashboard appearance",
    settings: [
      { id: "dark-mode", label: "Dark Mode", enabled: true },
      { id: "compact-view", label: "Compact View", enabled: false },
    ]
  },
];

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account and application preferences
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Account Status"
          value="Active"
          subtitle="Enterprise Plan"
          icon={User}
          status="success"
        />
        <MetricCard
          title="API Usage"
          value="72%"
          subtitle="Of monthly quota"
          icon={Database}
          status="info"
        />
        <MetricCard
          title="Security Score"
          value="94"
          subtitle="Excellent"
          icon={Shield}
          status="success"
        />
        <MetricCard
          title="Support"
          value="24/7"
          subtitle="Priority support"
          icon={HelpCircle}
          status="info"
        />
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="glass-card p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{section.title}</h3>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            </div>
            <div className="space-y-4">
              {section.settings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50">
                  <Label htmlFor={setting.id} className="cursor-pointer">{setting.label}</Label>
                  <Switch id={setting.id} defaultChecked={setting.enabled} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-6 glass-card p-6 animate-fade-in">
        <h3 className="font-semibold mb-4">System Information</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
            <p className="text-sm text-muted-foreground">Version</p>
            <p className="font-mono font-semibold">v2.4.1</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="font-mono font-semibold">Dec 17, 2024</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
            <p className="text-sm text-muted-foreground">Region</p>
            <p className="font-mono font-semibold">US-East</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
            <p className="text-sm text-muted-foreground">Environment</p>
            <p className="font-mono font-semibold">Production</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
