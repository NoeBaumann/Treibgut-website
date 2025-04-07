"use client";

import Link from "next/link";

export default function KontaktPage() {
  return (
    <div className="bg-treibgut-lightblue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-treibgut-blue mb-4">Kontakt</h2>
                <p className="mb-4">
                  <strong>Restaurant Treib-Gut im Kiekut</strong><br />
                  Eselsweg 38<br />
                  24376 Kappeln
                </p>
                
                <p className="mb-4">
                  <strong>Telefon:</strong> 04642 9239844<br />
                  <strong>E-Mail:</strong> info@restaurant-treibgut.de
                </p>
                
                <h3 className="text-xl font-semibold text-treibgut-blue mb-2 mt-8">Öffnungszeiten</h3>
                <p className="mb-1">
                  <strong>Mittwoch - Sonntag:</strong> 11:30 - 22:00 Uhr
                </p>
                <p className="mb-4">
                  <strong>Montag - Dienstag:</strong> Ruhetag
                </p>
                
                <div className="mt-8">
                  <Link
                    href="tel:+4946429239844"
                    className="bg-treibgut-blue hover:bg-treibgut-accent text-white py-3 px-8 rounded-full font-medium transition-colors inline-block mr-4"
                  >
                    Anrufen
                  </Link>
                  <Link
                    href="mailto:info@restaurant-treibgut.de"
                    className="bg-transparent hover:bg-treibgut-blue/10 border border-treibgut-blue text-treibgut-blue py-3 px-8 rounded-full font-medium transition-colors inline-block"
                  >
                    E-Mail
                  </Link>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-treibgut-blue mb-4">So finden Sie uns</h2>
                <p className="mb-4">
                  Unser Restaurant liegt direkt am Wasser der Schlei mit traumhaftem Blick auf die Eckernförder Bucht. 
                  Mit dem Auto erreichen Sie uns über den Eselsweg in Kappeln.
                </p>
                
                <div className="mt-4">
                  <Link
                    href="https://www.google.com/maps/dir//Restaurant+Treib-Gut,+Eselsweg+38,+24376+Kappeln/@54.4476364,9.8704802,157m/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-treibgut-blue hover:underline"
                  >
                    Routenplanung mit Google Maps →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="w-full h-[500px] rounded-lg overflow-hidden mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.2993498427612!2d9.870480155406403!3d54.44763637698304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b306eaac7100d9%3A0x38ac208ed96b798d!2sRestaurant%20Treib-Gut!5e0!3m2!1sde!2sde!4v1717263892493!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Treib-Gut Standort"
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-treibgut-blue mb-4">Reservierung</h2>
              <p className="mb-4">
                Für Reservierungen rufen Sie uns gerne an oder senden Sie uns eine E-Mail. 
                Bei größeren Gruppen empfehlen wir eine frühzeitige Reservierung.
              </p>
              
              <div className="mt-4">
                <Link
                  href="tel:+4946429239844"
                  className="bg-treibgut-blue hover:bg-treibgut-accent text-white py-3 px-8 rounded-full font-medium transition-colors inline-block"
                >
                  Jetzt Tisch reservieren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 