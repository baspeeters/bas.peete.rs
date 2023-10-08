import { Person, Occupation, Organization } from "schema-dts";
import workHistory from "./work-history";

export default <Person>{
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Bas Peeters",
    sameAs: "https://bas.peete.rs/",
    hasOccupation: <Occupation>{
        "@type": "Occupation",
        roleName: "Tech Lead",
        startDate: "2022",
        sameAs: "https://en.wikipedia.org/wiki/Lead_programmer",
    },
    worksFor: <Organization>{
        "@type": "Corporation",
        name: "Total Design",
        sameAs: "https://www.totaldesign.com/"
    },
    alumniOf: workHistory,
};