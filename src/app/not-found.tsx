import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <Image
        src="/images/not-found.png"
        alt="Page not found"
        width={500}
        height={500}
        title="Page not found"
      />
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500">
        Go back to the home page
      </Link>
    </div>
  );
}
