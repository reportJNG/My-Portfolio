import { Code2, Mail, Phone, UserRound } from "lucide-react";

import SectionTitle from "../components/ui/SectionTitle";

export default function Contact() {
  return (
    <footer className="footer shell" id="contact">
      <SectionTitle eyebrow="Contact" title="Need a website, dashboard, or app built properly?">
        Send the idea, the messy version, or just the problem. I can help turn
        it into a cleaner working product.
      </SectionTitle>

      <div className="contact-grid">
        <a href="mailto:Hamzaremali10@gmail.com">
          <Mail size={18} />
          Hamzaremali10@gmail.com
        </a>
        <a href="tel:0774273861">
          <Phone size={18} />
          0774273861
        </a>
        <a href="https://github.com/reportJNG" target="_blank" rel="noopener noreferrer">
          <Code2 size={18} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/as-sky-6b3782375/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserRound size={18} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
