# Vue规范

##  Vue开发

Vue文件编码规范如下：

```
<template>
    <div>
      <!-- 引用自定义组件，采用大驼峰命名方式 -->
      <MyComponent @my-event="onClick"></MyComponent>
      <!-- 自定义事件定义和使用都采用短横线形式 -->
    </div>
</template>
<script>
//注意：不建议在export default外面定义全局变量
//各方法函数的定义位置如下：
export default {
    name:"MainComponent",
    components:{
      MyComponent:()=>import('@/components/Card.vue') //采用路由懒加载,vue-router路由的配置也配置懒加载
    },
    props: {
      //定义采用小驼峰,使用采用短横线
      //使用方式```<MainComponent :data-type="xx"></MainComponent>```
      dataType: {
        type: String, //可通过数组定义多种类型，[String,Boolean]
        required: true,
        validator: function (value) {
          return ['List', 'Array','Null'].indexOf(value) !== -1; //自定义校验属性值是否正确 
        }
      }
    },
    data(){
        //此处定义私有变量不会被监听，提高性能。
        //定义私有变量建议添加下划线_前缀
        this._pageSize=10;
    },
    data() {
        return {
          firstName:null,
          lastName:null
        };
    },
    computed(){
      fullName(){
          return  this.firstName||'' + this.lastName||''
      }
    },
    /*----Vue生命周期钩子函数，按周期顺序排列----*/
    created() {
      //页面初始化，数据请求在此调用
    },
    mounted() {},
    beforDestory(){},
    /*------------------------------------------*/
    methods: {
      async init(){
        //初始化请求数据
        const res=await api.getData(params);
        //1.通过可选链判断返回结果是否为空
        //2.通过||赋值可能为空的属性默认值
        this.firstName=res?.firstName||''; 
      }
    },
    watch:{
      fullName(newVal,oldVal){}
    }
};
</script>
<style scoped lang="stylus"></style>
```

* 自定义事件详细可查看Vue官网 [自定义事件open in new window](https://cn.vuejs.org/v2/guide/components-custom-events.html#ad)

## Vue代码片段

可通过自定义VS Code的“用户片段”，在新建Vue文件内输入“vue”可快速生成Vue模板，避免自己手动添加created，methods等代码。  
VS Code设置：**文件->首选项->用户片段->搜索栏输入vue.json**，编辑替换如下代码片段即可。

```
"Print to Vue": {
		"prefix": "vue",
		"body": [
			"<template>",
			"    <div>\n",
			"    </div>",
			"</template>\n",
			"<script>",
			"export default {",
			"    data() {",
			"        return {",
			"          ${1}",
			"        };",
			"    },",
			"    created() {\n",
			"    },",
			"    mounted() {\n",
			"    },",
			"    methods: {\n",
			"    }",
			"};",
			"</script>\n",
			"<style scoped lang=\"scss\">\n",
			"</style>\n",
		],
		"description": "Create vue template"
	}
```



## Tips集锦

1.  v-model.trim=""

2.  动态form表单的绑定  
    以下prop绑定方式可以对动态数组进行rule校验  
    必须是formData下面增加一个新属性（如list\)

```
<el-form :model="formData">
 <el-form-item
      v-for="(item, index) in formData.list"
      :key="index"
      :label="'选项' + (index + 1)"
      :prop="'list.' + index + '.value'">
    <el-input v-model.trim="item.value" type="text"></el-input>
  </el-form-item>
</el-form>
```



#### 参考或引用

* [史上最全 Vue 前端代码风格指南open in new window](https://juejin.cn/post/6987349513836953607)
