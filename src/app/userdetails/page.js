"use client"
import Script from "next/script"

const UserDetails = () => {
  return (
    <div>
        <Script
        src="/location.js"
        onLoad={() => {
            console.log("file loaded");
        }}
        />
        <h1>Get user geoLocation</h1>
    </div>
  )
}

export default UserDetails