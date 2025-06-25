
import React from 'react';
import { Star, Trophy, Home, RotateCcw, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  username?: string;
  completedExercises: number;
  totalExercises: number;
  onReset: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  username,
  completedExercises,
  totalExercises,
  onReset,
  onLogout
}) => {
  const progress = (completedExercises / totalExercises) * 100;

  return (
    <header className="bg-gradient-to-r from-kidBlue via-kidPurple to-kidPink text-white shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 rounded-2xl p-3">
              <Star className="h-8 w-8 text-kidYellow animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-rounded">MateMáticos</h1>
              <p className="text-white/80 text-sm">¡Aprende restando!</p>
            </div>
          </div>

          {/* Información del usuario */}
          {username && (
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-sm text-white/80">¡Hola!</p>
                <p className="font-bold text-lg">{username}</p>
              </div>

              {/* Progreso */}
              <div className="flex items-center space-x-3">
                <Trophy className="h-6 w-6 text-kidYellow" />
                <div className="text-center">
                  <div className="text-sm text-white/80">Progreso</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-3 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-kidYellow transition-all duration-500 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold">{completedExercises}/{totalExercises}</span>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex items-center space-x-2">
                <Button
                  onClick={onReset}
                  className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-xl"
                  size="sm"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reiniciar
                </Button>
                <Button
                  onClick={onLogout}
                  className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-xl"
                  size="sm"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Salir
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
