<template>
  <div>
    <h1>WebSocket 实时通信</h1>
    <div ref="chartRef" style="width: 600px; height: 400px"></div>
  </div>
</template>
 <script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'
  // ⽤来记录后端返回数据的数组
  let getMsg = ref([])
  // 图表显示位置
  const chartRef = ref(null); 
  // echarts实例
  let chartInstance = null;
  // 创建WebSocket实例
  let websocket = new WebSocket("ws://localhost:8080/channel/echo?clientId=" + 10);
  // 初始化ECharts图表
  const initChart = () => {
  if (chartRef.value) {
  chartInstance = echarts.init(chartRef.value);
  const option = {
  title: {
  text: '实时温度数据'
  },
  tooltip: {},
  xAxis: {
  type: 'category',
  data: [] // 时间戳
  },
  yAxis: {
  type: 'value',
  name: '温度'
  },
  series: [{
  data: [], // 温度数据
  type: 'line'
  }]
  }
  chartInstance.setOption(option);
  }
};
   // 解析后端返回的JSON数据并更新图表
 const processDataAndUpdateChart = (dataStr) => {
 try {
 const data = JSON.parse(dataStr);
 if (data.time && data.temp) {
 // 更新X轴数据（假设time是时间戳）
 const timeData = chartInstance.getOption().xAxis[0].data;
 timeData.push(data.time);
 // 更新Y轴数据（温度数据）
 const tempData = chartInstance.getOption().series[0].data;
 tempData.push(data.temp);
 // 重新设置数据和刷新图表
 chartInstance.setOption({
 xAxis: { data: timeData },
 series: [{ data: tempData }]
 });
 chartInstance.resize();
 }
 } catch (error) {
 console.error('Error processing data:', error);
 }
 };
 // 连接断开
 websocket.onclose = e => {
 console.log(`连接关闭: code=${e.code}, reason=${e.reason}`)
 }
 // 收到消息
 websocket.onmessage = e => {
 console.log(`收到消息：${e.data}`);
 // 更新getMsg数组，⽤于列表展示
 getMsg.value.push(e.data); // 为了展示⽅便，这⾥仍转回字符串形式
 processDataAndUpdateChart(e.data);
 };
 // 异常
 websocket.onerror = e => {
 console.log("连接异常")
 console.error(e)
 }
 // 连接打开
 websocket.onopen = e => {
 console.log("连接打开", e);
 // 创建连接后，往服务器没隔⼀秒连续写⼊1条消息
   setInterval(sentData, 2000);
   function sentData() {
 websocket.send("hello")
 }
 // 最后发送 bye，由服务器断开连接
 // websocket.send("bye");
 // 也可以由客户端主动断开
 // websocket.close();
 }
 onMounted(() => {
 initChart();
 });
</script>