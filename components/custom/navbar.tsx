"use client";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

export function NavBar() {
  const [showCTA, setShowCTA] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowCTA(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-between md:w-[990px] w-[95%] border dark:border-zinc-900 dark:bg-[#3B1C32]/50 relative backdrop-blur bg-opacity-50 dark:bg-opacity-30 z-9 bg-gray-100 border-white border-opacity-20 rounded-xl p-2 overflow-visible"
      >
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>

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
              <AnimatePresence>
                {showCTA && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DialogClose asChild>
                      <Link href="/">
                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                          hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white"
                        >
                          Get Started
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </DialogClose>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden">
            <Link href="#hero" className="pl-2">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="font-bold"
              >
                exact.
              </motion.h1>
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
          <AnimatePresence>
            {showCTA && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/">
                  <Button
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                    hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 
                    dark:from-blue-500 dark:via-purple-500 dark:to-pink-500
                    dark:hover:from-blue-600 dark:hover:via-purple-600 dark:hover:to-pink-600
                    text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Get Started
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
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
