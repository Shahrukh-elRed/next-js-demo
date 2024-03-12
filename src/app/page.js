import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      {/* <h1 style={{ fontFamily: "Roboto"}}>Font optimization in Next JS</h1>
      <h1 style={{ fontFamily: "Madimi One", fontWeight: "200"}}>Font family in Next JS</h1> */}
      <h1 className={roboto.className}>Font optimization in Next JS</h1>
      <h1 className={roboto.className}>Font family in Next JS</h1>
    </main>
  );
}
