export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-black/10 py-12 dark:border-white/10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
    </div>
  );
}
