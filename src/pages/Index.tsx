
import React, { useState } from 'react';
import URLInputScreen from '../components/URLInputScreen';
import AnalysisLoadingScreen from '../components/AnalysisLoadingScreen';
import LeadCaptureModal from '../components/LeadCaptureModal';
import AnalysisDashboard from '../components/AnalysisDashboard';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'url' | 'loading' | 'dashboard'>('url');
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [reelUrl, setReelUrl] = useState('');
  const [analysisData, setAnalysisData] = useState(null);

  const handleURLSubmit = (url: string) => {
    setReelUrl(url);
    setCurrentScreen('loading');
    
    // Simular tempo de análise
    setTimeout(() => {
      setCurrentScreen('dashboard');
      setShowLeadModal(true);
      generateAnalysisData(url);
    }, 8000);
  };

  const generateAnalysisData = (url: string) => {
    // Simular dados de análise específicos
    const mockAnalysis = {
      videoUrl: url,
      viralScore: 92,
      engagement: {
        likes: 45200,
        comments: 2340,
        shares: 890,
        saves: 1560
      },
      copyAnalysis: {
        hook: "Você não vai acreditar no que aconteceu...",
        hookType: "Curiosidade/Mistério",
        hookScore: 95,
        cta: "Salva esse post para não esquecer!",
        ctaScore: 88
      },
      visualAnalysis: {
        lighting: "Natural/Golden Hour",
        lightingScore: 94,
        colors: ["#FF6B47", "#FFF3E0", "#2C5530"],
        colorHarmony: 87,
        composition: "Regra dos terços aplicada",
        compositionScore: 91
      },
      audioAnalysis: {
        musicTrend: "Som trending do momento",
        musicScore: 96,
        audioQuality: "Profissional",
        audioScore: 89
      },
      characterAnalysis: {
        mainCharacter: "Criador de conteúdo jovem",
        expressionScore: 93,
        charisma: 91,
        authenticity: 95
      },
      timing: {
        bestTime: "19:30 - 21:00",
        dayOfWeek: "Quinta-feira",
        timingScore: 88
      }
    };
    setAnalysisData(mockAnalysis);
  };

  const handleLeadSubmit = () => {
    setShowLeadModal(false);
  };

  const handleBackToStart = () => {
    setCurrentScreen('url');
    setShowLeadModal(false);
    setReelUrl('');
    setAnalysisData(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'url' && (
        <URLInputScreen onSubmit={handleURLSubmit} />
      )}
      
      {currentScreen === 'loading' && (
        <AnalysisLoadingScreen />
      )}
      
      {currentScreen === 'dashboard' && analysisData && (
        <AnalysisDashboard 
          data={analysisData} 
          onBackToStart={handleBackToStart}
        />
      )}
      
      {showLeadModal && (
        <LeadCaptureModal 
          onSubmit={handleLeadSubmit}
          onClose={() => setShowLeadModal(false)}
        />
      )}
    </div>
  );
};

export default Index;
