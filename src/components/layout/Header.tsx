import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-background/60 sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 items-center justify-center border-b border-dashed backdrop-blur-[8px]">
      <div className="mx-auto flex h-full w-full max-w-[1400px] items-center border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]">
        <div className="flex w-full items-center max-lg:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 ps-4 sm:ps-8"></div>
          <nav className="flex flex-1 items-center justify-end gap-1.5 pe-4 sm:gap-4 sm:pe-8 lg:justify-between lg:ps-8">
            <div className="flex items-center gap-5 max-lg:hidden">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium">
                Theme Editor
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm">
                Docs
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm">
                Components
              </Link>
            </div>
            <div className="flex items-center gap-2 md:gap-4"></div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
