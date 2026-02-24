'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [text, setText] = useState('')
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
  })

  useEffect(() => {
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length
    const readingTime = Math.ceil(words / 200) // Average reading speed

    setStats({ words, characters, charactersNoSpaces, sentences, paragraphs, readingTime })
  }, [text])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📝 Word Counter</h1>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className={styles.input}
      />

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.words}</div>
          <div className={styles.statLabel}>Words</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.characters}</div>
          <div className={styles.statLabel}>Characters</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.charactersNoSpaces}</div>
          <div className={styles.statLabel}>No Spaces</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.sentences}</div>
          <div className={styles.statLabel}>Sentences</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.paragraphs}</div>
          <div className={styles.statLabel}>Paragraphs</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.readingTime}m</div>
          <div className={styles.statLabel}>Reading Time</div>
        </div>
      </div>
    </div>
  )
}