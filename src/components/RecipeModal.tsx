import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Recipe {
  id: number;
  title: string;
  category: string;
  image: string;
  time: string;
  difficulty: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  description: string;
}

interface RecipeModalProps {
  recipe: Recipe | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RecipeModal = ({ recipe, open, onOpenChange }: RecipeModalProps) => {
  if (!recipe) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative h-80 overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <DialogHeader>
                <DialogTitle className="text-4xl font-bold text-white mb-2">
                  {recipe.title}
                </DialogTitle>
                <div className="flex gap-2">
                  <Badge className="bg-secondary text-secondary-foreground">
                    {recipe.category}
                  </Badge>
                  <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                    ⏱️ {recipe.time}
                  </Badge>
                  <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                    👨‍🍳 {recipe.difficulty}
                  </Badge>
                  <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                    🍽️ {recipe.servings}
                  </Badge>
                </div>
              </DialogHeader>
            </div>
          </div>

          <div className="p-8">
            <p className="text-lg text-muted-foreground mb-8">
              {recipe.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ingredientes
                </h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Modo de Preparo
                </h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span className="pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
