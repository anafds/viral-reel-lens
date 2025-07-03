import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  ArrowLeft, 
  TrendingUp, 
  Eye, 
  Palette, 
  Music, 
  Clock, 
  Users,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Target,
  Lightbulb,
  Camera,
  Mic
} from 'lucide-react';

interface AnalysisDashboardProps {
  data: any;
  onBackToStart: () => void;
}

const AnalysisDashboard = ({ data, onBackToStart }: AnalysisDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const generatePDF = () => {
    // Simular geração de PDF
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'analise-reel-buscarid.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Toast notification
    alert('PDF gerado com sucesso! 📄');
  };

  const ScoreCard = ({ title, score, icon: Icon, description }: any) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FF6B47] bg-opacity-10 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#FF6B47]" />
            </div>
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
          </div>
          <div className="text-2xl font-bold text-[#FF6B47]">{score}</div>
        </div>
      </CardHeader>
      <CardContent>
        <Progress value={score} className="mb-2" />
        <p className="text-xs text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBackToStart}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <img 
            src="/lovable-uploads/d68b8b84-5d85-40c7-9630-471dc9d0501b.png" 
            alt="BuscarID" 
            className="h-10"
          />
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Score Geral de Viralização</p>
              <p className="text-2xl font-bold text-[#FF6B47]">{data.viralScore}/100</p>
            </div>
            <Button
              onClick={generatePDF}
              className="bg-[#FF6B47] hover:bg-[#ff5a3d] text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Overview Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-[#FF6B47] to-[#ff5a3d] text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8" />
                <span className="text-3xl font-bold">{data.viralScore}</span>
              </div>
              <h3 className="font-semibold">Score Viral</h3>
              <p className="text-orange-100 text-sm">Potencial de viralização</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <span className="text-2xl font-bold">{data.engagement.likes.toLocaleString()}</span>
              </div>
              <h3 className="font-semibold text-gray-900">Curtidas</h3>
              <p className="text-gray-600 text-sm">Engajamento positivo</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <MessageCircle className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold">{data.engagement.comments.toLocaleString()}</span>
              </div>
              <h3 className="font-semibold text-gray-900">Comentários</h3>
              <p className="text-gray-600 text-sm">Interações ativas</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Bookmark className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold">{data.engagement.saves.toLocaleString()}</span>
              </div>
              <h3 className="font-semibold text-gray-900">Salvamentos</h3>
              <p className="text-gray-600 text-sm">Conteúdo valioso</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="copy">Copy</TabsTrigger>
            <TabsTrigger value="visual">Visual</TabsTrigger>
            <TabsTrigger value="audio">Áudio</TabsTrigger>
            <TabsTrigger value="timing">Timing</TabsTrigger>
            <TabsTrigger value="character">Personagem</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              <ScoreCard
                title="Gancho da Copy"
                score={data.copyAnalysis.hookScore}
                icon={Target}
                description="Efetividade do gancho inicial"
              />
              <ScoreCard
                title="Qualidade Visual"
                score={data.visualAnalysis.lightingScore}
                icon={Camera}
                description="Iluminação e composição"
              />
              <ScoreCard
                title="Áudio/Música"
                score={data.audioAnalysis.musicScore}
                icon={Music}
                description="Trending e qualidade do som"
              />
              <ScoreCard
                title="Timing de Postagem"
                score={data.timing.timingScore}
                icon={Clock}
                description="Horário ideal de publicação"
              />
              <ScoreCard
                title="Carisma do Criador"
                score={data.characterAnalysis.charisma}
                icon={Users}
                description="Presença e autenticidade"
              />
              <ScoreCard
                title="Harmonia de Cores"
                score={data.visualAnalysis.colorHarmony}
                icon={Palette}
                description="Paleta de cores utilizada"
              />
            </div>
          </TabsContent>

          <TabsContent value="copy" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#FF6B47]" />
                    Análise do Gancho
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">Gancho Identificado:</p>
                    <p className="text-gray-700 italic">"{data.copyAnalysis.hook}"</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tipo de Gancho:</span>
                    <span className="font-medium text-[#FF6B47]">{data.copyAnalysis.hookType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Score do Gancho:</span>
                    <div className="flex items-center gap-2">
                      <Progress value={data.copyAnalysis.hookScore} className="w-20" />
                      <span className="font-bold text-[#FF6B47]">{data.copyAnalysis.hookScore}/100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-[#FF6B47]" />
                    Call to Action
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">CTA Identificado:</p>
                    <p className="text-gray-700 italic">"{data.copyAnalysis.cta}"</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Efetividade do CTA:</span>
                    <div className="flex items-center gap-2">
                      <Progress value={data.copyAnalysis.ctaScore} className="w-20" />
                      <span className="font-bold text-[#FF6B47]">{data.copyAnalysis.ctaScore}/100</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>💡 Insight:</strong> O CTA está bem posicionado e gera engajamento através de salvamentos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="visual" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#FF6B47]" />
                    Análise de Iluminação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Tipo de Iluminação:</span>
                    <span className="font-medium text-[#FF6B47]">{data.visualAnalysis.lighting}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Score de Iluminação:</span>
                    <div className="flex items-center gap-2">
                      <Progress value={data.visualAnalysis.lightingScore} className="w-20" />
                      <span className="font-bold text-[#FF6B47]">{data.visualAnalysis.lightingScore}/100</span>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>✨ Destaque:</strong> Golden hour proporciona iluminação natural e atrativa.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#FF6B47]" />
                    Paleta de Cores
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2 mb-4">
                    {data.visualAnalysis.colors.map((color: string, index: number) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-lg border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Harmonia das Cores:</span>
                    <div className="flex items-center gap-2">
                      <Progress value={data.visualAnalysis.colorHarmony} className="w-20" />
                      <span className="font-bold text-[#FF6B47]">{data.visualAnalysis.colorHarmony}/100</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Composição:</span>
                    <span className="font-medium text-[#FF6B47]">{data.visualAnalysis.composition}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-[#FF6B47]" />
                  Análise de Áudio
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">🎵 Música Trending</h4>
                    <p className="text-sm text-green-700">{data.audioAnalysis.musicTrend}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Score da Música:</span>
                    <div className="flex items-center gap-2">
                      <Progress value={data.audioAnalysis.musicScore} className="w-20" />
                      <span className="font-bold text-[#FF6B47]">{data.audioAnalysis.musicScore}/100</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Qualidade do Áudio:</span>
                    <span className="font-medium text-[#FF6B47]">{data.audioAnalysis.audioQuality}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Score de Qualidade:</span>
                    <div className="flex items-center gap-2">
                      <Progress value={data.audioAnalysis.audioScore} className="w-20" />
                      <span className="font-bold text-[#FF6B47]">{data.audioAnalysis.audioScore}/100</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>🎧 Insight:</strong> Uso de som trending aumenta 340% o alcance orgânico.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FF6B47]" />
                  Análise de Timing
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Melhor Horário</h4>
                  <p className="text-2xl font-bold text-[#FF6B47]">{data.timing.bestTime}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Melhor Dia</h4>
                  <p className="text-2xl font-bold text-[#FF6B47]">{data.timing.dayOfWeek}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Score de Timing</h4>
                  <p className="text-2xl font-bold text-[#FF6B47]">{data.timing.timingScore}/100</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="character" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#FF6B47]" />
                  Análise do Personagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Perfil do Criador:</h4>
                  <p className="text-gray-700">{data.characterAnalysis.mainCharacter}</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#FF6B47] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-[#FF6B47]">{data.characterAnalysis.expressionScore}</span>
                    </div>
                    <h5 className="font-medium">Expressividade</h5>
                    <p className="text-sm text-gray-600">Gestos e expressões</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#FF6B47] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-[#FF6B47]">{data.characterAnalysis.charisma}</span>
                    </div>
                    <h5 className="font-medium">Carisma</h5>
                    <p className="text-sm text-gray-600">Presença de tela</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#FF6B47] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-[#FF6B47]">{data.characterAnalysis.authenticity}</span>
                    </div>
                    <h5 className="font-medium">Autenticidade</h5>
                    <p className="text-sm text-gray-600">Naturalidade</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={generatePDF}
            size="lg"
            className="bg-[#FF6B47] hover:bg-[#ff5a3d] text-white px-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Baixar Relatório Completo
          </Button>
          <Button
            onClick={onBackToStart}
            variant="outline"
            size="lg"
            className="px-8"
          >
            Analisar Novo Reel
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AnalysisDashboard;
