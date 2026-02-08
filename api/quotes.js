export default async function handler(req, res) {

  const tickers = [
    "BBAS3","ITUB4","BBDC4","CMIG4","SANB4",
    "BPAC5","VIVT3","TIMS3","DASA3","FESA4",
    "RADL3","PSSA3","EGIE3","CPLE3","CXSE3"
  ];

  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${tickers.join(",")}.SA`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
}
