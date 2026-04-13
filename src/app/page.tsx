"use client";

import JuiceCard, { JuiceCardProps } from "@/components/JuiceCard";

const juicesData: JuiceCardProps[] = [
  {
    title: "Es Timun Serut",
    description: "100% timun murni segar tanpa pemanis buatan. Kesegaran premium pelepas dahaga dengan harga sangat terjangkau.",
    benefits: ["100% timun murni higienis", "Meredakan panas dalam kuat", "Kesegaran premium hanya Rp 5K"],
    price: 5000,
    image: "/cup/es-timunserut.png"
  },
  {
    title: "Jus Alpukat",
    description: "Alpukat mentega pilihan yang dijamin higienis. Kaya lemak baik & penunda lapar. Rasa mewah kualitas cafe.",
    benefits: ["100% alpukat mentega kental", "Lemak sehat menunda lapar", "Tekstur creamy nikmat & hemat"],
    price: 5000,
    image: "/cup/jus-alpukat.png"
  },
  {
    title: "Jus Apel",
    description: "Ekstrak apel segar murni kualitas terbaik. Ampuh segarkan hari & kaya antioksidan. Premium & bernutrisi tinggi.",
    benefits: ["Sari apel segar 100% alami", "Kaya antioksidan merawat tubuh", "Manis alami sekelas cafe kekinian"],
    price: 5000,
    image: "/cup/jus-apel.png"
  },
  {
    title: "Jus Belimbing",
    description: "Pilihan sari belimbing asli & 100% buah murni. Membantu stabilitas tekanan darah. Murah namun sangat menyegarkan.",
    benefits: ["100% belimbing murni & higienis", "Baik menurunkan tensi darah", "Kesegaran asam manis premium"],
    price: 5000,
    image: "/cup/jus-belimbing.png"
  },
  {
    title: "Jus Jambu Biji",
    description: "Jambu biji merah kental dalam pinggan cup bersih. Sangat direkomendasikan untuk stamina. Kualitas tanpa kompromi.",
    benefits: ["100% jambu biji lebat alami", "Sangat efektif jaga stamina", "Tekstur kental premium 5000-an!"],
    price: 5000,
    image: "/cup/jus-jambubiji.png"
  },
  {
    title: "Jus Jeruk",
    description: "Perasan jeruk segar asli tanpa dicampur essence buatan. Sumber Vitamin C tinggi pendorong imun. Porsi & kualitas juara.",
    benefits: ["Perasan basah jeruk asli", "Sangat tinggi Vitamin C", "Segar ceria tanpa dompet nipis"],
    price: 5000,
    image: "/cup/jus-jeruk.png"
  },
  {
    title: "Jus Kiwi",
    description: "Kelazatan kiwi hijau import yang higienis sempurna. Kandungan tinggi enzim bagus bagi pencernaan sehat. Eksotisme harga lokal.",
    benefits: ["100% buah kiwi utuh segar", "Khasiat super redakan sembelit", "Elegansi hijau kelas minuman Hits"],
    price: 5000,
    image: "/cup/jus-kiwi.png"
  },
  {
    title: "Jus Mangga",
    description: "Mangga harum manis tebal, dikupas dan diolah super bersih. Cocok untuk energi seketika di hari super terik.",
    benefits: ["Daging mangga super lebat", "Tinggi Vitamin C kaya energi", "Minuman elit tapi gila, cuma 5K"],
    price: 5000,
    image: "/cup/jus-mangga.png"
  },
  {
    title: "Jus Melon",
    description: "Melon hijau pilihan yang 100% utuh diekstrak dingin. Rehidrasi sejuk penolong panas cuaca ekstrem. Super segar tanpa mahal.",
    benefits: ["100% melon kental menyegarkan", "Kembalikan cairan cegah pusing", "Harumnya juara rasa cafe elit"],
    price: 5000,
    image: "/cup/jus-melon.png"
  },
  {
    title: "Jus Buah Naga",
    description: "Buah naga merah merona cantik tanpa pewarna. Gudang antioksidan penjinak racun. Menarik & sehat sempurna di lidah.",
    benefits: ["Naga merah cup higienis total", "Cegah kolesterol secara alami", "Nikmat warna alami ala selebgram"],
    price: 5000,
    image: "/cup/jus-naga.png"
  },
  {
    title: "Jus Nanas",
    description: "Nanas lokal cerah diolah maksimal tanpa getah. Rasa meledak luar biasa segarkan kepala penat seketika.",
    benefits: ["Potongan nanas anti radang", "Rasa asam segar pecah di mulut", "Antioksidan bromelain tingkat dewa"],
    price: 5000,
    image: "/cup/jus-nanas.png"
  },
  {
    title: "Jus Pepaya",
    description: "Pepaya varietas california ter manis dan higienis. Ramuan super mujarab bikin perut lega nyaman sepanjang waktu.",
    benefits: ["California murni kental asli", "Diet pelancar tuntas terbaik!", "Kelezatan kental sehat & murah"],
    price: 5000,
    image: "/cup/jus-pepaya.png"
  },
  {
    title: "Jus Semangka",
    description: "Semangka potong premium nol biji & diblender utuh. Pahlawan dahaga penikmat cuaca panas paling instan terpercaya.",
    benefits: ["Semangka merah nol pemanis sintetik", "Pertahanan lawan kering tubuh", "Air buah paling melimpah hemat!"],
    price: 5000,
    image: "/cup/jus-semangka.png"
  },
  {
    title: "Jus Sirsak",
    description: "Sirsak kupas putih higienis 100% natural asli. Buah mujarab kesehatan daya tahan dan kenikmatan creamy abadi.",
    benefits: ["Campuran sirsak alami kental", "Obat alami lezat kaya manfaat", "Sensasi asam manis creamy gurih"],
    price: 5000,
    image: "/cup/jus-sirsak.png"
  },
  {
    title: "Jus Strawberry",
    description: "Strawberry utuh asam manis merona kualitas terbaik. Segarnya awet muda pendorong kebaikan raga. Sajian cantik dan memanjakan.",
    benefits: ["Buah strawberry aseli tanpa rekayasa", "C mencerahkan & cegah radikal", "Kenikmatan boba cafe harga rakyat"],
    price: 5000,
    image: "/cup/jus-strawberry.png"
  },
  {
    title: "Jus Tomat",
    description: "Tomat segar merona pembawa kesehatan mata & kulit. Dikemas amat bersih, pilihan paling segar bersahabat dompet.",
    benefits: ["Tomat merah ceria 100% ori!", "Khasiat likopen awet kemudaan", "Bukan sekadar murah tapi elegan!"],
    price: 5000,
    image: "/cup/jus-tomat.png"
  },
  {
    title: "Jus Wortel",
    description: "Ekstrak wortel murni sumber Vitamin A super. Kesegaran alami penyehat mata & kulit. Dijamin enak dan bersahabat.",
    benefits: ["100% wortel oranye fresh", "Nutrisi top untuk mata rabun", "Enak, sehat, & super murah"],
    price: 5000,
    image: "/cup/jus-wortel.png"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Navbar Minimalis */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                J
              </div>
              <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 tracking-tight">
                Juice Stop
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-green-600 font-bold hover:bg-green-50 rounded-lg transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 text-center bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm tracking-wide uppercase shadow-sm">
            100% Buah Asli & Segar
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 leading-tight">
            Kesegaran Alami di <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Setiap Tetesnya
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Lepaskan dahagamu dengan koleksi jus premium dari Juice Stop. Dibuat langsung setiap hari tanpa pemanis buatan.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-white" id="menu">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-extrabold text-slate-800">Menu Andalan Kami</h2>
            <p className="text-slate-500">Pilih dari 15 varian rasa buah terbaik yang siap menyegarkan harimu.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {juicesData.map((juice, idx) => (
              <JuiceCard key={idx} {...juice} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Minimalis WebPro Studio */}
      <footer className="fixed bottom-0 w-full z-50 py-5 bg-[#E6E4DD] text-center border-t border-[#D9D6CB]">
        <p className="text-[13px] font-bold text-[#807D75] tracking-[0.15em] uppercase">
          Website by{" "}
          <a
            href="https://webpro-studio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C19532] hover:text-[#A37B24] transition-colors"
          >
            WebPro Studio
          </a>
        </p>
      </footer>
    </main>
  );
}
