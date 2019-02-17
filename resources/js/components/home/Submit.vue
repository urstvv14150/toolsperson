<template>
  <div>
    <div class="row mb">
      <div class="form-group row">
        <label
          for="colFormLabel"
          class="col-sm-2 col-form-label"
        >標題</label>
        <div class="col-sm-10 mb">
          <input
            type="input"
            class="form-control"
            id="colFormLabel"
            placeholder="徵人主題"
            v-model.trim="input.title"
          >
        </div>
        <label
          for="colFormLabel"
          class="col-sm-2 col-form-label"
        >內容</label>
        <div class="col-sm-10 mb">
          <input
            type="input"
            class="form-control"
            id="colFormLabel"
            placeholder="服務內容"
            v-model.trim="input.text"
          >
        </div>
        <label
          for="exampleFormControlTextarea1"
          class="col-sm-2 col-form-label"
        >詳細內容敘述</label>
        <div class="col-sm-10 mb">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="詳細內容"
            v-model="input.detial"
          ></textarea>
        </div>
        <label
          for="colFormLabel"
          class="col-sm-2 col-form-label"
        >圖片網址</label>
        <div class="col-sm-10 mb">
          <input
            type="input"
            class="form-control"
            id="colFormLabel"
            placeholder="圖片網址"
            v-model.trim="input.img"
          >
        </div>
        <div class="col-sm-10">
          <button
            class="btn btn-primary"
            @click="submithandler"
          >傳送</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import store from "@/store";
  import moment from "moment";
  export default {
    data: function() {
      return {
        input: {
          img: "https://picsum.photos/300/150/?random=14",
          title: "",
          text: "",
          footer: "",
          createdatetime: "",
          detail: ""
        },
        loading: false
      };
    },
    methods: {
      submithandler() {
        if (this.input.title && this.input.text && this.input.img) {
          this.loading = true;
          this.input.createdatetime = moment().format("YYYYMMDD HH:mm:ss a");
          this.input.footer = moment(
            this.input.createdatetime,
            "YYYYMMDD h:mm:ss a"
          ).fromNow();
          axios
            .post("/api/user/submit", this.input)
            .then(res => {
              this.cancelhandler();
              this.loading = false;
              this.$router.push({ path: "/" });
              this.$store.commit("setcontents", res.data);
            })
            .catch(err => {
              console.log(this.input);
              console.log("post失敗");
              console.log(err);
              console.log(err.message);
            });
          // .post("http://localhost:8888/alldata", this.input)
        } else {
          return;
        }
      },
      cancelhandler() {
        this.input.title = "";
        this.input.text = "";
        this.input.img = "";
      }
    }
  };
</script>
