type KeyPointsGridProps = {
  title?: string;
  points: string[];
};

export function KeyPointsGrid({ title, points }: KeyPointsGridProps) {
  if (points.length === 0) return null;
  return (
    <section className="keypoints">
      {title ? <h2 className="keypoints-title">{title}</h2> : null}
      <div className="keypoints-grid">
        {points.map((text) => (
          <article key={text} className="keypoint-card">
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

