import "./style.scss";
interface HeaderProps {
  logo?: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className="header" id="header">
      <div className="container">
        <nav
          className="navbar navbar-default navbar-fixed-top navbar-expanded"
          id="navbar"
          role="navigation"
        >
          <img src={props.logo} alt="logo" />
         
            
        </nav>
      </div>
    </header>
  );
}
