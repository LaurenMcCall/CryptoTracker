import React, { useEffect, useState } from 'react'

export function App() {
  type CryptoType = {
    id: string
    rank: number
    symbol: string
    name: string
    priceUsd: number
    changePercent24Hr: number
  }

  const [currency, setCurrency] = useState<CryptoType[]>([])

  useEffect(function () {
    async function fetchCryptoData() {
      const response = await fetch('https://api.coincap.io/v2/assets')
      if (response.ok) {
        const json = await response.json()
        console.log(json)
      }
    }
    fetchCryptoData()
  }, [])

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
