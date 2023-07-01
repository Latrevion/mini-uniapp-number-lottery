if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
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
      let setting = uni.getStorageSync("setting");
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "panel" }, [
        vue.createElementVNode(
          "text",
          null,
          vue.toDisplayString($data.num),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "button-area" }, [
        vue.withDirectives(vue.createElementVNode(
          "button",
          {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.start && $options.start(...args))
          },
          "开始抽奖",
          512
          /* NEED_PATCH */
        ), [
          [vue.vShow, $data.isOver]
        ]),
        vue.withDirectives(vue.createElementVNode(
          "button",
          {
            onClick: _cache[1] || (_cache[1] = (...args) => $options.stop && $options.stop(...args))
          },
          "结束抽奖",
          512
          /* NEED_PATCH */
        ), [
          [vue.vShow, !$data.isOver]
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/class-learn/2023/choujiang/pages/index/index.vue"]]);
  const _sfc_main$1 = {
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
      let setting = uni.getStorageSync("setting") || { max: 100, min: 0, interval: 100 };
      this.max = setting.max;
      this.min = setting.min;
      this.interval = setting.interval;
    },
    methods: {
      onSaveSetting() {
        const setting = { max: this.max, min: this.min, interval: this.interval };
        uni.setStorageSync("setting", setting);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "list" }, [
        vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
          vue.createElementVNode("view", { class: "title" }, "最大值"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "uni-input",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.max = $event),
              type: "number",
              placeholder: "最大值"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.max]
          ])
        ]),
        vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
          vue.createElementVNode("view", { class: "title" }, "最小值"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "uni-input",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.min = $event),
              type: "number",
              placeholder: "最小值"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.min]
          ])
        ]),
        vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
          vue.createElementVNode("view", { class: "title" }, "时间间隔（ms）"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "uni-input",
              type: "number",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.interval = $event),
              placeholder: "时间间隔"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.interval]
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "button-area" }, [
        vue.createElementVNode("button", {
          onClick: _cache[3] || (_cache[3] = (...args) => $options.onSaveSetting && $options.onSaveSetting(...args))
        }, "保存")
      ])
    ]);
  }
  const PagesSettingSetting = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/class-learn/2023/choujiang/pages/setting/setting.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/setting/setting", PagesSettingSetting);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/class-learn/2023/choujiang/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
