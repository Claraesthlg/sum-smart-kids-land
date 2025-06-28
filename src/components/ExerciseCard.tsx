
import React from 'react';
import { Check, X, Star, Sparkles } from 'lucide-react';
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
      return 'bg-gradient-to-br from-green-100 to-emerald-200 border-green-400 shadow-green-300 shadow-2xl';
    }
    if (isCompleted && !isCorrect) {
      return 'bg-gradient-to-br from-red-100 to-pink-200 border-red-400 shadow-red-300 shadow-2xl';
    }
    if (isSelected) {
      return 'bg-gradient-to-br from-kidBlue/20 to-kidPurple/20 border-kidBlue shadow-kidBlue/40 shadow-2xl';
    }
    return 'bg-gradient-to-br from-white to-blue-50 border-gray-200 hover:border-kidBlue hover:shadow-kidBlue/30 shadow-xl';
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(6, '0');
  };

  return (
    <Card
      className={`relative cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 p-8 ${getCardStyle()} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      } border-4 rounded-3xl overflow-hidden group`}
      onClick={!isDisabled ? onClick : undefined}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Floating sparkles for completed exercises */}
      {isCompleted && isCorrect && (
        <>
          <Sparkles className="absolute top-3 right-8 h-4 w-4 text-kidYellow sparkle-effect" />
          <Sparkles className="absolute top-8 right-3 h-3 w-3 text-kidGreen sparkle-effect delay-500" />
          <Sparkles className="absolute top-5 right-12 h-2 w-2 text-kidPink sparkle-effect delay-1000" />
        </>
      )}

      {/* Indicador de estado mejorado */}
      <div className="absolute top-3 right-3">
        {isCompleted && isCorrect && (
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full p-3 animate-bounce shadow-lg">
            <Check className="h-6 w-6" />
          </div>
        )}
        {isCompleted && !isCorrect && (
          <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full p-3 animate-pulse shadow-lg">
            <X className="h-6 w-6" />
          </div>
        )}
        {!isCompleted && (
          <div className="bg-gradient-to-r from-kidYellow to-kidOrange text-white rounded-full p-3 sparkle-effect shadow-lg">
            <Star className="h-6 w-6" />
          </div>
        )}
      </div>

      {/* Número del ejercicio mejorado */}
      <div className="absolute top-3 left-3 bg-gradient-to-r from-kidPurple to-kidBlue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
        #{exercise.id}
      </div>

      {/* Operación matemática mejorada */}
      <div className="mt-12 text-center space-y-4">
        <div className="math-number text-3xl">
          {formatNumber(minuend)}
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-4xl font-bold text-kidRed animate-pulse">-</span>
          <div className="math-number text-3xl">
            {formatNumber(subtrahend)}
          </div>
        </div>
        <div className="border-t-4 border-gradient-to-r from-gray-300 to-gray-500 w-full mx-auto"></div>
        <div className="h-12 flex items-center justify-center">
          {isCompleted ? (
            <div className={`font-mono text-3xl font-bold px-4 py-3 rounded-2xl border-4 shadow-lg ${
              isCorrect 
                ? 'text-green-700 bg-gradient-to-br from-green-100 to-emerald-100 border-green-300' 
                : 'text-red-700 bg-gradient-to-br from-red-100 to-pink-100 border-red-300'
            }`}>
              {exercise.userAnswer?.toString().padStart(6, '0') || '------'}
            </div>
          ) : (
            <div className="text-gray-400 text-2xl font-bold animate-pulse">¿?¿?¿?¿?¿?¿?</div>
          )}
        </div>
      </div>

      {/* Texto de estado mejorado */}
      <div className="mt-6 text-center">
        {isCompleted && isCorrect && (
          <span className="text-green-600 font-bold text-lg bg-green-100 px-4 py-2 rounded-full">✨ ¡Perfecto! ✨</span>
        )}
        {isCompleted && !isCorrect && (
          <span className="text-red-600 font-bold text-lg bg-red-100 px-4 py-2 rounded-full">🎯 ¡Inténtalo de nuevo!</span>
        )}
        {!isCompleted && (
          <span className="text-kidBlue font-bold text-lg bg-kidBlue/10 px-4 py-2 rounded-full">🚀 ¡Toca para resolver!</span>
        )}
      </div>
    </Card>
  );
};

export default ExerciseCard;
