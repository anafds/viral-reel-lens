
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { X, Lock, Gift } from 'lucide-react';

interface LeadCaptureModalProps {
  onSubmit: () => void;
  onClose: () => void;
}

const LeadCaptureModal = ({ onSubmit, onClose }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    position: '',
    employees: '',
    lgpdAccepted: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp é obrigatório';
    if (!formData.company.trim()) newErrors.company = 'Empresa é obrigatória';
    if (!formData.position.trim()) newErrors.position = 'Cargo é obrigatório';
    if (!formData.employees) newErrors.employees = 'Número de funcionários é obrigatório';
    if (!formData.lgpdAccepted) newErrors.lgpdAccepted = 'Você deve aceitar os termos da LGPD';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-8 pb-6 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#FF6B47] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Análise Completa Pronta! 🎉
            </h2>
            <p className="text-gray-600">
              Preencha seus dados para acessar o relatório completo
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B47] rounded-full"></div>
              <span className="text-gray-700">Dashboard interativo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B47] rounded-full"></div>
              <span className="text-gray-700">Relatório em PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B47] rounded-full"></div>
              <span className="text-gray-700">Score de viralização</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B47] rounded-full"></div>
              <span className="text-gray-700">Análise completa</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`h-12 ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Seu nome completo"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email profissional *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`h-12 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="seu@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp (com DDD) *</Label>
              <Input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className={`h-12 ${errors.whatsapp ? 'border-red-500' : ''}`}
                placeholder="(11) 99999-9999"
              />
              {errors.whatsapp && <p className="text-red-500 text-xs">{errors.whatsapp}</p>}
            </div>

            {/* Empresa */}
            <div className="space-y-2">
              <Label htmlFor="company">Empresa *</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className={`h-12 ${errors.company ? 'border-red-500' : ''}`}
                placeholder="Nome da sua empresa"
              />
              {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
            </div>

            {/* Cargo */}
            <div className="space-y-2">
              <Label htmlFor="position">Cargo *</Label>
              <Input
                id="position"
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                className={`h-12 ${errors.position ? 'border-red-500' : ''}`}
                placeholder="Seu cargo na empresa"
              />
              {errors.position && <p className="text-red-500 text-xs">{errors.position}</p>}
            </div>

            {/* Número de funcionários */}
            <div className="space-y-2">
              <Label htmlFor="employees">Número de funcionários *</Label>
              <Select onValueChange={(value) => handleInputChange('employees', value)}>
                <SelectTrigger className={`h-12 ${errors.employees ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Selecione o porte da empresa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 funcionários</SelectItem>
                  <SelectItem value="11-50">11-50 funcionários</SelectItem>
                  <SelectItem value="51-200">51-200 funcionários</SelectItem>
                  <SelectItem value="201-1000">201-1000 funcionários</SelectItem>
                  <SelectItem value="1000+">Mais de 1000 funcionários</SelectItem>
                </SelectContent>
              </Select>
              {errors.employees && <p className="text-red-500 text-xs">{errors.employees}</p>}
            </div>
          </div>

          {/* LGPD Checkbox */}
          <div className="mt-6 space-y-2">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="lgpd"
                checked={formData.lgpdAccepted}
                onCheckedChange={(checked) => 
                  handleInputChange('lgpdAccepted', checked.toString())
                }
                className={errors.lgpdAccepted ? 'border-red-500' : ''}
              />
              <Label htmlFor="lgpd" className="text-sm text-gray-600 leading-relaxed">
                Aceito receber comunicações da BuscarID e concordo com o tratamento dos meus dados pessoais conforme a{' '}
                <a href="#" className="text-[#FF6B47] hover:underline">
                  Política de Privacidade
                </a>{' '}
                e{' '}
                <a href="#" className="text-[#FF6B47] hover:underline">
                  Termos de Uso
                </a>, conforme a LGPD. *
              </Label>
            </div>
            {errors.lgpdAccepted && <p className="text-red-500 text-xs">{errors.lgpdAccepted}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              className="w-full h-14 text-lg font-semibold bg-[#FF6B47] hover:bg-[#ff5a3d] text-white rounded-2xl transition-all duration-200"
            >
              <Lock className="w-5 h-5 mr-2" />
              Acessar Análise Completa
            </Button>
            
            <p className="text-center text-xs text-gray-500 mt-3">
              🔒 Seus dados estão protegidos e não serão compartilhados
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
