export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    import('vue3-apexcharts').then((module) => {
      const VueApexCharts = module.default;
      nuxtApp.vueApp.component('apexchart', VueApexCharts);
    });
  }
});