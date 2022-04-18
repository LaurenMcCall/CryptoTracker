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
        const { data } = await response.json()
        console.log(data)

        const sortCrypto = [...data].sort((a, b) => {
          return a.rank - b.rank
        })
        setCurrency(sortCrypto)
      }
    }
    fetchCryptoData()
  }, [])

  useEffect(function () {
    const interval = setInterval(() => {
      console.log('called every 10 seconds')
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <header>
        <h2>CryptoTicker</h2>
        <div>
          <i className="fa-brands fa-github bigger"></i>
        </div>
      </header>
      <article>
        {currency.map((currency) => {
          return (
            <section key={currency.id}>
              <div>
                <p>{currency.name}</p>
              </div>
              <div>
                <p>${Math.round(currency.priceUsd * 100) / 100}</p>
                <p>{Math.round(currency.changePercent24Hr * 100) / 100}%</p>
              </div>
            </section>
          )
        })}
      </article>
    </div>
  )
}
