// Файл: src/components/SmartCalculator.tsx
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// --- Типы данных ---
interface Offer {
  _id: string;
  providerName: string;
  loanType: string;
  maxAmount: number;
  maxTerm: number;
  interestRate: string;
  slug?: string;
  offerUrl: string;
}
interface Props {
  allOffers: Offer[];
  defaultCategory?: string;
}

// --- Основной компонент ---
export default function SmartCalculator({ allOffers, defaultCategory = 'kiirlaen' }: Props) {
  const [amount, setAmount] = useState(2000);
  const [term, setTerm] = useState(24);
  const [selectedType, setSelectedType] = useState('koik'); // 'koik' означает все типы
  
  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);
  const [results, setResults] = useState<Offer[]>([]);

  // Список уникальных типов кредитов для выпадающего меню
  const uniqueLoanTypes = useMemo(() => {
    if (!allOffers) return [];
    const types = new Set(allOffers.map(offer => offer.loanType));
    return Array.from(types);
  }, [allOffers]);

  const handleCalculate = () => {
    // 1. Математический расчет (упрощенная формула аннуитета)
    const yearlyInterest = 15 / 100; // Используем примерную среднюю ставку 15% для расчета
    const monthlyInterest = yearlyInterest / 12;
    const numberOfPayments = term;
    const payment = amount * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
    
    if (!isNaN(payment)) {
        setMonthlyPayment(payment.toFixed(2));
    } else {
        setMonthlyPayment(null);
    }

    // 2. Фильтрация предложений из базы
    if (!allOffers) return;
    const filtered = allOffers.filter(offer => {
      const typeMatch = selectedType === 'koik' || offer.loanType === selectedType;
      const amountMatch = (offer.maxAmount || 0) >= amount;
      const termMatch = (offer.maxTerm || 0) >= term;
      return typeMatch && amountMatch && termMatch;
    });
    setResults(filtered);
  };
  
  // Создаем список вкладок только для тех категорий, которые есть в результатах
  const resultCategories = useMemo(() => {
    if (!results) return [];
    const types = new Set(results.map(offer => offer.loanType));
    return Array.from(types);
  }, [results]);


  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl border border-slate-200">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-extrabold">Nutikas laenukalkulaator</CardTitle>
        <CardDescription>Arvuta oma kuumakse ja leia sobivaimad pakkumised meie andmebaasist.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <Label htmlFor="amount">Soovitud summa (€)</Label>
            <Input id="amount" type="number" value={amount} onChange={e => setAmount(parseInt(e.target.value))} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="term">Periood (kuud)</Label>
            <Input id="term" type="number" value={term} onChange={e => setTerm(parseInt(e.target.value))} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="loanType">Laenu tüüp</Label>
            <Select onValueChange={setSelectedType} defaultValue="koik">
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Vali laenu tüüp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="koik">Kõik tüübid</SelectItem>
                {uniqueLoanTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleCalculate} className="w-full text-lg py-6 font-bold bg-cyan-500 hover:bg-cyan-600 shadow-lg">Arvuta ja leia pakkumised</Button>
      </CardContent>
      
      {monthlyPayment && (
        <CardFooter className="flex flex-col gap-4 items-start pt-6 border-t bg-slate-50/70 rounded-b-lg">
          <div className="w-full text-center bg-white p-4 rounded-lg shadow-inner">
            <p className="text-slate-600">Sinu hinnanguline kuumakse:</p>
            <p className="text-4xl font-extrabold text-cyan-600">{monthlyPayment} €</p>
          </div>
          
          {results.length > 0 ? (
            <div className="w-full">
              <p className="text-sm font-bold my-4 text-center">Nende andmete põhjal sobivad sulle järgmised pakkumised:</p>
              
              {resultCategories.length > 1 ? (
                <Tabs defaultValue={defaultCategory && resultCategories.includes(defaultCategory) ? defaultCategory : "koik"} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 h-auto flex-wrap">
                    <TabsTrigger value="koik">Kõik</TabsTrigger>
                    {resultCategories.map(type => <TabsTrigger key={type} value={type} className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-md">{type}</TabsTrigger>)}
                  </TabsList>
                  
                  <TabsContent value="koik">
                    {results.map(offer => (
                      <div key={offer._id} className="w-full flex justify-between items-center p-3 border rounded-md mb-2 bg-white">
                        <div>
                          <p className="font-bold">{offer.providerName}</p>
                          <p className="text-xs text-slate-500">{offer.loanType}</p>
                        </div>
                        <a href={`/go/${offer.slug}`} target="_blank" rel="nofollow noopener noreferrer" className="bg-cyan-500 text-white text-sm font-semibold py-1 px-3 rounded-md hover:bg-cyan-600">lähemalt..</a>
                      </div>
                    ))}
                  </TabsContent>
                  
                  {resultCategories.map(type => (
                    <TabsContent key={type} value={type}>
                      {results.filter(r => r.loanType === type).map(offer => (
                        <div key={offer._id} className="w-full flex justify-between items-center p-3 border rounded-md mb-2 bg-white">
                          <p className="font-bold">{offer.providerName}</p>
                          <a href={`/go/${offer.slug}`} target="_blank" rel="nofollow noopener noreferrer" className="bg-cyan-500 text-white text-sm font-semibold py-1 px-3 rounded-md hover:bg-cyan-600">lähemalt..</a>
                        </div>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              ) : (
                <div className="space-y-2 mt-2">
                   {results.map(offer => (
                      <div key={offer._id} className="w-full flex justify-between items-center p-3 border rounded-md mb-2 bg-white">
                        <div>
                          <p className="font-bold">{offer.providerName}</p>
                          <p className="text-xs text-slate-500">{offer.loanType}</p>
                        </div>
                        <a href={`/go/${offer.slug}`} target="_blank" rel="nofollow noopener noreferrer" className="bg-cyan-500 text-white text-sm font-semibold py-1 px-3 rounded-md hover:bg-cyan-600">lähemalt..</a>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-center w-full mt-4 text-slate-600">Kahjuks ei leitud nendele kriteeriumitele vastavaid pakkumisi.</p>
          )}
        </CardFooter>
      )}
    </Card>
  );
}