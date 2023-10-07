import { EmployeeRole, Organization, Person } from "schema-dts";

export default <Organization[]>[{
    "@type": "Organization",
    name: "PressPage",
    sameAs: "https://www.presspage.com/",
    employee: <Person>{
        "@type": "Person",
        sameAs: "https://bas.peete.rs/",
        hasOccupation: <EmployeeRole>{
            "@type": "EmployeeRole",
            roleName: "Chief Technology Officer",
            startDate: "2020",
            endDate: "2022",
            sameAs: "https://en.wikipedia.org/wiki/Chief_technology_officer",
        },
    },
}, {
    "@type": "Organization",
    name: "GoldRepublic",
    sameAs: "https://www.goldrepublic.nl/",
    employee: <Person>{
        "@type": "Person",
        sameAs: "https://bas.peete.rs/",
        hasOccupation: <EmployeeRole>{
            "@type": "EmployeeRole",
            roleName: "Head of R&D",
            startDate: "2015",
            endDate: "2019",

        },
    },
}, {
    "@type": "Organization",
    name: "PressPage",
    sameAs: "https://www.presspage.com/",
    employee: <Person>{
        "@type": "Person",
        sameAs: "https://bas.peete.rs/",
        hasOccupation: <EmployeeRole>{
            "@type": "EmployeeRole",
            roleName: "Senior Developer",
            startDate: "2014",
            endDate: "2015",
            sameAs: "https://en.wikipedia.org/wiki/Programmer",
        },
    },
}, {
    "@type": "Organization",
    name: "YoudaGames",
    sameAs: "https://www.youdagames.com/",
    employee: <Person>{
        "@type": "Person",
        sameAs: "https://bas.peete.rs/",
        hasOccupation: <EmployeeRole>{
            "@type": "EmployeeRole",
            roleName: "API Developer",
            startDate: "2012",
            endDate: "2014",
            sameAs: "https://en.wikipedia.org/wiki/Programmer",
        },
    },
}, {
    "@type": "Organization",
    name: "Magnatron",
    sameAs: "https://www.magnatron.nl/",
    employee: <Person>{
        "@type": "Person",
        sameAs: "https://bas.peete.rs/",
        hasOccupation: <EmployeeRole>{
            "@type": "EmployeeRole",
            roleName: "Web Developer",
            startDate: "2009",
            endDate: "2012",
            sameAs: "https://en.wikipedia.org/wiki/Web_developer",
        },
    },
}];