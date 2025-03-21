"use client";
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "./theme-toggle";

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
      <div className="flex justify-between md:w-[990px] w-[95%] border dark:border-zinc-900 dark:bg-[#3B1C32]/50 relative backdrop-blur bg-opacity-50 dark:bg-opacity-30 z-9 bg-gray-100 border-white border-opacity-20 rounded-xl p-2 overflow-visible">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <div className="min-[825px]:hidden flex  justify-end w-full">
            <ModeToggle />
          </div>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>exact.</SheetTitle>
              <SheetDescription>
                Streamline your exam preparation process with our intelligent
                question paper generator.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href="#hero">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#features">
                  <Button variant="outline" className="w-full">
                    Features
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#faq">
                  <Button variant="outline" className="w-full">
                    FAQ
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#pricing">
                  <Button variant="outline" className="w-full">
                    Pricing
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#testimonial">
                  <Button variant="outline" className="w-full">
                    Testimonials
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="#hero" className="pl-2">
              <h1 className="font-bold">exact.</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="#features">
            <Button variant="ghost">Features</Button>
          </Link>
          <Link href="#faq">
            <Button variant="ghost">FAQ</Button>
          </Link>
          <Link href="#pricing">
            <Button variant="ghost">Pricing</Button>
          </Link>
          <Link href="#testimonial">
            <Button variant="ghost">Testimonial</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
