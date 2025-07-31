import { TrendingUp, TrendingDown } from "lucide-react";
export const LiveMarketTicker = () => {
  const marketData = [
    {
      symbol: "AAPL",
      price: 189.45,
      change: 2.34,
      changePercent: 1.25,
      trend: "up",
    },
    {
      symbol: "GOOGL",
      price: 138.21,
      change: -1.87,
      changePercent: -1.33,
      trend: "down",
    },
    {
      symbol: "MSFT",
      price: 412.78,
      change: 5.67,
      changePercent: 1.39,
      trend: "up",
    },
    {
      symbol: "TSLA",
      price: 248.91,
      change: -3.45,
      changePercent: -1.37,
      trend: "down",
    },
    {
      symbol: "AMZN",
      price: 156.78,
      change: 3.21,
      changePercent: 2.09,
      trend: "up",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-2 overflow-hidden">
      <div className="animate-scroll flex space-x-8 whitespace-nowrap">
        {marketData.concat(marketData).map((stock, index) => (
          <div key={index} className="flex items-center space-x-2 px-4">
            <span className="font-semibold">{stock.symbol}</span>
            <span>${stock.price}</span>
            <span
              className={`flex items-center text-sm ${
                stock.trend === "up" ? "text-green-400" : "text-red-400"
              }`}
            >
              {stock.trend === "up" ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              {stock.changePercent > 0 ? "+" : ""}
              {stock.changePercent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
<style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
`}</style>;
