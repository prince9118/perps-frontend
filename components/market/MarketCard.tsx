type marketCardProps={
    symbol:string;
    price:number;
    change:number;
};

export function MarketCard({symbol,price,change}:marketCardProps){
    return (
        <div>
            <h2>{symbol}</h2>
            <p>${price}</p>
            <p>{change}</p>
        </div>
    );
}