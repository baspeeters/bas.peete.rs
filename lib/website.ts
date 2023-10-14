import { WebSite } from "schema-dts";
import me from "~/lib/me";

export default <WebSite>{
    "@context": "https://schema.org/",
    "@type": "WebSite",
    url: "https://bas.peete.rs/",
    name: "Bas Peeters",
    about: me,
};