'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, Star, ExternalLink, Laptop, Cpu, HardDrive, Monitor, Battery, Zap } from 'lucide-react'

interface Laptop {
  id: number
  name: string
  brand: string
  image: string
  price: string
  priceNumeric: number
  rating: number
  ram: string
  storage: string
  screen: string
  processor: string
  usbC: boolean
  battery: string
  weight: string
  design: string
  pros: string[]
  cons: string[]
  backMarketUrl: string
  recommended: boolean
  bestFor: string
}

const laptops: Laptop[] = [
  {
    id: 1,
    name: "Dell XPS 15 9520",
    brand: "Dell",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    price: "899€ - 1199€",
    priceNumeric: 1049,
    rating: 4.8,
    ram: "16 Go DDR5",
    storage: "512 Go SSD",
    screen: "15.6\" FHD+ (1920x1200)",
    processor: "Intel Core i7-12700H",
    usbC: true,
    battery: "86Wh - 8-10h",
    weight: "1.86 kg",
    design: "Châssis aluminium premium, design épuré similaire au MacBook Pro",
    pros: [
      "Design premium et finition impeccable",
      "Écran excellent avec bordures fines",
      "Performances exceptionnelles pour l'automatisation",
      "Clavier confortable pour de longues sessions",
      "Construction robuste en aluminium"
    ],
    cons: [
      "Webcam 720p uniquement",
      "Prix élevé mais justifié",
      "Ventilateurs parfois audibles"
    ],
    backMarketUrl: "https://www.backmarket.fr/fr-fr/search?q=dell+xps+15",
    recommended: true,
    bestFor: "Le meilleur choix global - design premium et performances"
  },
  {
    id: 2,
    name: "Lenovo ThinkPad X1 Carbon Gen 10",
    brand: "Lenovo",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
    price: "799€ - 1099€",
    priceNumeric: 949,
    rating: 4.7,
    ram: "16 Go LPDDR5",
    storage: "512 Go SSD",
    screen: "14\" WUXGA (1920x1200)",
    processor: "Intel Core i7-1260P",
    usbC: true,
    battery: "57Wh - 10-12h",
    weight: "1.12 kg",
    design: "Design professionnel sobre, châssis carbone ultra-léger",
    pros: [
      "Ultra-léger et portable (1.12 kg)",
      "Autonomie exceptionnelle",
      "Clavier ThinkPad légendaire",
      "Excellente connectivité (4x USB-C Thunderbolt)",
      "Robuste avec certification militaire"
    ],
    cons: [
      "Design plus sobre/professionnel",
      "Écran 14\" (peut être limitant)",
      "Prix élevé pour le neuf"
    ],
    backMarketUrl: "https://www.backmarket.fr/fr-fr/search?q=thinkpad+x1+carbon",
    recommended: true,
    bestFor: "Meilleur pour la mobilité et l'autonomie"
  },
  {
    id: 3,
    name: "HP Spectre x360 14",
    brand: "HP",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
    price: "849€ - 1149€",
    priceNumeric: 999,
    rating: 4.6,
    ram: "16 Go LPDDR4x",
    storage: "512 Go SSD",
    screen: "13.5\" 3:2 (1920x1280) tactile",
    processor: "Intel Core i7-1255U",
    usbC: true,
    battery: "66Wh - 10-12h",
    weight: "1.36 kg",
    design: "Design gemme avec angles coupés, finition bicolore élégante",
    pros: [
      "Design très élégant et unique",
      "Écran tactile convertible 2-en-1",
      "Ratio 3:2 excellent pour la productivité",
      "Stylet inclus",
      "Son Bang & Olufsen de qualité"
    ],
    cons: [
      "Plus petit (13.5\") que demandé",
      "Performances légèrement inférieures",
      "Chauffe en charge intensive"
    ],
    backMarketUrl: "https://www.backmarket.fr/fr-fr/search?q=hp+spectre+x360",
    recommended: false,
    bestFor: "Pour ceux qui veulent un convertible tactile élégant"
  },
  {
    id: 4,
    name: "ASUS ZenBook 14 OLED",
    brand: "ASUS",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    price: "749€ - 999€",
    priceNumeric: 874,
    rating: 4.5,
    ram: "16 Go LPDDR5",
    storage: "512 Go SSD",
    screen: "14\" OLED 2.8K (2880x1800)",
    processor: "Intel Core i7-1260P",
    usbC: true,
    battery: "75Wh - 8-10h",
    weight: "1.39 kg",
    design: "Design moderne et léger avec finition métallique élégante",
    pros: [
      "Écran OLED exceptionnel",
      "Excellent rapport qualité/prix",
      "Design soigné et moderne",
      "Léger et portable",
      "Bonne autonomie"
    ],
    cons: [
      "Écran 14\" (limite inférieure)",
      "Webcam 720p",
      "Pavé tactile peut être amélioré"
    ],
    backMarketUrl: "https://www.backmarket.fr/fr-fr/search?q=asus+zenbook+14",
    recommended: true,
    bestFor: "Meilleur rapport qualité/prix avec écran OLED"
  },
  {
    id: 5,
    name: "Microsoft Surface Laptop 4 15\"",
    brand: "Microsoft",
    image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400&h=300&fit=crop",
    price: "799€ - 1049€",
    priceNumeric: 924,
    rating: 4.6,
    ram: "16 Go LPDDR4x",
    storage: "512 Go SSD",
    screen: "15\" PixelSense tactile (2496x1664)",
    processor: "Intel Core i7-1185G7",
    usbC: true,
    battery: "47.4Wh - 8-10h",
    weight: "1.54 kg",
    design: "Design minimaliste premium, similaire au MacBook avec finitions métal",
    pros: [
      "Design extrêmement élégant et minimaliste",
      "Écran tactile de très haute qualité",
      "Clavier et trackpad excellents",
      "Finition Alcantara unique (option)",
      "Expérience Windows optimale"
    ],
    cons: [
      "Connectique limitée (1x USB-C, 1x USB-A)",
      "Processeur génération précédente",
      "Non réparable facilement"
    ],
    backMarketUrl: "https://www.backmarket.fr/fr-fr/search?q=surface+laptop+4+15",
    recommended: false,
    bestFor: "Pour les amateurs du design Microsoft et écosystème Windows"
  },
  {
    id: 6,
    name: "LG Gram 15 (2023)",
    brand: "LG",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop",
    price: "899€ - 1199€",
    priceNumeric: 1049,
    rating: 4.5,
    ram: "16 Go LPDDR5",
    storage: "512 Go SSD",
    screen: "15.6\" FHD IPS (1920x1080)",
    processor: "Intel Core i7-1360P",
    usbC: true,
    battery: "80Wh - 15-18h",
    weight: "1.15 kg",
    design: "Design épuré ultra-léger avec finition métallique",
    pros: [
      "Extrêmement léger (1.15 kg pour 15.6\")",
      "Autonomie record (15-18h)",
      "Grand écran 15.6\" dans un châssis compact",
      "Excellente connectique",
      "Certification militaire MIL-STD-810G"
    ],
    cons: [
      "Châssis peut sembler fragile (mais ne l'est pas)",
      "Trackpad moyen",
      "Ventilateurs audibles sous charge"
    ],
    backMarketUrl: "https://www.backmarket.fr/fr-fr/search?q=lg+gram+15",
    recommended: true,
    bestFor: "Le plus léger avec la meilleure autonomie en 15\""
  },
  {
    id: 7,
    name: "Huawei MateBook 14s",
    brand: "Huawei",
    image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400&h=300&fit=crop",
    price: "699€ - 899€",
    priceNumeric: 799,
    rating: 4.4,
    ram: "16 Go LPDDR5",
    storage: "512 Go SSD",
    screen: "14.2\" 2.5K (2520x1680) tactile",
    processor: "Intel Core i7-11370H",
    usbC: true,
    battery: "60Wh - 8-10h",
    weight: "1.43 kg",
    design: "Design élégant similaire à votre ancien MateBook, finition premium",
    pros: [
      "Vous connaissez déjà la marque",
      "Design premium proche de votre ancien laptop",
      "Excellent écran 3:2",
      "Prix attractif",
      "Système de son Huawei de qualité"
    ],
    cons: [
      "Écran 14.2\" (limite inférieure)",
      "Services Google limités (sauf avec workaround)",
      "Support logiciel Huawei incertain",
      "Processeur génération précédente"
    ],
    backMarketUrl: "https://www.backmarket.fr/fr-fr/search?q=huawei+matebook+14",
    recommended: false,
    bestFor: "Si vous aimez Huawei et voulez du familier"
  }
]

export default function Home() {
  const [sortBy, setSortBy] = useState<'recommended' | 'price' | 'rating'>('recommended')
  const [filterBrand, setFilterBrand] = useState<string>('all')

  const brands = ['all', ...Array.from(new Set(laptops.map(l => l.brand)))]

  const filteredAndSorted = laptops
    .filter(laptop => filterBrand === 'all' || laptop.brand === filterBrand)
    .sort((a, b) => {
      if (sortBy === 'recommended') return b.recommended ? 1 : -1
      if (sortBy === 'price') return a.priceNumeric - b.priceNumeric
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Laptop className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Comparatif Ordinateurs Portables
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Sélection d'ordinateurs portables professionnels pour funnel building et automatisation IA/no-code,
            disponibles sur <span className="font-semibold text-green-600">Back Market</span>
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Min. 16 Go RAM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Min. 256 Go SSD</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>14-15 pouces</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Charge USB-C</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Trier par:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recommended">Recommandés</option>
              <option value="price">Prix (croissant)</option>
              <option value="rating">Note (décroissant)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Marque:</label>
            <select
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'Toutes' : brand}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Laptops Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
        <div className="grid gap-6">
          {filteredAndSorted.map((laptop) => (
            <div
              key={laptop.id}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden ${
                laptop.recommended ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {laptop.recommended && (
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  RECOMMANDÉ - {laptop.bestFor}
                </div>
              )}

              <div className="p-6">
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  {/* Image and Basic Info */}
                  <div>
                    <img
                      src={laptop.image}
                      alt={laptop.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{laptop.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl font-bold text-blue-600">{laptop.price}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(laptop.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({laptop.rating}/5)</span>
                    </div>
                    <a
                      href={laptop.backMarketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Voir sur Back Market
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Details */}
                  <div>
                    {/* Specs Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Cpu className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-xs text-gray-500 uppercase font-medium">Processeur</div>
                          <div className="text-sm font-semibold text-gray-900">{laptop.processor}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <HardDrive className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-xs text-gray-500 uppercase font-medium">RAM / Stockage</div>
                          <div className="text-sm font-semibold text-gray-900">{laptop.ram} / {laptop.storage}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Monitor className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-xs text-gray-500 uppercase font-medium">Écran</div>
                          <div className="text-sm font-semibold text-gray-900">{laptop.screen}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Battery className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-xs text-gray-500 uppercase font-medium">Autonomie / Poids</div>
                          <div className="text-sm font-semibold text-gray-900">{laptop.battery} / {laptop.weight}</div>
                        </div>
                      </div>
                    </div>

                    {/* Design */}
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Design</h4>
                      </div>
                      <p className="text-sm text-gray-700">{laptop.design}</p>
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Points forts
                        </h4>
                        <ul className="space-y-1">
                          {laptop.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-green-600 mt-0.5">•</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                          <XCircle className="w-5 h-5" />
                          Points faibles
                        </h4>
                        <ul className="space-y-1">
                          {laptop.cons.map((con, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-orange-600 mt-0.5">•</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {!laptop.recommended && laptop.bestFor && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Idéal pour:</span> {laptop.bestFor}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with recommendations */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Mes recommandations pour vous</h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
              <h3 className="font-bold text-blue-900 mb-2">🏆 Choix n°1 : Dell XPS 15</h3>
              <p className="text-gray-700 text-sm">
                Le plus proche de votre expérience MacBook Pro. Design premium, performances excellentes pour vos automatisations,
                et un écran 15" parfait pour le funnel building. Qualité de construction exceptionnelle.
              </p>
            </div>

            <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
              <h3 className="font-bold text-green-900 mb-2">💎 Alternative premium : ThinkPad X1 Carbon</h3>
              <p className="text-gray-700 text-sm">
                Si vous privilégiez la mobilité. Ultra-léger (1.12 kg), autonomie exceptionnelle, clavier légendaire.
                En 14" mais avec ratio 16:10 pour plus d'espace vertical. Parfait pour travailler partout.
              </p>
            </div>

            <div className="p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
              <h3 className="font-bold text-purple-900 mb-2">💰 Meilleur rapport qualité/prix : ASUS ZenBook 14 OLED</h3>
              <p className="text-gray-700 text-sm">
                Écran OLED exceptionnel, design soigné, performances solides pour 750-1000€.
                Le meilleur compromis si vous voulez économiser sans sacrifier la qualité.
              </p>
            </div>

            <div className="p-4 bg-orange-50 border-l-4 border-orange-600 rounded">
              <h3 className="font-bold text-orange-900 mb-2">🪶 Le plus léger : LG Gram 15</h3>
              <p className="text-gray-700 text-sm">
                1.15 kg pour un 15.6" ! Autonomie record (15-18h). Idéal si vous bougez beaucoup entre clients.
                Ne sacrifie pas les performances malgré son poids plume.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg">
            <h3 className="font-bold text-xl mb-3">💡 Conseil final</h3>
            <p className="mb-3">
              Vu votre background MacBook Pro + Huawei MateBook, vous appréciez clairement le design soigné et la qualité de construction.
              Le <strong>Dell XPS 15</strong> est votre meilleur choix : il offre l'expérience premium à laquelle vous êtes habitué,
              avec les performances nécessaires pour vos automatisations IA et le no-code.
            </p>
            <p className="text-sm text-gray-300">
              Sur Back Market, visez un modèle en état "Excellent" ou "Bon" pour le meilleur rapport qualité/prix.
              Vous pouvez facilement économiser 30-40% par rapport au neuf tout en ayant une garantie.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
