import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, User, GraduationCap, Loader2, CheckCircle, XCircle } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

const ConsultationModal = ({ isOpen, onClose, selectedPackage }: ConsultationModalProps) => {
  const [program, setProgram] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState(""); 

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setProgram("");
        setFullName("");
        setPhone("");
        setIsSubmitting(false);
        setSubmitStatus('idle');
        setErrorMessage("");
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(""); 

    const formData = new FormData();
   formData.append("access_key", "00899aa7-a3a5-4d51-b730-73e555e0ace7");
    formData.append("Ism", fullName);
    formData.append("Telefon", `+998${phone.replace(/\s/g, '')}`);
    formData.append("Mavzu", selectedPackage ? `${selectedPackage} Paketi Uchun Murojaat` : "To'liq Konsultatsiya Uchun Murojaat");
    
    if (!selectedPackage && program) {
      formData.append("Dastur", program);
    }
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        console.error("Web3Forms Error:", data);
        throw new Error(data.message || 'Serverda noma\'lum xatolik yuz berdi.');
      }

    } catch (error) {
      console.error('Submit error:', error);
    
      setErrorMessage((error as Error).message); 
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContent = () => {
    if (submitStatus === 'success') {
      return (
        <div className="text-center py-10 flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-white">Murojaatingiz Qabul Qilindi!</h3>
          <p className="text-gray-300 mt-2">Tez orada menejerimiz siz bilan bog'lanadi.</p>
        </div>
      );
    }

    if (submitStatus === 'error') {
      return (
        <div className="text-center py-10 flex flex-col items-center">
          <XCircle className="w-16 h-16 text-red-500 mb-4" />
          <h3 className="text-2xl font-bold text-white">Xatolik Yuz Berdi</h3>
          <p className="text-gray-300 mt-2">Iltimos, qaytadan urinib ko'ring yoki biz bilan to'g'ridan-to'g'ri bog'laning.</p>
          
          {errorMessage && (
            <div className="mt-4 text-left w-full bg-red-900/20 p-3 rounded-md border border-red-500/30">
                <p className="text-xs text-red-300">
                  <span className="font-bold">Texnik Sabab:</span> {errorMessage}
                </p>
            </div>
          )}

          <Button onClick={() => setSubmitStatus('idle')} variant="outline" className="mt-4">Qaytadan Urinish</Button>
        </div>
      );
    }

    
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
          {!selectedPackage && (
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground">Qaysi dastur bo'yicha o'qimoqchisiz?</Label>
              <RadioGroup value={program} onValueChange={setProgram} className="space-y-3">
                 <div className="flex items-center space-x-3 p-4 glass rounded-lg border border-border/20"><RadioGroupItem value="Bakalavr" id="bakalavr" className="text-korea-blue" /><Label htmlFor="bakalavr" className="text-foreground cursor-pointer flex-1">Bakalavr</Label><GraduationCap className="w-5 h-5 text-korea-blue" /></div>
                 <div className="flex items-center space-x-3 p-4 glass rounded-lg border border-border/20"><RadioGroupItem value="Magistratura (E-visa)" id="magistratura" className="text-korea-blue" /><Label htmlFor="magistratura" className="text-foreground cursor-pointer flex-1">Magistratura (E-visa)</Label><GraduationCap className="w-5 h-5 text-korea-blue" /></div>
                 <div className="flex items-center space-x-3 p-4 glass rounded-lg border border-border/20"><RadioGroupItem value="Kasbiy Ta'lim" id="kasbiy" className="text-korea-blue" /><Label htmlFor="kasbiy" className="text-foreground cursor-pointer flex-1">Kasbiy Ta'lim</Label><GraduationCap className="w-5 h-5 text-korea-blue" /></div>
              </RadioGroup>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-lg font-semibold text-foreground">Ism Familiyangiz</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input id="fullName" type="text" placeholder="To'liq ismingizni kiriting" value={fullName} onChange={(e) => setFullName(e.target.value)} className="pl-10 glass border-border/20 text-foreground placeholder:text-muted-foreground" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-lg font-semibold text-foreground">Telefon raqamingiz</Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2"><span className="text-sm font-medium text-foreground">🇺🇿 +998</span></div>
              <Input id="phone" type="tel" placeholder="90 123 45 67" value={phone} onChange={(e) => setPhone(e.target.value)} className="pl-20 glass border-border/20 text-foreground placeholder:text-muted-foreground" required />
            </div>
          </div>
          <Button type="submit" variant="korea-red" size="lg" className="w-full font-bold text-lg py-6" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="w-6 h-6 mr-2 animate-spin" />
            ) : (
              <Phone className="w-5 h-5 mr-2" />
            )}
            Yuborish
          </Button>
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Ma'lumotlaringizni yuborib, siz <span className="text-korea-blue cursor-pointer hover:underline">maxfiylik siyosati</span> va <span className="text-korea-blue cursor-pointer hover:underline">foydalanish shartlari</span>ga rozilik bildirasiz.
          </p>
        </form>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="glass border-border/20 max-w-md mx-4"
        onClick={(e) => e.stopPropagation()} 
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground mb-2">
            {selectedPackage ? `${selectedPackage} Paketi Uchun` : "To'liq Konsultatsiya Olish Uchun"}
            <br />
            <span className="text-korea-red">ro'yxatdan o'tish</span>
          </DialogTitle>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;