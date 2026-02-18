type TocItem = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  title?: string;
  items: TocItem[];
};

export function TableOfContents({ title = "In questa guida", items }: TableOfContentsProps) {
  if (items.length === 0) return null;
  return (
    <nav className="toc" aria-label={title}>
      <h2 className="toc-title">{title}</h2>
      <ol className="toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

