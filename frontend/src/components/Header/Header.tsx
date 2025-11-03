import Links from "./Links";

export interface NavLink {
    desc: string;
  }

  const navLinks: NavLink[] = [
    { desc: 'Sobre Mim ' },
    // { desc: 'About' },
    { desc: 'Serviços' },
  ];

export default function Header() {
 
  return (
    <header className="flex flex-col items-center px-1 py-1 md:flex-row md:justify-between md:text-sm">
      <img src="/img/llbk-logo.jpg" alt="logo of Lash Lab by Kate" />

      <nav>
        <Links links={navLinks}/>
      </nav>
    </header>
  );
}
