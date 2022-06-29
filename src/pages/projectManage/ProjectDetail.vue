<template>
  <div>
    <el-page-header @back="goBack" content="详情页面"></el-page-header>

    <h2>{{"这是id为"+id+"的项目"}}</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "projectDetail",
  data() {
    return {
      id: '',
      name: '',
      blog: {}
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: "projectManage" })
    }
  },
  created() {
    this.id = this.$route.params.id
    this.name = this.$route.params.name
    //发送请求
    // service.get("/projectDetail/" + this.id)
    //   .then((res) => {
    //     this.project = res.data.project
    //   })
  },
}
</script>

<style>
</style>