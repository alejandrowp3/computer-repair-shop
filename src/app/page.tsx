import Link from "next/link";

export default function Home() {
  return (
    <div className="home-bg min-h-screen">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Computer <br /> Repair Shop
          </h1>
          <address>
            Some Address 525, Etobicoke, ON, M9B 6H7 <br />
            Medellin, Colombia
          </address>
          <p>Open daily from 10am to 6pm</p>
          <Link href="tel:+1234567890" className="hover:underline">
            Call Us Now
          </Link>
        </div>
      </main>
    </div>
  );
}

