export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) return; // หยุดการโหลด plugin ใน server-side
    import('vue3-apexcharts').then((module) => {
      const VueApexCharts = module.default;
      nuxtApp.vueApp.component('apexchart', VueApexCharts);
    });
  });
