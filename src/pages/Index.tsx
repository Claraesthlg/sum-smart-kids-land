
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import ExerciseGrid from '../components/ExerciseGrid';
import ExerciseDetail from '../components/ExerciseDetail';
import { useToast } from '../hooks/use-toast';

interface Exercise {
  id: number;
  minuend: number;
  subtrahend: number;
  result: number;
  userAnswer?: number;
  isCorrect?: boolean;
  isCompleted: boolean;
}

interface User {
  username: string;
  password: string;
  progress: { [key: string]: Exercise[] };
}

const Index = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [loginError, setLoginError] = useState<string>('');
  const { toast } = useToast();

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedUsers = localStorage.getItem('matematicos-users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    const savedCurrentUser = localStorage.getItem('matematicos-current-user');
    if (savedCurrentUser) {
      setCurrentUser(savedCurrentUser);
    }
  }, []);

  // Cargar ejercicios del usuario actual
  useEffect(() => {
    if (currentUser) {
      const user = users.find(u => u.username === currentUser);
      if (user && user.progress[getCurrentDate()]) {
        setExercises(user.progress[getCurrentDate()]);
      } else {
        generateNewExercises();
      }
    }
  }, [currentUser, users]);

  const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const generateRandomSubtraction = () => {
    // Generar números de 6 dígitos para resta
    const minuend = Math.floor(Math.random() * 900000) + 100000; // 100000 - 999999
    const subtrahend = Math.floor(Math.random() * minuend); // Asegurar que el resultado sea positivo
    const result = minuend - subtrahend;
    
    return { minuend, subtrahend, result };
  };

  const generateNewExercises = () => {
    const newExercises: Exercise[] = [];
    for (let i = 1; i <= 8; i++) {
      const { minuend, subtrahend, result } = generateRandomSubtraction();
      newExercises.push({
        id: i,
        minuend,
        subtrahend,
        result,
        isCompleted: false,
      });
    }
    setExercises(newExercises);
    saveUserProgress(newExercises);
  };

  const saveUserProgress = (exercisesToSave: Exercise[]) => {
    if (!currentUser) return;

    const updatedUsers = users.map(user => {
      if (user.username === currentUser) {
        return {
          ...user,
          progress: {
            ...user.progress,
            [getCurrentDate()]: exercisesToSave
          }
        };
      }
      return user;
    });

    setUsers(updatedUsers);
    localStorage.setItem('matematicos-users', JSON.stringify(updatedUsers));
  };

  const handleLogin = (username: string, password: string) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(username);
      localStorage.setItem('matematicos-current-user', username);
      setLoginError('');
      toast({
        title: "¡Bienvenido!",
        description: `Hola ${username}, ¡comencemos a practicar matemáticas!`,
      });
    } else {
      setLoginError('Usuario o contraseña incorrectos');
    }
  };

  const handleRegister = (username: string, password: string) => {
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      setLoginError('Este nombre de usuario ya existe');
      return;
    }

    const newUser: User = {
      username,
      password,
      progress: {}
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('matematicos-users', JSON.stringify(updatedUsers));
    
    setCurrentUser(username);
    localStorage.setItem('matematicos-current-user', username);
    setLoginError('');
    
    toast({
      title: "¡Cuenta creada!",
      description: `¡Bienvenido ${username}! Tu cuenta ha sido creada exitosamente.`,
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedExercise(null);
    localStorage.removeItem('matematicos-current-user');
    toast({
      title: "¡Hasta luego!",
      description: "Has cerrado sesión correctamente.",
    });
  };

  const handleReset = () => {
    generateNewExercises();
    setSelectedExercise(null);
    toast({
      title: "¡Ejercicios reiniciados!",
      description: "Se han generado nuevos ejercicios para practicar.",
    });
  };

  const handleExerciseClick = (exerciseId: number) => {
    setSelectedExercise(exerciseId);
  };

  const handleAnswerSubmit = (answer: number) => {
    if (!selectedExercise) return;

    const updatedExercises = exercises.map(exercise => {
      if (exercise.id === selectedExercise) {
        const isCorrect = answer === exercise.result;
        return {
          ...exercise,
          userAnswer: answer,
          isCorrect,
          isCompleted: true,
        };
      }
      return exercise;
    });

    setExercises(updatedExercises);
    saveUserProgress(updatedExercises);

    const exercise = exercises.find(ex => ex.id === selectedExercise);
    const isCorrect = answer === exercise?.result;

    if (isCorrect) {
      toast({
        title: "¡Correcto!",
        description: "¡Excelente trabajo! Has resuelto el ejercicio correctamente.",
      });
    } else {
      toast({
        title: "Inténtalo de nuevo",
        description: "La respuesta no es correcta. ¡No te rindas, puedes hacerlo!",
        variant: "destructive",
      });
    }
  };

  const handleBackToGrid = () => {
    setSelectedExercise(null);
  };

  const completedExercises = exercises.filter(ex => ex.isCompleted && ex.isCorrect).length;

  // Si no hay usuario logueado, mostrar formulario de login
  if (!currentUser) {
    return (
      <LoginForm
        onLogin={handleLogin}
        onRegister={handleRegister}
        error={loginError}
      />
    );
  }

  // Si hay un ejercicio seleccionado, mostrar vista detallada
  if (selectedExercise) {
    const exercise = exercises.find(ex => ex.id === selectedExercise);
    if (exercise) {
      return (
        <div>
          <Header
            username={currentUser}
            completedExercises={completedExercises}
            totalExercises={8}
            onReset={handleReset}
            onLogout={handleLogout}
          />
          <ExerciseDetail
            exercise={exercise}
            onBack={handleBackToGrid}
            onAnswer={handleAnswerSubmit}
          />
        </div>
      );
    }
  }

  // Vista principal con grid de ejercicios
  return (
    <div className="min-h-screen">
      <Header
        username={currentUser}
        completedExercises={completedExercises}
        totalExercises={8}
        onReset={handleReset}
        onLogout={handleLogout}
      />
      <ExerciseGrid
        exercises={exercises}
        onExerciseClick={handleExerciseClick}
        selectedExercise={selectedExercise}
      />
    </div>
  );
};

export default Index;
