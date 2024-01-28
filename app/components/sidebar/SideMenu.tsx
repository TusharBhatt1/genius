import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

interface SideMenuProps {
  label: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

export default function SideMenu({
  label,
  icon,
  color,
  href,

 
}: SideMenuProps) {

  const params=usePathname()
 
  return (
    <Link
      href={href}
     
      className={`${params===href  && "bg-slate-800"} w-full flex items-center gap-4 hover:bg-slate-800 p-2 px-4 rounded-full`}
    >
      <span className={`text-3xl text-${color}`}>{icon}</span>
      <span className="w-full">{label}</span>
    </Link>
  );
}
