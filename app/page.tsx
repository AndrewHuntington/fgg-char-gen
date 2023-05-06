import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Character Builder</h1>
      <Link href="/stats">
        <button className="border-2 border-red-600 rounded-md">
          Roll stats
        </button>
      </Link>
    </main>
  );
}
