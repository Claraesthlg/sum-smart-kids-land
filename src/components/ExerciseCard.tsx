
import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Exercise {
  id: number;
  minuend: number;
  subtrahend: number;
  result: number;
  userAnswer?: number;
  isCorrect?: boolean;
  isCompleted: boolean;
}

interface ExerciseCardProps {
  exercise: Exercise;
  isSelected: boolean;
  onClick: () => void;
  isDisabled: boolean;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  isSelected,
  onClick,
  isDisabled
}) => {
  const { minuend, subtrahend, isCompleted, isCorrect } = exercise;

  const getCardStyle = () => {
    if (isCompleted && isCorrect) {
      return 'bg-gradient-to-br from-green-100 to-green-200 border-green-400 shadow-green-200';
    }
    if (isCompleted && !isCorrect) {
      return 'bg-gradient-to-br from-red-100 to-red-200 border-red-400 shadow-red-200';
    }
    if (isSelected) {
      return 'bg-gradient-to-br from-kidBlue/20 to-kidPurple/20 border-kidBlue shadow-kidBlue/30';
    }
    return 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-kidBlue hover:shadow-kidBlue/20';
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(6, '0');
  };

  return (
    <Card
      className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 p-6 ${getCardStyle()} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      } shadow-lg border-4`}
      onClick={!isDisabled ? onClick : undefined}
    >
      {/* Indicador de estado */}
      <div className="absolute top-2 right-2">
        {isCompleted && isCorrect && (
          <div className="bg-green-500 text-white rounded-full p-2 animate-bounce">
            <Check className="h-4 w-4" />
          </div>
        )}
        {isCompleted && !isCorrect && (
          <div className="bg-red-500 text-white rounded-full p-2 animate-wiggle">
            <X className="h-4 w-4" />
          </div>
        )}
        {!isCompleted && (
          <div className="bg-kidYellow text-white rounded-full p-2">
            <Star className="h-4 w-4" />
          </div>
        )}
      </div>

      {/* Número del ejercicio */}
      <div className="absolute top-2 left-2 bg-kidPurple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
        {exercise.id}
      </div>

      {/* Operación matemática */}
      <div className="mt-8 text-center space-y-3">
        <div className="font-mono text-2xl font-bold text-gray-800 bg-white/70 px-3 py-2 rounded-lg border-2 border-gray-200">
          {formatNumber(minuend)}
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-3xl font-bold text-kidRed">-</span>
          <div className="font-mono text-2xl font-bold text-gray-800 bg-white/70 px-3 py-2 rounded-lg border-2 border-gray-200">
            {formatNumber(subtrahend)}
          </div>
        </div>
        <div className="border-t-4 border-gray-400 w-full"></div>
        <div className="h-8 flex items-center justify-center">
          {isCompleted ? (
            <div className={`font-mono text-2xl font-bold px-3 py-2 rounded-lg border-2 ${
              isCorrect 
                ? 'text-green-700 bg-green-100 border-green-300' 
                : 'text-red-700 bg-red-100 border-red-300'
            }`}>
              {exercise.userAnswer?.toString().padStart(6, '0') || '------'}
            </div>
          ) : (
            <div className="text-gray-400 text-xl">¿?¿?¿?¿?¿?¿?</div>
          )}
        </div>
      </div>

      {/* Texto de estado */}
      <div className="mt-4 text-center">
        {isCompleted && isCorrect && (
          <span className="text-green-600 font-bold text-sm">¡Correcto!</span>
        )}
        {isCompleted && !isCorrect && (
          <span className="text-red-600 font-bold text-sm">Inténtalo de nuevo</span>
        )}
        {!isCompleted && (
          <span className="text-kidBlue font-bold text-sm">¡Toca para resolver!</span>
        )}
      </div>
    </Card>
  );
};

export default ExerciseCard;
