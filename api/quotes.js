export default function handler(req, res) {
  res.status(200).json({
    results: [
      {
        symbol: "TESTE3",
        regularMarketPrice: 100,
        regularMarketChangePercent: 2.5,
        fiftyTwoWeekHigh: 120,
        fiftyTwoWeekLow: 80
      }
    ]
  });
}
