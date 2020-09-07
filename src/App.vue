<template>
  <div id="app">
    <img src="./assets/logo.png">
<button id=btn1 @click="testAxios()"> 点击查询</button>

<el-table :data="goodsList" border>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>

      <el-table-column
        prop="price"
        label="价格"
        width="180">
      </el-table-column>

      <el-table-column
        prop="salePoint"
        label="卖点"
        width="180">
      </el-table-column>

      <el-table-column
        prop="updateBy"
        label="修改人"
        width="180">
      </el-table-column>
</el-table>
  </div>
</template>

<script>
import Httpservice from '@/services/HttpService'
export default {
  data () {
      return {
        http: Httpservice.getAxios,
        pageNum:1,
        pageSize:2,
        goodsList:[]
      }
    },
    methods: {
          testAxios(){
          let param={
            pageNum:this.pageNum,
            pageSize:this.pageSize,

          }
          this.http.get('/product/selectAll',{params:param}).then((response)=>{
            console.log(response);

            this.goodsList=response.data.rows
          })
        }
    }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
