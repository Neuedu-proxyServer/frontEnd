<template>
  <div>
    <h2>项目管理</h2>
    <!-- 获取数据后解开 filterProjects -->
    <div v-for="project in Projects" class="Projects" :key="project.id">
      <router-link
        :to="{
        path:'/home/projectDetail/'+project.id,
        params:{
		      id:project.id,
          title:project.name
		}}"
      >
        {{project.id}}
        <!-- <h4>{{blog.title}}</h4>
        <article>{{blog.content.slice(0,10)+"..."}}</article>-->
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectManage",
  data() {
    return {
      Projects: [{ id: "001", name: '我是项目1' }, { id: "002", name: "我是项目2" }],
    }
  },
  computed: {
    //发送请求后解开注释！！！
    // filterProjects() {
    //   return this.Projects.filter((project) => project.title.match(this.search))
    // }
  },
  created() {
    //发送请求
  }
}
</script>

<style scoped>
</style>