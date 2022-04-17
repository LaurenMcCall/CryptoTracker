import React, { useState } from 'react'

export function App() {
  const [currency, setCurrency] = useState([
    {
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      supply: '19013243.0000000000000000',
      maxSupply: '21000000.0000000000000000',
      marketCapUsd: '770187947105.8361301478254510',
      volumeUsd24Hr: '5955269855.4278165117411228',
      priceUsd: '40507.9736847541542570',
      changePercent24Hr: '0.6441259657469858',
      vwap24Hr: '40440.1435281702083345',
      explorer: 'https://blockchain.info/',
    },
    {
      id: 'ethereum',
      rank: '2',
      symbol: 'ETH',
      name: 'Ethereum',
      supply: '120401345.4365000000000000',
      maxSupply: null,
      marketCapUsd: '366810149334.2842277404918309',
      volumeUsd24Hr: '4343055044.6196763204485339',
      priceUsd: '3046.5618802220188406',
      changePercent24Hr: '0.6307616776832592',
      vwap24Hr: '3033.9266928775305265',
      explorer: 'https://etherscan.io/',
    },
  ])

  return (
    <div>
      <header>
        <h2>CryptoTicker</h2>
        <div>
          <i className="fa-brands fa-github bigger"></i>
        </div>
      </header>
      <ul>
        {currency.map(function (currency) {
          return (
            <li key={currency.rank}>
              {currency.name}: ${currency.priceUsd} –
              {currency.changePercent24Hr}%
            </li>
          )
        })}
      </ul>
    </div>
  )
}
