import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section with Thatched House - Full Screen minus navbar height */}
      <section className="relative h-[calc(100vh-80px)] w-full flex flex-col">
        <Image
          src="/images/treibgut-house.jpg"
          alt="Treibgut Restaurant im Kiekut - Reetdachhaus mit blauem Fachwerk"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
        
        {/* Content positioned at the bottom */}
        <div className="relative z-20 mt-auto mb-16 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Willkommen im Treibgut im Kiekut</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Erleben Sie nordische Küche in maritimer Atmosphäre direkt am Meer
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/speisekarte"
                className="bg-treibgut-blue hover:bg-treibgut-accent text-white py-3 px-8 rounded-full font-medium transition-colors"
              >
                Speisekarte
              </Link>
              <Link
                href="/kontakt"
                className="bg-transparent hover:bg-white/10 border border-white text-white py-3 px-8 rounded-full font-medium transition-colors"
              >
                Reservieren
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator at the bottom center */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-1">Mehr entdecken</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-treibgut-lightblue">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-treibgut-text mb-6">
          Unser Restaurant mit 45 Plätzen besticht durch eine helle Leichtigkeit. 
          Der maritim gestaltete Gastraum schafft eine frisch-freundliche Atmosphäre und verbindet das Traditionelle wunderbar mit der Moderne. 
          Die vielen, gemütlichen Sitzecken und der schöne Blick auf die Eckernförder Bucht sind perfekt um sich einfach mal <span className="text-treibgut-blue italic font-light">"treiben zu lassen"</span>.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-treibgut-text">Unser Restaurant</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md text-center overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/Gerichte/frische_lebensmittel.jpg" 
                  alt="Frische Zutaten" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-treibgut-blue">Frische Zutaten</h3>
                <p className="text-treibgut-text">Wir verwenden ausschließlich frische, regionale Zutaten für unsere Gerichte.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md text-center overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/Meerblick.jpg" 
                  alt="Meerblick" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-treibgut-blue">Meerblick</h3>
                <p className="text-treibgut-text">Genießen Sie Ihr Essen mit atemberaubendem Blick auf die Nordsee.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md text-center overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/Gerichte/Oster_essen.jpg" 
                  alt="Faire Preise" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-treibgut-blue">Faire Preise</h3>
                <p className="text-treibgut-text">Qualität muss nicht teuer sein - wir bieten erstklassige Küche zu fairen Preisen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white treibgut-text">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reservieren Sie Ihren Tisch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sichern Sie sich einen Platz und genießen Sie nordische Küche in besonderem Ambiente
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-treibgut-blue hover:bg-treibgut-lightblue py-3 px-8 rounded-full font-medium transition-colors"
          >
            Jetzt reservieren
          </Link>
    </div>
      </section>
    </>
  );
}
