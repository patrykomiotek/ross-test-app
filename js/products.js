// Product data for the Rossmann test app
const PRODUCTS = [
  {
    id: 1,
    name: "Szampon regenerujący do włosów suchych",
    description: "Intensywnie regenerujący szampon z keratyną i olejkiem arganowym. Idealny do włosów suchych i zniszczonych. Przywraca elastyczność i blask. Stosować na mokre włosy, delikatnie wmasować i spłukać.",
    price: 18.99,
    originalPrice: null,
    category: "Pielegnacja",
    inStock: true,
    rating: 4.5,
    reviews: [
      { author: "Anna K.", rating: 5, text: "Świetny szampon! Włosy są miękkie i lśniące po każdym myciu.", date: "2026-01-15" },
      { author: "Marta W.", rating: 4, text: "Dobry szampon, ale mógłby mieć więcej pianki.", date: "2026-02-10" }
    ],
    color: "#8B5CF6"
  },
  {
    id: 2,
    name: "Krem nawilżający z kwasem hialuronowym",
    description: "Lekki krem nawilżający z kwasem hialuronowym i witaminą E. Głębokie nawilżenie na cały dzień. Odpowiedni do każdego typu skóry. Nie zatyka porów.",
    price: 34.99,
    originalPrice: 49.99,
    category: "Pielegnacja",
    inStock: true,
    rating: 4.8,
    reviews: [
      { author: "Ewa S.", rating: 5, text: "Najlepszy krem jaki kiedykolwiek używałam! Skóra jest cudownie nawilżona.", date: "2026-01-20" },
      { author: "Katarzyna M.", rating: 5, text: "Lekka konsystencja, świetnie się wchłania.", date: "2026-02-05" },
      { author: "Joanna P.", rating: 4, text: "Dobry krem, ale trochę drogi.", date: "2026-02-28" }
    ],
    color: "#EC4899"
  },
  {
    id: 3,
    name: "Pasta do zębów z fluorem",
    description: "Pasta do zębów z fluorem i naturalnym ekstraktem z mięty. Skutecznie chroni przed próchnicą i odświeża oddech. Delikatna formuła odpowiednia dla całej rodziny.",
    price: 8.49,
    originalPrice: null,
    category: "Higiena",
    inStock: true,
    rating: 4.2,
    reviews: [
      { author: "Tomasz R.", rating: 4, text: "Solidna pasta, przyjemny smak miętowy.", date: "2026-02-01" },
      { author: "Paweł Z.", rating: 4, text: "Dobry stosunek jakości do ceny.", date: "2026-02-20" }
    ],
    color: "#06B6D4"
  },
  {
    id: 4,
    name: "Żel pod prysznic o zapachu lawendy",
    description: "Relaksujący żel pod prysznic z naturalnym olejkiem lawendowym. Delikatnie myje skórę, pozostawiając ją miękką i pachnącą. Idealny na wieczorny relaks.",
    price: 12.99,
    originalPrice: 16.99,
    category: "Higiena",
    inStock: true,
    rating: 4.3,
    reviews: [
      { author: "Magdalena L.", rating: 5, text: "Cudowny zapach! Używam codziennie.", date: "2026-01-28" },
      { author: "Agnieszka D.", rating: 4, text: "Przyjemny żel, ładnie pieni się.", date: "2026-02-15" }
    ],
    color: "#A78BFA"
  },
  {
    id: 5,
    name: "Pomadka ochronna z filtrem SPF 15",
    description: "Pomadka ochronna z filtrem SPF 15 i witaminą E. Nawilża i chroni usta przed wiatrem i słońcem. Bezbarwna formuła odpowiednia na co dzień.",
    price: 6.99,
    originalPrice: null,
    category: "Pielegnacja",
    inStock: true,
    rating: 3.9,
    reviews: [
      { author: "Natalia K.", rating: 4, text: "Dobrze nawilża, ale mogłaby trwać dłużej.", date: "2026-02-08" },
      { author: "Sylwia B.", rating: 4, text: "Idealna na zimę.", date: "2026-01-30" }
    ],
    color: "#F472B6"
  },
  {
    id: 6,
    name: "Dezodorant w sprayu Fresh Ocean",
    description: "Dezodorant w sprayu o morskim zapachu. 48-godzinna ochrona przed potem. Nie pozostawia białych śladów na ubraniach. Dermatologicznie testowany.",
    price: 11.49,
    originalPrice: null,
    category: "Higiena",
    inStock: true,
    rating: 4.1,
    reviews: [
      { author: "Marek W.", rating: 4, text: "Dobry dezodorant, przyjemny zapach.", date: "2026-02-12" },
      { author: "Jan N.", rating: 4, text: "Skuteczna ochrona na cały dzień.", date: "2026-02-25" }
    ],
    color: "#0EA5E9"
  },
  {
    id: 7,
    name: "Tusz do rzęs pogrubiający",
    description: "Tusz do rzęs z formułą pogrubiającą. Nadaje rzęsom objętość i wyrazistość. Nie skleja rzęs. Łatwy w aplikacji dzięki specjalnej szczoteczce.",
    price: 29.99,
    originalPrice: null,
    category: "Makijaz",
    inStock: true,
    rating: 4.6,
    reviews: [
      { author: "Karolina T.", rating: 5, text: "Najlepszy tusz jaki miałam! Rzęsy wyglądają fantastycznie.", date: "2026-01-18" },
      { author: "Aleksandra M.", rating: 4, text: "Dobry tusz, ale trzeba uważać żeby nie skleił rzęs.", date: "2026-02-03" }
    ],
    color: "#1F2937"
  },
  {
    id: 8,
    name: "Podkład kryjący w płynie",
    description: "Podkład kryjący w płynie z naturalnym wykończeniem. Wyrównuje koloryt skóry i maskuje niedoskonałości. Dostępny w 8 odcieniach. Trwałość do 12 godzin.",
    price: 42.99,
    originalPrice: 54.99,
    category: "Makijaz",
    inStock: true,
    rating: 4.4,
    reviews: [
      { author: "Monika G.", rating: 5, text: "Świetne krycie, naturalny efekt.", date: "2026-02-01" },
      { author: "Izabela R.", rating: 4, text: "Dobry podkład, ale mogłoby być więcej odcieni.", date: "2026-02-18" }
    ],
    color: "#D4A574"
  },
  {
    id: 9,
    name: "Witamina C 1000mg tabletki",
    description: "Witamina C w tabletkach do połykania. 1000mg w jednej tabletce. Wspiera odporność i pomaga w walce z przeziębieniem. Opakowanie 60 tabletek.",
    price: 19.99,
    originalPrice: null,
    category: "Zdrowie",
    inStock: true,
    rating: 4.7,
    reviews: [
      { author: "Robert K.", rating: 5, text: "Biorę codziennie, czuję się świetnie!", date: "2026-01-25" },
      { author: "Dorota S.", rating: 5, text: "Dobre tabletki, łatwe do połknięcia.", date: "2026-02-14" }
    ],
    color: "#F59E0B"
  },
  {
    id: 10,
    name: "Plaster opatrunkowy wodoodporny",
    description: "Plastry opatrunkowe wodoodporne w różnych rozmiarach. Skutecznie chronią rany przed zakażeniem. Opakowanie 20 sztuk w 4 rozmiarach.",
    price: 7.99,
    originalPrice: null,
    category: "Zdrowie",
    inStock: false,
    rating: 4.0,
    reviews: [
      { author: "Piotr M.", rating: 4, text: "Dobre plastry, dobrze się trzymają.", date: "2026-02-06" },
      { author: "Anna B.", rating: 4, text: "Praktyczne opakowanie z różnymi rozmiarami.", date: "2026-02-22" }
    ],
    color: "#EF4444"
  },
  {
    id: 11,
    name: "Olejek do ciała z jojoba",
    description: "Naturalny olejek do ciała z olejem jojoba i witaminą E. Intensywnie nawilża i odżywia skórę. Szybko się wchłania, nie pozostawia tłustego filmu. Idealny po kąpieli.",
    price: 24.99,
    originalPrice: 32.99,
    category: "Pielegnacja",
    inStock: true,
    rating: 4.5,
    reviews: [
      { author: "Justyna W.", rating: 5, text: "Cudowny olejek! Skóra jest jedwabista.", date: "2026-01-22" },
      { author: "Beata K.", rating: 4, text: "Dobrze nawilża, przyjemny zapach.", date: "2026-02-09" }
    ],
    color: "#D97706"
  },
  {
    id: 12,
    name: "Szczoteczka do zębów elektryczna",
    description: "Elektryczna szczoteczka do zębów z 3 trybami czyszczenia. Timer 2-minutowy zapewnia odpowiedni czas czyszczenia. W zestawie 2 końcówki wymienne. Zasilanie bateryjne.",
    price: 59.99,
    originalPrice: null,
    category: "Higiena",
    inStock: true,
    rating: 4.3,
    reviews: [
      { author: "Kamil P.", rating: 4, text: "Dobra szczoteczka w przystępnej cenie.", date: "2026-02-11" },
      { author: "Ewa L.", rating: 5, text: "Timer jest bardzo przydatny!", date: "2026-02-27" }
    ],
    color: "#10B981"
  },
  {
    id: 13,
    name: "Krem do rąk z gliceryną",
    description: "Intensywnie nawilżający krem do rąk z gliceryną i alantoiną. Regeneruje suchą i popękaną skórę dłoni. Szybko się wchłania. Idealny na zimę.",
    price: 9.99,
    originalPrice: null,
    category: "Pielegnacja",
    inStock: true,
    rating: 4.2,
    reviews: [
      { author: "Grażyna T.", rating: 4, text: "Dobry krem, szybko się wchłania.", date: "2026-02-04" },
      { author: "Helena M.", rating: 4, text: "Ręce są miękkie po użyciu.", date: "2026-02-19" }
    ],
    color: "#FCA5A5"
  },
  {
    id: 14,
    name: "Lek przeciwbólowy Ibuprofen 200mg",
    description: "Tabletki przeciwbólowe i przeciwzapalne. Skutecznie łagodzą ból głowy, zębów, mięśni i stawów. Opakowanie 20 tabletek powlekanych.",
    price: 14.99,
    originalPrice: null,
    category: "Zdrowie",
    inStock: true,
    rating: 4.6,
    reviews: [
      { author: "Andrzej W.", rating: 5, text: "Skutecznie łagodzi ból, szybko działa.", date: "2026-01-30" },
      { author: "Maria S.", rating: 4, text: "Sprawdzony lek, zawsze mam w apteczce.", date: "2026-02-16" }
    ],
    color: "#6366F1"
  },
  {
    id: 15,
    name: "Błyszczyk do ust Rose Gold",
    description: "Błyszczyk do ust w odcieniu Rose Gold. Nadaje ustom piękny połysk i delikatny kolor. Formuła nawilżająca z witaminą E. Nie klei się.",
    price: 22.99,
    originalPrice: 28.99,
    category: "Makijaz",
    inStock: true,
    rating: 4.4,
    reviews: [
      { author: "Weronika J.", rating: 5, text: "Piękny kolor i świetna trwałość!", date: "2026-02-07" },
      { author: "Paulina D.", rating: 4, text: "Ładny błyszczyk, nie wysusza ust.", date: "2026-02-21" }
    ],
    color: "#E11D48"
  }
];

function getProducts() {
  return PRODUCTS;
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function searchProducts(query) {
  if (!query) return PRODUCTS;
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

function getRelatedProducts(productId, count) {
  count = count || 3;
  var product = getProductById(productId);
  if (!product) return [];
  return PRODUCTS
    .filter(function(p) { return p.id !== product.id && p.category === product.category; })
    .slice(0, count);
}

function getRecommendedProducts(count) {
  count = count || 4;
  return PRODUCTS.slice().sort(function(a, b) { return b.rating - a.rating; }).slice(0, count);
}
