import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="w-max rounded-lg bg-red-500 p-6">
        <Link href="/home">home sweet home</Link>
      </div>
    </main>
  );
}
