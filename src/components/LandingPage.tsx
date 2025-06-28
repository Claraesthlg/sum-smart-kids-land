
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Calculator, Sparkles, Trophy, Brain, Target, Zap, BookOpen, Award, Users, Heart, Rocket, Crown, Gift } from 'lucide-react';

interface LandingPageProps {
  onShowLogin: () => void;
  onShowRegister: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowLogin, onShowRegister }) => {
  return (
    <div className="min-h-screen animated-bg-landing relative overflow-hidden">
      {/* Enhanced floating elements with sparkles */}
      <div className="absolute inset-0">
        <div className="floating-element w-24 h-24 bg-white/10 rounded-full top-10 left-10 pattern-dots"></div>
        <div className="floating-element w-32 h-32 bg-white/15 rounded-full top-20 right-20 pattern-grid"></div>
        <div className="floating-element w-20 h-20 bg-white/10 rounded-full bottom-20 left-20"></div>
        <div className="floating-element w-28 h-28 bg-white/15 rounded-full bottom-40 right-40 pattern-dots"></div>
        <div className="floating-element w-36 h-36 bg-white/5 rounded-full top-1/2 left-1/3"></div>
        <div className="floating-element w-16 h-16 bg-white/10 rounded-full top-1/3 right-1/3 pattern-grid"></div>
        
        {/* Sparkle elements */}
        <Star className="sparkle-element w-6 h-6 text-yellow-300 top-1/4 left-1/4" />
        <Sparkles className="sparkle-element w-8 h-8 text-pink-300 top-3/4 right-1/4" />
        <Heart className="sparkle-element w-5 h-5 text-red-300 top-1/2 right-1/2" />
        <Crown className="sparkle-element w-7 h-7 text-amber-300 top-1/6 right-1/6" />
        <Gift className="sparkle-element w-6 h-6 text-purple-300 bottom-1/4 left-1/6" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header with enhanced design */}
        <div className="text-center mb-24">
          <div className="flex justify-center space-x-6 mb-12">
            <div className="modern-card p-6 glass-colored-blue">
              <Calculator className="h-12 w-12 text-indigo-600 glow-effect" />
            </div>
            <div className="modern-card p-6 glass-colored-purple">
              <Brain className="h-12 w-12 text-purple-600 glow-effect" />
            </div>
            <div className="modern-card p-6 glass-colored-pink">
              <Star className="h-12 w-12 text-pink-500 glow-effect" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            MateMáticos
          </h1>
          
          <div className="relative">
            <p className="text-2xl md:text-3xl text-white/90 font-medium mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Aprende matemáticas de forma mágica y divertida
            </p>
            <div className="absolute -top-4 -right-4">
              <Rocket className="w-8 h-8 text-yellow-300 animate-bounce" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button
              onClick={onShowLogin}
              className="primary-button text-xl px-12 py-6 h-auto hover-lift"
            >
              <Trophy className="h-6 w-6 mr-3" />
              Iniciar Sesión
            </Button>
            <Button
              onClick={onShowRegister}
              className="modern-button text-xl px-12 py-6 h-auto hover-lift"
            >
              <Sparkles className="h-6 w-6 mr-3" />
              Comenzar Ahora
            </Button>
          </div>
        </div>

        {/* What are subtractions - Enhanced design */}
        <div className="max-w-6xl mx-auto mb-24">
          <Card className="modern-card p-12 hover-lift glass-vibrant">
            <CardContent className="space-y-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
                  ¿Qué son las restas? 
                  <Sparkles className="inline h-10 w-10 text-amber-300 ml-3 glow-effect" />
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <p className="text-xl text-white/90 leading-relaxed drop-shadow-sm">
                    La resta es una operación matemática fundamental. Si tienes 
                    <span className="inline-block glass-colored-blue text-indigo-100 px-3 py-1 rounded-lg mx-2 font-semibold">10 elementos</span> 
                    y quitas 
                    <span className="inline-block glass-colored-purple text-purple-100 px-3 py-1 rounded-lg mx-2 font-semibold">3</span>, 
                    obtienes 
                    <span className="inline-block glass-colored-pink text-pink-100 px-3 py-1 rounded-lg mx-2 font-semibold">7 elementos</span>.
                  </p>
                  
                  <div className="modern-card p-8 glass-vibrant">
                    <div className="text-center space-y-6">
                      <div className="exercise-number text-5xl text-white">
                        123456
                      </div>
                      <div className="text-4xl text-white font-bold glow-effect">−</div>
                      <div className="exercise-number text-5xl text-white">
                        012345
                      </div>
                      <div className="border-t-2 border-white/30 mx-12"></div>
                      <div className="exercise-number text-5xl glass-colored-pink text-pink-100">
                        111111
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="modern-card p-8 glass-vibrant">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center drop-shadow-lg">
                      <Target className="h-8 w-8 text-indigo-300 mr-3 glow-effect" />
                      Beneficios Mágicos
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-4 modern-card glass-colored-blue">
                        <Brain className="h-6 w-6 text-purple-300 mr-4 glow-effect" />
                        <span className="font-medium text-white">Desarrolla el pensamiento lógico</span>
                      </div>
                      <div className="flex items-center p-4 modern-card glass-colored-purple">
                        <Zap className="h-6 w-6 text-amber-300 mr-4 glow-effect" />
                        <span className="font-medium text-white">Mejora la concentración</span>
                      </div>
                      <div className="flex items-center p-4 modern-card glass-colored-pink">
                        <Award className="h-6 w-6 text-emerald-300 mr-4 glow-effect" />
                        <span className="font-medium text-white">Aumenta la confianza</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features section - Enhanced grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <Card className="modern-card p-8 text-center hover-lift glass-colored-blue">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 mx-auto modern-card gradient-ocean flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white glow-effect" />
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">8 Ejercicios Diarios</h3>
              <p className="text-lg text-white/80">
                Practiva con ejercicios mágicamente diseñados para tu nivel
              </p>
            </CardContent>
          </Card>

          <Card className="modern-card p-8 text-center hover-lift glass-colored-purple">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 mx-auto modern-card gradient-forest flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white glow-effect" />
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">Seguimiento Mágico</h3>
              <p className="text-lg text-white/80">
                Observa tu progreso con estadísticas coloridas y divertidas
              </p>
            </CardContent>
          </Card>

          <Card className="modern-card p-8 text-center hover-lift glass-colored-pink">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 mx-auto modern-card gradient-sunset flex items-center justify-center">
                <Users className="h-8 w-8 text-white glow-effect" />
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">Interfaz Mágica</h3>
              <p className="text-lg text-white/80">
                Diseño colorido y divertido para todas las edades
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to action - Enhanced design */}
        <div className="text-center">
          <Card className="modern-card p-16 max-w-5xl mx-auto hover-lift glass-vibrant">
            <CardContent className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white drop-shadow-lg">
                  Comienza tu Aventura Matemática
                  <Crown className="inline h-10 w-10 text-amber-300 ml-3 glow-effect" />
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Únete a estudiantes de todo el mundo en esta mágica aventura de aprendizaje
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Button
                  onClick={onShowRegister}
                  className="primary-button text-xl px-12 py-6 h-auto hover-lift"
                >
                  <Sparkles className="h-6 w-6 mr-3" />
                  Empezar Gratis
                </Button>
                
                <Button
                  onClick={onShowLogin}
                  className="modern-button text-xl px-12 py-6 h-auto hover-lift"
                >
                  <Users className="h-6 w-6 mr-3" />
                  Ya tengo cuenta
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
