export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 sm:py-8 border-t border-slate-800 relative z-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-3 sm:gap-4 items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-foreground/60 text-xs sm:text-sm">© {currentYear} Krishna Saxena. All rights reserved.</p>
          <p className="text-accent font-semibold text-xs sm:text-base">Code. Design. Deliver.</p>
        </div>
      </div>
    </footer>
  )
}
