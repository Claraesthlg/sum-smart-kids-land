
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Calculator, Sparkles, Trophy, Brain, Target, Zap, BookOpen, Award, Users } from 'lucide-react';

interface LandingPageProps {
  onShowLogin: () => void;
  onShowRegister: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowLogin, onShowRegister }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Modern floating elements */}
      <div className="absolute inset-0">
        <div className="floating-element w-24 h-24 bg-indigo-200 rounded-full top-10 left-10"></div>
        <div className="floating-element w-32 h-32 bg-purple-200 rounded-full top-20 right-20"></div>
        <div className="floating-element w-20 h-20 bg-blue-200 rounded-full bottom-20 left-20"></div>
        <div className="floating-element w-28 h-28 bg-slate-200 rounded-full bottom-40 right-40"></div>
        <div className="floating-element w-36 h-36 bg-indigo-100 rounded-full top-1/2 left-1/3"></div>
        <div className="floating-element w-16 h-16 bg-purple-100 rounded-full top-1/3 right-1/3"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header with modern design */}
        <div className="text-center mb-24">
          <div className="flex justify-center space-x-6 mb-12">
            <div className="modern-card p-4">
              <Calculator className="h-12 w-12 text-indigo-600" />
            </div>
            <div className="modern-card p-4">
              <Brain className="h-12 w-12 text-purple-600" />
            </div>
            <div className="modern-card p-4">
              <Star className="h-12 w-12 text-amber-500" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-modern-gradient">
            MateMáticos
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Aprende matemáticas de forma elegante y divertida
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button
              onClick={onShowLogin}
              className="primary-button text-xl px-10 py-6 h-auto"
            >
              <Trophy className="h-6 w-6 mr-3" />
              Iniciar Sesión
            </Button>
            <Button
              onClick={onShowRegister}
              className="modern-button text-xl px-10 py-6 h-auto"
            >
              <Sparkles className="h-6 w-6 mr-3" />
              Comenzar Ahora
            </Button>
          </div>
        </div>

        {/* What are subtractions - Modern design */}
        <div className="max-w-6xl mx-auto mb-24">
          <Card className="modern-card p-12 hover-lift">
            <CardContent className="space-y-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  ¿Qué son las restas? 
                  <Sparkles className="inline h-10 w-10 text-amber-500 ml-3" />
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <p className="text-xl text-slate-600 leading-relaxed">
                    La resta es una operación matemática fundamental. Si tienes 
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg mx-2 font-semibold">10 elementos</span> 
                    y quitas 
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-lg mx-2 font-semibold">3</span>, 
                    obtienes 
                    <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg mx-2 font-semibold">7 elementos</span>.
                  </p>
                  
                  <div className="modern-card p-8 bg-gradient-to-br from-white/50 to-indigo-50/50">
                    <div className="text-center space-y-6">
                      <div className="exercise-number text-5xl">
                        123456
                      </div>
                      <div className="text-4xl text-indigo-600 font-bold">−</div>
                      <div className="exercise-number text-5xl">
                        012345
                      </div>
                      <div className="border-t-2 border-slate-300 mx-12"></div>
                      <div className="exercise-number text-5xl bg-emerald-100/80 text-emerald-700">
                        111111
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="modern-card p-8 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                      <Target className="h-8 w-8 text-indigo-600 mr-3" />
                      Beneficios
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-4 modern-card bg-white/40">
                        <Brain className="h-6 w-6 text-purple-600 mr-4" />
                        <span className="font-medium text-slate-700">Desarrolla el pensamiento lógico</span>
                      </div>
                      <div className="flex items-center p-4 modern-card bg-white/40">
                        <Zap className="h-6 w-6 text-amber-500 mr-4" />
                        <span className="font-medium text-slate-700">Mejora la concentración</span>
                      </div>
                      <div className="flex items-center p-4 modern-card bg-white/40">
                        <Award className="h-6 w-6 text-emerald-500 mr-4" />
                        <span className="font-medium text-slate-700">Aumenta la confianza</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features section - Modern grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <Card className="modern-card p-8 text-center hover-lift">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 mx-auto modern-card bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">8 Ejercicios Diarios</h3>
              <p className="text-lg text-slate-600">
                Practiva con ejercicios cuidadosamente diseñados para tu nivel
              </p>
            </CardContent>
          </Card>

          <Card className="modern-card p-8 text-center hover-lift">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 mx-auto modern-card bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Seguimiento de Progreso</h3>
              <p className="text-lg text-slate-600">
                Observa tu mejora día a día con estadísticas detalladas
              </p>
            </CardContent>
          </Card>

          <Card className="modern-card p-8 text-center hover-lift">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 mx-auto modern-card bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Interfaz Intuitiva</h3>
              <p className="text-lg text-slate-600">
                Diseño moderno y fácil de usar para todas las edades
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to action - Modern design */}
        <div className="text-center">
          <Card className="modern-card p-16 max-w-5xl mx-auto hover-lift">
            <CardContent className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-modern-gradient">
                  Comienza tu Viaje Matemático
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Únete a estudiantes de todo el mundo que ya están mejorando sus habilidades matemáticas
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Button
                  onClick={onShowRegister}
                  className="primary-button text-xl px-12 py-6 h-auto"
                >
                  <Sparkles className="h-6 w-6 mr-3" />
                  Empezar Gratis
                </Button>
                
                <Button
                  onClick={onShowLogin}
                  className="modern-button text-xl px-12 py-6 h-auto"
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
