import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign } from "lucide-react";

const CostBreakdown = () => {
  const expenses = [
    { name: "Konsalting", range: "$0 - $500", color: "text-korea-blue" },
    { name: "Application Fee", range: "$0 - $200", color: "text-korea-red" },
    { name: "Kontrakt", range: "$0 - $1,000 - $3,000", color: "text-korea-blue" },
    { name: "Visa", range: "$200", color: "text-korea-red" },
    { name: "KDB", range: "$0 - $1,400", color: "text-korea-blue" },
    { name: "Bilet", range: "$600 - $1,000", color: "text-korea-red" },
    { name: "Kvartira", range: "$200 - $400", color: "text-korea-blue" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-korea-red">KOREYAGA KETGUNCHA</span>
              <br />
              <span className="text-foreground">UMUMIY HARAXAT</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              To'liq shaffoflik - barcha xarajatlarni oldindan bilib oling
            </p>
          </div>

          <div className="glass rounded-2xl p-8 mb-8">
            <div className="space-y-6 mb-8">
              {expenses.map((expense, index) => (
                <div
                  key={expense.name}
                  className="flex items-center justify-between py-4 border-b border-border/20 last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-muted">
                      <DollarSign className="w-5 h-5 text-korea-blue" />
                    </div>
                    <span className="text-lg font-medium text-foreground">
                      {expense.name}
                    </span>
                  </div>
                  <span className={`text-lg font-bold ${expense.color}`}>
                    {expense.range}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border/20 pt-8">
              <div className="text-center space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-korea-red/10 rounded-xl">
                    <div className="text-2xl font-bold text-korea-red mb-1">
                      minimum $1,000
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Eng kam xarajat
                    </div>
                  </div>
                  <div className="p-4 bg-korea-blue/10 rounded-xl">
                    <div className="text-2xl font-bold text-korea-blue mb-1">
                      maximum $6,700
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Eng yuqori xarajat
                    </div>
                  </div>
                  <div className="p-4 bg-success/10 rounded-xl">
                    <div className="text-2xl font-bold text-success mb-1">
                      ~$5,000
                    </div>
                    <div className="text-sm text-muted-foreground">
                      O'rtacha xarajat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="hero"
              size="lg"
              className="px-12 py-6 text-xl"
            >
              BATAFSIL MA'LUMOT OLISH
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostBreakdown;