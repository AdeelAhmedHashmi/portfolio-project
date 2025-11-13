const Navigation = () => {
  function scrollToTarget(el: HTMLElement) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <>
      <li className="text-primary">Home</li>
      <li
        className="hover:text-primary transition-colors"
        onClick={() =>
          scrollToTarget(document.getElementById("services") as HTMLElement)
        }
      >
        Services
      </li>
      <li
        className="hover:text-primary transition-colors"
        onClick={() =>
          scrollToTarget(document.getElementById("about") as HTMLElement)
        }
      >
        About Me
      </li>
      <li
        className="hover:text-primary transition-colors"
        onClick={() =>
          scrollToTarget(document.getElementById("portfolio") as HTMLElement)
        }
      >
        Portfolio
      </li>
      <li
        className="hover:text-primary transition-colors"
        onClick={() =>
          scrollToTarget(document.getElementById("contact") as HTMLElement)
        }
      >
        Contact Me
      </li>
    </>
  );
};

export default Navigation;
