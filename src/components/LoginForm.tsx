
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Calculator, Heart, Sparkles } from 'lucide-react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  onRegister: (username: string, password: string) => void;
  error?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegister, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      if (isRegistering) {
        onRegister(username, password);
      } else {
        onLogin(username, password);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-kidPink/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-kidBlue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kidYellow/10 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md kid-card relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center space-x-2">
            <Star className="h-8 w-8 text-kidYellow animate-bounce" />
            <Calculator className="h-8 w-8 text-kidBlue animate-bounce delay-100" />
            <Heart className="h-8 w-8 text-kidPink animate-bounce delay-200" />
            <Sparkles className="h-8 w-8 text-kidGreen animate-bounce delay-300" />
          </div>
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-kidBlue to-kidPurple bg-clip-text text-transparent">
            MateMáticos
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            {isRegistering ? '¡Crea tu cuenta para empezar!' : '¡Bienvenido de vuelta!'}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-lg font-semibold text-gray-700">
                Nombre de usuario
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-lg rounded-xl border-2 border-gray-200 focus:border-kidBlue"
                placeholder="Escribe tu nombre"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-lg font-semibold text-gray-700">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-lg rounded-xl border-2 border-gray-200 focus:border-kidBlue"
                placeholder="Escribe tu contraseña"
                required
              />
            </div>

            {error && (
              <div className="text-kidRed text-center font-semibold bg-red-50 p-3 rounded-xl">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full kid-button h-12 text-xl"
            >
              {isRegistering ? '¡Crear cuenta!' : '¡Empezar a jugar!'}
            </Button>
          </form>

          <div className="text-center">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-kidBlue hover:text-kidPurple font-semibold text-lg transition-colors duration-200"
            >
              {isRegistering 
                ? '¿Ya tienes cuenta? ¡Inicia sesión!' 
                : '¿No tienes cuenta? ¡Regístrate!'
              }
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
