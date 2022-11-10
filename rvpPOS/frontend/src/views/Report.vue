<template>
  <a-space direction="vertical" style="width: 100%; max-width: 1700px">
    <a-button type="primary" @click="refreshData()">Refresh</a-button>
    <a-card
      class="ant-card-body"
      style="box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px"
    >
      <vue3-chart-js
        ref="lineChartRef"
        v-bind="{ ...lineChart }"
        style="height: 150px"
      />
    </a-card>

    <a-card
      class="ant-card-body"
      style="box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px"
    >
      <vue3-chart-js
        ref="barChartRef"
        v-bind="{ ...barChart }"
        style="height: 150px"
      />
    </a-card>
  </a-space>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import zoomPlugin from "chartjs-plugin-zoom";
import dataLabels from "chartjs-plugin-datalabels";
import { reactive, ref } from "vue";

// globally registered and available for all charts
Vue3ChartJs.registerGlobalPlugins([zoomPlugin]);

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },

  setup() {
    const lineChartRef = ref(null);
    const barChartRef = ref(null);

    const getRandomInt = () => {
      let randoms = [];
      for (let index = 0; index < 12; index++) {
        randoms.push(Math.floor(Math.random() * (50000 - 5 + 1)) + 5);
      }
      return randoms;
    };

    const chartData = reactive({ data: getRandomInt() });

    const lineChart = {
      type: "line",
      // locally registered and available for this chart
      plugins: [dataLabels],
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "2020",
            data: chartData.data,
            fill: false,
            borderColor: "#41B883",
            backgroundColor: "black",
          },
          {
            label: "2021",
            data: chartData.data,
            fill: false,
            borderColor: "#00D8FF",
            tension: 0.5,
            backgroundColor: "blue",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "y",
            },
          },
          datalabels: {
            backgroundColor: function (context) {
              return context.dataset.backgroundColor;
            },
            borderRadius: 4,
            color: "white",
            font: {
              weight: "bold",
            },
            formatter: Math.round,
            padding: 6,
          },
        },
      },
    };

    const barChart = {
      type: "bar",
      // locally registered and available for this chart
      plugins: [dataLabels],
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "2020",
            data: chartData.data,
            fill: false,
            borderColor: "#41B883",
            backgroundColor: ["#F16B4D", "#735FB4", "#FD9E44", "#D25AA2"],
          },
          {
            label: "2021",
            data: chartData.data,
            fill: false,
            borderColor: "#00D8FF",
            tension: 0.5,
            backgroundColor: "blue",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "y",
            },
          },
          datalabels: {
            backgroundColor: function (context) {
              return context.dataset.backgroundColor;
            },
            borderRadius: 4,
            color: "white",
            font: {
              weight: "bold",
            },
            formatter: Math.round,
            padding: 6,
          },
        },
      },
    };

    const refreshData = () => {
      lineChart.data.datasets[0].data = getRandomInt();
      lineChart.data.datasets[1].data = getRandomInt();
      lineChartRef.value.update(50);

      barChart.data.datasets[0].data = getRandomInt();
      barChart.data.datasets[1].data = getRandomInt();
      barChartRef.value.update(50);
    };

    return {
      lineChartRef,
      lineChart,
      barChartRef,
      barChart,
      refreshData,
    };
  },
};
</script>
