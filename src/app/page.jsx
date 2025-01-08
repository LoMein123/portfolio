import NavBar from "./components/NavBar"

export default function App() {
  return (
    <div>
      <NavBar />
      
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello, Next.js!
      </h1>

      <a href="/about">link</a>

    </div>
  )
}