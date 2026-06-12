/* Eastport — Creative Explorations · 05 Website mockups */
const { DCSection, DCArtboard } = window;

const MARK_NAVY = 'assets/logos/eastport-mark-navy.png';
const MARK_WHITE = 'assets/logos/eastport-mark-white.png';

function WmNav({ active }) {
  return (
    <div className="wm-nav">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={MARK_NAVY} alt="" style={{ height: 28 }} />
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, letterSpacing: '.03em', color: 'var(--navy)' }}>EASTPORT<div style={{ fontWeight: 500, fontSize: 6.5, letterSpacing: '.34em', color: 'var(--steel)', marginTop: 1 }}>CRITICAL METALS</div></div>
      </div>
      <div className="links">
        {['Projects', 'About', 'Investors', 'News', 'Contact'].map((l) => (
          <span key={l} className={l === active ? 'on' : ''}>{l}</span>
        ))}
        <span className="wm-cta">Investor deck</span>
      </div>
    </div>
  );
}

function WmUtil() {
  return (
    <div className="wm-util">
      <span>TSXV:EVI <b>C$0.33</b> <span className="up">▲ 3.1%</span></span>
      <span>OTCQB:EVIIF <b>US$0.24</b> <span className="up">▲ 2.6%</span></span>
      <span style={{ marginLeft: 'auto', opacity: .7 }}>DELAYED 15 MIN · JUN 12 2026</span>
    </div>
  );
}

window.xWebSection = function () {
  return (
    <DCSection id="web" title="05 · Website mockups" subtitle="Homepage hero with a live-market utility bar, and a project page where the map figure is the hero">

      <DCArtboard id="home" label="Homepage — hero + proof + portfolio" width={1280} height={1010}>
        <div className="xb xb--white" data-screen-label="Homepage" style={{ display: 'flex', flexDirection: 'column' }}>
          <WmUtil />
          <WmNav active="Projects" />

          <div style={{ position: 'relative', background: 'var(--navy)', color: '#fff', padding: '74px 64px 66px', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(760px 360px at 10% 120%, rgba(104,171,252,.3), transparent 70%)' }}></div>
            <img src={MARK_WHITE} alt="" style={{ position: 'absolute', right: -90, top: -130, width: 600, opacity: .09 }} />
            <div style={{ position: 'relative', maxWidth: 700 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--sky)' }}>Copper · Nickel · Cobalt · Uranium · REE</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 54, lineHeight: 1.02, letterSpacing: '-0.02em', margin: '18px 0 0' }}>Five critical metals. One proven jurisdiction.</h1>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-on-dark)', maxWidth: 540, margin: '20px 0 0' }}>Eastport explores and advances a 100%-held portfolio across Botswana — drill-ready, road-accessible, and funded for 2026.</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
                <button className="mi-btn" style={{ background: 'var(--azure)' }}><span className="lbl">Explore the projects</span></button>
                <span className="mi-link" style={{ color: '#fff', border: '1.5px solid rgba(255,255,255,.35)', borderRadius: 6, padding: '11px 18px' }}><span>2026 investor deck</span><span className="ar">→</span></span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid var(--line)' }}>
            {[['5', 'Projects, 100% held'], ['2,140 km²', 'Granted licence ground'], ['50,000 m', 'Historic drilling'], ['C$4.2M', 'Cash — fully funded 2026']].map(([v, k], i) => (
              <div key={k} className="wm-stat" style={{ padding: '26px 30px', borderLeft: i ? '1px solid var(--line)' : 'none' }}>
                <div className="v">{v}</div>
                <div className="k">{k}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--cloud)', padding: '44px 64px 50px', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ height: 3, width: 56, background: 'linear-gradient(90deg,var(--marine),var(--azure),var(--sky))', borderRadius: 2, marginBottom: 12 }}></div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--navy)', margin: 0 }}>The portfolio</h2>
              </div>
              <span className="mi-link"><span>All five projects</span><span className="ar">→</span></span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 26 }}>
              {[
                ['Matsitama', 'CU · COPPER', 'var(--cu)', 'Drilling', '42.0m @ 1.83% Cu', 'Flagship — Tlou & Phiri zones, open along strike'],
                ['Foley', 'U · URANIUM', 'var(--u)', 'Exploration', '115,000+ soil samples', 'Calcrete-hosted target on granted ground'],
                ['Sua Pan', 'REE · RARE EARTHS', 'var(--ree)', 'Discovery', '38 km anomalous trend', 'Lanthanide-enriched clays, first-pass augering'],
              ].map(([n, c, col, stage, stat, d]) => (
                <div key={n} className="mi-card" style={{ width: 'auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="cm" style={{ color: col, background: 'color-mix(in srgb, ' + 'currentColor' + ' 0%, transparent)', backgroundColor: 'rgba(4,33,78,.05)' }}>{c}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.1em', color: 'var(--azure)' }}>{stage.toUpperCase()}</span>
                  </div>
                  <div className="pn" style={{ fontSize: 19, marginTop: 12 }}>{n}</div>
                  <div className="ps" style={{ fontSize: 11.5, color: 'var(--ink)', fontWeight: 600 }}>{stat}</div>
                  <div style={{ fontSize: 12, color: 'var(--steel)', lineHeight: 1.5, marginTop: 8 }}>{d}</div>
                  <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--line-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--azure)' }}>View project</span>
                    <span style={{ color: 'var(--azure)' }}>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="project" label="Project page — Matsitama" width={1280} height={1010}>
        <div className="xb" data-screen-label="Project page" style={{ display: 'flex', flexDirection: 'column' }}>
          <WmNav active="Projects" />

          <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--line)', padding: '30px 64px 28px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.06em', color: 'var(--mute)' }}>PROJECTS / BOTSWANA / <span style={{ color: 'var(--azure)' }}>MATSITAMA</span></div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, letterSpacing: '-0.02em', color: 'var(--navy)', margin: 0 }}>Matsitama Copper</h1>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', color: 'var(--cu)', background: 'rgba(178,106,60,.1)', borderRadius: 3, padding: '4px 9px' }}>CU · FLAGSHIP</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', color: 'var(--azure)', border: '1px solid var(--az-200)', borderRadius: 3, padding: '3px 9px' }}>DRILLING</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--steel)', marginTop: 10, letterSpacing: '.03em' }}>NE Botswana · 100% interest · 2,140 km² · 21°09'S 27°31'E</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 26, padding: '30px 64px', flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', flex: 1, minHeight: 380 }} className="sl-fig">
                <span className="ph">Interactive property map · GIS export</span>
                <div className="co" style={{ left: '12%', top: '16%' }}>
                  <div className="co-chip"><div className="co-k">Tlou zone</div><div className="co-v">1,400 m strike · open NE</div></div>
                  <div className="co-line" style={{ left: 18, top: '100%', width: 1, height: 32 }}></div>
                  <div className="co-dot" style={{ left: 14, top: 'calc(100% + 32px)' }}></div>
                </div>
                <div className="co-flag" style={{ right: '20%', top: '34%' }}>
                  <div className="body">NAK-25-014<small>42.0M @ 1.83% CU</small></div>
                  <div className="stem" style={{ height: 30 }}></div>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--steel)', marginTop: 10, letterSpacing: '.05em', display: 'flex', justifyContent: 'space-between' }}>
                <span>Figure 3 — bedrock geology &amp; 2026 collars</span>
                <span>UTM 35S · 1:25,000</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 10, padding: '18px 20px' }}>
                <div className="x-kick x-kick--az" style={{ marginBottom: 6 }}>Key data</div>
                {[['Interest', '100%'], ['Licence area', '2,140 km²'], ['Historic drilling', '50,000 m'], ['2026 program', '8,000 m DD'], ['Headline intercept', '42.0m @ 1.83% Cu'], ['Next catalyst', 'Assays — Q3 2026']].map(([k, v]) => (
                  <div key={k} className="wm-row"><span className="k">{k}</span><span className="v">{v}</span></div>
                ))}
              </div>
              <button className="mi-btn" style={{ width: '100%' }}><span className="lbl">Download fact sheet</span></button>
              <div style={{ background: 'var(--nv-800)', borderRadius: 10, padding: '16px 20px', fontFamily: 'var(--font-mono)' }}>
                <div style={{ fontSize: 9, letterSpacing: '.16em', color: 'var(--sky)' }}>LIVE</div>
                <div style={{ fontSize: 13, color: '#fff', marginTop: 6 }}>TSXV:EVI <b style={{ fontWeight: 600 }}>C$0.33</b> <span style={{ color: '#5BC68C', fontSize: 11 }}>▲ 3.1%</span></div>
              </div>
            </div>
          </div>

          <div style={{ padding: '0 64px 40px' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 10, padding: '20px 24px' }}>
              <div className="x-kick x-kick--az">2026 assay highlights</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginTop: 14 }}>
                {[['NAK-25-014', '42.0m @ 1.83% Cu'], ['NAK-25-016', '28.4m @ 1.21% Cu'], ['NAK-25-019', '17.6m @ 2.05% Cu'], ['NAK-25-021', '33.8m @ 0.94% Cu']].map(([h, v]) => (
                  <div key={h} style={{ borderLeft: '1px solid var(--line)', paddingLeft: 14 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--steel)', letterSpacing: '.05em' }}>{h}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--navy)', marginTop: 4 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DCArtboard>

    </DCSection>
  );
};
