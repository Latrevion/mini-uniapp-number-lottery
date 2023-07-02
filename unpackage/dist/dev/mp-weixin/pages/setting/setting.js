"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      max: 100,
      min: 0,
      interval: 100
      //ms
    };
  },
  created() {
  },
  created() {
    let setting = common_vendor.index.getStorageSync("setting") || { max: 100, min: 0, interval: 100 };
    this.max = setting.max;
    this.min = setting.min;
    this.interval = setting.interval;
  },
  methods: {
    onSaveSetting() {
      const setting = { max: this.max, min: this.min, interval: this.interval };
      common_vendor.index.setStorageSync("setting", setting);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.max,
    b: common_vendor.o(($event) => $data.max = $event.detail.value),
    c: $data.min,
    d: common_vendor.o(($event) => $data.min = $event.detail.value),
    e: $data.interval,
    f: common_vendor.o(($event) => $data.interval = $event.detail.value),
    g: common_vendor.o((...args) => $options.onSaveSetting && $options.onSaveSetting(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/class-learn/2023/choujiang/pages/setting/setting.vue"]]);
wx.createPage(MiniProgramPage);
