import type { NavLink } from './Header';

interface Props {
  links: NavLink[];
}

export default function Links({ links }: Props) {
  return (
    <>
      <ul className="flex gap-4 md:mr-10">
        {links.map((link, i) => (
          <li
            key={i}
            className={
              'text-lashdark uppercase hover:underline hover:cursor-pointer'
            }
          >
            {link.desc}
          </li>
        ))}
      </ul>
    </>
  );
}
