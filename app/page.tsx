"use client"

import { useState } from "react";

export default function Home() {
  const [lastData, setLastData] = useState("")

  const call = async (endpoint: string) => {
    try {
      const result = await fetch(endpoint)
      const data = await result.json()
      console.log(data)
      setLastData(JSON.stringify(data))
    }
    catch (error) {
      console.log(error)
      setLastData(`Error: ${error}`)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{lastData}</p>

      <div className="flex flex-col gap-8">


      <button className="bg-slate-700 p-8" onClick={() => call("/service/index")}>/service/index</button>
      <button className="bg-slate-700 p-8" onClick={() => call("/service/javascript/[slug]")}>/service/javascript/[slug]</button>
      <button className="bg-slate-700 p-8" onClick={() => call("/service/javascript/value")}>/service/javascript/value</button>
      </div>

    </main>
  );
}
