import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { MoodTracker } from "@/components/MoodTracker";
import { WellnessRecommendations } from "@/components/WellnessRecommendations";
import { MoodChart } from "@/components/MoodChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, TrendingUp, Sparkles, Calendar, Target } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Index = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderContent = () => {
    switch (currentView) {
      case "mood":
        return <MoodTracker />;
      case "trends":
        return <MoodChart />;
      case "wellness":
        return <WellnessRecommendations />;
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl shadow-wellness">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 gradient-wellness opacity-80" />
              <div className="relative px-8 py-16 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Your Mental Wellness Journey
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Track your mood, discover insights, and nurture your mental health with personalized recommendations
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    size="xl"
                    onClick={() => setCurrentView("mood")}
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Start Mood Check-in
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    onClick={() => setCurrentView("trends")}
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    View Insights
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl gradient-wellness text-white">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">7</p>
                      <p className="text-muted-foreground">Day Streak</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl mood-good text-white">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">4.2</p>
                      <p className="text-muted-foreground">Avg Mood</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl gradient-calm text-white">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-muted-foreground">Activities Done</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Recommendations Preview */}
            <Card className="shadow-wellness">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span>Today's Wellness Focus</span>
                    </CardTitle>
                    <CardDescription>
                      Personalized activities based on your recent mood patterns
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="gradient-calm text-white">
                    Recommended
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-blue-500 text-white">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">5-Minute Breathing</h4>
                        <p className="text-sm text-muted-foreground">Perfect for your current mood level</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-green-500 text-white">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Gratitude Practice</h4>
                        <p className="text-sm text-muted-foreground">Boost your positive emotions</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="wellness" 
                    onClick={() => setCurrentView("wellness")}
                    className="w-full"
                  >
                    Explore All Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-2xl font-bold gradient-wellness bg-clip-text text-transparent">
            MindfulSpace
          </h1>
          <p className="text-muted-foreground">Your personal mental wellness companion</p>
        </header>
        
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;