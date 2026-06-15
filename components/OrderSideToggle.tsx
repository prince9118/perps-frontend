"use client"
import { useState } from "react";   

export default function OrderSide(){
    const[side,setSide]=useState<"buy"|"sell">("buy");
    return(
        <>
           <h1>Current Side :{side}</h1>
            <button onClick={()=>setSide("buy")}>
                BUY 
            </button>
            <button  onClick={()=>setSide("sell")}>
                SELL 
            </button>

           
        </>
    )
}