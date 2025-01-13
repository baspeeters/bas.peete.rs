import { Person, Organization, Role } from "schema-dts";
import workHistory from "./work-history";

export default <Person>{
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Bas Peeters",
    sameAs: "https://bas.peete.rs/about-me",
    hasOccupation: <Role>{
        "@type": "Role",
        roleName: "Business Solutions Architect",
        startDate: "2025",
        sameAs: "https://en.wikipedia.org/wiki/Business_analyst",
    },
    worksFor: <Organization>{
        "@type": "Organization",
        name: "Basabasa",
        sameAs: "https://basabasa.digital/"
    },
    alumniOf: workHistory,
};