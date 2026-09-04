export function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.12]">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Shivangi Jadon</p>
        <div className="flex gap-4">
          <a href="mailto:shivangi.p.jadon@gmail.com" className="hover:text-foreground transition-colors">
            Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
