/* Eastport — Creative Explorations · 06 Map figures + callout annotation kit */
const { DCSection, DCArtboard } = window;

const MARK_NAVY = 'assets/logos/eastport-mark-navy.png';

function NorthArrow({ style }) {
  return (
    <div style={Object.assign({ position: 'absolute', textAlign: 'center', zIndex: 5 }, style)}>
      <svg width="22" height="30" viewBox="0 0 22 30">
        <path d="M11 2 L17 24 L11 19 L5 24 Z" fill="var(--navy)" />
      </svg>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, color: 'var(--navy)', marginTop: 1 }}>N</div>
    </div>
  );
}

function ScaleBar({ style }) {
  return (
    <div style={Object.assign({ position: 'absolute', zIndex: 5 }, style)}>
      <div style={{ display: 'flex', height: 6, border: '1px solid var(--navy)', width: 160 }}>
        <div style={{ flex: 1, background: 'var(--navy)' }}></div>
        <div style={{ flex: 1, background: '#fff' }}></div>
        <div style={{ flex: 1, background: 'var(--navy)' }}></div>
        <div style={{ flex: 1, background: '#fff' }}></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 8.5, color: 'var(--navy)', marginTop: 3, width: 160 }}>
        <span>0</span><span>1</span><span>2 km</span>
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, color: 'var(--steel)', marginTop: 2 }}>1:25,000 · UTM 35S</div>
    </div>
  );
}

window.xMapSection = function () {
  return (
    <DCSection id="maps" title="06 · Map figures & callout annotations" subtitle="The branded figure frame is fixed; the linework below is schematic — a high-resolution GIS export drops into the figure area.">

      <DCArtboard id="mapfig" label="Branded map figure — Matsitama" width={1060} height={780}>
        <div className="xb xb--white mapframe" data-screen-label="Map figure">
          <div className="map-titlebar">
            <img src={MARK_NAVY} alt="" />
            <span className="t">Matsitama — bedrock geology &amp; 2026 drill collars</span>
            <span className="fig">FIGURE 3 · TSXV:EVI</span>
          </div>

          <div className="map-area">
            <svg width="100%" height="100%" viewBox="0 0 1056 656" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
              <path d="M 240 420 Q 300 300 420 280 Q 560 255 640 330 Q 700 390 640 450 Q 540 540 400 510 Q 280 485 240 420 Z" fill="rgba(178,106,60,.20)" stroke="rgba(178,106,60,.55)" strokeWidth="1" />
              <path d="M 620 110 Q 740 70 840 130 Q 920 180 880 260 Q 830 340 720 310 Q 620 280 600 200 Q 590 140 620 110 Z" fill="rgba(110,133,149,.18)" stroke="rgba(110,133,149,.5)" strokeWidth="1" />
              <line x1="150" y1="560" x2="900" y2="130" stroke="var(--slate)" strokeWidth="1.5" strokeDasharray="7 5" />
              <polygon points="120,90 660,40 960,170 930,560 330,620 100,430" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeDasharray="12 6" />
              <line x1="330" y1="470" x2="700" y2="290" stroke="var(--ink)" strokeWidth="1" />
              <line x1="322" y1="458" x2="338" y2="482" stroke="var(--ink)" strokeWidth="1" />
              <line x1="692" y1="278" x2="708" y2="302" stroke="var(--ink)" strokeWidth="1" />
              {[[392, 392], [438, 366], [488, 344], [540, 360], [586, 392]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="5.5" fill="var(--azure)" stroke="#fff" strokeWidth="1.5" />
              ))}
              {[[360, 440], [420, 430], [520, 410], [600, 430], [470, 300], [550, 310]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4.5" fill="none" stroke="var(--slate)" strokeWidth="1.3" />
              ))}
            </svg>

            <div className="map-coord" style={{ top: 8, left: '32%' }}>27°30'E</div>
            <div className="map-coord" style={{ top: 8, left: '68%' }}>27°35'E</div>
            <div className="map-coord" style={{ left: 8, top: '30%' }}>21°08'S</div>
            <div className="map-coord" style={{ left: 8, top: '70%' }}>21°12'S</div>
            <div style={{ position: 'absolute', left: '29%', top: '67%', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: 'var(--ink)' }}>A</div>
            <div style={{ position: 'absolute', left: '67.5%', top: '38%', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: 'var(--ink)' }}>A′</div>

            <div className="co-zone" style={{ left: '34%', top: '38%' }}>Tlou zone</div>
            <div className="co-zone" style={{ left: '62%', top: '14%' }}>Phiri zone</div>

            <div className="co" style={{ left: '8%', top: '12%' }}>
              <div className="co-chip"><div className="co-k">Licence EPL 094/2024</div><div className="co-v">2,140 km² · 100% Eastport</div></div>
              <div className="co-line" style={{ left: 22, top: '100%', width: 1, height: 26 }}></div>
              <div className="co-dot" style={{ left: 18, top: 'calc(100% + 26px)' }}></div>
            </div>

            <div className="co-flag" style={{ left: '44%', top: '36%' }}>
              <div className="body">NAK-25-014<small>42.0M @ 1.83% CU</small></div>
              <div className="stem" style={{ height: 56 }}></div>
            </div>

            <div className="co" style={{ right: '6%', top: '58%' }}>
              <div className="co-chip"><div className="co-k">Fault — Letl. shear</div><div className="co-v">Controls Cu lodes</div></div>
              <div className="co-line" style={{ left: -26, top: 12, width: 26, height: 1 }}></div>
              <div className="co-dot" style={{ left: -30, top: 8 }}></div>
            </div>

            <NorthArrow style={{ top: 16, right: 22 }} />
            <ScaleBar style={{ bottom: 18, left: 22 }} />
          </div>

          <div className="map-legend">
            <span className="i"><span style={{ width: 14, height: 10, background: 'rgba(178,106,60,.25)', border: '1px solid rgba(178,106,60,.6)' }}></span>Metasediments — Cu host</span>
            <span className="i"><span style={{ width: 14, height: 10, background: 'rgba(110,133,149,.22)', border: '1px solid rgba(110,133,149,.55)' }}></span>Gabbro — Ni-Cu</span>
            <span className="i"><span style={{ width: 18, borderTop: '1.5px dashed var(--slate)' }}></span>Fault</span>
            <span className="i"><span style={{ width: 18, borderTop: '1.5px dashed var(--navy)' }}></span>Licence</span>
            <span className="i"><span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--azure)', border: '1.5px solid #fff', boxShadow: '0 0 0 1px var(--azure)' }}></span>2026 collar</span>
            <span className="i"><span style={{ width: 9, height: 9, borderRadius: '50%', border: '1.5px solid var(--slate)' }}></span>Historic collar</span>
          </div>
          <div className="map-footer">
            <span>EPM_Matsitama_Geol_Fig03_v2_2026-06.ai</span>
            <span>WGS84 / UTM 35S · drawn KE · checked DL · 2026-06-12</span>
          </div>
        </div>
      </DCArtboard>

      <DCArtboard id="annokit" label="Callout & annotation kit" width={960} height={700}>
        <div className="xb" data-screen-label="Annotation kit">
          <div className="x-pad">
            <div className="x-kick x-kick--az">Annotations sit on the figure, never in it — leader lines run orthogonal, five callouts per figure maximum</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridAutoRows: '1fr', gap: 14, flex: 1, marginTop: 16, minHeight: 0 }}>

              <div className="kit-cell">
                <div className="kit-stage">
                  <div className="co" style={{ left: 24, top: 22 }}>
                    <div className="co-chip"><div className="co-k">Tlou zone</div><div className="co-v">1,400 m strike · open NE</div></div>
                    <div className="co-line" style={{ left: 20, top: '100%', width: 1, height: 34 }}></div>
                    <div className="co-dot" style={{ left: 16, top: 'calc(100% + 34px)' }}></div>
                  </div>
                </div>
                <div className="kit-meta">
                  <div className="kit-name">Leader callout</div>
                  <div className="kit-spec">white chip · 1px border-strong · r4 · shadow-card<br />label 8.5 caps steel · value 11 mono 600</div>
                </div>
              </div>

              <div className="kit-cell">
                <div className="kit-stage">
                  <div className="co-flag" style={{ left: 40, top: 26 }}>
                    <div className="body">NAK-25-014<small>42.0M @ 1.83% CU</small></div>
                    <div className="stem" style={{ height: 44 }}></div>
                  </div>
                  <div style={{ position: 'absolute', left: 40, top: 118, width: 8, height: 8, borderRadius: '50%', background: 'var(--azure)', border: '1.5px solid #fff', boxShadow: '0 0 0 1px var(--azure)' }}></div>
                </div>
                <div className="kit-meta">
                  <div className="kit-name">Interval flag</div>
                  <div className="kit-spec">navy fill · white mono · anchored to collar<br />headline assays only — one per zone</div>
                </div>
              </div>

              <div className="kit-cell">
                <div className="kit-stage">
                  <div className="co-pin" style={{ left: 36, top: 34 }}>1</div>
                  <div className="co-pin" style={{ left: 96, top: 70 }}>2</div>
                  <div style={{ position: 'absolute', left: 24, bottom: 16, fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--slate)', lineHeight: 1.8 }}>1 — Camp &amp; core yard<br />2 — Water bore WB-3</div>
                </div>
                <div className="kit-meta">
                  <div className="kit-name">Numbered pin + key</div>
                  <div className="kit-spec">18px azure disc · white 1.5px ring<br />for infrastructure — key in figure corner</div>
                </div>
              </div>

              <div className="kit-cell">
                <div className="kit-stage">
                  <div className="co-zone" style={{ left: 30, top: 50 }}>Phiri zone</div>
                </div>
                <div className="kit-meta">
                  <div className="kit-name">Zone label</div>
                  <div className="kit-spec">9.5 mono 600 · 0.22em caps · navy<br />half-opacity underline · names areas, not points</div>
                </div>
              </div>

              <div className="kit-cell">
                <div className="kit-stage">
                  <NorthArrow style={{ top: 18, left: 30 }} />
                  <ScaleBar style={{ bottom: 18, left: 26 }} />
                </div>
                <div className="kit-meta">
                  <div className="kit-name">Frame furniture</div>
                  <div className="kit-spec">north arrow top-right · scale bar bottom-left<br />graticule labels 8.5 mono on figure edges</div>
                </div>
              </div>

              <div className="kit-cell">
                <div className="kit-stage" style={{ background: 'var(--nv-800)' }}>
                  <div className="co" style={{ left: 24, top: 28 }}>
                    <div className="co-chip" style={{ background: 'var(--nv-700)', borderColor: 'rgba(255,255,255,.25)' }}>
                      <div className="co-k" style={{ color: 'var(--sky)' }}>Section 4250N</div>
                      <div className="co-v" style={{ color: '#fff' }}>Looking NW · V=H</div>
                    </div>
                    <div className="co-line" style={{ left: 20, top: '100%', width: 1, height: 30, background: '#fff' }}></div>
                    <div className="co-dot" style={{ left: 16, top: 'calc(100% + 30px)' }}></div>
                  </div>
                </div>
                <div className="kit-meta">
                  <div className="kit-name">Dark variant</div>
                  <div className="kit-spec">nv-700 chip on sections &amp; 3D views<br />same anatomy — sky label, white value</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </DCArtboard>

    </DCSection>
  );
};
