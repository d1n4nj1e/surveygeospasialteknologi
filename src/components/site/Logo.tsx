export function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`${small ? "size-6" : "size-8"} bg-brand-blue grid place-items-center rounded-sm shrink-0`}>
        <div className={`${small ? "size-3" : "size-4"} border border-white/40 rounded-full relative`}>
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/40 -translate-x-1/2" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/40 -translate-y-1/2" />
        </div>
      </div>
      <span className={`${small ? "text-xs uppercase tracking-tight" : "text-sm"} font-semibold text-ink`}>
        PT Survey Geospasial Teknologi
      </span>
    </div>
  );
}
