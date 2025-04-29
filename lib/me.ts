import { Person, Organization, Role } from "schema-dts";
import workHistory from "./work-history";

export default <Person>{
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Bas Peeters",
    sameAs: "https://bas.peete.rs/about-me",
    hasOccupation: <Role>{
        "@type": "Role",
        roleName: "CTO",
        startDate: "2025",
        sameAs: "https://en.wikipedia.org/wiki/Chief_technology_officer",
    },
    worksFor: <Organization>{
        "@type": "Organization",
        name: "Benerail",
        sameAs: "https://benerail.com/"
    },
    alumniOf: workHistory,
};
