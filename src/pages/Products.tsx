import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X, Star, ChevronRight, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";
import { SectionHeading } from '@/components/SectionHeading';
import { ProductImage } from '@/components/ProductImage';
import { products, productCategories, business, type Product } from '@/data/site';

export default function Products() {
  // useReveal();
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');
  const [accessoryType, setAccessoryType] = useState<string | null>(null);
  const [quickView, setQuickView] = useState<Product | null>(null);

  useEffect(() => {
    const handleBack = () => {
      if (accessoryType) {
        setAccessoryType(null);
      }
    };

    window.addEventListener('popstate', handleBack);

    return () => {
      window.removeEventListener('popstate', handleBack);
    };
  }, [accessoryType]);

  const openQuickView = (product: Product) => {
    window.history.pushState({ quickView: true }, '', window.location.href);
    setQuickView(product);
  };

  const closeQuickView = () => {
    if (window.history.state?.quickView) {
      window.history.back();
    } else {
      setQuickView(null);
    }
  };

 const filtered = useMemo(() => {
  let result = products.filter((p) => {

    // All → සියලුම products
    const matchCat =
      category === 'All'
        ? true
        : p.category === category;

    // Components / Accessories
    // subcategory එකක් select කළාම ඒ subcategory එකේ products විතරයි
    const matchSubcategory =
  category === 'Components & Accessories' && accessoryType
    ? p.subcategory === accessoryType
    : true;

    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    return matchCat && matchSubcategory && matchSearch;
  });

  if (sort === 'price-low') {
    result = [...result].sort((a, b) => a.price - b.price);
  }

  if (sort === 'price-high') {
    result = [...result].sort((a, b) => b.price - a.price);
  }

  if (sort === 'rating') {
    result = [...result].sort((a, b) => b.rating - a.rating);
  }

  return result;
}, [category, accessoryType, search, sort]);

  return (
    <div className="pt-4 md:pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Products"
          title={<>Premium Tech <span className="gradient-text">Products</span></>}
          subtitle="Genuine products from the world's leading brands, all backed by warranty. Filter, search, and inquire on WhatsApp."
        />

        {/* Search + filter bar */}
        <div className="mt-12 glass-card p-5 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full glass rounded-full pl-12 pr-4 py-3 text-sm outline-none focus:border-neon-blue/50 transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-5 h-5 text-slate-500" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="glass rounded-full px-4 py-3 text-sm outline-none cursor-pointer focus:border-neon-blue/50 transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                window.history.pushState({ category: cat }, '', window.location.href);
                setCategory(cat);
                setAccessoryType(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === cat
                  ? 'bg-gradient-to-r from-primary-500 to-neon-blue text-ink-950 shadow-glow'
                  : 'glass text-slate-300 hover:border-neon-blue/50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

{/* 🔴 // Product ඇතුලේ තියන Components & Accessories එකේ Categories Coard එක  */}

        {/* Components & Accessories Categories */}
{category === 'Components & Accessories' && !accessoryType && (
  <div className="mt-10">
    <h2 className="font-display text-2xl font-bold mb-2">
      Components & Accessories
    </h2>

    <p className="text-sm text-slate-400 mb-6">
      Choose a category
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Components */}
      <button
        onClick={() => {
          window.history.pushState(
            { accessory: 'Components' },
            '',
            window.location.href
          );
          setAccessoryType('Components');
        }}
        className="group glass-card overflow-hidden text-left hover:border-cyan-400/50 transition-all"
      >
        <div className="h-52 bg-slate-900/50 flex items-center justify-center overflow-hidden">
          <img
            src="/products/components.jpeg"
            alt="Components"
            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl font-bold">
            Components
          </h3>
        </div>
      </button>

      {/* Accessories */}
      <button
        onClick={() => {
          window.history.pushState(
            { accessory: 'Accessories' },
            '',
            window.location.href
          );
          setAccessoryType('Accessories');
        }}
        className="group glass-card overflow-hidden text-left hover:border-cyan-400/50 transition-all"
      >
        <div className="h-52 bg-slate-900/50 flex items-center justify-center overflow-hidden">
          <img
            src="/products/accessories.jpeg"
            alt="Accessories"
            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl font-bold">
            Accessories
          </h3>
        </div>
      </button>

    </div>
  </div>
)}

{/* 🔴 // Product ඇතුලේ තියන Components එකේ Categories Coard එක  */}

{/* Components Categories */}
        {category === 'Components' && !accessoryType && (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold mb-2">
              Components
            </h2>

            <p className="text-sm text-slate-400 mb-6">
              Choose a category
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <button
                onClick={() => {
                  window.history.pushState({ Components: 'RAM' }, '', window.location.href);
                  setAccessoryType('RAM');
                }}
                className="group glass-card overflow-hidden text-left hover:border-cyan-400/50 transition-all"
              >
                <div className="h-52 bg-slate-900/50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/products/ram.jpeg"
                    alt="RAM"
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold">
                    RAM
                  </h3>
                </div>
              </button>

              <button
                onClick={() => {
                  window.history.pushState({ Components: 'HDD' }, '', window.location.href);
                  setAccessoryType('HDD');
                }}
                className="group glass-card overflow-hidden text-left hover:border-cyan-400/50 transition-all"
              >
                <div className="h-52 bg-slate-900/50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/products/hdd.jpeg"
                    alt="HDD"
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold">
                    HDD
                  </h3>
                </div>
              </button>

              <button
                onClick={() => {
                  window.history.pushState({ Components: 'SSD' }, '', window.location.href);
                  setAccessoryType('SSD');
                }}
                className="group glass-card overflow-hidden text-left hover:border-cyan-400/50 transition-all"
              >
                <div className="h-52 bg-slate-900/50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/products/ssd.jpeg"
                    alt="SSD"
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold">
                    SSD
                  </h3>
                </div>
              </button>

            </div>
          </div>
        )}


{/* Products grid */}
{(
  category !== 'Components & Accessories' ||
  accessoryType
) && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group glass-card overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/40">
                  <ProductImage
                    name={p.name}
                    image={p.image}
                    className="w-full h-full object-contain p-3 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">

                    {p.stock === "in-stock" ? (
                      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        <CheckCircle2 className="w-3 h-3" />
                        In Stock
                      </span>
                    ) : (
                      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        <XCircle className="w-3 h-3" />
                        Out of Stock
                      </span>
                    )}

                    {p.badge === "new" && (
                      <span className="inline-flex w-fit rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        NEW
                      </span>
                    )}

                    {p.badge === "Used" && (
                      <span className="inline-flex w-fit rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        Used
                      </span>
                    )}

                    {/* <span className="badge bg-primary-500/90 text-white flex items-center gap-1">
    <ShieldCheck className="w-3 h-3" />
    {p.warranty}
  </span> */}

                  </div>
                  <button
                    onClick={() => openQuickView(p)}
                    className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="btn-ghost !py-2.5 !px-5 text-sm">Quick View</span>
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-3.5 h-3.5 ${j < p.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} />
                    ))}
                    <span className="text-xs text-slate-500 ml-1">({p.category})</span>
                  </div>
                  <h3 className="font-display font-semibold text-base mb-1 line-clamp-1">{p.name}</h3>
                  <p className="text-xs text-slate-400 mb-3 line-clamp-2">{p.description}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      {p.oldPrice && <span className="text-xs text-slate-500 line-through mr-2">Rs. {p.oldPrice.toLocaleString()}</span>}
                      <span className="font-mono font-bold text-lg text-neon-blue">Rs. {p.price.toLocaleString()}</span>
                    </div>
                    <a
                      href={`${business.social.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${p.name} (Rs. ${p.price.toLocaleString()}). Is it available?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] flex items-center justify-center transition-colors group/wa"
                      aria-label="WhatsApp inquiry"
                    >
                      <svg className="w-4.5 h-4.5 text-[#25D366] group-hover/wa:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found. Try a different search or category.
          </div>
        )}
      </div>

      {/* Quick view modal */}
      {quickView && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={closeQuickView}>
          <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" />
          <div className="relative glass-card max-w-3xl w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeQuickView} className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:border-neon-blue/50 transition-colors z-10">
              <X className="w-5 h-5" />
            </button>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square md:aspect-auto">
                <ProductImage name={quickView.name} image={quickView.image} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < quickView.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} />
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{quickView.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{quickView.description}</p>
                <div className="space-y-2 mb-5">
                  {quickView.specs.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-neon-blue" /> {s}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <ShieldCheck className="w-4 h-4 text-neon-blue" />
                  <span className="text-sm text-slate-300">{quickView.warranty}</span>
                </div>
                <div className="flex items-end justify-between mb-5">
                  {quickView.oldPrice && <span className="text-sm text-slate-500 line-through mr-2">Rs. {quickView.oldPrice.toLocaleString()}</span>}
                  <span className="font-mono font-bold text-2xl text-neon-blue">Rs. {quickView.price.toLocaleString()}</span>
                </div>
                <a
                  href={`${business.social.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${quickView.name} (Rs. ${quickView.price.toLocaleString()}). Is it available?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
