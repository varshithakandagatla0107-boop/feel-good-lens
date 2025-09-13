import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

// Sample data for mood trends (in a real app, this would come from user data)
const moodData = [
  { date: "Mon", mood: 4, energy: 3.5, stress: 2 },
  { date: "Tue", mood: 3, energy: 2.5, stress: 3.5 },
  { date: "Wed", mood: 4.5, energy: 4, stress: 1.5 },
  { date: "Thu", mood: 3.5, energy: 3, stress: 2.5 },
  { date: "Fri", mood: 5, energy: 4.5, stress: 1 },
  { date: "Sat", mood: 4, energy: 4, stress: 1.5 },
  { date: "Sun", mood: 3.5, energy: 3.5, stress: 2 },
];

const weeklyInsights = [
  { metric: "Average Mood", value: "4.1/5", trend: "+0.3", positive: true },
  { metric: "Energy Level", value: "3.6/5", trend: "+0.2", positive: true },
  { metric: "Stress Level", value: "2.1/5", trend: "-0.4", positive: true },
  { metric: "Consistency", value: "85%", trend: "+5%", positive: true },
];

export const MoodChart = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 rounded-lg shadow-wellness border">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value}/5
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-wellness">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="gradient-wellness bg-clip-text text-transparent">
              Mood Trends
            </span>
          </CardTitle>
          <CardDescription>
            Your emotional patterns over the past week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData}>
                <defs>
                  <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(217 91% 60%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(217 91% 60%)" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142 76% 36%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(142 76% 36%)" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  domain={[0, 5]}
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="mood"
                  stroke="hsl(217 91% 60%)"
                  fill="url(#moodGradient)"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  dataKey="energy"
                  stroke="hsl(142 76% 36%)"
                  fill="url(#energyGradient)"
                  strokeWidth={2}
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {weeklyInsights.map((insight, index) => (
          <Card key={index} className="shadow-soft">
            <CardContent className="p-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {insight.metric}
                </p>
                <p className="text-2xl font-bold">{insight.value}</p>
                <p className={`text-sm flex items-center ${
                  insight.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="mr-1">
                    {insight.positive ? '↗' : '↘'}
                  </span>
                  {insight.trend}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};