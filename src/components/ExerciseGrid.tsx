
import React from 'react';
import ExerciseCard from './ExerciseCard';
import { Card } from '@/components/ui/card';
import { Trophy, Target, Clock } from 'lucide-react';

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
      {/* Panel de estadísticas */}
      <Card className="kid-card p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-kidBlue" />
              <div>
                <div className="text-2xl font-bold text-gray-800">{completedCount}/{totalCount}</div>
                <div className="text-sm text-gray-600">Completados</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-kidYellow" />
              <div>
                <div className="text-2xl font-bold text-gray-800">{Math.round(progress)}%</div>
                <div className="text-sm text-gray-600">Progreso</div>
              </div>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="flex-1 max-w-md mx-8">
            <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-kidGreen to-kidBlue transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg font-bold text-kidPurple">
              {completedCount === totalCount ? '¡Felicitaciones!' : '¡Sigue así!'}
            </div>
            <div className="text-sm text-gray-600">
              {completedCount === totalCount 
                ? 'Has completado todos los ejercicios' 
                : `Te faltan ${totalCount - completedCount} ejercicios`
              }
            </div>
          </div>
        </div>
      </Card>

      {/* Título */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-kidBlue to-kidPurple bg-clip-text text-transparent mb-2">
          Ejercicios de Resta
        </h2>
        <p className="text-lg text-gray-600">
          Selecciona un ejercicio para resolverlo
        </p>
      </div>

      {/* Grid de ejercicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Mensaje de ánimo */}
      {completedCount > 0 && completedCount < totalCount && (
        <Card className="kid-card p-6 mt-8 bg-gradient-to-r from-kidYellow/20 to-kidOrange/20">
          <div className="text-center">
            <Trophy className="h-12 w-12 text-kidYellow mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              ¡Vas muy bien!
            </h3>
            <p className="text-lg text-gray-600">
              Has completado {completedCount} ejercicios. ¡Continúa para completar todos!
            </p>
          </div>
        </Card>
      )}

      {/* Mensaje de completado */}
      {completedCount === totalCount && (
        <Card className="kid-card p-8 mt-8 bg-gradient-to-r from-green-100 to-kidGreen/30">
          <div className="text-center">
            <div className="flex justify-center space-x-2 mb-4">
              <Trophy className="h-16 w-16 text-kidYellow animate-bounce" />
              <Trophy className="h-16 w-16 text-kidYellow animate-bounce delay-100" />
              <Trophy className="h-16 w-16 text-kidYellow animate-bounce delay-200" />
            </div>
            <h3 className="text-4xl font-bold text-green-700 mb-4">
              ¡FELICITACIONES!
            </h3>
            <p className="text-xl text-gray-700 mb-4">
              Has completado todos los ejercicios correctamente.
            </p>
            <p className="text-lg text-gray-600">
              ¡Eres un verdadero campeón de las matemáticas!
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ExerciseGrid;
