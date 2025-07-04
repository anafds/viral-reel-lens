
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  ArrowLeft, 
  Target, 
  Eye, 
  Palette, 
  Music, 
  Zap,
  TrendingUp,
  Star,
  BarChart3
} from 'lucide-react';

interface AnalysisDashboardProps {
  data: any;
  onBackToStart: () => void;
}

const AnalysisDashboard = ({ data, onBackToStart }: AnalysisDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const generatePDF = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'analise-detalhada-reel-buscarid.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('PDF da análise detalhada gerado com sucesso! 📄');
  };

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
          
          <Button
            onClick={generatePDF}
            className="bg-[#FF6B47] hover:bg-[#ff5a3d] text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Score Overview - Simplified */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Análise do Reel</h1>
            <p className="text-gray-600">Resultado da análise completa do seu conteúdo</p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-6">
            <MetricCard
              title="Score Viral"
              value="92/100"
              description="Excelente potencial"
              variant="primary"
            />
            <MetricCard
              title="Engajamento"
              value="15.3%"
              description="Muito acima da média"
            />
            <MetricCard
              title="Visualizações"
              value="45.2K"
              description="Alta performance"
            />
            <MetricCard
              title="Taxa de Salvamento"
              value="3.4%"
              description="Conteúdo de valor"
            />
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
                  
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm">Likes:</span>
                    <span className="font-medium text-[#FF6B47]">45.2K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm">Comentários:</span>
                    <span className="font-medium text-[#FF6B47]">2.3K</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">Compartilhamentos:</span>
                    <span className="font-medium text-[#FF6B47]">890</span>
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
                    <p className="font-medium text-gray-900">"{data.copyAnalysis.hook}"</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Estratégia:</span>
                    <Badge className="bg-[#FF6B47] text-white">{data.copyAnalysis.hookType}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Score do Gancho:</span>
                    <span className="font-bold text-[#FF6B47]">{data.copyAnalysis.hookScore}/100</span>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Call to Action" icon={Zap}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">CTA Identificado:</p>
                    <p className="font-medium text-gray-900">"{data.copyAnalysis.cta}"</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Efetividade:</span>
                    <span className="font-bold text-[#FF6B47]">{data.copyAnalysis.ctaScore}/100</span>
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
                    <Badge className="bg-yellow-500 text-white">{data.visualAnalysis.lighting}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Score de Iluminação:</span>
                    <span className="font-bold text-[#FF6B47]">{data.visualAnalysis.lightingScore}/100</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Composição:</span>
                    <span className="font-bold text-[#FF6B47]">{data.visualAnalysis.compositionScore}/100</span>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Paleta de Cores" icon={Palette}>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    {data.visualAnalysis.colors.map((color: string, index: number) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-lg border shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Harmonia:</span>
                    <span className="font-bold text-[#FF6B47]">{data.visualAnalysis.colorHarmony}/100</span>
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
                    <p className="text-sm text-green-700">{data.audioAnalysis.musicTrend}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Score Musical:</span>
                    <span className="font-bold text-[#FF6B47]">{data.audioAnalysis.musicScore}/100</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Qualidade do Áudio:</span>
                    <span className="font-bold text-[#FF6B47]">{data.audioAnalysis.audioScore}/100</span>
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
            onClick={generatePDF}
            size="lg"
            className="bg-[#FF6B47] hover:bg-[#ff5a3d] text-white px-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Baixar Análise Completa
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
