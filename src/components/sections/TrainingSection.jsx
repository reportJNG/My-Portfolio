import { Award, MapPin } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";

export default function Training() {
  return (
    <section className="mx-auto w-[min(calc(100%-28px),1080px)] pt-[70px] max-md:w-[min(calc(100%-24px),1080px)] max-md:pt-[58px]" id="training">
      <SectionTitle eyebrow="Training">
        Database structure, then real product shipping.
      </SectionTitle>

      <SpotlightCard
        className="grid grid-cols-[minmax(0,1fr)_210px] gap-[22px] p-[19px] max-lg:grid-cols-1 max-[420px]:p-[15px] [&_aside]:grid [&_aside]:content-start [&_aside]:gap-2.5 [&_aside_p]:inline-flex [&_aside_p]:items-center [&_aside_p]:gap-2 [&_aside_p]:font-extrabold [&_aside_p]:text-[#9da6b4] [&_h3]:mb-2 [&_h3]:mt-3.5 [&_h3]:text-[1.12rem] [&_p]:m-0 [&_p]:text-[0.94rem] [&_p]:leading-[1.62] [&_p]:text-[#c7ced8] [&>div>span]:text-[0.68rem] [&>div>span]:font-black [&>div>span]:uppercase [&>div>span]:text-cyan-300"
        spotlightColor="rgba(250, 204, 21, 0.12)"
      >
        <div>
          <span>Sonatrach</span>
          <h3>Database Engineering (Academic Training)</h3>
          <p>
            Completed 3 years focused on SQL design, relational modeling, query
            optimization, PHP backend work, Java EE, OOP, algorithms, and
            full-stack structure. Since then I have kept shipping with Next.js,
            React, TypeScript, Prisma, Supabase, PostgreSQL, Tailwind, ShadCN,
            and modern auth patterns.
          </p>
        </div>
        <aside>
          <p>
            <MapPin size={16} />
            Algiers, Algeria
          </p>
          <p>
            <Award size={16} />
            3 years
          </p>
        </aside>
      </SpotlightCard>
    </section>
  );
}
