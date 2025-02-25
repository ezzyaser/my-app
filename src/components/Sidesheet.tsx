import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { Icons } from '@/components/Icon';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function Sidesheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex justify-center items-center">
            <Icons.logo className=" h-24 " />
          </SheetTitle>
          <ul className=" flex flex-col items-center justify-center gap-6  ">
            <li className=" px-4 space-x-4 flex justify-center items-center gap-2">
              <Link
                href="/login"
                className={buttonVariants({ variant: 'outline' })}
              >
                Sign in{' '}
              </Link>
              <Link
                href="/login"
                className={buttonVariants({ variant: 'outline' })}
              >
                Sign Up{' '}
              </Link>
            </li>
          </ul>
          <ul
            dir="rtl"
            className="mt-12 space-y-2 text-left font-medium flex flex-col items-start justify-start"
          >
            <div className="flex flex-col md:flex-row gap-2 justify-start items-start ">
              <li className=" flex gap-1.5 text-left">
                <Link href="/Islamic-Sciences" className="">
                  <Button variant="default">العلوم الشرعية🕋</Button>
                </Link>
              </li>
              <li className=" flex gap-1.5 items-center text-left">
                <Link href="/Programming" className="">
                  <Button variant="default"> البرمجة وعلوم الحاسب👨‍💻</Button>
                </Link>
              </li>
              <li className=" flex gap-1.5 items-center text-left">
                <Link href="/Languag" className="">
                  <Button variant="default"> اللغات🌍</Button>
                </Link>
              </li>
              <li className=" flex gap-1.5 items-center text-left">
                <Link href="/Blog" className="">
                  <Button variant="default">المدونة✍</Button>
                </Link>
              </li>
              <li className=" flex gap-1.5 items-center text-left">
                <Link href="/Soft-Skills" className="">
                  <Button variant="default">المهارات الإنسانية😊</Button>
                </Link>
              </li>
              <li className=" flex gap-1.5 items-center text-left">
                <Link href="/Market" className="">
                  <Button variant="default">متجر الأدوات💎</Button>
                </Link>
              </li>
            </div>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
