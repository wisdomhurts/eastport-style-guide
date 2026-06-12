/* Eastport — Creative Explorations · 02 Luxury microinteractions */
const { DCSection, DCArtboard, DCPostIt } = window;

function MiTile({ name, spec, children }) {
  return (
    <div className="mi-tile">
      <div className="mi-stage">{children}</div>
      <div className="mi-meta">
        <div className="mi-name">{name}</div>
        <div className="mi-spec">{spec}</div>
      </div>
    </div>
  );
}

function MagneticBtn() {
  const ref = React.useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = 'translate(' + (dx * 0.22) + 'px,' + (dy * 0.34) + 'px)';
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; };
  return (
    <div style={{ padding: 26 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <button ref={ref} className="mi-btn mi-btn--mag" style={{ transition: 'transform .25s var(--x-ease), box-shadow .25s var(--x-ease)' }}>
        <span className="lbl">Book a call</span>
      </button>
    </div>
  );
}

function CountStat() {
  const [v, setV] = React.useState(50000);
  const busy = React.useRef(false);
  const run = () => {
    if (busy.current) return; busy.current = true;
    const t0 = performance.now(), dur = 1100;
    const step = (n) => {
      const p = Math.min(1, (n - t0) / dur);
      setV(Math.round(50000 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step); else busy.current = false;
    };
    requestAnimationFrame(step);
  };
  return (
    <div onMouseEnter={run} style={{ textAlign: 'center', cursor: 'default' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.02em', color: 'var(--navy)', fontVariantNumeric: 'tabular-nums' }}>{v.toLocaleString()} m</div>
      <div className="x-kick" style={{ marginTop: 5 }}>Historic drilling</div>
    </div>
  );
}

function LiveTick() {
  const [p, setP] = React.useState(0.33);
  const [up, setUp] = React.useState(true);
  React.useEffect(() => {
    const id = setInterval(() => {
      setP((prev) => {
        const d = (Math.random() - 0.45) * 0.01;
        setUp(d >= 0);
        return Math.max(0.2, prev + d);
      });
    }, 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', background: 'var(--nv-800)', borderRadius: 6, padding: '11px 16px' }}>
      <span className="mi-dot"></span>
      <span style={{ fontSize: 11, color: 'rgba(220,231,245,.6)' }}>TSXV:EVI</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>C${p.toFixed(3)}</span>
      <span style={{ fontSize: 10.5, color: up ? '#5BC68C' : '#E08A8A', transition: 'color .4s var(--x-ease)' }}>{up ? '▲' : '▼'}</span>
    </div>
  );
}

window.xMicroSection = function () {
  return (
    <DCSection id="micro" title="02 · Luxury microinteractions" subtitle="Live demos — hover, focus and press everything. Calm, precise, 150–350ms, always ease-out, never a bounce.">

      <DCPostIt width={250}>
        Luxury = restraint. One element moves at a time. Motion confirms — it never performs. Gate everything behind prefers-reduced-motion.
      </DCPostIt>

      <DCArtboard id="mi-kit" label="The interaction kit — hover each tile" width={1240} height={660}>
        <div className="xb" data-screen-label="Microinteraction kit">
          <div className="x-pad">
            <div className="x-kick x-kick--az">Eight signature moves, specified</div>
            <div className="mi-grid">

              <MiTile name="Primary CTA" spec="lift −1px · 0.22s · underline draws 0.28s · ease-out-quart">
                <button className="mi-btn"><span className="lbl">Read the news release</span></button>
              </MiTile>

              <MiTile name="Editorial link" spec="arrow translateX 6px · 0.28s · color → azure 0.2s">
                <span className="mi-link"><span>View the Matsitama project</span><span className="ar">→</span></span>
              </MiTile>

              <MiTile name="Card hover" spec="lift −4px · shadow-deep · 0.28s · settle on press">
                <div className="mi-card">
                  <span className="cm">CU · COPPER</span>
                  <div className="pn">Matsitama</div>
                  <div className="ps">2,140 km² · drilling</div>
                </div>
              </MiTile>

              <MiTile name="Magnetic CTA" spec="pull ×0.22 toward cursor · release 0.25s ease-out">
                <MagneticBtn />
              </MiTile>

              <MiTile name="Stat count-up" spec="1.1s cubic ease-out · tabular numerals · runs on enter">
                <CountStat />
              </MiTile>

              <MiTile name="Live ticker" spec="dot pulse 2s · tick 2.4s · signal color fades 0.4s">
                <LiveTick />
              </MiTile>

              <MiTile name="Focus ring" spec="border → azure · 3px ring @ 28% · 0.15s · label follows">
                <div className="mi-field">
                  <label>Email for IR updates</label>
                  <input placeholder="you@fund.com" />
                </div>
              </MiTile>

              <MiTile name="Spectrum progress" spec="fill 0.9s ease-out-quart · dawn-fan gradient · hover to run">
                <div className="mi-prog"><div className="track"><div className="f"></div></div></div>
              </MiTile>

            </div>
          </div>
        </div>
      </DCArtboard>

    </DCSection>
  );
};
