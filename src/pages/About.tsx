import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const About = () => {
  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/huseyinfest',
      username: '@huseyinfest',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/huseyinfest',
      username: 'Hüseyin Eren',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/huseyinfest',
      username: '@huseyinfest',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Profile Section */}
      <section className="text-center">
        <img
          src="/src/components/pc.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
        />
        <h1 className="text-4xl font-bold mb-4">Hüseyin Eren</h1>
        <p className="text-xl text-gray-600">
          AI Geliştirici & Gönüllü Eğitmen
        </p>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Hakkımda</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Robotik teknolojiler ve yapay zeka geliştirme alanında yenilikçi çözümler üreten bir teknoloji uzmanıyım. Yapay zeka modelleri tasarlayarak karmaşık problemlere pratik ve etkili çözümler sunmaya odaklanıyorum. Teknolojiyi insan hayatını kolaylaştıran bir araç haline getirme vizyonuyla, güncel gelişmeleri takip ederek hem akademik hem de endüstriyel projelere katkıda bulunuyorum. Aynı zamanda, bilgi ve deneyimlerimi paylaşarak bu alanda topluluğun büyümesine ve gelişmesine destek oluyorum.
          </p>
          <p className="text-gray-600 mb-4">
            Gönüllülük çalışmalarım, toplumda fark yaratma ve gençlere ilham olma hedefime hizmet ediyor. UNICEF ve Habitat Derneği ile yürüttüğümüz "Geleceği Eşitle" projesinde Yapay Zeka eğitimleri vererek gençleri geleceğin teknolojilerine hazırlıyorum. Ayrıca, Gençlik ve Spor Bakanlığı’na bağlı bir Gönüllü Gençlik Lideri olarak, eğitim projeleri ve sosyal etkinliklerde aktif rol alıyorum. Bu çalışmalar, hem bireysel gelişimimi destekliyor hem de topluma anlamlı katkılar sunmama olanak tanıyor.
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Benimle İletişime Geç</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <link.icon className="w-6 h-6 text-gray-600 mr-3" />
              <div>
                <h3 className="font-medium">{link.name}</h3>
                <p className="text-sm text-gray-600">{link.username}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Kariyerim</h2>
        <div className="space-y-8">
          <div className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
            <h3 className="font-semibold">Yapay Zeka Eğitmeni</h3>
            <p className="text-sm text-gray-600">2024 - Devam Ediyor</p>
            <p className="mt-2 text-gray-600">
              UNICEF ve Habitat Derneği ortaklığında yürütülen "Geleceği Eşitle" projesi
              kapsamında Yapay Zeka eğitimleri vermekteyim.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
            <h3 className="font-semibold">Deneyap Öğrencisi</h3>
            <p className="text-sm text-gray-600">2022 - Devam Ediyor</p>
            <p className="mt-2 text-gray-600">
              11 farklı teknolojik başlıkta 24 ay boyunca eğitim aldım. Ve şu an aktif olarak 12 ay
              sürecek olan takımlaşma dönemi içerisindeyim.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;