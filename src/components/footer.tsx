import { CloudDivider } from "@/components/cloud-divider";

export function Footer() {
  return (
    <footer className="mt-16">
      <CloudDivider />
      <div className="px-8 pb-6 text-xs text-muted">
        &copy; {new Date().getFullYear()} Shivangi Jadon
      </div>
    </footer>
  );
}
