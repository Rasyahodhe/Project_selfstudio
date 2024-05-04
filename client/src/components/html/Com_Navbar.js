import { hendlerClick, hendlerClickimg } from "../script/scr_Navbar";

function Navbar() {
  return (
    <nav>
      <img
        className="img_logo"
        src="https://th.bing.com/th/id/R.7f3c8507b9d5eea32869a0124674a63d?rik=ffNo1E8ILppazQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcar_logo%2fcar_logo_PNG1667.png&ehk=bHVzvjpqTKRVFQHVicQgtIsdIsneSZTad4bCD5yDCNI%3d&risl=&pid=ImgRaw&r=0"
        alt="logo"
        onClick={hendlerClickimg}
      ></img>
      <ul className="menu" id="tog_menu">
        <li>
          <a href="/destinations">Destinasi</a>{" "}
        </li>
        <li>
          <a href="/">Recomended</a>{" "}
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <div className="bur_Menu">
        <div className="bur_Menu_Line">
          <span id="sp_One"></span>
          <span id="sp_Two"></span>
          <span id="sp_Three"></span>
        </div>
        <input
          type="checkbox"
          id="chb_Bur_Menu"
          className="chb_Menu"
          onClick={hendlerClick}
        ></input>
      </div>
    </nav>
  );
}

export default Navbar;
