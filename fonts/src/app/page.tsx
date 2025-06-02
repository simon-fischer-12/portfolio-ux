export default function Home() {
  return (
    <main className="mx-[200px] mt-4">
      <h2 className="text-h2 font-kontrapunkt font-normal text-neutral-900 pb-4">
        SZYMON FISCHER
      </h2>
      <h3 className="text-h3 font-kontrapunkt font-bold text-neutral-300">
        Holistyczne projektowanie doświadczeń, funkcjonalności i estetyki
      </h3>
      
      {/* Gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-[#7AFF9F] to-white -mt-4 mb-14"></div>

      <div className="flex gap-6 mt-8 min-h-[556px]">
        {/* RideMetric thumbnail */}
        <div 
          className="thumbnail-home min-w-[200px]"
          style={{
            backgroundImage: 'url("/assets/thumbnails/thumbnail-home-ridemetric.jpg")'
          }}
        >
          <h2 className="thumbnail-title">RideMetric</h2>
          <p className="thumbnail-subtitle">Aplikacja do pomiaru mocy dla kolarzy</p>
        </div>

        {/* Heca thumbnail */}
        <div 
          className="thumbnail-home mt-8 min-w-[200px]"
          style={{
            backgroundImage: 'url("/assets/thumbnails/Sportsense_hero_C001_crop_003.webp")'
          }}
        >
          <h2 className="thumbnail-title">Heca</h2>
          <p className="thumbnail-subtitle">Sklep ecommerce dla nowej marki kaloszy</p>
        </div>

        {/* UNI thumbnail */}
        <div 
          className="thumbnail-home min-w-[200px]"
          style={{
            backgroundImage: 'url("/assets/thumbnails/Sportsense_hero_C001_crop_004.webp")'
          }}
        >
          <h2 className="thumbnail-title">UNI</h2>
          <p className="thumbnail-subtitle">Koncept aplikacji dla autonomicznych taksówek</p>
        </div>
      </div>
    </main>
  )
} 