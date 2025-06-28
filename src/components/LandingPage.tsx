
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Calculator, Heart, Sparkles, Trophy, Target, Brain, Gamepad2, Zap, Rocket } from 'lucide-react';

interface LandingPageProps {
  onShowLogin: () => void;
  onShowRegister: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowLogin, onShowRegister }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-100 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="floating-shape w-32 h-32 bg-kidPink rounded-full top-10 left-10"></div>
        <div className="floating-shape w-24 h-24 bg-kidBlue rounded-full top-20 right-20"></div>
        <div className="floating-shape w-40 h-40 bg-kidYellow rounded-full bottom-20 left-20"></div>
        <div className="floating-shape w-20 h-20 bg-kidGreen rounded-full bottom-40 right-40"></div>
        <div className="floating-shape w-28 h-28 bg-kidPurple rounded-full top-1/2 left-1/3"></div>
        <div className="floating-shape w-36 h-36 bg-kidTeal rounded-full top-1/3 right-1/3"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center space-x-4 mb-8">
            <Star className="h-16 w-16 text-kidYellow animate-bounce sparkle-effect" />
            <Calculator className="h-16 w-16 text-kidBlue animate-bounce sparkle-effect delay-100" />
            <Heart className="h-16 w-16 text-kidPink animate-bounce sparkle-effect delay-200" />
            <Sparkles className="h-16 w-16 text-kidGreen animate-bounce sparkle-effect delay-300" />
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bold mb-6 text-gradient drop-shadow-lg">
            MateMáticos
          </h1>
          
          <div className="relative">
            <p className="text-3xl md:text-4xl text-gray-700 font-bold mb-12 drop-shadow-md">
              ¡La aventura matemática más divertida! 🌟
            </p>
            <Zap className="absolute -top-2 -right-10 h-8 w-8 text-kidYellow animate-bounce" />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              onClick={onShowLogin}
              className="kid-button text-2xl px-12 py-6 h-auto group"
            >
              <Trophy className="h-8 w-8 mr-4 group-hover:animate-bounce" />
              ¡Ya tengo cuenta!
            </Button>
            <Button
              onClick={onShowRegister}
              className="kid-button text-2xl px-12 py-6 h-auto group"
            >
              <Rocket className="h-8 w-8 mr-4 group-hover:animate-bounce" />
              ¡Empezar aventura!
            </Button>
          </div>
        </div>

        {/* What are subtractions section */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="kid-card p-10 interactive-hover">
            <CardContent className="text-center space-y-8">
              <h2 className="text-5xl font-bold text-gradient mb-8">
                ¿Qué son las restas? 🤔✨
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                    ¡La resta es como un juego de magia! 🎩 Si tienes <span className="font-bold text-kidBlue bg-kidBlue/10 px-2 py-1 rounded-lg">10 dulces</span> 
                    y regalas <span className="font-bold text-kidPink bg-kidPink/10 px-2 py-1 rounded-lg">3</span>, 
                    ¡te quedan <span className="font-bold text-kidGreen bg-kidGreen/10 px-2 py-1 rounded-lg">7 dulces</span>!
                  </p>
                  
                  <div className="bg-gradient-to-br from-white/80 to-gray-50/80 rounded-3xl p-8 border-4 border-kidYellow/30 shadow-xl">
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-mono font-bold text-gray-800 bg-white/70 px-6 py-4 rounded-2xl shadow-lg">
                        123456
                      </div>
                      <div className="text-5xl text-kidPink font-bold animate-pulse">-</div>
                      <div className="text-6xl font-mono font-bold text-gray-800 bg-white/70 px-6 py-4 rounded-2xl shadow-lg">
                        012345
                      </div>
                      <div className="border-t-4 border-gray-400 mx-8"></div>
                      <div className="text-6xl font-mono font-bold text-kidGreen bg-kidGreen/10 px-6 py-4 rounded-2xl shadow-lg">
                        111111
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-kidBlue/10 to-kidPurple/10 rounded-3xl p-8 shadow-xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                      ¿Por qué es genial? <Sparkles className="ml-3 h-8 w-8 text-kidYellow sparkle-effect" />
                    </h3>
                    <ul className="space-y-4 text-xl text-gray-700">
                      <li className="flex items-center p-3 bg-white/50 rounded-xl">
                        <Brain className="h-8 w-8 text-kidPurple mr-4 sparkle-effect" />
                        <span className="font-semibold">Entrena tu súper cerebro</span>
                      </li>
                      <li className="flex items-center p-3 bg-white/50 rounded-xl">
                        <Target className="h-8 w-8 text-kidBlue mr-4 sparkle-effect" />
                        <span className="font-semibold">Mejora tu concentración</span>
                      </li>
                      <li className="flex items-center p-3 bg-white/50 rounded-xl">
                        <Gamepad2 className="h-8 w-8 text-kidGreen mr-4 sparkle-effect" />
                        <span className="font-semibold">¡Es súper divertido!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="kid-card p-8 text-center interactive-hover">
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-br from-kidBlue/20 to-kidBlue/40 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                <Calculator className="h-10 w-10 text-kidBlue sparkle-effect" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">8 Desafíos</h3>
              <p className="text-xl text-gray-600 font-medium">
                Cada día tendrás 8 ejercicios mágicos y únicos para conquistar
              </p>
            </CardContent>
          </Card>

          <Card className="kid-card p-8 text-center interactive-hover">
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-br from-kidGreen/20 to-kidGreen/40 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                <Trophy className="h-10 w-10 text-kidGreen sparkle-effect" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Tu Progreso</h3>
              <p className="text-xl text-gray-600 font-medium">
                Observa cómo creces y colecciona estrellitas por cada victoria
              </p>
            </CardContent>
          </Card>

          <Card className="kid-card p-8 text-center interactive-hover">
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-br from-kidPink/20 to-kidPink/40 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                <Heart className="h-10 w-10 text-kidPink sparkle-effect" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Súper Fácil</h3>
              <p className="text-xl text-gray-600 font-medium">
                Solo toca con el mouse y resuelve. ¡Así de simple y divertido!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="kid-card p-12 max-w-4xl mx-auto interactive-hover">
            <CardContent className="space-y-8">
              <h2 className="text-5xl font-bold text-gradient">
                ¡Comienza tu aventura matemática! 🚀✨
              </h2>
              <p className="text-2xl text-gray-700 font-medium">
                Únete a miles de pequeños genios que ya están aprendiendo y divirtiéndose
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button
                  onClick={onShowRegister}
                  className="kid-button text-2xl px-12 py-6 h-auto group"
                >
                  <Sparkles className="h-8 w-8 mr-4 group-hover:animate-bounce" />
                  ¡Empezar ahora!
                </Button>
                
                <Button
                  onClick={onShowLogin}
                  className="bg-white/90 hover:bg-white text-kidBlue border-4 border-kidBlue font-bold py-6 px-12 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-110 active:scale-95 text-2xl h-auto"
                >
                  Ya soy miembro
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
