import Links from "./Links";

export interface NavLink {
    desc: string;
  }

  const navLinks: NavLink[] = [
    { desc: 'About ' },
    // { desc: 'About' },
    { desc: 'Services' },
  ];

export default function Header() {

  return (
    <header className="flex flex-col items-center md:flex-row md:justify-between px-4 py-5">
      <img src="/img/llbk-logo.jpg" alt="logo of Lash Lab by Kate" />

      <nav>
        <Links links={navLinks}/>
      </nav>
    </header>
  );
}
