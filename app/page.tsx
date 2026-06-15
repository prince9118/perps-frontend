import Counter from "@/components/Counter";
import OrderSide from "@/components/OrderSideToggle";
import Position from "@/components/positions/PositionCard"
export default function HomePage(){
  return(
    <main>
       <Counter />
       <OrderSide/>
       <Position />
        
    </main>
  );
}