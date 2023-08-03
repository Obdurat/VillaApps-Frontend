import Logo from "../../assets/villa_apps-removebg-preview.png"

export default function Header() {
  return (
    <div className="w-full bg-zinc-900">
      <img src={Logo} className="h-20" />
    </div>
  )
}