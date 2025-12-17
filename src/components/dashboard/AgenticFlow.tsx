import { cn } from "@/lib/utils";
import { Brain, ArrowRight, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Predict",
    description: "AI analyzes sensor data",
    status: "active" as const,
    value: "47 predictions",
  },
  {
    icon: ArrowRight,
    title: "Decide",
    description: "Autonomous decision-making",
    status: "active" as const,
    value: "12 decisions",
  },
  {
    icon: Wrench,
    title: "Act",
    description: "Schedule maintenance",
    status: "pending" as const,
    value: "8 actions",
  },
  {
    icon: CheckCircle,
    title: "Maintain",
    description: "Execute service",
    status: "completed" as const,
    value: "156 completed",
  },
];

export function AgenticFlow() {
  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Agentic AI Flow</h3>
          <p className="text-sm text-muted-foreground">Real-time autonomous maintenance pipeline</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Processing</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-300",
                  step.status === "active" && "bg-primary/10 border-primary/30 text-primary glow-primary",
                  step.status === "pending" && "bg-warning/10 border-warning/30 text-warning",
                  step.status === "completed" && "bg-success/10 border-success/30 text-success"
                )}
              >
                <step.icon className="w-6 h-6" />
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm font-semibold">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
                <p className={cn(
                  "text-xs font-mono mt-1",
                  step.status === "active" && "text-primary",
                  step.status === "pending" && "text-warning",
                  step.status === "completed" && "text-success"
                )}>
                  {step.value}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="w-16 h-px bg-gradient-to-r from-primary/50 to-primary/10 mx-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
