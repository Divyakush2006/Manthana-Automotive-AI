import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", health: 92, predictions: 12 },
  { name: "Tue", health: 89, predictions: 18 },
  { name: "Wed", health: 94, predictions: 8 },
  { name: "Thu", health: 91, predictions: 15 },
  { name: "Fri", health: 87, predictions: 22 },
  { name: "Sat", health: 93, predictions: 10 },
  { name: "Sun", health: 96, predictions: 6 },
];

export function FleetOverviewChart() {
  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Fleet Health Trend</h3>
          <p className="text-sm text-muted-foreground">7-day health score and prediction volume</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Health Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-muted-foreground">Predictions</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(187 92% 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(187 92% 50%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="predictionsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(38 92% 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(38 92% 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222 47% 9%)",
                border: "1px solid hsl(217 33% 17%)",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
              itemStyle={{ color: "hsl(210 40% 96%)" }}
              labelStyle={{ color: "hsl(215 20% 55%)" }}
            />
            <Area
              type="monotone"
              dataKey="health"
              stroke="hsl(187 92% 50%)"
              strokeWidth={2}
              fill="url(#healthGradient)"
            />
            <Area
              type="monotone"
              dataKey="predictions"
              stroke="hsl(38 92% 50%)"
              strokeWidth={2}
              fill="url(#predictionsGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
