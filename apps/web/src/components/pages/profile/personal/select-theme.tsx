import { ThemeContext } from "@/utils/theme";
import { useContext } from "react";

export const SelectTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <main>
      <header className="mb-5 mt-3 text-xl font-semibold text-foreground">Select theme</header>
      <section className="flex gap-4">
        <button
          className={`flex h-16 w-16 flex-col overflow-hidden rounded-2xl ${
            theme === "light" ? "border-2 border-primary shadow-3xl" : "border border-gray-200"
          } bg-zinc-300`}
          onClick={() => setTheme("light")}
        >
          <div className="mt-auto h-8 w-16 bg-primary-foreground" />
        </button>
        <button
          className={`flex h-16 w-16 flex-col overflow-hidden rounded-2xl ${
            theme === "dark" ? "border-2 border-primary shadow-3xl" : "border border-gray-700"
          } bg-zinc-800`}
          onClick={() => setTheme("dark")}
        >
          <div className="mt-auto h-8 w-16 bg-green-950" />
        </button>
      </section>
    </main>
  );
};
