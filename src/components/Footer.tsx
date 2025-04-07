import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-treibgut-neutral text-treibgut-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-treibgut-blue">Treibgut Restaurant</h3>
            <address className="not-italic">
              <p>Restaurant Treibgut</p>
              <p>Kiekut 1</p>
              <p>24340 Altenhof</p>
              <p>Tel: 04351/8895613</p>
              <p>Email: info@restaurant-treibgut.de</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-treibgut-blue">Öffnungszeiten</h3>
            <p>Montag - Freitag: Ab 17:00 Uhr</p>
            <p>Samstag & Sonntag: Ab 12:00 Uhr</p>
            <p>Warme Küche 12:00 - 14:00 Uhr und  ab 17:00 Uhr</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-treibgut-blue">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-treibgut-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/speisekarte" className="hover:text-treibgut-blue">
                  Speisekarte
                </Link>
              </li>
              <li>
                <Link href="/veranstaltungen" className="hover:text-treibgut-blue">
                  Veranstaltungen
                </Link>
              </li>
              <li>
                <Link href="/gastgeber" className="hover:text-treibgut-blue">
                  Ihre Gastgeber
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-treibgut-blue">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-treibgut-blue">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-treibgut-main mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Treibgut Restaurant. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link href="/impressum" className="text-sm hover:text-treibgut-blue">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm hover:text-treibgut-blue">
              Datenschutz
            </Link>
          </div>
          </div>
        </div>
    </footer>
  );
} 