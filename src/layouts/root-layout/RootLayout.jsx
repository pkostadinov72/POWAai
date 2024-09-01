import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="/logo.png" width={80} height={80}></img>
          <span>POWA AI</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
