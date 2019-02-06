<template>
  <div>
    <div
      class="row"
      style="margin-bottom: 40px"
    >
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search"
        >
        <div>正在搜尋: {{search}}</div>
      </form>
    </div>
    <div class="row mb">
      <div v-if="loading">loading......</div>
      <div
        class="col-11"
        style="padding: 0px"
        v-else
      >
        <div class="card-deck">
          <div
            class="card"
            v-for="(item,index) in typetitle"
            @click="itemclick(index)"
            :key=index
          >
            <img
              class="card-img-top"
              :src="item.img"
              alt="Card image cap"
            >
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.text}}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">發佈時間&nbsp;:&nbsp;{{item.createdatetime}}</small><br>
              <small class="text-muted">{{item.footer}}</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        // content: [],
        search: "",
        loading: false
      };
    },
    computed: {
      content() {
        return this.$store.state.contents;
      },
      typetitle() {
        if (this.search != "") {
          return this.content.filter(item => {
            let content = item.title.toLowerCase();
            let keyword = this.search.toLowerCase();
            return content.indexOf(keyword) != -1;
          });
        } else {
          return this.content;
        }
      }
    },
    methods: {
      itemclick(index) {
        // console.log(this.content[index])
        let target = this.content[index];
        this.$router.push({ name: "detialshow", params: { id: target.id } });
      }
    }
  };
</script>