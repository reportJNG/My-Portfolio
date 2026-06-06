import { ShieldCheck } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import { facts } from "../../data/portfolioData";

export default function About() {
  return (
    <section className="mx-auto w-[min(calc(100%-28px),1080px)] pt-[70px] max-md:w-[min(calc(100%-24px),1080px)] max-md:pt-[58px]" id="about">
      <SectionTitle eyebrow="Profile">
        Live projects, real flows, better versions.
      </SectionTitle>

      <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-3.5 max-lg:grid-cols-1">
        <SpotlightCard
          className="p-[19px] max-[420px]:p-[15px] [&_h3]:mb-2 [&_h3]:mt-3.5 [&_h3]:text-[1.12rem] [&_p]:m-0 [&_p]:text-[0.94rem] [&_p]:leading-[1.62] [&_p]:text-[#c7ced8] [&_svg]:text-emerald-200"
          spotlightColor="rgba(167, 243, 208, 0.12)"
        >
          <ShieldCheck size={26} />
          <h3>How I work</h3>
          <p>
            I build apps that make sense fast: clear data, simple flows, useful
            dashboards, good forms, honest feedback, and code ready for the next
            version. I work across UI, backend, auth, databases, APIs, and
            deployment.
          </p>
        </SpotlightCard>

        <div className="grid grid-cols-2 gap-2.5 max-md:grid-cols-1">
          {facts.map(([label, value]) => (
            <SpotlightCard
              className="grid min-h-[92px] content-between p-3.5 [&_span]:text-[0.68rem] [&_span]:font-black [&_span]:uppercase [&_span]:text-cyan-300 [&_strong]:text-[0.95rem] [&_strong]:leading-[1.35]"
              key={label}
            >
              <span>{label}</span>
              <strong>{value}</strong>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
