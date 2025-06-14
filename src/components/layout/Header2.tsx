import Link from "next/link";

import { BoxIcon } from "lucide-react";

import Discord from "@/assets/svg/Discord";
import Github from "@/assets/svg/Github";
import X from "@/assets/svg/X";
import { Button } from "@/registry/new-york/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu";
import { Separator } from "@/registry/new-york/ui/separator";

import CommandMenu from "./CommandMenu";
import NavMenu from "./NavMenu";

const Header2 = () => {
  return (
    <header className="bg-background/60 fixed top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 items-center justify-center border-b border-dashed backdrop-blur-[8px]">
      <div className="mx-auto flex h-[64px] w-full max-w-[1400px] items-center border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]">
        <div className="flex w-full items-center max-lg:gap-4">
          <div className="flex items-center gap-3 ps-4 sm:ps-8">
            {/* TODO Logo */}
            <Link href="/" className="flex items-center justify-center gap-2">
              <BoxIcon className="max-[425px]:[&_span]:hidden" />
              NextJs Starter
            </Link>
            <Separator className="my-4" orientation="vertical" />
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium max-sm:hidden">
                v1.0.0-alpha.3
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>View on GitHub</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Nav  */}
          <nav className="flex flex-1 items-center justify-end gap-1.5 pe-4 sm:gap-4 sm:pe-8 lg:justify-between lg:ps-8">
            <NavMenu />
            <div className="flex items-center gap-2 md:gap-4">
              <CommandMenu />
              {/* <ModeToggle /> */}
              <div className="flex items-center gap-1.5 max-md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  asChild
                >
                  <Link href="/" rel="noopener noreferrer">
                    <Github className="size-5" />
                    <span className="sr-only">Github</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  asChild
                >
                  <Link href="/" rel="noopener noreferrer">
                    <X className="size-5" />
                    <span className="sr-only">X</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  asChild
                >
                  <Link href="/" rel="noopener noreferrer">
                    <Discord className="size-5" />
                    <span className="sr-only">Discord</span>
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header2;
