<template>
  <div>
    <h2>存储桶列表</h2>
    <!-- 获取数据后解开 filterProjects -->
    <!-- <div v-for="project in Projects" class="Projects" :key="project.id">
      <router-link
        :to="{
        path:'/home/projectDetail/'+project.id,
        params:{
		      id:project.id,
          title:project.name
		}}"
      >{{project.id}}</router-link>
    </div>-->
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
      <div slot="footer">
        <b>ant design vue</b> footer part
      </div>
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <template v-for="{ type, text } in actions" slot="actions">
          <span :key="type">
            <a-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <img
          slot="extra"
          width="272"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        <a-list-item-meta :description="item.description">
          <a slot="title" :href="item.href">{{ item.title }}</a>
          <a-avatar slot="avatar" :src="item.avatar" />
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: "projectManage",
  data() {
    return {
      // Projects: [{ id: "001", name: '我是项目1' }, { id: "002", name: "我是项目2" }],
      listData: [],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
  computed: {
    //发送请求后解开注释！！！
    // filterProjects() {
    //   return this.Projects.filter((project) => project.title.match(this.search))
    // }
  },
  created() {
    //发送请求
    for (let i = 0; i < 23; i++) {
      this.listData.push({
        href: 'https://www.antdv.com/',
        title: `ant design vue part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }
  }
}
</script>

<style scoped>
</style>