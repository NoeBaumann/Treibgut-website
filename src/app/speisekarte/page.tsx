import Image from 'next/image';

export default function MenuPage() {
  // Highlights for the scrollable gallery
  const highlights = [
    {
      id: 1,
      name: "Räucher Lachs Burger",
      description: "Im Laugenbrötchen mit Teriyaki Soße, Mango, Beilagensalat und Pommes",
      price: "30,50 €",
      image: "/images/Gerichte/Lachsburger.jpg"
    },
    {
      id: 2,
      name: "Gebratenes Kabeljaufilet",
      description: "Auf cremigem Kräuterrisotto und grünem Spargel",
      price: "31,90 €",
      image: "/images/Gerichte/kabeljau.jpg"
    },
    {
      id: 3,
      name: "Jakobsmuscheln",
      description: "Mit Spargel und feinen Kräutern",
      price: "29,90 €",
      image: "/images/Gerichte/Jakobsmuscheln.jpg"
    }
  ];

  return (
    <div className="bg-treibgut-lightblue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Quote Section */}
        <div className="text-center mb-12">
          <div className="max-w-3xl mx-auto mb-8">
            <div className="text-[#4A87B9] text-lg mb-1">Die Wahrheit liegt auf dem Teller.</div>
            <p className="text-treibgut-text text-sm mb-4">
              Entdecken Sie unser Haus, unsere Küche - 
              lernen Sie unser Team kennen - und erfahren Sie vor allem: 
              Unser Herzstück ist unsere Küche. Frisch, Nachhaltig, Schmackhaft. 
              Unser Service ist stets darauf bedacht Ihnen eine individuelle Beratung 
              und Bewirtung zu bieten.
            </p>
            <div className="text-[#4A87B9] text-lg">Die Wahrheit liegt nicht nur auf dem Teller!</div>
          </div>
        </div>

        {/* Highlights Scrollable Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-treibgut-text mb-6 text-center">Unsere Highlights</h2>
          <div className="relative">
            <div className="flex justify-center overflow-x-auto space-x-6 py-4 scrollbar-hide snap-x snap-mandatory">
              {highlights.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 w-80 snap-center bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-52 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-treibgut-blue mb-2">{item.name}</h3>
                    <p className="text-treibgut-text text-sm mb-2">{item.description}</p>
                    <span className="text-treibgut-text font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Menu - Styled exactly like the image */}
        <h2 className="text-2xl font-semibold text-treibgut-text mb-6 text-center">Vollständige Speisekarte</h2>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-treibgut-blue">Vorspeisen</h2>
          
          <div className="space-y-3 mb-8">
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Suppe nach Laune des Köchs</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">9,60€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Roastbeef rosa mit Holsteiner Färse mit Trüffel Remoulade und Ragnar's Küchenbrot</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">18,90€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Sellerie-Carpaccio mit Mangodressing, gerösteten Pinienkernen und Ziegenkäse</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">15,90€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Tomatensalat mit Ingwer und Orange</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">15,90€</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6 text-treibgut-blue">Hauptgänge</h2>
          
          <div className="space-y-3 mb-8">
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Büffelmilchkäse "Burrata" auf Süßkartoffelrösti Pesto, Salbei und Pinienkernen</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">23,00€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Vegetarischer Burger</span><br />
                <span className="text-sm">vom Riesen-Champignon mit Tomate, Bernsteiner Käse, Basilikum-Aioli, BBQ Soße, Beilagensalat und Pommes</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">24,00€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">*Veganes* Linsen-Chili im Backerdäpfel</span> <span>🌱</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">23,50€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Gratinierte Küsten&Avocado</span> <span className="text-sm">"Feuer und Knusper"</span><br />
                <span className="text-sm">mit pikanter Tomaten Salsa, Beilagensalat, und knusprigen Nachos</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">23,00€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Dry Aged Rumpsteak aus eigener Reifung</span><br />
                <span className="text-sm">mit Kräuterbutter, Beilagensalat und Beilagenkartoffel</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">43,90€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Caipirinha-Hähnchenbrust auf Pfannengemüse mit Thymiankartoffeln</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">28,20€</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Treib&Gut Labskaus aus der Rinderbrust mit Wachtelspiegelei und Spiegelei</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">24,00€</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-treibgut-blue">HOME Style Burger</h2>
              <div className="space-y-3 mb-8">
                <div>
                  <span className="font-medium">vom Highlandrind mit Bernsteiner Käse, Basilikum-Aioli, BBQ Soße, Beilagensalat und Pommes</span>
                  <div className="text-right">
                    <span className="font-semibold">24,00€</span>
                  </div>
                </div>
                
                <div>
                  <span className="font-medium">Geschmorte Rinderbäckchen auf Erbsenpüree, Parmesan-Kartoffeln und Jus</span>
                  <div className="text-right">
                    <span className="font-semibold">35,00€</span>
                  </div>
                </div>
                
                <div>
                  <span className="font-medium">Heiß geräuchertes Lachsfilet auf Rahmwirsing und in Meerwasser gegarten jungen Kartoffeln</span>
                  <div className="text-right">
                    <span className="font-semibold">30,50€</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">Räucher Lachs Burger</span>
                    <span className="mx-1">⚓</span>
                  </div>
                  <span className="text-sm">im Laugenbrötchen mit Teriyaki Soße, Mango, Beilagensalat und Pommes</span>
                  <div className="text-right">
                    <span className="font-semibold">30,50€</span>
                  </div>
                </div>
                
                <div>
                  <span className="font-medium">Gebratenes Kabeljaufilet auf cremigem Kräuterrisotto und grünem Spargel</span>
                  <div className="text-right">
                    <span className="font-semibold">31,90€</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-treibgut-blue mb-6">Dessert</h2>
              <div className="space-y-3 mb-8">
                <div>
                  <span className="font-medium">Passionsfrucht-Limetten Tiramisu</span>
                  <div className="text-right">
                    <span className="font-semibold">10,10€</span>
                  </div>
                </div>
                
                <div>
                  <span className="font-medium">Strandspaziergang</span><br />
                  <span className="text-sm">Dessertvariation "Im Wechsel der Jahreszeiten"</span>
                  <div className="text-right">
                    <span className="font-semibold">14,20€</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">Cassissorbet mit Sekt aufgefüllt und Ananas-Espuma</span>
                    <span className="ml-1">🌱</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">10,10€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kids Menu */}
          <div className="bg-treibgut-lightblue/30 p-4 rounded-lg mt-8">
            <h2 className="text-center font-semibold mb-2 text-treibgut-blue">⮞ Kids Menü ⮜</h2>
            <p className="text-center text-sm mb-1">
              Zum Kindermenü servieren wir eine Fruchtschale 0,2l oder einen Kindercappuccino
            </p>
            <p className="text-center text-sm">
              Als Dessert gibt es eine Kugel Eis!
            </p>
            <p className="text-center font-semibold mt-2">12,80€</p>
          </div>
        </div>
        
        {/* Getränkekarte */}
        <div className="bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-treibgut-blue mb-6">Alkoholfreie Getränke</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Fritz Kola</span>
                  <span className="text-sm ml-2">0,33l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">4,70€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Fritz Mischmasch</span>
                  <span className="text-sm ml-2">0,33l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">4,70€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Fritz zuckerfrei</span>
                  <span className="text-sm ml-2">0,33l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">4,70€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Selters classic/ naturell</span>
                  <span className="text-sm ml-2">0,25l / 0,75l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,70€ / 6,70€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Malzbier</span>
                  <span className="text-sm ml-2">0,33l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,90€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Swappers Bitter Lemon</span>
                  <span className="text-sm ml-2">0,33l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,70€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Fever Tree Tonic Water</span>
                  <span className="text-sm ml-2">0,2l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,70€</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-treibgut-blue mt-8 mb-6">Säfte / Schorlen</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Apfelsaft / Orangensaft</span>
                  <span className="text-sm ml-2">0,2l / 0,4l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,40€ / 4,90€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Rhabarber- / Maracujasaft</span>
                  <span className="text-sm ml-2">0,2l / 0,4l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,50€ / 5,80€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Bananensaft</span>
                  <span className="text-sm ml-2">0,2l / 0,4l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,50€ / 5,80€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Kirschsaft / Johannisbeere</span>
                  <span className="text-sm ml-2">0,2l / 0,4l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">4,00€ / 6,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Kiba / Grapefruit</span>
                  <span className="text-sm ml-2">0,2l / 0,4l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">4,60€ / 6,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Anker-Schorle</span>
                  <span className="text-sm ml-2">0,4l</span>
                  <div className="text-xs">(Apfelsaft mit Bitter Lemon)</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Himbeer-Sprudel</span>
                  <span className="text-sm ml-2">0,4l</span>
                  <div className="text-xs">(Himbeersirup mit Himbeeren, Eiswürfel und gestoßene Himbeeren)</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Zitronen-Basilikum Limo</span>
                  <span className="text-sm ml-2">0,4l</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,30€</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-treibgut-blue mt-8 mb-6">Bier</h2>
            <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Pils</span>
                <span className="text-sm ml-2">0,3l / 0,5l</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">3,80€ / 6,20€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Alster</span>
                <span className="text-sm ml-2">0,3l / 0,5l</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">3,80€ / 6,20€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Kreuzweiche</span>
                <span className="text-sm ml-2">0,33l</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">7,00€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Maisel's Weisse Hefeweizen</span>
                <span className="text-sm ml-2">0,5l</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">6,20€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Jever Fun alkoholfrei</span>
                <span className="text-sm ml-2">0,33l</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">4,00€</span>
              </div>
            </div>
            </div>

            <h2 className="text-2xl font-semibold text-treibgut-blue mt-8 mb-6">Aperitif</h2>
            <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <div className="flex items-center">
                  <span className="font-medium">Wellenbrecher</span>
                  <span className="text-treibgut-blue mx-1">〰️</span>
                </div>
                <span className="text-xs">Lillet, Gin, Sparrowhawk und Mineralwasser</span>
              </div>
              <div className="text-right">
                <span className="font-medium">0,2l</span>
                <span className="font-semibold ml-2">7,50€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Hugo/ Aperol Spritz</span>
              </div>
              <div className="text-right">
                <span className="font-medium">0,2l</span>
                <span className="font-semibold ml-2">7,50€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Lillet Wild Rose</span>
              </div>
              <div className="text-right">
                <span className="font-medium">0,2l</span>
                <span className="font-semibold ml-2">7,50€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Muff the Puff</span>
                <span className="text-xs block">(Mango, Lillet, Eis und Vanille)</span>
              </div>
              <div className="text-right">
                <span className="font-medium">0,2l</span>
                <span className="font-semibold ml-2">7,50€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Sherry (Medium, Dry, Créme)</span>
              </div>
              <div className="text-right">
                <span className="font-medium">5cl</span>
                <span className="font-semibold ml-2">4,00€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Martini (Bianco, Dry)</span>
              </div>
              <div className="text-right">
                <span className="font-medium">5cl</span>
                <span className="font-semibold ml-2">4,00€</span>
              </div>
            </div>
            </div>         
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-treibgut-blue mb-6">Offene Weiß-und Roséweine</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Grauer Burgunder QbA, tr.</span>
                  <span className="text-sm ml-2">0,2l</span>
                  <div className="text-xs">Heinrich Gies, Deutschland, Pfalz</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">6,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Riesling QbA, tr.</span>
                  <span className="text-sm ml-2">0,2l</span>
                  <div className="text-xs">Klaus Keller</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">6,40€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Scheurebe QbA, halbtr.</span>
                  <span className="text-sm ml-2">0,2l</span>
                  <div className="text-xs">Weingut Pfaffmann</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,00€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Sauvignon Blanc AOC, tr.</span>
                  <span className="text-sm ml-2">0,2l</span>
                  <div className="text-xs">Domaine La Croix Belle</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">7,40€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Weinschorle</span>
                  <span className="text-sm ml-2">0,2l</span>
                  <div className="text-xs">Weingut Studier</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,40€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Heroldrebe mild</span>
                  <span className="text-sm ml-2">0,2l</span>
                  <div className="text-xs">Weingut Studier</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">6,00€</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-treibgut-blue mt-8 mb-6">Schaumweine</h2>
            <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Privat Cuvee Trocken</span>
                <span className="text-sm ml-2">0,1l / 0,75l</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">4,70€ / 27,70€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Prosecco Frizzante</span>
                <span className="text-sm ml-2">0,1l / 0,75l</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">6,30€ / 32,20€</span>
              </div>
            </div>
            </div>

            <h2 className="text-2xl font-semibold text-treibgut-blue mt-8 mb-6">Offene Rotweine</h2>
            <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <span className="font-medium">"L Mio" Merlot</span>
                <span className="text-sm ml-2">0,2l</span>
                <div className="text-xs">Cehegin IGP, Sp.</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">6,20€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Tempranillo Crianza</span>
                <span className="text-sm ml-2">0,2l</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">7,50€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Dornfelder QbA, halbtr.</span>
                <span className="text-sm ml-2">0,2l</span>
                <div className="text-xs">Weingut Studier</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">5,40€</span>
              </div>
            </div>
            </div>

            <h2 className="text-2xl font-semibold text-treibgut-blue mt-8 mb-6">Flaschenweine</h2>
            <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <span className="font-medium text-treibgut-blue">Weissweine</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Sauvignon Blanc QbA, tr.</span>
                <span className="text-sm ml-2">0,75l</span>
                <div className="text-xs">Heinrich Gies, Deutschland, Pfalz</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">31,50€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Grauer Burgunder "straight" tr</span>
                <span className="text-sm ml-2">0,75l</span>
                <div className="text-xs">Füsil Rüdel, Pfalz</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">34,50€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Weißburgunder Meisterstück Weiss</span>
                <span className="text-sm ml-2">0,75l</span>
                <div className="text-xs">Füsil Rüdel, Deutschland, Pfalz</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">33,90€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Muskateller feinherb</span>
                <span className="text-sm ml-2">0,75l</span>
                <div className="text-xs">A. Diehl, Deutschland, Pfalz</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">28,60€</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <div className="flex justify-between">
              <div>
                <span className="font-medium text-treibgut-blue">Rosé</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Rosé "Pudelwohl"</span>
                <span className="text-sm ml-2">0,75l</span>
                <div className="text-xs">Pfaffmann, Pfalz, Rheinhessen</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">26,90€</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <span className="font-medium text-treibgut-blue">Rotweine</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Chianti Fiasco</span>
                <span className="text-sm ml-2">0,75l</span>
                <div className="text-xs">Casa Del Moro, Suites, Toskana</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">38,40€</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Hermina Crianza DOCa</span>
                <span className="text-sm ml-2">0,75l</span>
                <div className="text-xs">Vina Hermina, Spanien, Rioja</div>
              </div>
              <div className="text-right">
                <span className="font-semibold">36,30€</span>
              </div>
            </div>
            </div>

            {/* Further wine and drink sections would continue here */}
          </div>
        </div>
        

         {/* Hot Beverages and Desserts */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-treibgut-blue mb-6">Heißgetränke</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Tasse Kaffee</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,80€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Kännchen Kaffee</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">6,90€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Kaffee Crème</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">4,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Cappuccino</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">4,40€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Espresso</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">3,80€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Doppelter Espresso</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">4,50€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Milchkaffee</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Heiße Schokolade</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Sunny Choco</span>
                  <div className="text-xs">mit Sahne und Marshmallows</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,90€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Latte Macchiato</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">5,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Hafermilch</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">0,90€</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#4A87B9] mb-6">Eis und Kuchen</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Kugel Eis</span>
                  <div className="text-xs">Vanille, Schokolade, Erdbeer-Sorbet, Himbeer-Sorbet, Mango-Sorbet, Haselnuss, Banane, Kokosnuss und Stracciatella</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">2,30€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Portion Sahne</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">1,20€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Nussbecher</span>
                  <div className="text-xs">Haselnuss-, Schokoladen- und Stracciatella-Eis und Sahne</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">10,50€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Veganer Fruchtbecher</span>
                  <div className="text-xs">Erdbeer-, Himbeer- und Mangosorbet mit frischen Früchten und Haribo Erdbeeren</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">10,50€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Treib-Gut Eisbecher</span>
                  <div className="text-xs">Vanille, Stracciatella und Schokoladeneis mit Sahne und Eierlikör</div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">10,50€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Eiskaffee</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">8,90€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Eisschokolade</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold">8,90€</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Hausgebackener Kuchen nach Tagesangebot</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-treibgut-text">
          <p>* Alle Preise inklusive der gesetzlichen Mehrwertsteuer. Die Preise können sich ohne Vorankündigung ändern und sind nicht bindend.</p>
          <p>Für Informationen zu Allergenen wenden Sie sich bitte an unser Servicepersonal.</p>
          <p className="mt-4">
          </p>
        </div>
      </div>
    </div>
  );
}