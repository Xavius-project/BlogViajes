import React, { useState } from 'react';

// Single-file React component for a travel blog. Tailwind CSS assumed in the project.
// Default export a single page that can be used as src/App.jsx in a Create React App / Vite project.

export default function TravelBlog() {
  const [posts] = useState([
    {
      id: 1,
      title: 'Mantente vivo en  San Cristóbal de las Casas',
      excerpt: 'Calles empedradas, mercados artesanales y miradores con vistas inolvidables.',
      date: '2025-09-01',
      location: 'Chiapas, México',
      cover: './Images/sanclistobal.png',
      content: `Esto es solo el comeinzoCaminar por las calles empedradas de San Cristóbal es viajar en el tiempo. Entre casas coloniales y aromas de café local, cada esquina cuenta una historia. Tips: llevar ropa de abrigo por la noche y visitar el mercado municipal para artesanías.`
    },
    {
      id: 2,
      title: 'Paseatepor las calles de Guanajuato colonial',
      excerpt: 'Gastronomía, colores y tradición en cada plaza.',
      date: '2025-10-10',
     location: 'Guanajuato, México',
      cover: './Images/perico.png',
      content: `Probar mole, caminar por el centro histórico y visitar Monte Albán. Recomendación: reservar tours locales y probar la comida en mercados tradicionales.`
    },
    {
      id: 3,
      title: 'Sin camisa y robando suspiros en San Miguel de Allende',
      excerpt: 'Gastronomía, colores y tradición en cada plaza.',
      date: '2025-10-10',
     location: 'San Miguel de allende, México',
      cover: './Images/viajero.png',
      content: `Probar mole, caminar por el centro histórico y visitar Monte Albán. Recomendación: reservar tours locales y probar la comida en mercados tradicionales.`
    }
  ]);

  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.location.toLowerCase().includes(query.toLowerCase()) ||
    p.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold">Pasaporte de Aventuras</h1>
            <p className="text-sm opacity-90">Historias, guías y fotos para viajeros curiosos</p>
          </div>
          <nav className="space-x-4 hidden md:block">
            <a href="#posts" className="hover:underline">Posts</a>
            <a href="#about" className="hover:underline">Sobre mí</a>
            <a href="#contact" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Viaja ligero, vive mucho</h2>
            <p className="mb-6 text-lg">Guías reales, fotos auténticas y consejos prácticos para que tus viajes sean memorables — sin gastar de más.</p>
            <div className="flex gap-3">
              <a href="#posts" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg shadow">Leer posts</a>
              <a href="#contact" className="inline-block px-5 py-3 border border-indigo-600 rounded-lg">Colabora</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60" alt="playa" className="w-full h-64 object-cover" />
          </div>
        </section>

        {/* Search + Posts */}
        <section id="posts">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Entradas recientes</h3>
            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por lugar, título o palabra clave"
                className="px-3 py-2 rounded-lg border focus:outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
                <div className="rounded-lg overflow-hidden mb-3">
                  <img src={post.cover} alt={post.title} className="w-full h-40 object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold">{post.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{post.location} · {post.date}</p>
                  <p className="mb-4 text-gray-700">{post.excerpt}</p>
                  <div className="mt-auto flex gap-3">
                    <button onClick={() => setSelected(post)} className="px-4 py-2 bg-cyan-500 text-white rounded-lg">Leer</button>
                    <a href={`#`} className="px-4 py-2 border rounded-lg">Compartir</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-6 text-center text-gray-500">No se encontraron entradas para "{query}"</p>
          )}
        </section>

        {/* About */}
        <section id="about" className="mt-16 bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-3">Sobre mí</h3>
          <div className="md:flex gap-6 items-center">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60" alt="autor" className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0" />
            <div>
              <p>Soy Sandra Lizeth, diganme Liz, y soy una viajera apasionada por las culturas locales, la comida y las historias que hacen únicos a los lugares. Aquí comparto mis experiencias, tips y rutas para que viajes con más confianza.</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                <li>✦ Presupuesto amigable</li>
                <li>✦ Fotografías propias</li>
                <li>✦ Consejos prácticos y verificables</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-8">
          <h3 className="text-2xl font-semibold mb-3">Contacto</h3>
          <p className="mb-4 text-sm text-gray-600">¿Quieres colaborar o tienes una pregunta? Escríbeme.</p>
          <form className="grid md:grid-cols-2 gap-3">
            <input placeholder="Tu nombre" className="px-3 py-2 border rounded" />
            <input placeholder="Tu email" className="px-3 py-2 border rounded" />
            <textarea placeholder="Mensaje" className="md:col-span-2 px-3 py-2 border rounded h-28" />
            <div className="md:col-span-2">
              <button type="button" className="px-5 py-2 bg-indigo-600 text-white rounded">Enviar</button>
            </div>
          </form>
        </section>

      </main>

      <footer className="bg-gray-900 text-gray-200 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Pasaporte de Aventuras — Hecho con ❤️</p>
          <div className="text-sm">Sígueme en redes: Instagram · Twitter · YouTube</div>
        </div>
      </footer>

      {/* Modal simple para leer post */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6">
          <div className="bg-white max-w-3xl w-full rounded-xl shadow-lg overflow-auto max-h-[90vh]">
            <div className="p-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{selected.title}</h3>
                  <p className="text-sm text-gray-500">{selected.location} · {selected.date}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-gray-600">Cerrar</button>
              </div>

              <img src={selected.cover} alt={selected.title} className="w-full h-56 object-cover rounded-lg mt-4" />
              <p className="mt-4 text-gray-700 whitespace-pre-line">{selected.content}</p>

              <div className="mt-6 flex gap-3">
                <a href="#" className="px-4 py-2 border rounded">Guardar</a>
                <a href="#" className="px-4 py-2 bg-cyan-500 text-white rounded">Compartir</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
