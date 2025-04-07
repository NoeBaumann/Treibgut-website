"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function VeranstaltungenPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/images/Veranstaltungen.jpg",
    "/images/treibgut-wine.jpg", // Assuming this is the wine glass image
    "/images/wedding-beach.jpg", // Assuming this is the wedding couple image
    "/images/wedding-table.jpg"  // Assuming this is the table decoration image
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-treibgut-lightblue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-treibgut-blue mb-6 text-center">
              Feiern Sie unvergessliche Momente im Treib-Gut!
            </h2>
            
            <p className="text-treibgut-text mb-8">
              Ob Hochzeiten, Geburtstagsfeiern, Trösterkaffee oder Firmenessen – wir bieten den perfekten Rahmen für Ihre besonderen Anlässe.
            </p>
            
            {/* Square Slideshow inserted within the text */}
            <div className="mb-8 mx-auto" style={{ maxWidth: "500px" }}>
              <div className="relative w-full pb-[100%] rounded-lg overflow-hidden">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Veranstaltung im Treibgut Restaurant ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-treibgut-blue mb-4">
              Ihre Veranstaltung, unser Service:
            </h3>
            
            <p className="text-treibgut-text mb-3">
              Genießen Sie die atemberaubende Aussicht und die entspannte Atmosphäre, während wir uns um alle Details kümmern.
            </p>
            
            <p className="text-treibgut-text mb-3">
              Unser engagiertes Team steht Ihnen zur Seite, um Ihre Veranstaltung nach Ihren Wünschen zu gestalten.
            </p>
            
            <p className="text-treibgut-text mb-8">
              Von der individuellen Menüauswahl bis hin zur Dekoration – wir sorgen dafür, dass Ihr Event unvergesslich wird.
            </p>
            
            <h3 className="text-2xl font-semibold text-treibgut-blue mb-4">
              Besondere Anlässe:
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex">
                <span className="text-treibgut-blue font-bold mr-2">•</span>
                <span><span className="font-semibold">Hochzeiten:</span> Feiern Sie den schönsten Tag Ihres Lebens mit Blick auf das glitzernde Wasser der Bucht.</span>
              </li>
              <li className="flex">
                <span className="text-treibgut-blue font-bold mr-2">•</span>
                <span><span className="font-semibold">Geburtstage:</span> Lassen Sie Ihre Feier zu einem besonderen Erlebnis werden, umgeben von Freunden und Familie.</span>
              </li>
              <li className="flex">
                <span className="text-treibgut-blue font-bold mr-2">•</span>
                <span><span className="font-semibold">Trösterkaffee:</span> Gedenken Sie gemeinsam in einer einladenden und warmen Atmosphäre.</span>
              </li>
              <li className="flex">
                <span className="text-treibgut-blue font-bold mr-2">•</span>
                <span><span className="font-semibold">Firmenessen:</span> Beeindrucken Sie Ihre Geschäftspartner und Mitarbeiter mit einem stilvollen Event in einzigartiger Lage.</span>
              </li>
            </ul>
            
            {/* Video Section */}
            <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
              <iframe 
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/KarLHh26fNI"
                title="Impressionen Treibgut Restaurant"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            
            <h3 className="text-2xl font-semibold text-treibgut-blue mb-4 text-center">
              Kontaktieren Sie uns!
            </h3>
            
            <p className="text-treibgut-text mb-3 text-center">
              Lassen Sie uns gemeinsam Ihre Veranstaltung planen.
            </p>
            
            <p className="text-treibgut-text mb-3 text-center">
              Für weitere Informationen und um einen Termin für eine persönliche Beratung zu vereinbaren.
            </p>
            
            <p className="text-treibgut-text mb-8 text-center">
              Wir freuen uns darauf, Ihre Feier zu einem unvergesslichen Erlebnis zu machen!
            </p>
            
            <div className="text-center">
              <Link
                href="/kontakt"
                className="inline-block bg-treibgut-blue hover:bg-treibgut-accent text-white py-3 px-8 rounded-full font-medium transition-colors"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}