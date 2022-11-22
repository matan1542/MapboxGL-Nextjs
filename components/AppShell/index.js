import Navigation from "../Navigation";

import style from "./style.module.scss";

const AppShell = ({ children }) => {
  return (
    <div className={style.appShell}>
      {/* <Header /> */}
      <section className={style.appBodySection}>
        <div>
          <Navigation />
        </div>
        {children}
      </section>
    </div>
  );
};

export const getLayout = (page) => <AppShell>{page}</AppShell>;
