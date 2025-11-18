import { useEffect, useState } from "react";

type Theme =
  | "light"
  | "dark"
  | "cupcake"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine";
const ThemeSwitcher = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
  ];
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme: {theme}
      </div>
      <ul className="menu bg-base-200 rounded-box z-50 w-52 p-2 shadow">
        {themes.map((t) => {
          return (
            <li key={t}>
              <button
                className={`${theme === t ? "text-primary" : "text-primary-content"} capitalize`}
                onClick={() => changeTheme(t as Theme)}
              >
                {t}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
