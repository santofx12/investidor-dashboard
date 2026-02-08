export default async function handler(req, res) {

  const symbols = [
    "BBAS3.SA","ITUB4.SA","BBDC4.SA","CMIG4.SA",
    "SANB4.SA","BPAC5.SA","VIVT3.SA","TIMS3.SA",
    "DASA3.SA","FESA4.SA","RADL3.SA","PSSA3.SA",
    "EGIE3.SA","CPLE3.SA","CXSE3.SA"
  ];

  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols.join(",")}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const data = await response.json();

    res.status(200).json({
      results: data.quoteResponse.result
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
