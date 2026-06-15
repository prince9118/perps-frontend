import {MarketCard} from "@/components/market/MarketCard";
export default function HomePage(){
  return(
    <main>
      <MarketCard symbol="BTC-PERP" price={63900} change={2.4}/>
    </main>
  );
}