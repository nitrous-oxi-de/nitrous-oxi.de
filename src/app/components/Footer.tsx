import { SiGithub } from "react-icons/si";

const Github = () => {
  return (
    <a 
      aria-label="nitrous-oxi.de github" 
      href="https://github.com/nitrous-oxi-de" 
      target={"_blank"} 
      rel="noopener noreferrer"
    >
      <SiGithub className="h-5 w-5" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-center bg-black text-sky-500 text-md font-bold py-3">
      <div className="flex justify-center items-center gap-2">
        <Github />
        <p>&copy; NITROUS; nitrous-oxi.de; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

// path: src/app/components/ui/Footer.tsx