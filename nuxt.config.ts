export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxt/image"],
    runtimeConfig: {
        public: {
            apiBase: '',
        }
    },
})