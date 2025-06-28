
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Calculator, Heart, Sparkles, ArrowLeft, LogIn, UserPlus, Crown, Gift, Rocket } from 'lucide-react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  onRegister: (username: string, password: string) => void;
  error?: string;
  isRegistering?: boolean;
  onBack?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ 
  onLogin, 
  onRegister, 
  error, 
  isRegistering = false,
  onBack 
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentMode, setCurrentMode] = useState(isRegistering);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      if (currentMode) {
        onRegister(username, password);
      } else {
        onLogin(username, password);
      }
    }
  };

  return (
    <div className="min-h-screen animated-bg-auth flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced floating elements */}
      <div className="absolute inset-0">
        <div className="floating-element w-20 h-20 bg-white/10 rounded-full top-10 left-10 pattern-dots"></div>
        <div className="floating-element w-24 h-24 bg-white/15 rounded-full top-20 right-20"></div>
        <div className="floating-element w-16 h-16 bg-white/10 rounded-full bottom-20 left-20 pattern-grid"></div>
        <div className="floating-element w-28 h-28 bg-white/15 rounded-full bottom-40 right-40"></div>
        <div className="floating-element w-32 h-32 bg-white/5 rounded-full top-1/2 left-1/4"></div>
        <div className="floating-element w-12 h-12 bg-white/10 rounded-full top-1/3 right-1/5 pattern-dots"></div>
        
        {/* Sparkle elements */}
        <Star className="sparkle-element w-6 h-6 text-yellow-300 top-1/4 left-1/3" />
        <Sparkles className="sparkle-element w-8 h-8 text-pink-300 top-3/4 right-1/3" />
        <Heart className="sparkle-element w-5 h-5 text-red-300 top-1/2 right-1/4" />
        <Crown className="sparkle-element w-7 h-7 text-amber-300 top-1/6 right-1/2" />
        <Gift className="sparkle-element w-6 h-6 text-purple-300 bottom-1/4 left-1/2" />
        <Rocket className="sparkle-element w-6 h-6 text-blue-300 bottom-1/6 right-1/6" />
      </div>

      <Card className="w-full max-w-md kid-card relative z-10">
        <CardHeader className="text-center space-y-4">
          {onBack && (
            <Button
              onClick={onBack}
              className="absolute top-4 left-4 glass-vibrant hover:glass-vibrant text-white border-2 border-white/30 rounded-xl p-2 w-auto h-auto hover-lift"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          
          <div className="flex justify-center space-x-2">
            <Star className="h-8 w-8 text-yellow-300 animate-bounce glow-effect" />
            <Calculator className="h-8 w-8 text-blue-300 animate-bounce delay-100 glow-effect" />
            <Heart className="h-8 w-8 text-pink-300 animate-bounce delay-200 glow-effect" />
            <Sparkles className="h-8 w-8 text-purple-300 animate-bounce delay-300 glow-effect" />
          </div>
          <CardTitle className="text-4xl font-bold text-white drop-shadow-2xl">
            MateMáticos
          </CardTitle>
          <CardDescription className="text-lg text-white/90 drop-shadow-lg">
            {currentMode ? '¡Crea tu cuenta mágica!' : '¡Bienvenido de vuelta, matemático!'}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-lg font-semibold text-white drop-shadow-sm">
                Nombre de usuario
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-lg rounded-xl border-2 border-white/30 glass-vibrant text-white placeholder-white/70 focus:border-white/50"
                placeholder="Escribe tu nombre mágico"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-lg font-semibold text-white drop-shadow-sm">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-lg rounded-xl border-2 border-white/30 glass-vibrant text-white placeholder-white/70 focus:border-white/50"
                placeholder="Escribe tu contraseña secreta"
                required
              />
            </div>

            {error && (
              <div className="text-white text-center font-semibold glass-colored-pink p-3 rounded-xl">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full kid-button h-12 text-xl hover-lift"
            >
              {currentMode ? (
                <>
                  <UserPlus className="h-6 w-6 mr-3" />
                  ¡Crear cuenta mágica!
                </>
              ) : (
                <>
                  <LogIn className="h-6 w-6 mr-3" />
                  ¡Empezar aventura!
                </>
              )}
            </Button>
          </form>

          <div className="text-center">
            <button
              onClick={() => setCurrentMode(!currentMode)}
              className="text-white hover:text-white/80 font-semibold text-lg transition-colors duration-200 drop-shadow-sm hover-lift"
            >
              {currentMode 
                ? '¿Ya tienes cuenta? ¡Inicia tu aventura!' 
                : '¿Nueva aventura? ¡Regístrate aquí!'
              }
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
