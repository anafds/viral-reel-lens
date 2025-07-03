
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Instagram, TrendingUp, Zap } from 'lucide-react';

interface URLInputScreenProps {
  onSubmit: (url: string) => void;
}

const URLInputScreen = ({ onSubmit }: URLInputScreenProps) => {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateURL = (inputUrl: string) => {
    const instagramReelRegex = /^https?:\/\/(www\.)?instagram\.com\/(reel|reels)\/[A-Za-z0-9_-]+/;
    return instagramReelRegex.test(inputUrl);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
    setIsValid(validateURL(inputUrl));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(url);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <img 
            src="/lovable-uploads/d68b8b84-5d85-40c7-9630-471dc9d0501b.png" 
            alt="BuscarID" 
            className="h-12"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B47] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Análise de Reels Virais
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Descubra o <span className="text-[#FF6B47]">Segredo</span><br />
              dos Reels que <span className="text-[#FF6B47]">Viralizaram</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa IA analisa cada detalhe do seu reel: copy, iluminação, cores, timing e muito mais. 
              Entenda exatamente por que alguns vídeos explodem e outros não.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-[#FF6B47] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Análise Completa</h3>
              <p className="text-gray-600 text-sm">
                Copy, iluminação, cores, personagens e timing analisados em segundos
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-[#FF6B47] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Score de Viralização</h3>
              <p className="text-gray-600 text-sm">
                Pontuação detalhada de cada elemento que faz um reel viralizar
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-[#FF6B47] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Relatório Exportável</h3>
              <p className="text-gray-600 text-sm">
                Dashboard interativo + PDF completo para sua estratégia
              </p>
            </div>
          </div>

          {/* URL Input Form */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cole a URL do Reel para Analisar
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="url"
                  placeholder="https://instagram.com/reel/..."
                  value={url}
                  onChange={handleInputChange}
                  className="h-14 text-lg pl-6 pr-16 border-2 border-gray-200 rounded-2xl focus:border-[#FF6B47] focus:ring-[#FF6B47]"
                />
                <Instagram className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              </div>
              
              {url && !isValid && (
                <p className="text-red-500 text-sm text-left">
                  Por favor, insira uma URL válida do Instagram Reel
                </p>
              )}
              
              <Button
                type="submit"
                disabled={!isValid}
                className="w-full h-14 text-lg font-semibold bg-[#FF6B47] hover:bg-[#ff5a3d] text-white rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Analisar Reel Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4">
              🔒 Seus dados estão seguros. Análise em tempo real.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Confiado por mais de 1,000+ criadores</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Creator 1</div>
              <div className="text-2xl font-bold">Creator 2</div>
              <div className="text-2xl font-bold">Creator 3</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default URLInputScreen;
