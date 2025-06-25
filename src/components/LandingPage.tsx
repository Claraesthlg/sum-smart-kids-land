
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Calculator, Heart, Sparkles, Trophy, Target, Brain, Gamepad2 } from 'lucide-react';

interface LandingPageProps {
  onShowLogin: () => void;
  onShowRegister: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowLogin, onShowRegister }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-kidPink/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-kidBlue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kidYellow/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center space-x-3 mb-6">
              <Star className="h-12 w-12 text-kidYellow animate-bounce" />
              <Calculator className="h-12 w-12 text-kidBlue animate-bounce delay-100" />
              <Heart className="h-12 w-12 text-kidPink animate-bounce delay-200" />
              <Sparkles className="h-12 w-12 text-kidGreen animate-bounce delay-300" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-kidBlue via-kidPurple to-kidPink bg-clip-text text-transparent">
              MateMáticos
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-8">
              ¡Aprende a restar de manera divertida!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={onShowLogin}
                className="kid-button text-xl px-8 py-4 h-auto"
              >
                <Trophy className="h-6 w-6 mr-3" />
                ¡Ya tengo cuenta!
              </Button>
              <Button
                onClick={onShowRegister}
                className="bg-gradient-to-r from-kidGreen to-kidTeal text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 text-xl h-auto"
              >
                <Star className="h-6 w-6 mr-3" />
                ¡Crear cuenta nueva!
              </Button>
            </div>
          </div>

          {/* What are subtractions section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="kid-card p-8">
              <CardContent className="text-center space-y-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  ¿Qué son las restas? 🤔
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      ¡La resta es como quitar cosas! Si tienes <span className="font-bold text-kidBlue">10 dulces</span> 
                      y te comes <span className="font-bold text-kidPink">3</span>, 
                      te quedan <span className="font-bold text-kidGreen">7 dulces</span>.
                    </p>
                    
                    <div className="bg-white/70 rounded-2xl p-6 border-4 border-kidYellow/30">
                      <div className="text-center">
                        <div className="text-4xl font-mono font-bold text-gray-800 mb-2">
                          123456
                        </div>
                        <div className="text-3xl text-kidPink font-bold mb-2">-</div>
                        <div className="text-4xl font-mono font-bold text-gray-800 mb-2">
                          12345
                        </div>
                        <div className="border-t-4 border-gray-400 mb-2"></div>
                        <div className="text-4xl font-mono font-bold text-kidGreen">
                          111111
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-kidBlue/10 to-kidPurple/10 rounded-2xl p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        ¿Por qué es importante? 🌟
                      </h3>
                      <ul className="space-y-3 text-lg text-gray-700">
                        <li className="flex items-center">
                          <Brain className="h-6 w-6 text-kidPurple mr-3" />
                          Entrena tu cerebro
                        </li>
                        <li className="flex items-center">
                          <Target className="h-6 w-6 text-kidBlue mr-3" />
                          Mejora tu concentración
                        </li>
                        <li className="flex items-center">
                          <Gamepad2 className="h-6 w-6 text-kidGreen mr-3" />
                          ¡Es súper divertido!
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="kid-card p-6 text-center">
              <CardContent className="space-y-4">
                <div className="bg-kidBlue/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-kidBlue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">8 Ejercicios</h3>
                <p className="text-gray-600">
                  Cada día tendrás 8 ejercicios nuevos y divertidos para practicar
                </p>
              </CardContent>
            </Card>

            <Card className="kid-card p-6 text-center">
              <CardContent className="space-y-4">
                <div className="bg-kidGreen/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-kidGreen" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Progreso</h3>
                <p className="text-gray-600">
                  Ve tu progreso y gana puntos cada vez que resuelves correctamente
                </p>
              </CardContent>
            </Card>

            <Card className="kid-card p-6 text-center">
              <CardContent className="space-y-4">
                <div className="bg-kidPink/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Heart className="h-8 w-8 text-kidPink" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Fácil de usar</h3>
                <p className="text-gray-600">
                  Solo usa el mouse para tocar y resolver. ¡Súper fácil!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <Card className="kid-card p-8 max-w-2xl mx-auto">
              <CardContent className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  ¡Comienza tu aventura matemática! 🚀
                </h2>
                <p className="text-xl text-gray-700">
                  Únete a miles de niños que ya están aprendiendo y divirtiéndose con MateMáticos
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={onShowRegister}
                    className="bg-gradient-to-r from-kidGreen to-kidTeal text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 text-xl h-auto"
                  >
                    <Sparkles className="h-6 w-6 mr-3" />
                    ¡Empezar ahora!
                  </Button>
                  
                  <Button
                    onClick={onShowLogin}
                    className="bg-white/80 hover:bg-white text-kidBlue border-2 border-kidBlue font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 text-xl h-auto"
                  >
                    Ya soy miembro
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
