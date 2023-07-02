"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      num: 0,
      isOver: true,
      min: 0,
      //包含
      max: 100,
      //不包含
      interval: 100,
      //ms 时间
      clock: null
    };
  },
  onLoad() {
  },
  onShow() {
    let setting = common_vendor.index.getStorageSync("setting");
    this.min = setting.min;
    this.max = setting.max;
    this.interval = setting.interval;
  },
  methods: {
    start() {
      this.isOver = false;
      this.getRandomNum();
    },
    getRandomNum() {
      this.clock = setInterval(
        () => {
          this.num = parseInt(this.min) + parseInt(Math.floor(Math.random() * (this.max - this.min)));
        },
        this.interval
      );
    },
    stop() {
      this.isOver = true;
      clearInterval(this.clock);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.num),
    b: $data.isOver,
    c: common_vendor.o((...args) => $options.start && $options.start(...args)),
    d: !$data.isOver,
    e: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/class-learn/2023/choujiang/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
