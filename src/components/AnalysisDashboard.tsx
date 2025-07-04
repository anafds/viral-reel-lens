
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
  Users,
  Lightbulb,
  Camera,
  FileText,
  MessageSquare,
  Zap,
  TrendingUp,
  Heart,
  Share2,
  BookOpen,
  Star,
  Mic
} from 'lucide-react';

interface AnalysisDashboardProps {
  data: any;
  onBackToStart: () => void;
}

const AnalysisDashboard = ({ data, onBackToStart }: AnalysisDashboardProps) => {
  const [activeTab, setActiveTab] = useState('copy');

  const generatePDF = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'analise-detalhada-reel-buscarid.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('PDF da análise detalhada gerado com sucesso! 📄');
  };

  const InsightCard = ({ title, icon: Icon, children, variant = "default" }: any) => (
    <Card className={`hover:shadow-lg transition-shadow ${variant === 'highlight' ? 'border-[#FF6B47] bg-orange-50' : ''}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="w-8 h-8 bg-[#FF6B47] bg-opacity-10 rounded-lg flex items-center justify-center">
            <Icon className="w-4 h-4 text-[#FF6B47]" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );

  const HighlightBox = ({ title, content, type = "success" }: any) => {
    const bgColor = type === "success" ? "bg-green-50" : type === "warning" ? "bg-yellow-50" : "bg-blue-50";
    const textColor = type === "success" ? "text-green-800" : type === "warning" ? "text-yellow-800" : "text-blue-800";
    const icon = type === "success" ? "✅" : type === "warning" ? "⚠️" : "💡";
    
    return (
      <div className={`${bgColor} p-4 rounded-lg mb-4`}>
        <h4 className={`font-semibold ${textColor} mb-2 flex items-center gap-2`}>
          <span>{icon}</span>
          {title}
        </h4>
        <p className={`text-sm ${textColor}`}>{content}</p>
      </div>
    );
  };

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
              <p className="text-sm text-gray-600">Análise Profunda</p>
              <p className="text-lg font-bold text-[#FF6B47]">Reel Viral</p>
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
                <Zap className="w-8 h-8" />
                <span className="text-2xl font-bold">VIRAL</span>
              </div>
              <h3 className="font-semibold">Potencial</h3>
              <p className="text-orange-100 text-sm">Alta capacidade de viralização</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-[#FF6B47]" />
                <Badge variant="secondary" className="bg-[#FF6B47] text-white">FORTE</Badge>
              </div>
              <h3 className="font-semibold text-gray-900">Gancho</h3>
              <p className="text-gray-600 text-sm">Estratégia de abertura</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Eye className="w-8 h-8 text-blue-500" />
                <Badge variant="secondary" className="bg-blue-500 text-white">EXCELENTE</Badge>
              </div>
              <h3 className="font-semibold text-gray-900">Visual</h3>
              <p className="text-gray-600 text-sm">Qualidade e composição</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-green-500" />
                <Badge variant="secondary" className="bg-green-500 text-white">AUTÊNTICO</Badge>
              </div>
              <h3 className="font-semibold text-gray-900">Criador</h3>
              <p className="text-gray-600 text-sm">Presença e carisma</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="copy">Copy</TabsTrigger>
            <TabsTrigger value="visual">Visual</TabsTrigger>
            <TabsTrigger value="audio">Áudio</TabsTrigger>
            <TabsTrigger value="creator">Criador</TabsTrigger>
            <TabsTrigger value="synthesis">Síntese</TabsTrigger>
          </TabsList>

          <TabsContent value="copy" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Gancho de Copy (Hook)" icon={Target} variant="highlight">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">Gancho Identificado:</p>
                    <p className="text-gray-700 italic">"{data.copyAnalysis.hook}"</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Estratégia:</span>
                      <Badge className="bg-[#FF6B47] text-white">{data.copyAnalysis.hookType}</Badge>
                    </div>
                    
                    <HighlightBox 
                      title="Força de Abertura" 
                      content="O gancho cria curiosidade imediata através de uma pergunta provocativa que toca diretamente na dor do público-alvo." 
                      type="success"
                    />
                    
                    <HighlightBox 
                      title="Conexão com Dor/Desejo" 
                      content="Aborda especificamente o problema de não conseguir resultados rápidos, gerando identificação instantânea." 
                      type="info"
                    />
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Efetividade do Gancho" icon={Zap}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Retenção</h4>
                      <p className="text-sm text-green-600">Alta</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Clareza</h4>
                      <p className="text-sm text-blue-600">Excelente</p>
                    </div>
                  </div>
                  
                  <HighlightBox 
                    title="Elemento Surpresa" 
                    content="Quebra o padrão esperado ao revelar uma informação contraintuitiva logo nos primeiros segundos." 
                    type="success"
                  />
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>💡 Timing:</strong> O gancho é revelado no momento perfeito para gerar máximo impacto e curiosidade.
                    </p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Desenvolvimento da Narrativa" icon={BookOpen}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Estrutura:</h4>
                    <p className="text-sm text-gray-600">Segue padrão de problema → agitação → solução → prova social</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Ritmo:</h4>
                    <p className="text-sm text-gray-600">Informação dosada perfeitamente para manter interesse constante</p>
                  </div>
                  
                  <HighlightBox 
                    title="Fechamento" 
                    content="O final entrega exatamente o que foi prometido no gancho, criando satisfação e incentivando o compartilhamento." 
                    type="success"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Call to Action" icon={MessageSquare}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">CTA Identificado:</p>
                    <p className="text-gray-700 italic">"{data.copyAnalysis.cta}"</p>
                  </div>
                  
                  <HighlightBox 
                    title="Efetividade" 
                    content="CTA bem posicionado que gera alta taxa de salvamentos e compartilhamentos." 
                    type="success"
                  />
                </div>
              </InsightCard>
            </div>
          </TabsContent>

          <TabsContent value="visual" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Qualidade Visual Geral" icon={Camera} variant="highlight">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Nitidez</h4>
                      <p className="text-sm text-green-600">4K/HD</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Estabilidade</h4>
                      <p className="text-sm text-green-600">Profissional</p>
                    </div>
                  </div>
                  
                  <HighlightBox 
                    title="Enquadramento" 
                    content="Uso estratégico do formato vertical com aproveitamento total da tela, criando imersão." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Transições" 
                    content="Cortes dinâmicos que mantêm o ritmo acelerado sem perder fluidez narrativa." 
                    type="info"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Iluminação e Composição" icon={Eye}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span>Tipo de Iluminação:</span>
                    <Badge className="bg-yellow-500 text-white">{data.visualAnalysis.lighting}</Badge>
                  </div>
                  
                  <HighlightBox 
                    title="Qualidade da Luz" 
                    content="Golden hour natural cria atmosfera acolhedora e profissional, aumentando o apelo visual." 
                    type="success"
                  />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Regras de Composição:</h4>
                    <p className="text-sm text-gray-600">{data.visualAnalysis.composition}</p>
                  </div>
                  
                  <HighlightBox 
                    title="Hierarquia Visual" 
                    content="Elementos importantes posicionados estrategicamente para guiar o olhar do espectador." 
                    type="info"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Harmonia de Cores" icon={Palette}>
                <div className="space-y-4">
                  <div className="flex gap-2 mb-4">
                    {data.visualAnalysis.colors.map((color: string, index: number) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-lg border-2 border-gray-200 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  
                  <HighlightBox 
                    title="Coerência Cromática" 
                    content="Paleta quente que transmite energia e confiança, criando forte conexão emocional." 
                    type="success"
                  />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Impacto Emocional:</h4>
                    <p className="text-sm text-gray-600">Cores geram sensação de urgência positiva e otimismo</p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Diferenciação Visual" icon={Star}>
                <div className="space-y-4">
                  <HighlightBox 
                    title="Destaque no Feed" 
                    content="Contraste visual forte que faz o reel se destacar instantaneamente no scroll." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Tendências Atuais" 
                    content="Aproveitamento de elementos visuais que estão performando bem no algoritmo atual." 
                    type="info"
                  />
                </div>
              </InsightCard>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Qualidade Sonora" icon={Mic} variant="highlight">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Clareza</h4>
                      <p className="text-sm text-green-600">Profissional</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Balanceamento</h4>
                      <p className="text-sm text-green-600">Excelente</p>
                    </div>
                  </div>
                  
                  <HighlightBox 
                    title="Sincronia" 
                    content="Áudio perfeitamente alinhado com elementos visuais, criando experiência coesa." 
                    type="success"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Música/Sound Design" icon={Music}>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">🎵 Trending Audio</h4>
                    <p className="text-sm text-green-700">{data.audioAnalysis.musicTrend}</p>
                  </div>
                  
                  <HighlightBox 
                    title="Escolha Estratégica" 
                    content="Uso inteligente de som trending que aumenta em 340% o alcance orgânico." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Relevância Narrativa" 
                    content="Música complementa perfeitamente a energia e ritmo do conteúdo." 
                    type="info"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Narração/Fala" icon={MessageSquare}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Dicção e Clareza:</h4>
                    <p className="text-sm text-gray-600">Excelente articulação facilita compreensão</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Tom e Ritmo:</h4>
                    <p className="text-sm text-gray-600">Adequado ao público jovem-adulto</p>
                  </div>
                  
                  <HighlightBox 
                    title="Variação Vocal" 
                    content="Uso estratégico de mudanças de tom para enfatizar pontos importantes." 
                    type="success"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Potencial Viral do Áudio" icon={TrendingUp}>
                <div className="space-y-4">
                  <HighlightBox 
                    title="Performance Atual" 
                    content="Áudio está em alta nas tendências, aumentando descoberta orgânica." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Originalidade" 
                    content="Uso criativo do áudio trending de forma única e memorável." 
                    type="info"
                  />
                </div>
              </InsightCard>
            </div>
          </TabsContent>

          <TabsContent value="creator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Carisma do Criador" icon={Users} variant="highlight">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Perfil do Criador:</h4>
                    <p className="text-gray-700">{data.characterAnalysis.mainCharacter}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Expressividade</h4>
                      <div className="text-2xl font-bold text-[#FF6B47]">{data.characterAnalysis.expressionScore}/100</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Carisma</h4>
                      <div className="text-2xl font-bold text-[#FF6B47]">{data.characterAnalysis.charisma}/100</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800">Autenticidade</h4>
                      <div className="text-2xl font-bold text-[#FF6B47]">{data.characterAnalysis.authenticity}/100</div>
                    </div>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Presença e Autenticidade" icon={Heart}>
                <div className="space-y-4">
                  <HighlightBox 
                    title="Genuinidade" 
                    content="Criador transmite autenticidade natural, sem forçar performance excessiva." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Vulnerabilidade" 
                    content="Mostra aspectos humanos quando apropriado, criando conexão emocional." 
                    type="info"
                  />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Consistência:</h4>
                    <p className="text-sm text-gray-600">Perfeitamente alinhado com persona estabelecida</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Relatabilidade:</h4>
                    <p className="text-sm text-gray-600">Alto nível de identificação com público-alvo</p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Habilidade de Comunicação" icon={MessageSquare}>
                <div className="space-y-4">
                  <HighlightBox 
                    title="Storytelling" 
                    content="Excelente capacidade de estruturar e contar histórias de forma envolvente." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Timing" 
                    content="Domínio perfeito de pausas, ritmo e momentos de impacto." 
                    type="success"
                  />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Adaptação ao Formato:</h4>
                    <p className="text-sm text-gray-600">Comunicação otimizada para formato vertical e curto</p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Conexão com Audiência" icon={Share2}>
                <div className="space-y-4">
                  <HighlightBox 
                    title="Contato Visual" 
                    content="Uso estratégico do olhar direto para câmera criando intimidade." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Engajamento" 
                    content="Convida naturalmente à interação através da comunicação." 
                    type="info"
                  />
                </div>
              </InsightCard>
            </div>
          </TabsContent>

          <TabsContent value="synthesis" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <InsightCard title="Potencial Viral" icon={Zap} variant="highlight">
                <div className="space-y-4">
                  <HighlightBox 
                    title="Shareability" 
                    content="Conteúdo altamente compartilhável devido à combinação de valor prático e entretenimento." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Gatilhos Emocionais" 
                    content="Ativa curiosidade, surpresa e esperança - trio poderoso para viralização." 
                    type="success"
                  />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Memorabilidade:</h4>
                    <p className="text-sm text-gray-600">Informação principal fica na memória após assistir</p>
                  </div>
                </div>
              </InsightCard>

              <InsightCard title="Público-Alvo Identificado" icon={Target}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Perfil Demográfico:</h4>
                    <p className="text-sm text-gray-600">Jovens adultos 25-40 anos, interessados em desenvolvimento pessoal</p>
                  </div>
                  
                  <HighlightBox 
                    title="Necessidades Atendidas" 
                    content="Resolve problema específico de falta de resultados rápidos em objetivos pessoais." 
                    type="info"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Elementos de Destaque" icon={Star}>
                <div className="space-y-4">
                  <HighlightBox 
                    title="Diferenciadores Únicos" 
                    content="Abordagem contraintuitiva que quebra crenças limitantes do público." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Execução Exemplar" 
                    content="Qualidade técnica profissional em todos os aspectos - referência na categoria." 
                    type="success"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Oportunidades de Melhoria" icon={TrendingUp}>
                <div className="space-y-4">
                  <HighlightBox 
                    title="Call to Action" 
                    content="Poderia incluir CTA mais específico para direcionamento de tráfego." 
                    type="warning"
                  />
                  
                  <HighlightBox 
                    title="Aproveitamento de Tendências" 
                    content="Oportunidade de incluir elementos visuais trending mais específicos." 
                    type="info"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Recomendações Estratégicas" icon={Lightbulb}>
                <div className="space-y-4">
                  <HighlightBox 
                    title="Para Replicação" 
                    content="Manter estrutura de gancho + desenvolvimento + prova social em futuros conteúdos." 
                    type="success"
                  />
                  
                  <HighlightBox 
                    title="Para Escala" 
                    content="Sistematizar processo de criação mantendo qualidade técnica consistente." 
                    type="info"
                  />
                </div>
              </InsightCard>

              <InsightCard title="Insights Finais" icon={Lightbulb}>
                <div className="space-y-4">
                  <div className="bg-[#FF6B47] bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#FF6B47] mb-2">🔥 Fatores de Sucesso:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Gancho provocativo e relevante</li>
                      <li>• Qualidade técnica profissional</li>
                      <li>• Autenticidade do criador</li>
                      <li>• Timing perfeito de revelação</li>
                      <li>• Valor prático entregue</li>
                    </ul>
                  </div>
                  
                  <HighlightBox 
                    title="Próximos Passos" 
                    content="Implementar sistema de análise prévia para garantir elementos virais em 100% dos conteúdos." 
                    type="info"
                  />
                </div>
              </InsightCard>
            </div>
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

