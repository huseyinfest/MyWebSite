import React, { useState } from 'react';
import { Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">İletişime Geç</h1>
        <p className="text-xl text-gray-600">
          Soru sormak, beraber çalışmak için yazabilirsiniz.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white p-6 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Mesaj Gönder
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Email</h2>
            </div>
            <p className="text-gray-600">eren723134@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Cevap Süresi</h2>
            </div>
            <p className="text-gray-600">
              Genellikle 48 saat içerisinde geri dönüş sağlarım. Yoğunluk durmuna göre bu süre artıp azalabilir.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Neden İletişime Geçmelisin</h2>
            <p className="text-gray-600">
              İlgili olduğun alanla ilgili bilgi alıp sohbet etmek, eğitim talep etmek, beraber çalışmak ve daha bir çok konu için yazabilirsin.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;