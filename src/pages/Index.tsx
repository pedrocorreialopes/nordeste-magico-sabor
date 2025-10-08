import { useState } from "react";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeModal } from "@/components/RecipeModal";
import { Button } from "@/components/ui/button";
import { recipes, Recipe } from "@/data/recipes";

const Index = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Pratos Principais", "Petiscos", "Café da Manhã", "Sobremesas", "Acompanhamentos"];
  
  const filteredRecipes = selectedCategory === "all" 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="gradient-hero hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              🌶️ Sabores do Nordeste
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
              Descubra os segredos da culinária nordestina com receitas autênticas e tradicionais
            </p>
            <div className="flex justify-center gap-4 animate-float">
              <span className="text-5xl">🥘</span>
              <span className="text-5xl">🍤</span>
              <span className="text-5xl">🥥</span>
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="sticky top-0 z-40 bg-card shadow-lg border-b border-border backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-secondary text-secondary-foreground shadow-lg scale-105" 
                    : "hover:bg-muted"
                }`}
              >
                {category === "all" ? "Todas" : category}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-12 animate-slide-up">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossas Receitas Deliciosas
          </h2>
          <p className="text-lg text-muted-foreground">
            Bem-vindos à nossa coleção de receitas, criada por especialistas culinários! 
            Aqui, você encontrará deliciosas opções que celebram os sabores autênticos do Nordeste brasileiro.
          </p>
        </div>

        {/* Category Icons */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          {[
            { icon: "🍽️", label: "Pratos", category: "Pratos Principais" },
            { icon: "🧁", label: "Doces", category: "Sobremesas" },
            { icon: "🍹", label: "Bebidas", category: "Bebidas" },
            { icon: "☕", label: "Café", category: "Café da Manhã" },
            { icon: "🥤", label: "Sucos", category: "Sucos" },
            { icon: "🥖", label: "Pães", category: "Pães" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(item.category)}
              className="flex flex-col items-center gap-2 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-lg transition-all duration-300 ${
                selectedCategory === item.category
                  ? "bg-gradient-to-br from-primary to-secondary scale-110 shadow-xl"
                  : "bg-gradient-to-br from-secondary to-accent hover:scale-110 hover:shadow-xl"
              }`}>
                {item.icon}
              </div>
              <span className={`text-sm font-medium transition-colors ${
                selectedCategory === item.category
                  ? "text-primary font-bold"
                  : "text-muted-foreground group-hover:text-primary"
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              category={recipe.category}
              image={recipe.image}
              time={recipe.time}
              difficulty={recipe.difficulty}
              onClick={() => setSelectedRecipe(recipe)}
              delay={index * 100}
            />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-muted-foreground">
              Nenhuma receita encontrada nesta categoria.
            </p>
          </div>
        )}
      </section>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        open={!!selectedRecipe}
        onOpenChange={(open) => !open && setSelectedRecipe(null)}
      />

      {/* Footer */}
      <footer className="gradient-hero hero-pattern py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-lg">
            © 2025 Sabores do Nordeste - Receitas Tradicionais Brasileiras
          </p>
          <p className="text-sm mt-2 text-white/80">
            Feito com 💛 para preservar a cultura gastronômica nordestina
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
