import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ZoomableImage from '@/components/ZoomableImage';

const Books = () => {
  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      name: "Metodologi Penelitian Kuantitatif",
      price: "Rp 85.000",
      description: "Panduan lengkap penelitian kuantitatif dengan contoh kasus nyata dan analisis statistik mendalam.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=metodologi%20penelitian%20kuantitatif",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Metodologi Penelitian Kualitatif",
      price: "Rp 95.000",
      description: "Buku komprehensif tentang pendekatan kualitatif dalam penelitian sosial dan humaniora.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=metodologi%20penelitian%20kualitatif",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Statistik untuk Penelitian",
      price: "Rp 120.000",
      description: "Panduan praktis penggunaan statistik dalam penelitian dengan software SPSS dan R.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=statistik%20untuk%20penelitian",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      name: "Teknik Penulisan Skripsi",
      price: "Rp 75.000",
      description: "Petunjuk lengkap menulis skripsi dari proposal hingga sidang dengan tips dari dosen berpengalaman.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=teknik%20penulisan%20skripsi",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=600&fit=crop"
    },
    {
      id: 5,
      name: "Riset Pasar dan Konsumen",
      price: "Rp 110.000",
      description: "Metodologi penelitian khusus untuk bidang pemasaran dan behavior konsumen.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=riset%20pasar%20konsumen",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop"
    },
    {
      id: 6,
      name: "Penelitian Tindakan Kelas",
      price: "Rp 90.000",
      description: "Panduan praktis PTK untuk guru dan mahasiswa pendidikan dengan contoh implementasi.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=penelitian%20tindakan%20kelas",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=600&fit=crop"
    },
    {
      id: 7,
      name: "Analisis Data Kualitatif",
      price: "Rp 105.000",
      description: "Teknik analisis data kualitatif menggunakan NVivo dan Atlas.ti dengan studi kasus lengkap.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=analisis%20data%20kualitatif",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=600&fit=crop"
    },
    {
      id: 8,
      name: "Desain Penelitian Eksperimen",
      price: "Rp 135.000",
      description: "Metode penelitian eksperimen untuk berbagai bidang dengan desain yang valid dan reliabel.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=desain%20penelitian%20eksperimen",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=600&fit=crop"
    },
    {
      id: 9,
      name: "Etika Penelitian",
      price: "Rp 80.000",
      description: "Panduan etika dalam penelitian ilmiah, informed consent, dan perlindungan subjek penelitian.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=etika%20penelitian",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=600&fit=crop"
    },
    {
      id: 10,
      name: "Proposal Penelitian Tesis",
      price: "Rp 115.000",
      description: "Panduan khusus menulis proposal penelitian untuk tingkat magister dengan template lengkap.",
      tokopediaLink: "https://tokopedia.com/search?st=product&q=proposal%20penelitian%20tesis",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop"
    }
  ];

  const handleBuyClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={() => navigate('/')}
              className="social-icon w-10 h-10 rounded-full flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h1 className="font-montserrat font-bold text-text-purple text-xl">
              Rekomendasi Buku Metodologi Penelitian
            </h1>
          </div>
          <p className="font-poppins text-foreground text-center">
            Koleksi buku pilihan yang sudah terbukti membantu ribuan mahasiswa menyelesaikan penelitian mereka
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <div key={book.id} className="glass-card rounded-xl p-6">
              <div className="flex gap-4 mb-4">
                <ZoomableImage
                  src={book.image}
                  alt={book.name}
                  className="w-20 h-28 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-text-purple mb-2 text-lg">
                    {book.name}
                  </h3>
                  <div className="mb-2">
                    <span className="font-poppins font-bold text-accent-purple text-xl">
                      {book.price}
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-poppins text-sm text-foreground mb-4 leading-relaxed">
                {book.description}
              </p>
              <button 
                className="w-full banner-gradient text-white font-poppins font-medium py-3 rounded-lg transition-transform hover:scale-105"
                onClick={() => handleBuyClick(book.tokopediaLink)}
              >
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="glass-card rounded-xl p-4 text-center mt-6">
          <div className="gradient-text font-montserrat font-semibold mb-1">
            Yunita.gen y to z
          </div>
          <p className="text-xs text-foreground">©2025 - Dosen Inspiratif</p>
        </div>
      </div>
    </div>
  );
};

export default Books;