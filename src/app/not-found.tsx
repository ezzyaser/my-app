import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
export const metadata = {
  title: 'Page Not Found',
};
export default function NotFound() {
  return (
    <div className=" flex items-center justify-center flex-col py-28">
      <h2 className=" text-4xl font-bold text-blue-500 py-5">Page Not Found</h2>
      <Image
        className="mb-5"
        src="/Images/Oops.jpeg"
        alt="Page Not Found"
        width={300}
        height={300}
        sizes="300px"
        priority={true}
        title="Page Not Found"
      />
      <Link className={buttonVariants({ variant: 'default' })} href="/">
        Return Home
      </Link>
    </div>
  );
}
