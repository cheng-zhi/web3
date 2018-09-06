export default {
  data() {
    return {
      // 所有菜单项
      menus: [],
      collapse: false,
      iconlist: ['icon-users', 'icon-tijikongjian', 'icon-shangpin', 'icon-danju', 'icon-baobiao']
    }
  },
  created() {
    this.getMenus()
  },
  methods: {
    // 退出登录状态
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取左侧菜单列表
    async getMenus() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error('获取左侧菜单失败！')
      this.menus = res.data
    }
  }
}
