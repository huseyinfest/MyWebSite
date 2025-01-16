import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Blog = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle question submission
    console.log('Question submitted:', question);
    setQuestion('');
  };

  // Sample blog posts - in a real application, these would come from a database
  const posts = [
    {
      id: 1,
      title: 'Hangi işletim sistemini kullanıyorsunuz?',
      date: '05/01/2025',
      excerpt:
        'AUR ve Hyprland ile ön plana çıkması dışında bir çok teknik sebep dolayısı ile Arch Linux tercih etmekteyim.',
      category: 'İşletim Sistemleri',
    },
    {
      id: 2,
      title: 'Hangi dilleri kullanıyorsunuz?',
      date: '07/01/2025',
      excerpt:
        'Farklı problemlere çözüm üretebilmek adına bir çok programlama dilini kullanmaktayım. AI ile ilgili çalışmalarımda Python dilini tercih etmekteyim.',
      category: 'Yazılım',
    },
    {
      id: 3,
      title: 'Eğitim talebinde bulunabilir miyiz?',
      date: '14/01/2025',
      excerpt:
        'Minimum 20 kişi olmak koşulu ile kurum ya da takım adına eğitim talebinde bulunabilirsiniz.',
      category: 'Eğitim',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Blog Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog & Soru-Cevap</h1>
        <p className="text-xl text-gray-600">
          AI, Teknoloji, Robotik, Eğitim ve daha bir çok konu hakkında soru sorabilirsiniz.
        </p>
      </section>

      {/* Q&A Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Soru Sor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ne hakkında soru sormak istiyorsun?"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Soruyu Gönder
          </button>
        </form>
      </section>

      {/* Blog Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Sorulmuş Son Sorular</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()} ·{' '}
                    {post.category}
                  </p>
                </div>
                <button className="text-gray-600 hover:text-blue-600">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Daha Fazlası →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;