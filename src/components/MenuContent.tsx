'use client';

import Image from 'next/image';
import MenuTabs, { type MenuTab } from './MenuTabs';
import type { getDictionary } from '@/lib/i18n';

/* ─────────────────────────── Types ─────────────────────────── */

interface MenuItem {
  name: string;
  price: string;
  diet?: 'v' | 'vg';
  description?: string;
}

interface MenuSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

interface MenuContentProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

/* ──────────────────── Dietary Badge ──────────────────── */

function DietBadge({ type }: { type: 'v' | 'vg' }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-full border border-copper/40 px-1.5 py-0.5 font-body text-[10px] leading-none tracking-wider text-copper/80">
      {type}
    </span>
  );
}

/* ──────────────────── Menu Item Row ──────────────────── */

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group flex items-baseline gap-3 py-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline flex-wrap gap-x-1">
          <span className="font-heading text-lg text-cream group-hover:text-copper transition-colors duration-300">
            {item.name}
          </span>
          {item.diet && <DietBadge type={item.diet} />}
        </div>
        {item.description && (
          <p className="mt-0.5 font-body text-sm text-cream/50 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
      {/* Dots */}
      <span className="hidden sm:block flex-1 border-b border-dotted border-cream/10 translate-y-[-4px]" />
      <span className="font-heading text-base text-copper whitespace-nowrap">
        {item.price}
      </span>
    </div>
  );
}

/* ──────────────────── Section Block ──────────────────── */

function SectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h3 className="font-heading text-xs tracking-[0.3em] text-copper uppercase">
          {section.title}
        </h3>
        {section.subtitle && (
          <p className="mt-1 font-body text-sm text-cream/40">{section.subtitle}</p>
        )}
        <div className="mt-2 h-px w-10 bg-copper/30" />
      </div>
      <div className="divide-y divide-cream/[0.04]">
        {section.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ──────────────────── Accent Image Strip ──────────────────── */

function AccentImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative my-12 h-48 sm:h-64 w-full overflow-hidden rounded-sm">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-dark/30" />
    </div>
  );
}

/* ──────────────────── Happy Hour Banner ──────────────────── */

function HappyHourBanner({ dict }: { dict: MenuContentProps['dict'] }) {
  return (
    <div className="relative my-14 overflow-hidden rounded-sm border border-copper/20 bg-gradient-to-r from-copper/[0.08] via-copper/[0.04] to-copper/[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(212,149,106,0.08),transparent_60%)]" />
      <div className="relative px-6 py-8 text-center sm:py-10">
        <p className="font-body text-[10px] tracking-[0.4em] text-copper/60 uppercase">
          Every week
        </p>
        <h3 className="mt-2 font-heading text-3xl sm:text-4xl text-copper">
          {dict.menu.happyHourTitle}
        </h3>
        <p className="mt-3 font-body text-sm text-cream/60">
          {dict.menu.happyHourSchedule}
        </p>
        <p className="mt-1 font-heading text-xl text-cream/90">
          {dict.menu.happyHourPrice}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DATA — Lunch & Dinner
   ═══════════════════════════════════════════════════════════════ */

const LUNCH_DINNER_SECTIONS: MenuSection[] = [
  {
    title: 'The Rule Breaker',
    items: [
      { name: 'Shellfish Tom Yum', price: '\u20AC18' },
    ],
  },
  {
    title: 'Fresh & Cured',
    items: [
      { name: 'Tuna Natsu', price: '\u20AC13' },
      { name: 'Papaya Salad', price: '\u20AC10' },
      { name: 'Satori Salad', price: '\u20AC9', diet: 'v' },
    ],
  },
  {
    title: 'Vegetables',
    items: [
      { name: 'KFC', price: '\u20AC11' },
      { name: 'Thai Yellow Curry', price: '\u20AC14', diet: 'v' },
      { name: 'Bhutani Potato Datkhi', price: '\u20AC10', diet: 'v' },
      { name: 'Tandoori Spice Broccoli', price: '\u20AC11', diet: 'v' },
    ],
  },
  {
    title: 'Dim Sum',
    items: [
      { name: 'Mushroom Bao', price: '\u20AC10', diet: 'vg' },
      { name: 'Lamb Dumplings', price: '\u20AC10' },
      { name: 'Nepalese Momo', price: '\u20AC11' },
      { name: 'Vegetable Chilli Dumpling', price: '\u20AC9', diet: 'v' },
    ],
  },
  {
    title: 'Grains',
    items: [
      { name: 'Tofu Tamago Fried Rice', price: '\u20AC10' },
      { name: 'Bang Bang Noodles', price: '\u20AC10' },
      { name: 'Beef Noodles', price: '\u20AC12' },
    ],
  },
  {
    title: 'Land',
    items: [
      { name: 'Sweet and Sour Pork', price: '\u20AC16' },
      { name: 'Butter Chicken', price: '\u20AC14' },
      { name: 'Mongolian Stir-Fried Beef', price: '\u20AC15' },
      { name: 'Crispy Duck Steak', price: '\u20AC15' },
      { name: 'Malay Beef Curry', price: '\u20AC16' },
    ],
  },
  {
    title: 'Sea',
    items: [
      { name: 'Sushi Sesame Squid', price: '\u20AC14' },
      { name: 'Asian Laksa', price: '\u20AC14' },
      { name: 'Mussels Red Curry', price: '\u20AC15' },
    ],
  },
  {
    title: 'Sides',
    items: [
      { name: 'Kimchi', price: '\u20AC8' },
      { name: 'Steamed Rice', price: '\u20AC5', diet: 'v' },
      { name: 'Wakame Salad', price: '\u20AC8', diet: 'v' },
    ],
  },
  {
    title: 'Bar Bites',
    items: [
      { name: 'Fried Calamari', price: '\u20AC13' },
      { name: 'Edamame', price: '\u20AC8', diet: 'vg' },
      { name: 'Thai Crispy Pork Belly', price: '\u20AC8' },
      { name: 'Mushroom Tempura', price: '\u20AC8', diet: 'v' },
      { name: 'Chicken Wings', price: '\u20AC10' },
      { name: 'Asian Hummus', price: '\u20AC7', diet: 'vg' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — Brunch
   ═══════════════════════════════════════════════════════════════ */

const BRUNCH_SECTIONS: MenuSection[] = [
  {
    title: "Hammett's Specials",
    items: [
      { name: 'Korean Omelette', price: '\u20AC11', diet: 'v' },
      { name: 'Guo Bao Buns', price: '\u20AC10' },
      { name: 'Keto Breakfast', price: '\u20AC11' },
      { name: 'Asian Vegan', price: '\u20AC13', diet: 'vg' },
    ],
  },
  {
    title: 'The Poached Ones',
    items: [
      { name: 'Eggs Benedict', price: '\u20AC13' },
      { name: 'Eggs Royale', price: '\u20AC14' },
      { name: 'Eggs Florentine', price: '\u20AC11', diet: 'v' },
    ],
  },
  {
    title: 'Sweet Stacks',
    items: [
      { name: 'Japanese Style Pancakes', price: '\u20AC10', diet: 'v' },
      { name: 'American Stacks', price: '\u20AC11' },
    ],
  },
  {
    title: 'Bubbles',
    items: [
      { name: 'Mimosa', price: '\u20AC9' },
      { name: 'Sakura', price: '\u20AC9' },
      { name: 'Prosecco Glass', price: '\u20AC6' },
    ],
  },
  {
    title: 'Shakes',
    items: [
      { name: 'Coconut & Pineapple', price: '\u20AC7' },
      { name: 'Chai Tea & Coffee', price: '\u20AC6' },
      { name: 'Sesame & Chocolate', price: '\u20AC7' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — Desserts
   ═══════════════════════════════════════════════════════════════ */

const DESSERT_SECTIONS: MenuSection[] = [
  {
    title: 'Sweet Endings',
    items: [
      { name: 'Sesame Ice Cream', price: '\u20AC8' },
      { name: 'Matcha-White Chocolate Fondant', price: '\u20AC8' },
      { name: 'Strawberry Coconut Cake', price: '\u20AC10' },
      { name: "Shepard's Banana Curd Brulee", price: '\u20AC8' },
    ],
  },
  {
    title: 'After Dinner Cocktails',
    items: [
      { name: 'Tiramisu Espresso Martini', price: '\u20AC11' },
      { name: 'Coconut Pie Martini', price: '\u20AC11' },
      { name: 'Yuzu & Matcha Mousse', price: '\u20AC10' },
    ],
  },
  {
    title: 'Liquors',
    items: [
      { name: 'Amaretto', price: '\u20AC5' },
      { name: 'Averna', price: '\u20AC4' },
      { name: 'Limoncello', price: '\u20AC4.50' },
      { name: 'Grappa Barrique', price: '\u20AC5.50' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — Cocktails
   ═══════════════════════════════════════════════════════════════ */

const COCKTAIL_SECTIONS: MenuSection[] = [
  {
    title: 'Gastro Signatures',
    items: [
      { name: 'Masaledaar Margarita', price: '\u20AC12' },
      { name: 'Kyoto Garden', price: '\u20AC12' },
      { name: 'Okinawa Blossom', price: '\u20AC10' },
      { name: 'Kami Yuzu', price: '\u20AC11' },
      { name: 'Shangai Bliss', price: '\u20AC10' },
      { name: 'Bushido', price: '\u20AC11' },
    ],
  },
  {
    title: 'Eastern Kicks',
    items: [
      { name: 'Kaizen', price: '\u20AC10' },
      { name: 'Far East Mule', price: '\u20AC11' },
      { name: 'PS Akira Martini', price: '\u20AC12' },
      { name: 'Tao Hetao', price: '\u20AC11' },
      { name: 'Japanese Mojito', price: '\u20AC12' },
      { name: 'Taiwan Spritz', price: '\u20AC9' },
      { name: 'Ying Yang', price: '\u20AC9' },
    ],
  },
  {
    title: 'Far East Delight',
    items: [
      { name: "Hammett's Mule", price: '\u20AC12' },
      { name: 'Palomasia', price: '\u20AC12' },
      { name: 'Spicy Mango Mojito', price: '\u20AC12' },
      { name: 'Asia Mukt', price: '\u20AC11' },
      { name: 'West Bengal Mule', price: '\u20AC11' },
      { name: 'Thai Daiquiri', price: '\u20AC9' },
      { name: 'Asian Spritz', price: '\u20AC9' },
      { name: 'Pomegranate Mimosa', price: '\u20AC9' },
      { name: 'Asiantucky Mule', price: '\u20AC11' },
      { name: 'Dekilla Myul', price: '\u20AC11' },
    ],
  },
  {
    title: 'Gastro Perfect Serve G&T',
    items: [
      { name: 'Gihon', price: '\u20AC9' },
      { name: 'Pink', price: '\u20AC9' },
      { name: 'Pondicherry', price: '\u20AC9' },
      { name: 'Eye Dragon', price: '\u20AC10' },
      { name: 'Cucumber Mint', price: '\u20AC11' },
      { name: 'Itachi', price: '\u20AC10' },
    ],
  },
  {
    title: 'Imperial Elixir Shots',
    items: [
      { name: 'Wyckoff Method', price: '\u20AC4' },
      { name: 'Fibonacci Shot', price: '\u20AC4' },
      { name: 'Imbalance', price: '\u20AC4' },
    ],
  },
  {
    title: 'Mocktails',
    items: [
      { name: 'White Mule', price: '\u20AC7' },
      { name: 'Royal Faujito', price: '\u20AC7' },
      { name: 'Asian Ice Tea', price: '\u20AC7' },
    ],
  },
  {
    title: 'Asian Beers',
    items: [
      { name: 'Sapporo', price: '\u20AC6.50' },
      { name: 'Tsingtao', price: '\u20AC6.50' },
      { name: 'Kirin Ichiban', price: '\u20AC6.50' },
      { name: 'Asahi', price: '\u20AC6' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — Wine List
   ═══════════════════════════════════════════════════════════════ */

interface WineItem {
  name: string;
  grape?: string;
  glass?: string;
  bottle?: string;
  region?: string;
  note?: string;
}

interface WineSection {
  title: string;
  subtitle?: string;
  highlight?: boolean;
  items: WineItem[];
}

const WINE_BY_GLASS: WineSection[] = [
  {
    title: 'Sparkling',
    items: [
      { name: 'Prosecco DOC', grape: 'Glera', glass: '\u20AC6', bottle: '\u20AC28' },
      { name: 'Moser Brut Ros\u00E9', grape: 'Pinot Noir', glass: '\u20AC8', bottle: '\u20AC36' },
    ],
  },
  {
    title: 'White',
    items: [
      { name: 'Vermentino di Sardegna', grape: 'Vermentino', glass: '\u20AC7', bottle: '\u20AC30' },
      { name: 'Marlborough Sauvignon Blanc', grape: 'Sauvignon Blanc', glass: '\u20AC8', bottle: '\u20AC34' },
      { name: 'Chablis', grape: 'Chardonnay', glass: '\u20AC10', bottle: '\u20AC44' },
    ],
  },
  {
    title: 'Ros\u00E9',
    items: [
      { name: "Whispering Angel", grape: 'Grenache Blend', glass: '\u20AC9', bottle: '\u20AC40' },
    ],
  },
  {
    title: 'Red',
    items: [
      { name: 'Chianti Classico', grape: 'Sangiovese', glass: '\u20AC8', bottle: '\u20AC34' },
      { name: 'Malbec Mendoza', grape: 'Malbec', glass: '\u20AC7', bottle: '\u20AC30' },
      { name: 'C\u00F4tes du Rh\u00F4ne', grape: 'Grenache / Syrah', glass: '\u20AC8', bottle: '\u20AC35' },
    ],
  },
  {
    title: 'Sweet & Fortified',
    items: [
      { name: "Taylor's LBV Port", grape: 'Touriga Nacional', glass: '\u20AC6' },
      { name: 'Moscato d\'Asti', grape: 'Moscato', glass: '\u20AC7', bottle: '\u20AC30' },
    ],
  },
];

const WINE_BOTTLES: WineSection[] = [
  {
    title: 'From Our Island',
    subtitle: 'Proudly featuring Maltese wines from local vineyards',
    highlight: true,
    items: [
      { name: 'Marsovin Primus', grape: 'Chardonnay', bottle: '\u20AC28', region: 'Malta' },
      { name: 'Meridiana Celsius', grape: 'Syrah / Cabernet', bottle: '\u20AC35', region: 'Malta' },
      { name: 'Camilleri Medina', grape: 'Gellewza', bottle: '\u20AC26', region: 'Malta' },
    ],
  },
  {
    title: 'France',
    items: [
      { name: 'Sancerre, Domaine Vacheron', grape: 'Sauvignon Blanc', bottle: '\u20AC48' },
      { name: 'Ch\u00E2teauneuf-du-Pape', grape: 'Grenache Blend', bottle: '\u20AC55' },
      { name: 'Chablis Premier Cru', grape: 'Chardonnay', bottle: '\u20AC52' },
    ],
  },
  {
    title: 'Italy',
    items: [
      { name: 'Barolo, Marchesi di Barolo', grape: 'Nebbiolo', bottle: '\u20AC65' },
      { name: 'Amarone della Valpolicella', grape: 'Corvina Blend', bottle: '\u20AC72' },
      { name: 'Gavi di Gavi', grape: 'Cortese', bottle: '\u20AC32' },
    ],
  },
  {
    title: 'Spain',
    items: [
      { name: 'Rioja Reserva', grape: 'Tempranillo', bottle: '\u20AC36' },
      { name: 'Albari\u00F1o R\u00EDas Baixas', grape: 'Albari\u00F1o', bottle: '\u20AC34' },
    ],
  },
  {
    title: 'Rest of World',
    items: [
      { name: 'Cloudy Bay Sauvignon Blanc', grape: 'Sauvignon Blanc', bottle: '\u20AC46', region: 'New Zealand' },
      { name: 'Penfolds Bin 389', grape: 'Cabernet / Shiraz', bottle: '\u20AC58', region: 'Australia' },
      { name: 'Catena Alta Malbec', grape: 'Malbec', bottle: '\u20AC44', region: 'Argentina' },
    ],
  },
  {
    title: "Sommelier's Selection",
    subtitle: 'Ask your server for our rotating premium pours',
    items: [
      { name: 'Opus One', grape: 'Cabernet Blend', bottle: '\u20AC320', region: 'Napa Valley' },
      { name: 'Dom P\u00E9rignon', grape: 'Chardonnay / Pinot Noir', bottle: '\u20AC280', region: 'Champagne' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   WINE ITEM ROW
   ═══════════════════════════════════════════════════════════════ */

function WineItemRow({ item }: { item: WineItem }) {
  return (
    <div className="group flex flex-wrap items-baseline gap-x-3 py-3">
      <div className="flex-1 min-w-0">
        <span className="font-heading text-lg text-cream group-hover:text-copper transition-colors duration-300">
          {item.name}
        </span>
        {item.grape && (
          <span className="ml-2 font-body text-xs text-cream/40">
            {item.grape}
          </span>
        )}
        {item.region && (
          <span className="ml-2 font-body text-[11px] tracking-wider text-copper/50 uppercase">
            {item.region}
          </span>
        )}
      </div>
      <span className="hidden sm:block flex-1 border-b border-dotted border-cream/10 translate-y-[-4px]" />
      <div className="flex gap-4 whitespace-nowrap font-heading text-base">
        {item.glass && (
          <span className="text-cream/60">
            <span className="text-[10px] font-body tracking-wider text-cream/30 mr-1">GL</span>
            {item.glass}
          </span>
        )}
        {item.bottle && (
          <span className="text-copper">
            <span className="text-[10px] font-body tracking-wider text-cream/30 mr-1">BT</span>
            {item.bottle}
          </span>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MenuContent({ dict }: MenuContentProps) {
  const tabs = [
    { id: 'lunch-dinner' as MenuTab, label: dict.menu.lunchDinner },
    { id: 'brunch' as MenuTab, label: dict.menu.brunch },
    { id: 'desserts' as MenuTab, label: dict.menu.desserts },
    { id: 'cocktails' as MenuTab, label: dict.menu.cocktails },
    { id: 'wine-list' as MenuTab, label: dict.menu.wineList },
  ];

  return (
    <MenuTabs tabs={tabs}>
      {(activeTab: MenuTab) => (
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          {/* ─── Lunch & Dinner ─── */}
          {activeTab === 'lunch-dinner' && (
            <div>
              {/* Rule Breaker + Fresh & Cured */}
              <SectionBlock section={LUNCH_DINNER_SECTIONS[0]} />
              <SectionBlock section={LUNCH_DINNER_SECTIONS[1]} />

              {/* Accent image */}
              <AccentImage
                src="/images/food/pork-belly-yakitori.jpg"
                alt="Pork belly yakitori"
              />

              {/* Vegetables + Dim Sum */}
              <SectionBlock section={LUNCH_DINNER_SECTIONS[2]} />
              <SectionBlock section={LUNCH_DINNER_SECTIONS[3]} />

              {/* Accent image */}
              <AccentImage
                src="/images/food/thai-vegan-curry.jpg"
                alt="Thai vegan curry"
              />

              {/* Grains + Land */}
              <SectionBlock section={LUNCH_DINNER_SECTIONS[4]} />
              <SectionBlock section={LUNCH_DINNER_SECTIONS[5]} />

              {/* Accent image */}
              <AccentImage
                src="/images/food/kfc.jpg"
                alt="KFC - Korean Fried Cauliflower"
              />

              {/* Sea + Sides */}
              <SectionBlock section={LUNCH_DINNER_SECTIONS[6]} />
              <SectionBlock section={LUNCH_DINNER_SECTIONS[7]} />

              {/* Accent image */}
              <AccentImage
                src="/images/food/chocolate-overdose.jpg"
                alt="Chocolate Overdose dessert"
              />

              {/* Bar Bites */}
              <SectionBlock section={LUNCH_DINNER_SECTIONS[8]} />
            </div>
          )}

          {/* ─── Brunch ─── */}
          {activeTab === 'brunch' && (
            <div>
              {BRUNCH_SECTIONS.map((section) => (
                <SectionBlock key={section.title} section={section} />
              ))}

              {/* Bottomless Brunch Callout */}
              <div className="relative mt-8 overflow-hidden rounded-sm border border-copper/20 bg-gradient-to-br from-copper/[0.06] to-transparent">
                <div className="px-6 py-8 text-center sm:py-10">
                  <p className="font-body text-[10px] tracking-[0.4em] text-copper/60 uppercase">
                    The ultimate
                  </p>
                  <h3 className="mt-2 font-heading text-3xl text-cream">
                    Bottomless Brunch
                  </h3>
                  <p className="mt-4 font-heading text-2xl text-copper">
                    {'\u20AC'}26 <span className="font-body text-sm text-cream/40">{dict.menu.perPerson}</span>
                  </p>
                  <p className="mt-3 font-body text-sm text-cream/50 max-w-md mx-auto">
                    {dict.menu.bottomlessBrunchNote}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ─── Desserts ─── */}
          {activeTab === 'desserts' && (
            <div>
              <AccentImage
                src="/images/food/chocolate-overdose.jpg"
                alt="Dessert selection"
              />
              {DESSERT_SECTIONS.map((section) => (
                <SectionBlock key={section.title} section={section} />
              ))}
            </div>
          )}

          {/* ─── Cocktails ─── */}
          {activeTab === 'cocktails' && (
            <div>
              {/* Signatures */}
              <SectionBlock section={COCKTAIL_SECTIONS[0]} />
              <SectionBlock section={COCKTAIL_SECTIONS[1]} />

              {/* Happy Hour Banner */}
              <HappyHourBanner dict={dict} />

              {/* Far East Delight */}
              <SectionBlock section={COCKTAIL_SECTIONS[2]} />
              <SectionBlock section={COCKTAIL_SECTIONS[3]} />

              {/* Happy Hour Banner again for emphasis */}
              <HappyHourBanner dict={dict} />

              {/* Shots, Mocktails, Beers */}
              <SectionBlock section={COCKTAIL_SECTIONS[4]} />
              <SectionBlock section={COCKTAIL_SECTIONS[5]} />
              <SectionBlock section={COCKTAIL_SECTIONS[6]} />
            </div>
          )}

          {/* ─── Wine List ─── */}
          {activeTab === 'wine-list' && (
            <div>
              {/* By the Glass */}
              <div className="mb-14">
                <div className="mb-8 text-center">
                  <p className="font-body text-[10px] tracking-[0.4em] text-copper/60 uppercase">
                    By the glass
                  </p>
                  <h2 className="mt-2 font-heading text-3xl text-cream">
                    Wines by the Glass
                  </h2>
                  <div className="mt-3 mx-auto h-px w-12 bg-copper/30" />
                </div>

                {WINE_BY_GLASS.map((section) => (
                  <div key={section.title} className="mb-10">
                    <h3 className="font-heading text-xs tracking-[0.3em] text-copper uppercase mb-2">
                      {section.title}
                    </h3>
                    <div className="h-px w-10 bg-copper/30 mb-4" />
                    <div className="divide-y divide-cream/[0.04]">
                      {section.items.map((item) => (
                        <WineItemRow key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottles */}
              <div>
                <div className="mb-8 text-center">
                  <p className="font-body text-[10px] tracking-[0.4em] text-copper/60 uppercase">
                    Full bottles
                  </p>
                  <h2 className="mt-2 font-heading text-3xl text-cream">
                    Wine Selection
                  </h2>
                  <div className="mt-3 mx-auto h-px w-12 bg-copper/30" />
                </div>

                {WINE_BOTTLES.map((section) => (
                  <div
                    key={section.title}
                    className={`mb-10 ${
                      section.highlight
                        ? 'relative rounded-sm border border-copper/20 bg-gradient-to-br from-copper/[0.06] to-transparent px-6 py-6'
                        : ''
                    }`}
                  >
                    {section.highlight && (
                      <div className="absolute top-3 right-4 flex items-center gap-1.5">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper/60" />
                        <span className="font-body text-[10px] tracking-[0.2em] text-copper/60 uppercase">
                          {dict.menu.fromOurIsland}
                        </span>
                      </div>
                    )}
                    <h3 className="font-heading text-xs tracking-[0.3em] text-copper uppercase mb-1">
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <p className="font-body text-xs text-cream/40 mb-3">
                        {section.subtitle}
                      </p>
                    )}
                    <div className="h-px w-10 bg-copper/30 mb-4" />
                    <div className="divide-y divide-cream/[0.04]">
                      {section.items.map((item) => (
                        <WineItemRow key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </MenuTabs>
  );
}
