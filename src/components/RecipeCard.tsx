import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  title: string;
  category: string;
  image: string;
  time: string;
  difficulty: string;
  onClick: () => void;
  delay?: number;
}

export const RecipeCard = ({ 
  title, 
  category, 
  image, 
  time, 
  difficulty, 
  onClick,
  delay = 0 
}: RecipeCardProps) => {
  return (
    <Card 
      className="group overflow-hidden cursor-pointer hover-lift border-2 border-border animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-secondary text-secondary-foreground shadow-lg">
            {category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="text-lg">⏱️</span>
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg">👨‍🍳</span>
            <span className="text-sm">{difficulty}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
