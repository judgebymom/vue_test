

<template>
  <div id="test"></div>
</template>

<script type="text/javascript">
import Httpservice from '@/services/HttpService'
export default {
    data () {
      return {
        http: Httpservice.getAxios,
      }
    },
    methods: {
          testAxios(){
          let param={
            pageNum:this.pageNum,
            pageSize:this.pageSize,

          }
          this.http.get('/product/selectAll',{params:param}),then((response)=>{
            let res=response.data
            this.goodsList=res.result.list
          })
            }





    }
  
}


</script>

<style>
</style>
