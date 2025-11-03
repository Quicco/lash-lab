import Links from "./Links";

export interface NavLink {
    desc: string;
    id: string;
  }

  const navLinks: NavLink[] = [
    { desc: 'Sobre Mim ', id: "about" },
    { desc: 'Serviços', id: "offerings" },
  ];

export default function Header() {
 
  return (
    <header className="flex flex-col items-center px-1 md:flex-row md:justify-between md:text-md">
      <img src="/img/llbk-logo.jpg" alt="logo of Lash Lab by Kate" />

      <nav>
        <Links links={navLinks}/>
      </nav>
    </header>
  );
}
