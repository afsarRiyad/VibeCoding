import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    eyebrow: 'Classic Exclusive',
    heading: "Women's Collection",
    offer: 'UPTO 40% OFF',
    cta: 'Shop Now',
    bgWatermark: 'BEST STYLE',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=720&q=80&auto=format&fit=crop',
    imageAlt: 'Woman in red coat with black hat',
  },
  {
    id: 2,
    eyebrow: 'New Arrivals',
    heading: "Men's Collection",
    offer: 'UPTO 30% OFF',
    cta: 'Shop Now',
    bgWatermark: 'TRENDING',
    image:
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=720&q=80&auto=format&fit=crop',
    imageAlt: 'Man in smart casual outfit',
  },
  {
    id: 3,
    eyebrow: 'Summer Sale',
    heading: "Kids' Collection",
    offer: 'UPTO 50% OFF',
    cta: 'Shop Now',
    bgWatermark: 'EXPLORE',
    image:
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=720&q=80&auto=format&fit=crop',
    imageAlt: 'Kids in colourful outfits',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 350);
    },
    [animating, current]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  // Auto-play every 5 s
  useEffect(() => {
    const t = setTimeout(next, 5000);
    return () => clearTimeout(t);
  }, [current, next]);

  const slide = slides[current];

  return (
    <section className="hero-slider" aria-label="Featured collections">
      {/* Background watermark text */}
      <span className="hero-watermark" aria-hidden="true">
        {slide.bgWatermark}
      </span>

      <div className="hero-inner">
        {/* ── Left: copy ── */}
        <div className={`hero-copy ${animating ? 'hero-copy--exit' : 'hero-copy--enter'}`}>
          <p className="hero-eyebrow">{slide.eyebrow}</p>
          <h1 className="hero-heading">{slide.heading}</h1>
          <p className="hero-offer">{slide.offer}</p>
          <button className="hero-btn" type="button">
            {slide.cta}
            <span className="hero-btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>

        {/* ── Right: image inside decorative frame ── */}
        <div className="hero-visual">
          <div className="hero-frame">
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.imageAlt}
              className={`hero-img ${animating ? 'hero-img--exit' : 'hero-img--enter'}`}
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* ── Dot navigation ── */}
      <nav className="hero-dots" aria-label="Slide navigation">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`hero-dot ${i === current ? 'hero-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
          />
        ))}
      </nav>

      <style>{`
        /* ─── Container ─── */
        .hero-slider {
          position: relative;
          background: #f5f5f5;
          overflow: hidden;
          min-height: min(92vh, 640px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ─── Watermark ─── */
        .hero-watermark {
          position: absolute;
          bottom: -0.15em;
          left: 0;
          font-size: clamp(72px, 18vw, 200px);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: rgba(0, 0, 0, 0.055);
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
          line-height: 1;
          transition: opacity 0.35s ease;
        }

        /* ─── Inner layout ─── */
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          padding: 60px 40px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
        }

        /* ─── Copy ─── */
        .hero-copy {
          max-width: 480px;
        }
        .hero-copy--enter {
          animation: copyIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-copy--exit {
          animation: copyOut 0.35s ease forwards;
        }
        @keyframes copyIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes copyOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-16px); }
        }

        .hero-eyebrow {
          font-size: 15px;
          font-weight: 400;
          color: #555;
          margin: 0 0 10px;
          letter-spacing: 0.02em;
        }
        .hero-heading {
          font-size: clamp(28px, 4.5vw, 48px);
          font-weight: 700;
          color: #111;
          margin: 0 0 14px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .hero-offer {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #333;
          margin: 0 0 32px;
          text-transform: uppercase;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 13px 28px;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s, transform 0.15s;
        }
        .hero-btn:hover {
          background: #333;
          transform: translateX(2px);
        }
        .hero-btn-arrow {
          font-size: 16px;
          transition: transform 0.2s;
        }
        .hero-btn:hover .hero-btn-arrow {
          transform: translateX(4px);
        }

        /* ─── Visual / frame ─── */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-frame {
          position: relative;
          width: min(420px, 100%);
          aspect-ratio: 3 / 4;
        }
        /* white decorative border offset inward on top-left */
        .hero-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 3px solid #fff;
          transform: translate(-18px, -18px);
          z-index: 2;
          pointer-events: none;
        }
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          border-radius: 0;
        }
        .hero-img--enter {
          animation: imgIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-img--exit {
          animation: imgOut 0.35s ease forwards;
        }
        @keyframes imgIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes imgOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.97); }
        }

        /* ─── Dots ─── */
        .hero-dots {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1.5px solid #555;
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s, border-color 0.25s, transform 0.2s;
        }
        .hero-dot--active {
          background: #111;
          border-color: #111;
          transform: scale(1.25);
        }
        .hero-dot:hover:not(.hero-dot--active) {
          border-color: #111;
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 48px 24px 72px;
            gap: 36px;
          }
          .hero-copy {
            max-width: 100%;
            order: 2;
          }
          .hero-visual {
            order: 1;
          }
          .hero-frame {
            width: min(300px, 80vw);
          }
          .hero-frame::before {
            transform: translate(-12px, -12px);
          }
          .hero-watermark {
            font-size: clamp(56px, 22vw, 120px);
          }
          .hero-btn {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .hero-slider {
            min-height: auto;
          }
          .hero-inner {
            padding: 36px 20px 64px;
            gap: 28px;
          }
          .hero-frame {
            width: min(240px, 72vw);
          }
          .hero-frame::before {
            transform: translate(-9px, -9px);
            border-width: 2px;
          }
          .hero-heading {
            font-size: clamp(24px, 7vw, 32px);
          }
          .hero-dots {
            bottom: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-copy--enter,
          .hero-copy--exit,
          .hero-img--enter,
          .hero-img--exit {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
