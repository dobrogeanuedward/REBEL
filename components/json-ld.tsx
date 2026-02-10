type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // This is the recommended way to inject schema JSON in React pages.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

