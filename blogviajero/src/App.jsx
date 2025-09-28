import React, { useState } from 'react';

export default function TravelBlog() {
  const [posts] = useState([
    {
      id: 1,
      title: 'Descubriendo San Cristóbal de las Casas',
      excerpt: 'Calles empedradas, mercados artesanales y miradores con vistas inolvidables.',
      date: '2025-09-01',
      location: 'Chiapas, México',
      cover: 'https://images.unsplash.com/photo-1549887534-4f3d1c7e6a4c?auto=format&fit=crop&w=1200&q=60',
      content: `Caminar por las calles empedradas de San Cristóbal es viajar en el tiempo. Entre casas coloniales y aromas de café local, cada esquina cuenta una historia.`
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Pasaporte de Aventuras</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-6">Entradas recientes</h2>
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow p-4 mb-6">
            <img src={post.cover} alt={post.title} className="rounded-lg mb-3" />
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.location} · {post.date}</p>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </main>

      <footer className="bg-gray-900 text-gray-200 mt-12 p-6 text-center">
        <p>© {new Date().getFullYear()} Pasaporte de Aventuras</p>
      </footer>
    </div>
  );
}
