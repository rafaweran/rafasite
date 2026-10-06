import Reveal from './Reveal'

// Placeholder until real screenshots are added. Pass `src` to show an image.
function Shot({ product, src, ratio = '16 / 10' }) {
  return (
    <div className="shot" style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={`${product} product screenshot`} />
      ) : (
        <div className="shot-empty">
          <span className="label">Screenshot</span>
          <span>{product}</span>
        </div>
      )}
    </div>
  )
}

// Real screenshot presented inside a browser window on a soft stage.
function BrowserMockup({ src, alt, url, video, poster }) {
  return (
    <div className="mock-stage">
      <div className="mock-browser">
        <div className="mock-bar" aria-hidden="true">
          <span className="mock-dots"><i /><i /><i /></span>
          <span className="mock-url">{url}</span>
        </div>
        {video
          ? <video src={video} poster={poster} aria-label={alt} autoPlay muted loop playsInline preload="metadata" />
          : <img src={src} alt={alt} loading="lazy" />}
      </div>
    </div>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  )
}

function Head({ index, item, big }) {
  return (
    <>
      <p className="case-kicker">
        <span className="case-num">{String(index + 1).padStart(2, '0')}</span>
        <span>{item.product}</span>
        <span className="dot">·</span>
        <span className="case-cat">{item.category}</span>
      </p>
      <h3 className={big ? 'case-title big' : 'case-title'}>{item.title}</h3>
    </>
  )
}

function Statement({ item }) {
  return item.statement ? <p className="case-statement">{item.statement}</p> : null
}

function Meta({ item }) {
  return (
    <dl className="meta">
      <div><dt>Role</dt><dd>{item.role}</dd></div>
      {item.status && (
        <div><dt>Status</dt><dd><span className="status">{item.status}</span></dd></div>
      )}
    </dl>
  )
}

export { Shot, Tags, BrowserMockup }

export default function CaseStudy({ index, item }) {
  if (item.layout === 'flagship') {
    return (
      <Reveal as="article" id={item.id} className="case flagship">
        <div className="flag-head">
          <div><Head index={index} item={item} big /></div>
          <span className="flag-badge">Featured case study</span>
        </div>
        {item.cover
          ? <a href={item.href} className="flag-cover"><img src={item.cover} alt={`${item.product} shown on a laptop`} /></a>
          : item.image
          ? <BrowserMockup src={item.image} alt={`${item.product} dashboard`} url={item.url} />
          : <Shot product={item.product} ratio="16 / 9" />}
        <div className="flag-body">
          <div>
            <p className="case-summary">{item.summary}</p>
            <Meta item={item} />
            <Tags items={item.capabilities} />
            {item.href && <a href={item.href} className="btn case-cta">Read the case study →</a>}
          </div>
          <div className="outcomes">
            {item.outcomes.map((o) => (
              <div key={o.value} className="outcome">
                <b>{o.value}</b>
                <span>{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    )
  }

  if (item.layout === 'compact') {
    return (
      <Reveal as="article" id={item.id} className="case compact">
        <Shot product={item.product} src={item.image} ratio="4 / 3" />
        <div>
          <Head index={index} item={item} />
          <p className="case-summary">{item.summary}</p>
          <Statement item={item} />
          <Meta item={item} />
          <Tags items={item.capabilities} />
        </div>
      </Reveal>
    )
  }

  // split (image left, text right) / reverse (text left, image right)
  return (
    <Reveal as="article" id={item.id} className={`case split ${item.layout === 'reverse' ? 'reverse' : ''}`}>
      {item.cover
        ? <a href={item.href} className="flag-cover split-cover"><img src={item.cover} alt={`${item.product} product mockup`} /></a>
        : <Shot product={item.product} src={item.image} ratio={item.layout === 'reverse' ? '4 / 3' : '4 / 5'} />}
      <div className="split-text">
        <Head index={index} item={item} />
        <p className="case-summary">{item.summary}</p>
        <Statement item={item} />
        <Meta item={item} />
        <Tags items={item.capabilities} />
        {item.href && <a href={item.href} className="btn case-cta">Read the case study →</a>}
      </div>
    </Reveal>
  )
}
