"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const navigate = (path) => {
        router.push("/login/" + path)
    }
  return (
      <div>
        <h1 className="heading">Login Page</h1>
        <Link href="/">Go to Home Page</Link>
        <br />
        <br />
        <button onClick={() => navigate("loginteacher")}>Got to Login Teacher Page</button>
        <br />
        <br />
        <button onClick={() => navigate("loginstudent")}>Got to Login Student Page</button>
      </div>
  )
}

export default Login