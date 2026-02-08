export default async function handler(req, res) {

  const API_KEY = "F2TUB1RFCWPKWN83";

  const symbols = [
    "BBAS3.SA","ITUB4.SA","BBDC4.SA","CMIG4.SA",
    "SANB4.SA","BPAC5.SA","VIVT3.SA","TIMS3.SA",
    "DASA3.SA","FESA4.SA","RADL3.SA","PSSA3.SA",
    "EGIE3.SA","CPLE3.SA","CXSE3.SA"
  ];

  let results = [];

  try {

    for (let symbol of symbols) {

      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      const quote = data["Global Quote"];

      if (quote && quote["05. price"]) {
        results.push({
          symbol: symbol.replace(".SA",""),
          regularMarketPrice: parseFloat(quote["05. price"]),
          regularMarketChangePercent: parseFloat(
            quote["10. change percent"].replace("%","")
          ),
          fiftyTwoWeekHigh: null,
          fiftyTwoWeekLow: null
        });
      }

      // pausa pequena pra evitar limite
      await new Promise(r => setTimeout(r, 12000));

    }

    res.status(200).json({ results });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
