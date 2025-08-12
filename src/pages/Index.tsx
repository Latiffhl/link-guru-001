import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/Modal';
import TestimonialCard from '@/components/TestimonialCard';
import ZoomableImage from '@/components/ZoomableImage';
import profileYunita from '@/assets/profile-yunita.jpg';
import bookCovers from '@/assets/book-covers.jpg';

const Index = () => {
  const navigate = useNavigate();
  const [isPrivateClassModalOpen, setIsPrivateClassModalOpen] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isBooksModalOpen, setIsBooksModalOpen] = useState(false);

  const testimonials = [
    {
      name: "Sarah Putri",
      major: "Psikologi",
      quote: "Bu Yunita benar-benar membantu saya menyelesaikan skripsi tepat waktu!",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b123?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ahmad Rizki",
      major: "Manajemen", 
      quote: "Metode bimbingannya sangat jelas dan mudah dipahami.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dinda Sari",
      major: "Komunikasi",
      quote: "Alhamdulillah lulus cum laude berkat bimbingan beliau!",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Budi Santoso",
      major: "Ekonomi",
      quote: "Semangat dan motivasi dari Bu Yunita luar biasa inspiratif.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleBooksPageRedirect = () => {
    navigate('/books');
  };

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Header Card */}
        <div className="glass-card rounded-2xl p-6 text-center">
          <div className="relative inline-block mb-4">
            <ZoomableImage 
              src={profileYunita}
              alt="Yunita Profile"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              style={{
                border: '3px solid transparent',
                background: 'linear-gradient(135deg, hsl(var(--primary-pink)), hsl(var(--secondary-lavender))) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'subtract'
              }}
            />
          </div>
          <h1 className="font-montserrat font-semibold text-text-purple text-lg">
            Dosen | Yunita.gen y to z
          </h1>
        </div>

        {/* TikTok Profile */}
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <i className="fab fa-tiktok text-xl text-text-pink"></i>
            <span className="font-poppins text-text-pink font-medium">@ibudosenyunita</span>
          </div>
        </div>

        {/* Tagline Banner */}
        <div className="banner-gradient rounded-xl p-4 text-center">
          <h2 className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
            MAHASISWA SEMESTER AKHIR WAJIB SCROLL!!!
          </h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          <div className="social-icon w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
            <i className="fab fa-instagram text-white text-xl"></i>
          </div>
          <div className="social-icon w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
            <i className="fab fa-tiktok text-white text-xl"></i>
          </div>
          <div 
            className="social-icon w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => handleWhatsAppContact("Halo Bu Yunita, saya ingin berkonsultasi!")}
          >
            <i className="fab fa-whatsapp text-white text-xl"></i>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-montserrat font-semibold text-accent-purple text-center mb-4">
            Dengar Curhatan Mereka...
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Book Recommendation Section */}
        <div 
          className="glass-card rounded-xl p-6 cursor-pointer"
          onClick={() => setIsBooksModalOpen(true)}
        >
          <h3 className="font-montserrat font-semibold text-text-purple mb-3 text-center">
            Rekomendasi Buku Metodologi Penelitian
          </h3>
          <ZoomableImage 
            src={bookCovers}
            alt="Book Covers"
            className="w-full h-24 object-cover rounded-lg mb-3"
          />
          <button className="w-full banner-gradient text-white font-poppins font-medium py-2 rounded-lg transition-transform hover:scale-105">
            Dapatkan Sekarang
          </button>
        </div>

        {/* Private Class Section */}
        <div 
          className="glass-card rounded-xl p-6 cursor-pointer"
          onClick={() => setIsPrivateClassModalOpen(true)}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">🎓</div>
            <h3 className="font-montserrat font-semibold text-text-purple mb-2">
              Private Class Bimbingan
            </h3>
            <p className="font-poppins text-sm text-foreground">
              Bimbingan personal untuk skripsi dan thesis Anda
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div 
          className="glass-card rounded-xl p-6 cursor-pointer"
          onClick={() => setIsQuestionModalOpen(true)}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">❓</div>
            <h3 className="font-montserrat font-semibold text-text-purple mb-2">
              Pertanyaan Sidang Skripsi
            </h3>
            <p className="font-poppins text-sm text-foreground">
              Persiapan lengkap menghadapi sidang skripsi
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="gradient-text font-montserrat font-semibold mb-1">
            Yunita.gen y to z
          </div>
          <p className="text-xs text-foreground">©2025 - Dosen Inspiratif</p>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={isBooksModalOpen} onClose={() => setIsBooksModalOpen(false)}>
        <div className="text-center">
          <h3 className="font-montserrat font-bold text-text-purple mb-4">
            Rekomendasi Buku Terbaik
          </h3>
          <ZoomableImage 
            src={bookCovers}
            alt="Book Covers"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <p className="font-poppins text-sm text-foreground mb-4">
            Koleksi buku metodologi penelitian pilihan yang sudah terbukti membantu ribuan mahasiswa menyelesaikan skripsi mereka.
          </p>
          <button 
            className="w-full banner-gradient text-white font-poppins font-medium py-3 rounded-lg"
            onClick={handleBooksPageRedirect}
          >
            Lihat Selengkapnya
          </button>
        </div>
      </Modal>

      <Modal isOpen={isPrivateClassModalOpen} onClose={() => setIsPrivateClassModalOpen(false)}>
        <div className="text-center">
          <h3 className="font-montserrat font-bold text-text-purple mb-4">
            Private Class Bundle
          </h3>
          <div className="bg-primary-pink/20 rounded-lg p-4 mb-4">
            <div className="space-y-2 text-sm font-poppins">
              <div className="flex justify-between">
                <span>Konsultasi 1-on-1:</span>
                <span className="font-semibold">Rp 150K/sesi</span>
              </div>
              <div className="flex justify-between">
                <span>Review & Edit:</span>
                <span className="font-semibold">Rp 300K</span>
              </div>
              <div className="flex justify-between">
                <span>Paket Lengkap:</span>
                <span className="font-semibold">Rp 500K</span>
              </div>
            </div>
          </div>
          <button 
            className="w-full banner-gradient text-white font-poppins font-medium py-3 rounded-lg"
            onClick={() => handleWhatsAppContact("Halo Bu Yunita, saya tertarik dengan Private Class Bundle!")}
          >
            Chat via WhatsApp
          </button>
        </div>
      </Modal>

      <Modal isOpen={isQuestionModalOpen} onClose={() => setIsQuestionModalOpen(false)}>
        <div className="text-center">
          <h3 className="font-montserrat font-bold text-text-purple mb-4">
            Persiapan Sidang Skripsi
          </h3>
          <div className="bg-secondary-lavender/20 rounded-lg p-4 mb-4">
            <div className="space-y-2 text-sm font-poppins">
              <div className="flex justify-between">
                <span>Bank Soal Sidang:</span>
                <span className="font-semibold">Rp 75K</span>
              </div>
              <div className="flex justify-between">
                <span>Mock Interview:</span>
                <span className="font-semibold">Rp 100K</span>
              </div>
              <div className="flex justify-between">
                <span>Paket Komplit:</span>
                <span className="font-semibold">Rp 150K</span>
              </div>
            </div>
          </div>
          <button 
            className="w-full banner-gradient text-white font-poppins font-medium py-3 rounded-lg"
            onClick={() => handleWhatsAppContact("Halo Bu Yunita, saya mau konsultasi persiapan sidang skripsi!")}
          >
            Konsultasi Sekarang
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
