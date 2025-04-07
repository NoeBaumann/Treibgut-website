import Image from 'next/image';

export default function GastgeberPage() {
  return (
    <div className="bg-treibgut-lightblue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          
          <p className="text-treibgut-text mb-4">Moin, moin...</p>
          
          <p className="text-treibgut-text mb-4">
            Treib-Gut heißt für uns sich treiben lassen, eine kleine Strandoase,<br/>
            jedes Treibholz ist individuell, keines gleicht dem Anderen<br/>
            und genauso<br/>
            <span className="font-semibold">sehen wir unsere Gäste auch als einzigartig und besonders.</span>
          </p>
          
          <p className="text-treibgut-text mb-8">
            Damit Sie uns schneller kennenlernen, hier ein paar Infos über uns.
          </p>
        </div>
        
        {/* Torsten & Elisa Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/Team/torsten_elisa_bild.jpg"
                alt="Torsten & Elisa Behnke"
                width={400}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Torsten's profile */}
                <div>
                  <h3 className="text-xl font-semibold text-treibgut-blue mb-2">Steckbrief</h3>
                  <p><span className="text-treibgut-blue">Name:</span> Torsten Behnke</p>
                  <p><span className="text-treibgut-blue">Geburtsort:</span> Lübeck</p>
                  <p><span className="text-treibgut-blue">Familienstand:</span> verheiratet</p>
                  <p>
                    <span className="text-treibgut-blue">Ausbildung:</span><br/>
                    1994 <span className="ml-8">Schiffergesellschaft Lübeck</span>
                  </p>
                  
                  <p className="mt-4">
                    <span className="text-treibgut-blue">Berufliche Erfahrung:</span><br/>
                    1998-1999 <span className="ml-8">Grundwehrdienst<br/>
                    <span className="ml-24">bei der Marine als Koch</span></span>
                  </p>
                  <p>
                    1999-2013 <span className="ml-8">Küchenchef bei der<br/>
                    <span className="ml-24">Offizier Messe Kiel /Holtenau</span></span>
                  </p>
                </div>
                
                {/* Elisa's profile */}
                <div>
                  <h3 className="text-xl font-semibold text-treibgut-blue mb-2">Steckbrief</h3>
                  <p><span className="text-treibgut-blue">Name:</span> Elisa Behnke geb. Meyer</p>
                  <p><span className="text-treibgut-blue">Geburtsort:</span> Naila Oberfranken</p>
                  <p><span className="text-treibgut-blue">Familienstand:</span> verheiratet</p>
                  <p>
                    <span className="text-treibgut-blue">Ausbildung:</span><br/>
                    2007 <span className="ml-8">Romantikhotel Kieler Kaufmann</span>
                  </p>
                  
                  <p className="mt-4">
                    <span className="text-treibgut-blue">Berufliche Erfahrung:</span><br/>
                    2010 <span className="ml-8">Restaurant El Mövenschiss</span>
                  </p>
                  <p>
                    2010- 2011 <span className="ml-8">Steigenberger Conti Hansa</span>
                  </p>
                  <p>
                    2011-2012 <span className="ml-8">Kieler Kaufmann</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dogs Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-[400px] h-[400px]">
                <Image
                  src="/images/Team/doggos.jpg"
                  alt="Unsere Hunde"
                  fill
                  style={{ 
                    objectFit: "cover",
                    transform: "rotate(90deg)"
                  }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-treibgut-blue mb-2">Steckbrief</h3>
              <p><span className="text-treibgut-blue">Name:</span> "Unser Power Trio"</p>
              <p className="ml-4">von rechts nach links</p>
              <p className="ml-4">Elfie, Peppermint und Diego</p>
              <p>
                <span className="text-treibgut-blue">Rasse:</span> Französische Bulldogge<br/>
                <span className="ml-8">Old englisch Bulldogge</span>
              </p>
              <p><span className="text-treibgut-blue">Farbe:</span> kunterbunt</p>
              <p>
                <span className="text-treibgut-blue">Geburtsdatum:</span> 01.10.2023<br/>
                <span className="ml-8">07.05.2018 und 16.06.2023</span>
              </p>
              <p>
                <span className="text-treibgut-blue">Berufliche Erfahrung:</span> Sie nehmen<br/>
                <span className="ml-8">ihren Job als Testesser sehr ernst:)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 