export const SelectTheme = () => {
  return (
    <main>
      <header className="mb-5 mt-3 text-xl font-semibold text-foreground">Select theme</header>
      <section className="flex gap-4">
        <div className="flex h-16 w-16 flex-col overflow-hidden rounded-2xl border border-primary bg-zinc-300">
          <div className="mt-auto h-8 w-16 bg-primary-foreground" />
        </div>
        <div className="flex h-16 w-16 flex-col overflow-hidden rounded-2xl bg-zinc-800">
          <div className="mt-auto h-8 w-16 bg-green-950" />
        </div>
      </section>
    </main>
  );
};
