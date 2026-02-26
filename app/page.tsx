'use client'

import { useState, useMemo } from 'react'

export default function Home() {
  const [text, setText] = useState('')

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const sentences = text.split(/[.!?]+/).filter(Boolean).length
    const paragraphs = text.split(/\n\n+/).filter(Boolean).length
    const lines = text.split('\n').length
    return { words, characters, charactersNoSpaces, sentences, paragraphs, lines }
  }, [text])

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">📝</div>
              <div>
                <span className="text-xl font-bold text-slate-900">Word Counter</span>
                <p className="text-sm text-slate-500">Count words & characters</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-3xl shadow-xl mb-6">📝</div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Word Counter</h1>
            <p className="text-lg md:text-xl text-slate-600">Count words, characters, sentences, and paragraphs in your text instantly.</p>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 md:p-8">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="w-full h-64 textarea mb-6"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Words', value: stats.words },
              { label: 'Characters', value: stats.characters },
              { label: 'No Spaces', value: stats.charactersNoSpaces },
              { label: 'Sentences', value: stats.sentences },
              { label: 'Paragraphs', value: stats.paragraphs },
              { label: 'Lines', value: stats.lines },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200">
                <div className="text-2xl font-bold text-sky-600">{stat.value.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2024 SmartOK Tools. Free online tools.</p>
        </div>
      </footer>
    </div>
  )
}
