import { Poppins, Unbounded, Urbanist } from "next/font/google";
import NavBar from "@/components/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "600"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "600"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${poppins.className} ${unbounded.className} ${urbanist.className}`}
    >
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
