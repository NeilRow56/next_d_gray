import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Points of interest about xyz ltd..",
};

export default function About() {
  return (
    <main className=" text-white p-6 text-center ">
      <h1>About Page!</h1>
      <Link className="text-white py-4" href="/">
        Link to Home Page
      </Link>
    </main>
  );
}
