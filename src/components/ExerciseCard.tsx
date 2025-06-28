
import React from 'react';
import { Check, X, Star, Clock, Target } from 'lucide-react';
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
      return 'modern-card bg-gradient-to-br from-emerald-50/80 to-green-100/80 border-emerald-200 glow-effect';
    }
    if (isCompleted && !isCorrect) {
      return 'modern-card bg-gradient-to-br from-red-50/80 to-pink-100/80 border-red-200';
    }
    if (isSelected) {
      return 'modern-card bg-gradient-to-br from-indigo-50/80 to-purple-100/80 border-indigo-300 glow-effect';
    }
    return 'modern-card bg-white/50 border-white/40 hover:bg-white/70';
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(6, '0');
  };

  return (
    <Card
      className={`relative cursor-pointer transition-all duration-500 hover-lift p-8 ${getCardStyle()} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      } border-2 rounded-3xl overflow-hidden group`}
      onClick={!isDisabled ? onClick : undefined}
    >
      {/* Status indicator */}
      <div className="absolute top-4 right-4">
        {isCompleted && isCorrect && (
          <div className="status-correct p-3">
            <Check className="h-5 w-5" />
          </div>
        )}
        {isCompleted && !isCorrect && (
          <div className="status-incorrect p-3">
            <X className="h-5 w-5" />
          </div>
        )}
        {!isCompleted && (
          <div className="status-pending p-3">
            <Clock className="h-5 w-5" />
          </div>
        )}
      </div>

      {/* Exercise number */}
      <div className="absolute top-4 left-4 modern-card bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
        #{exercise.id}
      </div>

      {/* Mathematical operation */}
      <div className="mt-16 text-center space-y-6">
        <div className="exercise-number">
          {formatNumber(minuend)}
        </div>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-3xl font-bold text-slate-600">−</span>
          <div className="exercise-number">
            {formatNumber(subtrahend)}
          </div>
        </div>
        <div className="border-t-2 border-slate-300 w-full mx-auto"></div>
        <div className="h-16 flex items-center justify-center">
          {isCompleted ? (
            <div className={`exercise-number ${
              isCorrect 
                ? 'bg-emerald-100/80 text-emerald-700 border-emerald-300' 
                : 'bg-red-100/80 text-red-700 border-red-300'
            }`}>
              {exercise.userAnswer?.toString().padStart(6, '0') || '------'}
            </div>
          ) : (
            <div className="exercise-number bg-slate-100/60 text-slate-400 border-slate-300">
              ? ? ? ? ? ?
            </div>
          )}
        </div>
      </div>

      {/* Status text */}
      <div className="mt-8 text-center">
        {isCompleted && isCorrect && (
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
            <Target className="h-4 w-4 mr-2" />
            ¡Correcto!
          </span>
        )}
        {isCompleted && !isCorrect && (
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <X className="h-4 w-4 mr-2" />
            Inténtalo de nuevo
          </span>
        )}
        {!isCompleted && (
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            <Star className="h-4 w-4 mr-2" />
            Toca para resolver
          </span>
        )}
      </div>
    </Card>
  );
};

export default ExerciseCard;
