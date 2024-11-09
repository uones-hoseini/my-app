import Profile from "./Profile"

export default function ParentComponent() {
  const username = "John Doe" // You could also fetch this from an API or global state

  return <Profile username={username} />
}
