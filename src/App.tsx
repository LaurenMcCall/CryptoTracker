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
  const [counter, setCounter] = useState(0)

  // function compareValue(currencies: number[]) {
  // valueArray.push(currency)

  // console.log(currency)
  //   const valueArray = currencies.map((currency) => {
  //     return currency.priceUsd
  //   })
  //   console.log(valueArray)
  // }

  function getCryptoData() {
    async function fetchCryptoData() {
      const response = await fetch('https://api.coincap.io/v2/assets')

      if (response.ok) {
        const { data } = await response.json()
        console.log(data)

        // compareValue(data)

        // data.forEach((currency) => compareValue(currency.priceUsd))

        const sortCrypto = [...data].sort((a, b) => {
          // compareValue(a.priceUsd)
          return a.rank - b.rank
        })
        setCurrency(sortCrypto)
      }
    }
    fetchCryptoData()
  }

  useEffect(function () {
    // QUESTION: why didn't just putting the function here call refresh
    // the data every 10 secs? Instead I had to call useEffect again below
    // getCryptoData()
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1)
      console.log('called every 10 seconds')
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(getCryptoData, [counter])

  return (
    <div>
      <header>
        <h2>CryptoTicker</h2>
        <div>
          <a
            className="fa-brands fa-github bigger"
            href="https://github.com/LaurenMcCall/CryptoTracker"
          ></a>
        </div>
      </header>
      <article className="header">
        <div>
          <p>Name</p>
        </div>
        <div className="price-header">
          <p>Price</p>
          <p>% Change</p>
        </div>
      </article>
      <article>
        {currency.map((currency) => {
          return (
            <section key={currency.id}>
              <div>
                <p>{currency.symbol}</p>
                <p>{currency.name}</p>
              </div>
              <div className="price">
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
