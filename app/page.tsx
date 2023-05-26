import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-white p-6 text-center ">
      <h1>Hello World!</h1>
      <Link className="text-white" href="/users">
        Link to Users Page
      </Link>
    </main>
  );
}
