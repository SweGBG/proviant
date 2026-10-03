/*
  CSS-only double helix ("the DNA of taste").
  Each rung has two beads moving on opposite sine phases plus a link between them;
  the per-rung delay makes the strands twist. Gold and burgundy beads, like grapes and honey.
*/
export default function Helix({
  count = 24,
  className = "",
  speed = 6,
  labels,
}: {
  count?: number;
  className?: string;
  speed?: number;
  labels?: string[];
}) {
  return (
    <div className={`helix ${className}`} style={{ ["--hs" as string]: `${speed}s` }} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const label = labels && i % Math.ceil(count / labels.length) === Math.floor(count / labels.length / 2) ? labels[Math.floor(i / Math.ceil(count / labels.length))] : undefined;
        return (
          <span key={i} className="rung" style={{ ["--i" as string]: i, ["--n" as string]: count }}>
            <i className="bead a" />
            <i className="link" />
            <i className="bead b" />
            {label ? <em className="rung-label">{label}</em> : null}
          </span>
        );
      })}
    </div>
  );
}
