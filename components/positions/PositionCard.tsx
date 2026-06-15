"use client"
export default function Position(){
    const market=["BTC","ETH","SOL"];

    return(
        <>
        {market.map((m)=>{
            <h1>{m}</h1>
        })}
        </>
    )
}