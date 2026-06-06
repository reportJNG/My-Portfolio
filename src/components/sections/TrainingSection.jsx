import { Award, MapPin } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";

export default function Training() {
  return (
    <section className="section shell" id="training">
      <SectionTitle eyebrow="Training">
        Database structure, then real product shipping.
      </SectionTitle>

      <SpotlightCard className="training-card" spotlightColor="rgba(250, 204, 21, 0.12)">
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
