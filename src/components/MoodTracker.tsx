import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smile, Meh, Frown, Heart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MoodEntry {
  id: string;
  mood: string;
  level: number;
  date: Date;
  note?: string;
}

const moodOptions = [
  { name: "Amazing", level: 5, icon: Star, color: "mood-great" },
  { name: "Great", level: 4, icon: Smile, color: "mood-good" },
  { name: "Okay", level: 3, icon: Meh, color: "mood-okay" },
  { name: "Low", level: 2, icon: Frown, color: "mood-low" },
  { name: "Struggling", level: 1, icon: Heart, color: "mood-sad" },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const { toast } = useToast();

  const handleMoodSelect = (level: number) => {
    setSelectedMood(level);
  };

  const saveMoodEntry = () => {
    if (selectedMood === null) return;

    const mood = moodOptions.find(m => m.level === selectedMood);
    if (!mood) return;

    const newEntry: MoodEntry = {
      id: crypto.randomUUID(),
      mood: mood.name,
      level: selectedMood,
      date: new Date(),
    };

    setMoodEntries(prev => [newEntry, ...prev]);
    setSelectedMood(null);
    
    toast({
      title: "Mood tracked! 🌟",
      description: `Your ${mood.name.toLowerCase()} mood has been recorded.`,
    });
  };

  const getStreakCount = () => {
    const today = new Date();
    let streak = 0;
    let currentDate = new Date(today);
    
    while (streak < 7) {
      const hasEntry = moodEntries.some(entry => {
        const entryDate = new Date(entry.date);
        return entryDate.toDateString() === currentDate.toDateString();
      });
      
      if (!hasEntry) break;
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    }
    
    return streak;
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-wellness border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold gradient-wellness bg-clip-text text-transparent">
            How are you feeling today?
          </CardTitle>
          <CardDescription>
            Take a moment to check in with yourself
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-5 gap-3">
            {moodOptions.map((mood) => {
              const Icon = mood.icon;
              return (
                <button
                  key={mood.level}
                  onClick={() => handleMoodSelect(mood.level)}
                  className={`
                    p-4 rounded-xl transition-bounce transform hover:scale-110 
                    ${selectedMood === mood.level ? 'ring-2 ring-primary shadow-glow' : 'shadow-soft'}
                    ${mood.color} text-white
                  `}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Icon className="w-6 h-6" />
                    <span className="text-xs font-medium">{mood.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {selectedMood && (
            <div className="text-center space-y-4">
              <Button
                onClick={saveMoodEntry}
                variant="wellness"
                size="lg"
                className="w-full"
              >
                Save Today's Mood
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {moodEntries.length > 0 && (
        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Wellness Journey</CardTitle>
              <Badge variant="secondary" className="gradient-calm text-white">
                {getStreakCount()} day streak 🔥
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {moodEntries.slice(0, 5).map((entry) => {
                const mood = moodOptions.find(m => m.level === entry.level);
                const Icon = mood?.icon || Smile;
                
                return (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${mood?.color} text-white`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{entry.mood}</p>
                        <p className="text-sm text-muted-foreground">
                          {entry.date.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};