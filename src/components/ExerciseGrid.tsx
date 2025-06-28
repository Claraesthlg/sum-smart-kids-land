
import React from 'react';
import ExerciseCard from './ExerciseCard';
import { Card } from '@/components/ui/card';
import { Trophy, Target, TrendingUp, Award, Star, Crown, Sparkles, Rocket, Gift } from 'lucide-react';

interface Exercise {
  id: number;
  minuend: number;
  subtrahend: number;
  result: number;
  userAnswer?: number;
  isCorrect?: boolean;
  isCompleted: boolean;
}

interface ExerciseGridProps {
  exercises: Exercise[];
  onExerciseClick: (exerciseId: number) => void;
  selectedExercise?: number;
}

const ExerciseGrid: React.FC<ExerciseGridProps> = ({
  exercises,
  onExerciseClick,
  selectedExercise
}) => {
  const completedCount = exercises.filter(ex => ex.isCompleted && ex.isCorrect).length;
  const totalCount = exercises.length;
  const progress = (completedCount / totalCount) * 100;

  return (
    <div className="min-h-screen animated-bg-exercises relative overflow-hidden">
      {/* Enhanced floating elements */}
      <div className="absolute inset-0">
        <div className="floating-element w-16 h-16 bg-white/10 rounded-full top-10 left-10 pattern-dots"></div>
        <div className="floating-element w-20 h-20 bg-white/15 rounded-full top-20 right-20"></div>
        <div className="floating-element w-12 h-12 bg-white/10 rounded-full bottom-20 left-20 pattern-grid"></div>
        <div className="floating-element w-24 h-24 bg-white/15 rounded-full bottom-40 right-40"></div>
        <div className="floating-element w-28 h-28 bg-white/5 rounded-full top-1/2 left-1/6"></div>
        <div className="floating-element w-14 h-14 bg-white/10 rounded-full top-1/3 right-1/4 pattern-dots"></div>
        
        {/* Sparkle elements */}
        <Star className="sparkle-element w-5 h-5 text-yellow-300 top-1/4 left-1/5" />
        <Sparkles className="sparkle-element w-6 h-6 text-pink-300 top-3/4 right-1/5" />
        <Crown className="sparkle-element w-7 h-7 text-amber-300 top-1/6 right-1/3" />
        <Gift className="sparkle-element w-5 h-5 text-purple-300 bottom-1/4 left-1/3" />
        <Rocket className="sparkle-element w-6 h-6 text-blue-300 bottom-1/6 right-1/2" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced stats panel */}
        <Card className="modern-card p-8 mb-12 glass-vibrant">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="modern-card p-3 gradient-ocean">
                  <Target className="h-6 w-6 text-white glow-effect" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white drop-shadow-lg">{completedCount}/{totalCount}</div>
                  <div className="text-sm text-white/80">Completados</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="modern-card p-3 gradient-forest">
                  <TrendingUp className="h-6 w-6 text-white glow-effect" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white drop-shadow-lg">{Math.round(progress)}%</div>
                  <div className="text-sm text-white/80">Progreso</div>
                </div>
              </div>
            </div>

            {/* Enhanced progress bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="progress-bar h-full transition-all duration-1000 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg font-bold text-white drop-shadow-lg">
                {completedCount === totalCount ? '¡Increíble!' : '¡Continúa!'}
              </div>
              <div className="text-sm text-white/80">
                {completedCount === totalCount 
                  ? 'Misión completada' 
                  : `${totalCount - completedCount} ejercicios restantes`
                }
              </div>
            </div>
          </div>
        </Card>

        {/* Enhanced title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3 drop-shadow-2xl">
            Ejercicios Mágicos de Resta
            <Sparkles className="inline h-10 w-10 text-amber-300 ml-3 glow-effect" />
          </h2>
          <p className="text-xl text-white/90 drop-shadow-lg">
            Selecciona un ejercicio para comenzar tu aventura
          </p>
        </div>

        {/* Exercise grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              isSelected={selectedExercise === exercise.id}
              onClick={() => onExerciseClick(exercise.id)}
              isDisabled={false}
            />
          ))}
        </div>

        {/* Enhanced progress encouragement */}
        {completedCount > 0 && completedCount < totalCount && (
          <Card className="modern-card p-8 mt-12 glass-colored-purple">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Trophy className="h-12 w-12 text-amber-300 glow-effect" />
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                ¡Progreso Mágico!
              </h3>
              <p className="text-lg text-white/90">
                Has completado {completedCount} de {totalCount} ejercicios. ¡Eres increíble!
              </p>
            </div>
          </Card>
        )}

        {/* Enhanced completion celebration */}
        {completedCount === totalCount && (
          <Card className="modern-card p-12 mt-12 glass-vibrant celebration-card">
            <div className="text-center space-y-6">
              <div className="flex justify-center space-x-4">
                <Trophy className="h-16 w-16 text-amber-300 glow-effect" />
                <Crown className="h-16 w-16 text-yellow-300 glow-effect" />
                <Award className="h-16 w-16 text-pink-300 glow-effect" />
              </div>
              <h3 className="text-4xl font-bold text-white drop-shadow-2xl">
                ¡MISIÓN MÁGICA COMPLETADA!
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Has completado todos los ejercicios correctamente. 
                ¡Eres un verdadero mago de las matemáticas!
              </p>
              <div className="inline-flex items-center px-6 py-3 rounded-full gradient-sunset text-white font-semibold text-lg hover-lift">
                <Award className="h-6 w-6 mr-2" />
                Nivel Maestro Alcanzado
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ExerciseGrid;
