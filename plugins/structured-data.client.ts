import { Thing } from "schema-dts";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            structuredData: (thing: Thing) => {
                console.log("bla", thing);
                useHead({
                    script: [{
                        type: "application/ld+json",
                        innerHTML: thing,
                    }],
                });
            },
        },
    };
});
