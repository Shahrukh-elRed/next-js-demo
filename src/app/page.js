import { API_BASE_URL } from "@/config/constants";

export default function Home() {
  console.log(process.env.SERVER_PASSWORD)
  console.log(process.env.DB_PASSWORD)
  

  return (
    <main>
      {
        process.env.NODE_ENV === "development" ?
        <h2>We are on Development mode</h2>
        : 
        <h2>We are on Production mode</h2>
      }
      <h1>Environment Variables in Next JS</h1>
      <h2>API base URL : {API_BASE_URL}</h2>
    </main>
  );
}
