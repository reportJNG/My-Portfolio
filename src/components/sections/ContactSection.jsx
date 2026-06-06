import { Code2, Mail, Phone, UserRound } from "lucide-react";

import SectionTitle from "../common/SectionTitle";

export default function Contact() {
  return (
    <footer className="mx-auto w-[min(calc(100%-28px),1080px)] pb-[104px] pt-[82px] max-md:w-[min(calc(100%-24px),1080px)]" id="contact">
      <SectionTitle eyebrow="Contact">
        I will shape it into a cleaner working product.
      </SectionTitle>

      <div className="grid grid-cols-4 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
        <a className="inline-flex min-h-[46px] min-w-0 items-center justify-center gap-[9px] rounded-lg border border-white/10 bg-[#101318] px-3 text-center text-[0.9rem] font-extrabold no-underline transition-[transform,border-color,background-color] duration-150 [overflow-wrap:anywhere] hover:-translate-y-px hover:border-white/20 hover:bg-white/[0.06] max-md:w-full" href="mailto:Hamzaremali10@gmail.com">
          <Mail size={18} />
          Hamzaremali10@gmail.com
        </a>
        <a className="inline-flex min-h-[46px] min-w-0 items-center justify-center gap-[9px] rounded-lg border border-white/10 bg-[#101318] px-3 text-center text-[0.9rem] font-extrabold no-underline transition-[transform,border-color,background-color] duration-150 hover:-translate-y-px hover:border-white/20 hover:bg-white/[0.06] max-md:w-full" href="tel:0774273861">
          <Phone size={18} />
          0774273861
        </a>
        <a className="inline-flex min-h-[46px] min-w-0 items-center justify-center gap-[9px] rounded-lg border border-white/10 bg-[#101318] px-3 text-center text-[0.9rem] font-extrabold no-underline transition-[transform,border-color,background-color] duration-150 hover:-translate-y-px hover:border-white/20 hover:bg-white/[0.06] max-md:w-full" href="https://github.com/reportJNG" target="_blank" rel="noopener noreferrer">
          <Code2 size={18} />
          GitHub
        </a>
        <a
          className="inline-flex min-h-[46px] min-w-0 items-center justify-center gap-[9px] rounded-lg border border-white/10 bg-[#101318] px-3 text-center text-[0.9rem] font-extrabold no-underline transition-[transform,border-color,background-color] duration-150 hover:-translate-y-px hover:border-white/20 hover:bg-white/[0.06] max-md:w-full"
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
