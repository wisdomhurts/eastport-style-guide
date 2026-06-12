/* Eastport — Creative Explorations · 03 Presentation templates + 04 Investor slide */
const { DCSection, DCArtboard } = window;

const MARK_W = 'assets/logos/eastport-mark-white.png';
const MARK_N = 'assets/logos/eastport-mark-navy.png';

function SlFoot({ n, dark }) {
  return (
    <div className="sl-foot">
      <span>EASTPORT CRITICAL METALS · CORPORATE PRESENTATION</span>
      <span>{n} · TSXV:EVI</span>
    </div>
  );
}

window.xSlidesSection = function () {
  return (
    <DCSection id="slides" title="03 · Presentation layout templates" subtitle="Eight reusable slide patterns — a deliberate rhythm of navy and paper. Shown at half scale (1920×1080 masters).">

      <DCArtboard id="sl01" label="01 · Title" width={960} height={540}>
        <div className="sl sl--navy" data-screen-label="Title slide">
          <div className="sl-strip"></div>
          <img src={MARK_W} alt="" style={{ position: 'absolute', right: -70, top: -120, width: 560, opacity: .1 }} />
          <div className="sl-pad">
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <img src={MARK_W} alt="" style={{ height: 34 }} />
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, letterSpacing: '.02em' }}>EASTPORT<div style={{ fontWeight: 500, fontSize: 7.5, letterSpacing: '.34em', color: 'var(--sky)', marginTop: 2 }}>CRITICAL METALS</div></div>
            </div>
            <div style={{ margin: 'auto 0', paddingBottom: 20 }}>
              <div className="sl-eyebrow">Corporate presentation · June 2026</div>
              <h1 className="sl-title" style={{ fontSize: 47, maxWidth: 600, marginTop: 13 }}>Five critical metals projects in Botswana.</h1>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-on-dark)', maxWidth: 470, margin: '15px 0 0' }}>A diversified, advanced-stage portfolio — copper, nickel, cobalt, uranium and rare earths — run by a lean, heavily-aligned team.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', gap: 8 }}>
                <span className="sl-tk">TSXV:<b>EVI</b></span>
                <span className="sl-tk">OTCQB:<b>EVIIF</b></span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(220,231,245,.5)', textAlign: 'right' }}>eastportcmc.com<br />Vancouver · Gaborone</div>
            </div>
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="sl02" label="02 · Section divider" width={960} height={540}>
        <div className="sl sl--cloud" data-screen-label="Section divider">
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg,var(--navy),var(--marine) 32%,var(--azure) 58%,var(--sky) 80%,var(--mist))' }}></div>
          <div className="sl-pad">
            <div className="sl-eyebrow">Section two</div>
            <div style={{ margin: 'auto 0', display: 'flex', alignItems: 'baseline', gap: 30 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 128, lineHeight: .9, letterSpacing: '-0.04em', color: 'var(--navy)' }}>02</div>
              <div>
                <h1 className="sl-title" style={{ fontSize: 38 }}>The Matsitama copper belt</h1>
                <p style={{ fontSize: 13.5, color: 'var(--slate)', maxWidth: 380, margin: '10px 0 0', lineHeight: 1.55 }}>Why a 50-year-old district is still underexplored — and what 50,000 metres of core tells us.</p>
              </div>
            </div>
            <SlFoot n="07" />
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="sl03" label="03 · KPI trio" width={960} height={540}>
        <div className="sl" data-screen-label="KPI trio">
          <div className="sl-strip"></div>
          <div className="sl-pad">
            <div className="sl-eyebrow">The portfolio at a glance</div>
            <h1 className="sl-title" style={{ fontSize: 30, marginTop: 10 }}>Scale, ownership, and runway.</h1>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center', marginTop: 10 }}>
              {[['5', 'projects', 'Across Botswana\u2019s three proven mineral belts'], ['100%', 'owned', 'No earn-ins, no royalties on the flagship'], ['50,000 m', 'of core', 'Historic drilling de-risks 2026 targeting']].map(([v, k, d], i) => (
                <div key={k} style={{ padding: '0 34px', borderLeft: i ? '1px solid var(--line)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, letterSpacing: '-0.02em', color: 'var(--navy)', fontVariantNumeric: 'tabular-nums' }}>{v}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--azure)', marginTop: 6 }}>{k}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--steel)', marginTop: 10, lineHeight: 1.5 }}>{d}</div>
                </div>
              ))}
            </div>
            <SlFoot n="04" />
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="sl04" label="04 · Full-bleed map" width={960} height={540}>
        <div className="sl" data-screen-label="Full-bleed map">
          <div className="sl-fig" style={{ position: 'absolute', inset: 0, border: 'none' }}>
            <span className="ph">High-resolution GIS export · 1:25,000</span>
          </div>
          <div className="co" style={{ left: '16%', top: '22%' }}>
            <div className="co-chip"><div className="co-k">Tlou zone</div><div className="co-v">1,400 m strike · open NE</div></div>
            <div className="co-line" style={{ left: 18, top: '100%', width: 1, height: 38 }}></div>
            <div className="co-dot" style={{ left: 14, top: 'calc(100% + 38px)' }}></div>
          </div>
          <div className="co-flag" style={{ right: '24%', top: '38%' }}>
            <div className="body">NAK-25-014<small>42.0M @ 1.83% CU</small></div>
            <div className="stem" style={{ height: 34 }}></div>
          </div>
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--surface)', borderTop: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', gap: 18, padding: '13px 24px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: 'var(--azure)', letterSpacing: '.08em' }}>FIGURE 3</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>Matsitama — bedrock geology &amp; 2026 collars</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--steel)', marginLeft: 'auto', letterSpacing: '.05em' }}>UTM 35S · WGS84 · 1:25,000</span>
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="sl05" label="05 · Drill results" width={960} height={540}>
        <div className="sl sl--navy" data-screen-label="Drill results">
          <div className="sl-strip"></div>
          <div className="sl-pad">
            <div className="sl-eyebrow">Assay highlights · Q2 2026</div>
            <h1 className="sl-title" style={{ fontSize: 30, marginTop: 10 }}>Matsitama keeps delivering grade.</h1>
            <table className="dtbl" style={{ marginTop: 26 }}>
              <thead><tr><th>Hole</th><th>From (m)</th><th>Interval (m)</th><th>Cu (%)</th><th>Zone</th></tr></thead>
              <tbody>
                <tr><td>NAK-25-014</td><td>118.0</td><td className="hl">42.0</td><td className="cu">1.83</td><td>Tlou</td></tr>
                <tr><td>NAK-25-016</td><td>96.5</td><td>28.4</td><td className="cu">1.21</td><td>Tlou</td></tr>
                <tr><td>NAK-25-019</td><td>204.0</td><td>17.6</td><td className="cu">2.05</td><td>Phiri</td></tr>
                <tr><td>NAK-25-021</td><td>61.2</td><td>33.8</td><td className="cu">0.94</td><td>Phiri</td></tr>
              </tbody>
            </table>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(220,231,245,.45)', marginTop: 14, letterSpacing: '.04em' }}>True widths estimated at 85–90% · full table in appendix · sample intervals for layout</div>
            <SlFoot n="11" />
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="sl06" label="06 · Milestones timeline" width={960} height={540}>
        <div className="sl" data-screen-label="Timeline">
          <div className="sl-strip"></div>
          <div className="sl-pad">
            <div className="sl-eyebrow">The next 18 months</div>
            <h1 className="sl-title" style={{ fontSize: 30, marginTop: 10 }}>A catalyst every quarter.</h1>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <div style={{ position: 'absolute', left: 0, right: 0, top: 8, height: 1, background: 'var(--border-strong)' }}></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)' }}>
                  {[['Q3 2025', 'Soil grids complete', 0], ['Q1 2026', 'Drilling resumes', 0], ['Q2 2026', 'Assays — Tlou', 1], ['Q4 2026', 'Maiden resource', 0], ['Q1 2027', 'PEA decision', 0]].map(([d, t, on]) => (
                    <div key={d} style={{ position: 'relative', paddingTop: 30 }}>
                      <div style={{ position: 'absolute', top: 2, left: 0, width: 13, height: 13, borderRadius: '50%', background: on ? 'var(--azure)' : 'var(--surface)', border: on ? '2px solid var(--azure)' : '2px solid var(--border-strong)', boxShadow: on ? '0 0 0 4px var(--focus-ring)' : 'none' }}></div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em', color: on ? 'var(--azure)' : 'var(--steel)' }}>{d}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginTop: 5, maxWidth: '12ch', lineHeight: 1.35 }}>{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <SlFoot n="14" />
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="sl07" label="07 · Narrative + figure" width={960} height={540}>
        <div className="sl" data-screen-label="Narrative and figure">
          <div className="sl-strip"></div>
          <div className="sl-pad" style={{ flexDirection: 'row', gap: 44 }}>
            <div style={{ width: '42%', display: 'flex', flexDirection: 'column' }}>
              <div className="sl-eyebrow">Why Botswana</div>
              <h1 className="sl-title" style={{ fontSize: 28, marginTop: 10 }}>A jurisdiction funds already trust.</h1>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--slate)', marginTop: 14 }}>Five decades of uninterrupted mining law, a single national cadastre, and royalty terms that survive elections. Diamonds built the institutions; critical metals inherit them.</p>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--slate)', marginTop: 10 }}>Eastport's licences sit on granted ground with year-round road access and grid power within 40 km.</p>
              <div className="sl-foot" style={{ justifyContent: 'flex-start' }}>EASTPORT · 08</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="sl-fig" style={{ flex: 1 }}><span className="ph">Licence locator — Botswana</span></div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--steel)', marginTop: 9, letterSpacing: '.05em' }}>Figure 1 — Eastport project locations, scale 1:6,000,000</div>
            </div>
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="sl08" label="08 · Closing / contact" width={960} height={540}>
        <div className="sl sl--navy" data-screen-label="Closing slide">
          <div className="sl-strip"></div>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(640px 320px at 18% 118%, rgba(104,171,252,.28), transparent 70%)' }}></div>
          <div className="sl-pad">
            <div style={{ margin: 'auto 0', paddingBottom: 10 }}>
              <img src={MARK_W} alt="" style={{ height: 46 }} />
              <h1 className="sl-title" style={{ fontSize: 40, marginTop: 22, maxWidth: 560 }}>The metals are critical. So is the timing.</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.9, color: 'rgba(220,231,245,.75)' }}>ir@eastportcmc.com<br />+1 604 000 0000 · eastportcmc.com</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span className="sl-tk">TSXV:<b>EVI</b></span>
                <span className="sl-tk">OTCQB:<b>EVIIF</b></span>
              </div>
            </div>
          </div>
        </div>
      </DCArtboard>

    </DCSection>
  );
};

window.xInvestorSection = function () {
  return (
    <DCSection id="investor" title="04 · Investor slide — share structure & highlights" subtitle="A single dense slide that answers the two questions every PM asks first. Sample figures — replace with registry data.">

      <DCArtboard id="capital" label="Capital structure & investment highlights — 1280×720" width={1280} height={720}>
        <div className="sl sl--navy" data-screen-label="Capital structure slide" style={{ fontSize: 14 }}>
          <div className="sl-strip"></div>
          <div className="sl-pad" style={{ padding: '52px 64px 40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div className="sl-eyebrow">Why Eastport</div>
                <h1 className="sl-title" style={{ fontSize: 36, marginTop: 10 }}>Investment highlights</h1>
              </div>
              <img src={MARK_W} alt="" style={{ height: 34, opacity: .9 }} />
            </div>

            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 420px', gap: 56, marginTop: 30, minHeight: 0 }}>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {[
                  ['01', 'One jurisdiction, five projects', '100%-held critical-metals portfolio across Botswana\u2019s proven belts.'],
                  ['02', 'Drill-ready copper', 'Matsitama: 42.0m @ 1.83% Cu headline intercept; 50,000 m of historic core de-risks targeting.'],
                  ['03', 'A jurisdiction funds trust', 'Five decades of stable mining law; Africa\u2019s top-ranked destination for mining investment.'],
                  ['04', 'Tight, aligned registry', '32% held by insiders and founders — management owns the outcome.'],
                  ['05', 'Funded to the next catalyst', 'C$4.2M cash; the 2026 drill program is fully funded.'],
                ].map(([n, t, d], i) => (
                  <div key={n} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, padding: '13px 0', borderTop: i ? '1px solid rgba(255,255,255,.1)' : 'none', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--sky)' }}>{n}</span>
                    <span>
                      <span style={{ fontSize: 16.5, fontWeight: 700, color: '#fff' }}>{t}</span>
                      <span style={{ display: 'block', fontSize: 13, lineHeight: 1.5, color: 'rgba(220,231,245,.68)', marginTop: 3 }}>{d}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(255,255,255,.045)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 10, padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--sky)' }}>Capital structure</div>
                <div style={{ marginTop: 14 }}>
                  {[
                    ['Shares outstanding', '94.2M', 0], ['Options (avg C$0.28)', '6.1M', 0], ['Warrants (avg C$0.45)', '11.8M', 0], ['Fully diluted', '112.1M', 1],
                    ['Share price (Jun 12)', 'C$0.33', 0], ['Market capitalization', 'C$31.1M', 0], ['Cash (Q2 2026)', 'C$4.2M', 0], ['Debt', 'Nil', 0],
                  ].map(([k, v, strong], i) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '8px 0', borderBottom: i === 3 ? '1px solid rgba(255,255,255,.22)' : '1px solid rgba(255,255,255,.08)' }}>
                      <span style={{ fontSize: 12.5, color: 'rgba(220,231,245,.65)' }}>{k}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: strong ? 15 : 13.5, fontWeight: 600, color: strong ? 'var(--sky)' : '#fff', fontVariantNumeric: 'tabular-nums' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(220,231,245,.5)', marginBottom: 9 }}>Ownership</div>
                  <div style={{ display: 'flex', height: 10, borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ width: '32%', background: 'var(--sky)' }}></div>
                    <div style={{ width: '18%', background: 'var(--azure)' }}></div>
                    <div style={{ width: '50%', background: 'rgba(255,255,255,.22)' }}></div>
                  </div>
                  <div style={{ display: 'flex', gap: 16, marginTop: 9, fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'rgba(220,231,245,.65)', flexWrap: 'wrap' }}>
                    <span><span style={{ color: 'var(--sky)' }}>■</span> Insiders 32%</span>
                    <span><span style={{ color: 'var(--azure)' }}>■</span> Institutions 18%</span>
                    <span><span style={{ color: 'rgba(255,255,255,.4)' }}>■</span> Retail &amp; HNW 50%</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="sl-foot" style={{ marginTop: 22 }}>
              <span>SAMPLE FIGURES FOR LAYOUT — REPLACE WITH CURRENT REGISTRY DATA</span>
              <span>09 · TSXV:EVI · OTCQB:EVIIF</span>
            </div>
          </div>
        </div>
      </DCArtboard>

    </DCSection>
  );
};
