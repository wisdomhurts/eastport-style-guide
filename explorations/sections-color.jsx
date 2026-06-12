/* Eastport — Creative Explorations · 01 Color, expanded */
const { DCSection, DCArtboard } = window;

const AZ_STEPS = [
  ['az-050','#EDF4FE','section washes, row hover'],
  ['az-100','#D5E5FD','chip fills, chart tint 1'],
  ['az-200','#AECCFB','chart tint 2'],
  ['az-300','#7FADF9','chart tint 3, links on dark'],
  ['az-400','#4A8BF8','hover on dark'],
  ['az-500','#156AF8','the accent — links, active'],
  ['az-600','#0F57D6','pressed'],
  ['az-700','#0B45AC','strokes on tints'],
  ['az-800','#083481','deep chart stroke'],
  ['az-900','#052457','near-navy depth'],
];
const NV_STEPS = [
  ['nv-050','#E9EFF8','coolest paper wash'],
  ['nv-100','#C9D6EA','hairlines on ice'],
  ['nv-200','#9AB0D2','muted data strokes'],
  ['nv-300','#6886B2','secondary on dark'],
  ['nv-400','#3D6191','steel-blue mid'],
  ['nv-500','#1B4271','panel hover'],
  ['nv-600','#04214E','brand navy — anchor'],
  ['nv-700','#031A3E','dark panels'],
  ['nv-800','#021737','footers, dark decks'],
  ['nv-900','#010E22','deep-field background'],
];

function XLadder({ title, steps, whiteFrom }) {
  return (
    <div className="x-ladder-col">
      <div className="x-kick">{title}</div>
      <div className="x-ladder">
        {steps.map(([t, h, use], i) => (
          <div key={t} className="x-step" style={{ background: h, color: i >= whiteFrom ? 'rgba(255,255,255,.88)' : 'var(--ink)' }}>
            <span>{t}</span>
            <span className="use">{use}</span>
            <span>{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function XTreat({ id, name, recipe, cap, filter, blend, blendColor, scrim }) {
  return (
    <div className="x-treat">
      <div className="frame">
        <image-slot id={id} shape="rect" placeholder="Drop aerial photography" style={{ width: '100%', height: '210px', display: 'block', filter: filter }}></image-slot>
        <div className="overlay" style={{ background: blendColor, mixBlendMode: blend }}></div>
        <div className="scrim" style={{ background: scrim }}><span className="cap">{cap}</span></div>
      </div>
      <div className="meta">
        <div className="n">{name}</div>
        <div className="recipe">{recipe}</div>
      </div>
    </div>
  );
}

window.xColorSection = function () {
  return (
    <DCSection id="color" title="01 · Color, expanded" subtitle="Tonal ladders for depth, three new accent directions, photographic treatments, and the spectrum put to work">

      <DCArtboard id="ladders" label="Tonal ladders — Azure & Navy" width={880} height={620}>
        <div className="xb xb--white" data-screen-label="Tonal ladders">
          <div className="x-pad">
            <div className="x-kick x-kick--az">Depth without new hues</div>
            <div className="x-ladders">
              <XLadder title="Azure ladder" steps={AZ_STEPS} whiteFrom={4} />
              <XLadder title="Navy ladder" steps={NV_STEPS} whiteFrom={3} />
              <div>
                <div className="x-kick">Rules of use</div>
                <div className="x-rules">
                  <div className="r"><b>050–200</b> are washes and tints. Never type.</div>
                  <div className="r"><b>300–400</b> exist for charts and links on dark surfaces only.</div>
                  <div className="r"><b>az-500</b> is the only azure that touches UI chrome.</div>
                  <div className="r"><b>600+</b> carry pressed states, chart strokes and dark panels.</div>
                  <div className="r">The ratio law holds: <b>azure ≤ 4%</b> of any page.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="accents" label="Three new accent directions" width={880} height={620}>
        <div className="xb xb--white" data-screen-label="Accent directions">
          <div className="x-pad">
            <div className="x-kick x-kick--az">Beyond the blues — each one rationed, each one earns its place</div>

            <div className="x-accent" style={{ marginTop: 10 }}>
              <div>
                <div className="nm">Kalahari Copper</div>
                <div className="x-kick tag">The discovery metal</div>
              </div>
              <div>
                <div className="x-chips">
                  <div className="x-chip" style={{ background: 'var(--copper-300)', color: '#fff' }}>300 · #D89B6A</div>
                  <div className="x-chip" style={{ background: 'var(--copper-500)', color: '#fff' }}>500 · #B26A3C</div>
                  <div className="x-chip" style={{ background: 'var(--copper-700)', color: '#fff' }}>700 · #7E4423</div>
                </div>
                <p className="use">Promote the commodity copper to a ceremonial accent: discovery headlines, assay highlights, premium print covers. Never beside azure at equal weight — one metal per moment.</p>
              </div>
              <div style={{ paddingTop: 4 }}>
                <div className="x-kick" style={{ marginBottom: 8 }}>In use</div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--copper-700)', background: 'rgba(178,106,60,.12)', borderRadius: 4, padding: '7px 10px', display: 'inline-block' }}>42.0m @ 1.83% Cu</span>
              </div>
            </div>

            <div className="x-accent">
              <div>
                <div className="nm">Salt Pan Neutrals</div>
                <div className="x-kick tag">Warm mineral ground</div>
              </div>
              <div>
                <div className="x-chips">
                  <div className="x-chip" style={{ background: 'var(--sand-050)', color: 'var(--ink)', border: '1px solid var(--line)' }}>050</div>
                  <div className="x-chip" style={{ background: 'var(--sand-100)', color: 'var(--ink)' }}>100</div>
                  <div className="x-chip" style={{ background: 'var(--sand-300)', color: 'var(--ink)' }}>300 · #D8CFC0</div>
                  <div className="x-chip" style={{ background: 'var(--sand-500)', color: '#fff' }}>500</div>
                  <div className="x-chip" style={{ background: 'var(--sand-700)', color: '#fff' }}>700</div>
                </div>
                <p className="use">A second, warmer paper for photography-led spreads, community &amp; ESG pages and print interiors. It lets Botswana's landscape carry the page while the blues rest.</p>
              </div>
              <div style={{ paddingTop: 4 }}>
                <div className="x-kick" style={{ marginBottom: 8 }}>In use</div>
                <div style={{ background: 'var(--sand-050)', border: '1px solid var(--sand-300)', borderRadius: 6, padding: '10px 12px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '.14em', color: 'var(--sand-700)' }}>FROM THE FIELD</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginTop: 4 }}>Dry season at Matsitama</div>
                </div>
              </div>
            </div>

            <div className="x-accent">
              <div>
                <div className="nm">Deep Field</div>
                <div className="x-kick tag">After-dark data register</div>
              </div>
              <div>
                <div className="x-chips">
                  <div className="x-chip" style={{ background: 'var(--df-bg)', color: 'rgba(220,231,245,.8)' }}>bg · #021026</div>
                  <div className="x-chip" style={{ background: 'var(--df-panel)', color: 'rgba(220,231,245,.8)' }}>panel</div>
                  <div className="x-chip" style={{ background: 'var(--sky)', color: 'var(--navy)' }}>data</div>
                  <div className="x-chip" style={{ background: '#3FBF7F', color: 'var(--navy)' }}>up</div>
                  <div className="x-chip" style={{ background: '#E0A33E', color: 'var(--navy)' }}>watch</div>
                </div>
                <p className="use">A blue-black terminal theme for investor dashboards, live-ticker bars and evening webinar decks. Signals are reserved for movement — never decoration.</p>
              </div>
              <div style={{ paddingTop: 4 }}>
                <div className="x-kick" style={{ marginBottom: 8 }}>In use</div>
                <div style={{ background: 'var(--df-bg)', border: '1px solid var(--df-line)', borderRadius: 6, padding: '10px 12px', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
                  <span style={{ color: 'rgba(220,231,245,.6)' }}>TSXV:EVI</span>{' '}
                  <span style={{ color: '#fff', fontWeight: 600 }}>C$0.33</span>{' '}
                  <span style={{ color: '#3FBF7F' }}>▲ 3.1%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="treatments" label="Photographic treatments — drop your aerial imagery in" width={1000} height={400}>
        <div className="xb xb--white" data-screen-label="Image treatments">
          <div className="x-pad">
            <div className="x-kick x-kick--az">One photograph, three tonal registers — drag a real photo onto any frame</div>
            <div className="x-treats">
              <XTreat id="treat-navy" name="Navy duotone" cap="The portfolio" filter="grayscale(1) contrast(1.08)" blend="color" blendColor="var(--navy)" scrim="linear-gradient(180deg,transparent 45%,rgba(2,23,55,.72))" recipe="grayscale → navy color-blend → 72% scrim" />
              <XTreat id="treat-azure" name="Azure wash" cap="Live from site" filter="grayscale(.9) contrast(1.05)" blend="soft-light" blendColor="var(--azure)" scrim="linear-gradient(180deg,rgba(4,33,78,.1),rgba(4,33,78,.55))" recipe="grayscale 90% → azure soft-light → 55% scrim" />
              <XTreat id="treat-copper" name="Copper dusk" cap="Discovery, announced" filter="grayscale(1) contrast(1.1)" blend="color" blendColor="var(--copper-500)" scrim="linear-gradient(180deg,transparent 40%,rgba(2,16,38,.78))" recipe="grayscale → copper color-blend → navy scrim" />
            </div>
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="spectrum" label="The spectrum at work" width={760} height={500}>
        <div className="xb xb--white" data-screen-label="Spectrum applications">
          <div className="x-pad" style={{ gap: 16 }}>
            <div className="x-kick x-kick--az">The dawn-fan gradient, three sanctioned uses</div>

            <div className="x-spec-demo" style={{ padding: '18px 20px' }}>
              <div style={{ height: 3, width: 64, background: 'linear-gradient(90deg,var(--marine),var(--azure),var(--sky))', borderRadius: 2 }}></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, color: 'var(--navy)', marginTop: 10, letterSpacing: '-0.02em' }}>A signature above headlines</div>
              <div className="x-note" style={{ marginTop: 4 }}>A 3px gradient tick replaces generic rules — small, ownable, repeatable.</div>
            </div>

            <div className="x-spec-demo" style={{ background: 'var(--navy)', padding: '18px 20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(420px 200px at 12% 115%, rgba(104,171,252,.32), transparent 70%)' }}></div>
              <div style={{ position: 'relative' }}>
                <div className="x-kick" style={{ color: 'var(--sky)' }}>Dawn glow</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, color: '#fff', marginTop: 6, letterSpacing: '-0.02em' }}>A horizon, not a gradient</div>
                <div className="x-note" style={{ color: 'rgba(220,231,245,.65)', marginTop: 4 }}>One radial source, low on the frame — used on hero and closing surfaces only.</div>
              </div>
            </div>

            <div className="x-spec-demo" style={{ padding: '18px 20px' }}>
              <div className="x-kick" style={{ marginBottom: 12 }}>Chart tints — the ladder is the palette</div>
              <div className="x-bars">
                <div style={{ height: '34%', background: 'var(--az-100)' }}></div>
                <div style={{ height: '48%', background: 'var(--az-200)' }}></div>
                <div style={{ height: '42%', background: 'var(--az-300)' }}></div>
                <div style={{ height: '64%', background: 'var(--az-400)' }}></div>
                <div style={{ height: '88%', background: 'var(--az-500)' }}></div>
                <div style={{ height: '100%', background: 'var(--nv-600)' }}></div>
              </div>
            </div>

          </div>
        </div>
      </DCArtboard>

    </DCSection>
  );
};
