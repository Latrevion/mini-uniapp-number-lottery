"use strict";
const common_vendor = require("../../common/vendor.js");
const js_sdk_validator_lottery = require("../../js_sdk/validator/lottery.js");
common_vendor.Ds.database();
const _sfc_main = {
  data() {
    return {
      queryWhere: "",
      collectionList: "lottery",
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      },
      options: {
        // 将scheme enum 属性静态数据中的value转成text
        ...js_sdk_validator_lottery.enumConverter
      }
    };
  },
  onLoad(e) {
    this._id = e.id;
  },
  onReady() {
    if (this._id) {
      this.queryWhere = '_id=="' + this._id + '"';
    }
  },
  methods: {
    handleUpdate() {
      common_vendor.index.navigateTo({
        url: "./edit?id=" + this._id,
        events: {
          // 监听修改页面成功修改数据后, 刷新当前页面数据
          refreshData: () => {
            this.$refs.udb.loadData({
              clear: true
            });
          }
        }
      });
    },
    handleDelete() {
      this.$refs.udb.remove(this._id, {
        success: (res) => {
          common_vendor.index.navigateTo({
            url: "./list"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_load_more2 + _easycom_uni_file_picker2 + _easycom_uni_link2 + _easycom_unicloud_db2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_load_more + _easycom_uni_file_picker + _easycom_uni_link + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : loading ? {
        d: "d2f5e974-1-" + i0 + ",d2f5e974-0",
        e: common_vendor.p({
          contentText: $data.loadMore,
          status: "loading"
        })
      } : data ? common_vendor.e({
        g: common_vendor.t(data.title),
        h: data.photo && data.photo.fileType == "image"
      }, data.photo && data.photo.fileType == "image" ? {
        i: "d2f5e974-2-" + i0 + ",d2f5e974-0",
        j: common_vendor.o(($event) => data.photo = $event),
        k: common_vendor.p({
          ["file-mediatype"]: data.photo && data.photo.fileType,
          ["return-type"]: "object",
          readonly: true,
          modelValue: data.photo
        })
      } : data.photo ? {
        m: "d2f5e974-3-" + i0 + ",d2f5e974-0",
        n: common_vendor.p({
          href: data.photo.url,
          text: data.photo.url
        })
      } : {}, {
        l: data.photo
      }) : {}, {
        c: loading,
        f: data,
        o: i0,
        p: s0
      });
    }, {
      name: "d",
      path: "a",
      vueId: "d2f5e974-0"
    }),
    b: common_vendor.sr("udb", "d2f5e974-0"),
    c: common_vendor.p({
      options: $data.options,
      collection: $data.collectionList,
      field: "title,photo",
      where: $data.queryWhere,
      getone: true,
      manual: true
    }),
    d: common_vendor.o((...args) => $options.handleUpdate && $options.handleUpdate(...args)),
    e: common_vendor.o((...args) => $options.handleDelete && $options.handleDelete(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/class-learn/2023/choujiang/pages/lottery/detail.vue"]]);
wx.createPage(MiniProgramPage);
