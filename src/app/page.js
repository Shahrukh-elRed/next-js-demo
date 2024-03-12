import Image from "next/image";
import Profile from "../../public/next.svg";

export default function Home() {
  return (
    <main>
      <h1>Image Optimization in Next JS</h1>
      {/* <Image src={Profile} alt="" />
      <img src={Profile.src} alt="" /> */}
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IPad_%26_iPhone.jpg/220px-IPad_%26_iPhone.jpg" 
        alt="" 
        height={200} 
        width={200} 
      />
    </main>
  );
}
