export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center py-24">
      <div
        role="status"
        aria-label="Chargement"
        className="h-10 w-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary"
      />
    </div>
  );
}
