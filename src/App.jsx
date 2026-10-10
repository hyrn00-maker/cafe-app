
import { useState } from 'react'
import './App.css'

const cafes = [
  {
    name: 'スターバックス',
    description: 'コーヒーや季節限定ドリンクが人気のカフェ',
    url: 'https://www.starbucks.co.jp/',
    emoji: '☕'
  },
  {
    name: 'タリーズコーヒー',
    description: 'コーヒーとフードを楽しめるカフェ',
    url: 'https://www.tullys.co.jp/',
    emoji: '🥤'
  },
  {
    name: 'サンマルクカフェ',
    description: 'チョコクロや焼きたてパンが人気のカフェ',
    url: 'https://www.saint-marc-hd.com/saintmarccafe/',
    emoji: '🥐'
  }
]

function App() {
  const [search, setSearch] = useState('')

  const filteredCafes = cafes.filter(cafe =>
    cafe.name.includes(search)
  )

  return (
    <div className="app">
      <header>
        <h1>☕ CafeSnap</h1>
        <p>お気に入りのチェーンカフェを見つけよう</p>
      </header>

      <main>
        <h2>カフェ一覧</h2>

        <input
          type="text"
          placeholder="カフェ名で検索"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="cafe-list">
          {filteredCafes.map(cafe => (
            <div className="cafe-card" key={cafe.name}>
              <div className="cafe-icon">{cafe.emoji}</div>
              <h3>{cafe.name}</h3>
              <p>{cafe.description}</p>
              <a href={cafe.url} target="_blank" rel="noopener noreferrer">
                公式サイトを見る →
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2026 CafeSnap</p>
      </footer>
    </div>
  )
}

export default App
