import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Calculator, Heart } from 'lucide-react';

const Home = () => {
  const expertise = [
    {
      icon: Calculator,
      title: 'AI Geliştirici',
      description: 'Problemlere AI destekli çözümler geliştirmekteyim.',
    },
    {
      icon: Brain,
      title: 'Robotik',
      description: 'AI tabanlı robotik projeleri geliştirmekteyim.',
    },
    {
      icon: Heart,
      title: 'Gönüllü Eğitmen',
      description: 'Birçok farklı projede gönüllü olarak yer almaktayım.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <div className="max-w-3xl mx-auto px-4">
          <img
            src="/src/components/pc.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Merhaba, ben Hüseyin Eren!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI ve Robotik alanında uzmanlaşmış bir geliştiriciyim.
            #MilliTeknolojiHamlesi ve gönüllülük faaliyetleri ile insanlığa fayda sağlamayı hedefliyorum. 
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              İletişim
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Daha fazlası
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Yeteneklerim</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <item.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Son gelişmeler</h2>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Hepsini gör →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sample blog posts - these would be dynamic in a real application */}
          <article className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Hangi işletim sistemini kullanıyorsunuz?
            </h3>
            <p className="text-gray-600 mb-4">
              AUR ve Hyprland ile ön plana çıkması dışında bir çok teknik sebep dolayısı ile Arch Linux tercih etmekteyim.
            </p>
            <Link
              to="/blog/1"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              OKU →
            </Link>
          </article>
          <article className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Hangi dilleri kullanıyorsunuz?
            </h3>
            <p className="text-gray-600 mb-4">
              Farklı problemlere çözüm üretebilmek adına bir çok programlama dilini kullanmaktayım. AI ile ilgili çalışmalarımda Python dilini tercih etmekteyim.
            </p>
            <Link
              to="/blog/2"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              OKU →
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;