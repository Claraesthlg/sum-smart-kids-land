
import React from 'react';
import ExerciseCard from './ExerciseCard';
import { Card } from '@/components/ui/card';
import { Trophy, Target, TrendingUp, Award } from 'lucide-react';

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
    <div className="container mx-auto px-4 py-8">
      {/* Modern stats panel */}
      <Card className="modern-card p-8 mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="modern-card p-3 bg-gradient-to-r from-indigo-500 to-purple-600">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">{completedCount}/{totalCount}</div>
                <div className="text-sm text-slate-600">Completados</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="modern-card p-3 bg-gradient-to-r from-emerald-500 to-teal-600">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">{Math.round(progress)}%</div>
                <div className="text-sm text-slate-600">Progreso</div>
              </div>
            </div>
          </div>

          {/* Modern progress bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="progress-bar h-full transition-all duration-1000 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg font-bold text-slate-800">
              {completedCount === totalCount ? '¡Excelente!' : '¡Continúa!'}
            </div>
            <div className="text-sm text-slate-600">
              {completedCount === totalCount 
                ? 'Todos los ejercicios completados' 
                : `${totalCount - completedCount} ejercicios restantes`
              }
            </div>
          </div>
        </div>
      </Card>

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-modern-gradient mb-3">
          Ejercicios de Resta
        </h2>
        <p className="text-xl text-slate-600">
          Selecciona un ejercicio para comenzar
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

      {/* Progress encouragement */}
      {completedCount > 0 && completedCount < totalCount && (
        <Card className="modern-card p-8 mt-12 bg-gradient-to-r from-amber-50/50 to-orange-50/50 border-amber-200">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Trophy className="h-12 w-12 text-amber-500 glow-effect" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">
              ¡Excelente progreso!
            </h3>
            <p className="text-lg text-slate-600">
              Has completado {completedCount} de {totalCount} ejercicios. ¡Sigue así!
            </p>
          </div>
        </Card>
      )}

      {/* Completion celebration */}
      {completedCount === totalCount && (
        <Card className="modern-card p-12 mt-12 bg-gradient-to-r from-emerald-50/80 to-green-100/80 border-emerald-200 celebration-card">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-4">
              <Trophy className="h-16 w-16 text-emerald-600 glow-effect" />
              <Award className="h-16 w-16 text-amber-500 glow-effect" />
              <Trophy className="h-16 w-16 text-emerald-600 glow-effect" />
            </div>
            <h3 className="text-4xl font-bold text-emerald-800">
              ¡MISIÓN COMPLETADA!
            </h3>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Has completado todos los ejercicios correctamente. 
              Eres un verdadero maestro de las matemáticas.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold text-lg">
              <Award className="h-6 w-6 mr-2" />
              Nivel Completado
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ExerciseGrid;
