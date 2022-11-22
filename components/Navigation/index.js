import Link from "next/link";

import { useRouter } from "next/router";

import style from "./style.module.scss";

const navigation = [
  { name: "Stack Status", icon: "media/home.svg", href: "/stack-status" },
];

function Navigation() {
  let router = useRouter();

  return (
    <>
      <nav className={style.navigation} aria-label="Sidebar">
        <div className={style.btnsContainer}>
          {navigation.map((item) => (
            <Link
              className={`${style.navBtn} ${
                item.href === router.pathname ? style.active : ""
              }`}
              role="button"
              title={item.name}
              key={item.name}
              href={item.href}
            >
              <img aria-hidden="true" alt={item.name} src={item.icon} />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
