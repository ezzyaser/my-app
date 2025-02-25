'use client';
import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { Button, buttonVariants } from './ui/button';
import { Icons } from '@/components/Icon';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const user = undefined; // Replace with actual user authentication logic
  const isAdmin = false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 inset-x-0 z-[100] h-16 w-full border-b bg-background/40 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center font-semibold">
            <Icons.logo className="h-10" />
            <span className="ml-2 text-lg text-blue-600">LearnForLife</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Link
                href="/api/auth/logout"
                className={buttonVariants({ size: 'sm', variant: 'ghost' })}
              >
                Sign out
              </Link>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                >
                  Login
                </Link>
              </>
            )}
            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background shadow-lg border-b p-4 flex flex-col space-y-3">
          {user ? (
            <Link
              href="/api/auth/logout"
              className={buttonVariants({ size: 'sm', variant: 'ghost' })}
              onClick={() => setMenuOpen(false)}
            >
              Sign out
            </Link>
          ) : (
            <>
              <Link
                href="/api/auth/register"
                className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                onClick={() => setMenuOpen(false)}
              >
                Sign up
              </Link>
              <Link
                href="/api/auth/login"
                className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </>
          )}
          <ModeToggle />
        </div>
      )}
    </nav>
  );
}
