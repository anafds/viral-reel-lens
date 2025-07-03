
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Brain, Eye, Palette, Music, Clock, Users } from 'lucide-react';

const AnalysisLoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const analysisSteps = [
    {
      icon: Brain,
      title: "████████ ████ ██",
      subtitle: "██████████ ████████ ██ ██████ ████",
      duration: 1000
    },
    {
      icon: Eye,
      title: "████████ ██████",
      subtitle: "██████████ ███████, ██████ █ ███████████",
      duration: 1500
    },
    {
      icon: Palette,
      title: "██████ ██ ██████",
      subtitle: "███████ █████████ ██ ██████ ████████",
      duration: 1200
    },
    {
      icon: Music,
      title: "██████ ██ █████",
      subtitle: "██████████ ███ ████████ █ ██████████",
      duration: 1000
    },
    {
      icon: Clock,
      title: "██████ ██ ██████",
      subtitle: "███████████ ██ ██████ ██████ ████ ███████████",
      duration: 1300
    },
    {
      icon: Users,
      title: "███████ ██ ██████████",
      subtitle: "██████████ ████████ █ ████████ ██ ████████",
      duration: 1000
    }
  ];

  useEffect(() => {
    const totalDuration = 8000; // 8 segundos total
    const interval = 50; // Atualizar a cada 50ms
    const increment = 100 / (totalDuration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        
        // Calcular qual step mostrar baseado no progresso
        const stepIndex = Math.floor((newProgress / 100) * analysisSteps.length);
        setCurrentStep(Math.min(stepIndex, analysisSteps.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const currentStepData = analysisSteps[currentStep];
  const IconComponent = currentStepData?.icon;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-center">
          <img 
            src="/lovable-uploads/d68b8b84-5d85-40c7-9630-471dc9d0501b.png" 
            alt="BuscarID" 
            className="h-12"
          />
        </div>
      </header>

      {/* Loading Content */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main Loading Animation */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
              <div 
                className="absolute inset-0 border-4 border-[#FF6B47] rounded-full border-t-transparent animate-spin"
                style={{
                  animationDuration: '1s'
                }}
              ></div>
              <div className="absolute inset-4 bg-orange-50 rounded-full flex items-center justify-center">
                {IconComponent && (
                  <IconComponent className="w-12 h-12 text-[#FF6B47]" />
                )}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Analisando seu Reel...
            </h1>
            <p className="text-gray-600 mb-8">
              Nossa IA está processando cada detalhe do seu conteúdo
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progresso</span>
              <span className="text-sm font-medium text-[#FF6B47]">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Current Step */}
          {currentStepData && (
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FF6B47] rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 text-lg blur-sm">
                    {currentStepData.title}
                  </h3>
                  <p className="text-gray-600 blur-sm">
                    {currentStepData.subtitle}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Analysis Steps Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            {analysisSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'border-[#FF6B47] bg-orange-50' 
                      : isCurrent
                      ? 'border-[#FF6B47] bg-white animate-pulse'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <StepIcon className={`w-6 h-6 mx-auto mb-2 ${
                    isCompleted || isCurrent ? 'text-[#FF6B47]' : 'text-gray-400'
                  }`} />
                  <div className="text-xs text-gray-600 blur-sm">
                    ███████ ████
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-sm text-gray-500">
            ⏱️ Tempo estimado: poucos segundos restantes...
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalysisLoadingScreen;
