const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot975sz/",
            name: "springboot975sz",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot975sz/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区团购管理系统的设计与实现"
        } 
    }
}
export default base
