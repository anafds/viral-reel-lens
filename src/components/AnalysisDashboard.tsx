
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Target, 
  Eye, 
  Palette, 
  Music, 
  Zap,
  TrendingUp,
  Star,
  BarChart3,
  Heart
} from 'lucide-react';

interface AnalysisDashboardProps {
  data: any;
  onBackToStart: () => void;
}

const AnalysisDashboard = ({ data, onBackToStart }: AnalysisDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const MetricCard = ({ title, value, description, variant = "default" }: any) => (
    <Card className={`${variant === 'primary' ? 'bg-[#FF6B47] text-white' : 'bg-white'} hover:shadow-md transition-shadow`}>
      <CardContent className="p-6">
        <h3 className="text-sm font-medium mb-2">{title}</h3>
        <p className={`text-2xl font-bold mb-1 ${variant === 'primary' ? 'text-white' : 'text-[#FF6B47]'}`}>
          {value}
        </p>
        <p className={`text-sm ${variant === 'primary' ? 'text-orange-100' : 'text-gray-600'}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );

  const InsightCard = ({ title, icon: Icon, children }: any) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg">
          <div className="w-10 h-10 bg-[#FF6B47] bg-opacity-10 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#FF6B47]" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simplified Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
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
            className="h-8"
          />
          
          <div className="w-[100px]"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Reel Info Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Análise do Reel</h1>
            <p className="text-gray-600">Resultado da análise completa do seu conteúdo</p>
          </div>
          
          {/* Reel Details */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-1">@{data.username || 'usuario_exemplo'}</p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                  {data.caption || 'Esta é a legenda do reel que foi analisado. Aqui você pode ver o texto original que acompanhou o vídeo quando foi publicado.'}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
                <span className="text-xl font-bold text-red-600">{data.likes || '45.2K'}</span>
                <span className="text-sm text-red-500">likes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Analysis Tabs - Cleaner */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="copy"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Copy
            </TabsTrigger>
            <TabsTrigger 
              value="visual"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Visual
            </TabsTrigger>
            <TabsTrigger 
              value="audio"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Áudio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Resumo da Performance" icon={BarChart3}>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">✅ Pontos Fortes</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Gancho muito efetivo</li>
                      <li>• Qualidade visual excelente</li>
                      <li>• Áudio trending bem utilizado</li>
                      <li>• Timing de publicação ideal</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Status do Conteúdo</p>
                    <p className="text-2xl font-bold text-[#FF6B47]">Viral</p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Recomendações" icon={Star}>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">💡 Para o Próximo Reel</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Manter estrutura de gancho</li>
                      <li>• Usar áudios trending similares</li>
                      <li>• Publicar no mesmo horário</li>
                      <li>• Incluir CTAs mais específicos</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Probabilidade de Viralização</p>
                    <p className="text-2xl font-bold text-[#FF6B47]">Alta</p>
                  </div>
                </div>
              </InsightCard>
            </div>
          </TabsContent>

          <TabsContent value="copy" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Análise do Gancho" icon={Target}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Gancho Identificado:</p>
                    <p className="font-medium text-gray-900">"{data.copyAnalysis?.hook || 'Você não vai acreditar no que aconteceu...'}"</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Estratégia:</span>
                    <Badge className="bg-[#FF6B47] text-white">{data.copyAnalysis?.hookType || 'Curiosidade'}</Badge>
                  </div>
                  
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600">Efetividade do Gancho</p>
                    <p className="font-bold text-green-800">Muito Alta</p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Call to Action" icon={Zap}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">CTA Identificado:</p>
                    <p className="font-medium text-gray-900">"{data.copyAnalysis?.cta || 'Comenta aí embaixo o que você achou!'}"</p>
                  </div>
                  
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-600">Efetividade do CTA</p>
                    <p className="font-bold text-blue-800">Alta</p>
                  </div>
                </div>
              </InsightCard>
            </div>
          </TabsContent>

          <TabsContent value="visual" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Qualidade Visual" icon={Eye}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Iluminação:</span>
                    <Badge className="bg-yellow-500 text-white">{data.visualAnalysis?.lighting || 'Excelente'}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Composição:</span>
                    <Badge className="bg-green-500 text-white">Muito Boa</Badge>
                  </div>
                  
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600">Qualidade Geral</p>
                    <p className="font-bold text-green-800">Profissional</p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Estilo Visual" icon={Palette}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Estilo Dominante:</p>
                    <p className="font-medium text-gray-900">Moderno e Vibrante</p>
                  </div>
                  
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-600">Harmonia Visual</p>
                    <p className="font-bold text-purple-800">Excelente</p>
                  </div>
                </div>
              </InsightCard>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Qualidade do Áudio" icon={Music}>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">🎵 Som Trending</h4>
                    <p className="text-sm text-green-700">{data.audioAnalysis?.musicTrend || 'Áudio em alta no momento da publicação'}</p>
                  </div>
                  
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600">Qualidade do Áudio</p>
                    <p className="font-bold text-green-800">Excelente</p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Impacto Sonoro" icon={TrendingUp}>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600 mb-1">Potencial de Alcance</p>
                    <p className="text-xl font-bold text-green-800">+340%</p>
                    <p className="text-xs text-green-600">vs áudio comum</p>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    O áudio trending aumenta significativamente a descoberta orgânica do conteúdo.
                  </p>
                </div>
              </InsightCard>
            </div>
          </TabsContent>
        </Tabs>

        {/* Simplified Action Buttons */}
        <div className="flex justify-center gap-4 mt-8 pt-8 border-t">
          <Button
            onClick={onBackToStart}
            size="lg"
            className="bg-[#FF6B47] hover:bg-[#ff5a3d] text-white px-8"
          >
            Analisar Novo Reel
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AnalysisDashboard;
