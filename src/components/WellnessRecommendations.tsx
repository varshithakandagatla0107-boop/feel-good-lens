import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Moon, 
  Coffee, 
  Music, 
  TreePine, 
  Dumbbell,
  BookOpen,
  Sparkles
} from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise",
    description: "Deep breathing to reduce stress and anxiety",
    icon: Brain,
    category: "Mindfulness",
    duration: "5 min",
    difficulty: "Easy",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Gratitude Journal",
    description: "Write down three things you're grateful for today",
    icon: Heart,
    category: "Reflection",
    duration: "10 min",
    difficulty: "Easy",
    color: "bg-pink-500",
  },
  {
    id: 3,
    title: "Progressive Muscle Relaxation",
    description: "Release tension from your body and mind",
    icon: Moon,
    category: "Relaxation",
    duration: "15 min",
    difficulty: "Medium",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Mindful Coffee Break",
    description: "Practice mindfulness during your next coffee break",
    icon: Coffee,
    category: "Mindfulness",
    duration: "10 min",
    difficulty: "Easy",
    color: "bg-amber-500",
  },
  {
    id: 5,
    title: "Calming Music Session",
    description: "Listen to soothing sounds to improve your mood",
    icon: Music,
    category: "Self-Care",
    duration: "20 min",
    difficulty: "Easy",
    color: "bg-green-500",
  },
  {
    id: 6,
    title: "Nature Walk",
    description: "Connect with nature for mental clarity",
    icon: TreePine,
    category: "Physical",
    duration: "30 min",
    difficulty: "Medium",
    color: "bg-emerald-500",
  },
];

export const WellnessRecommendations = () => {
  const handleStartActivity = (title: string) => {
    // In a real app, this would track activity completion
    console.log(`Starting activity: ${title}`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold gradient-wellness bg-clip-text text-transparent">
          Personalized Wellness Recommendations
        </h2>
        <p className="text-muted-foreground">
          Curated activities based on your mood patterns and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((rec) => {
          const Icon = rec.icon;
          
          return (
            <Card key={rec.id} className="shadow-soft hover:shadow-wellness transition-smooth group">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${rec.color} text-white group-hover:scale-110 transition-bounce`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {rec.duration}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-lg">{rec.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {rec.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{rec.category}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {rec.difficulty}
                  </span>
                </div>
                
                <Button
                  onClick={() => handleStartActivity(rec.title)}
                  variant="wellness"
                  className="w-full"
                  size="sm"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Activity
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};