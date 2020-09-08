<template>
  <div id="app">
    <el-card>
      <el-form :inline="true" :model="dataForm" @keyup.enter.native="testAxios()"  >
        <el-form-item>
          <el-col :span="12">
          <el-input
            clearable
            size="small"
            placeholder="商品名称"
            v-model="dataForm.name"
            suffix-icon="el-icon-edit"
            @click="testAxios()"
          ></el-input>
          </el-col>
        
          <el-button type="primary" size="small" icon="el-icon-search" @click="testAxios()">查询</el-button>
        </el-form-item>
      </el-form>
      
    <!-- </el-card> -->
    <!-- 商品名称：<input type="text" name="selectProduct"><button id=btn1 > 点击查询</button> -->

    <p></p>
    <!-- <el-card> -->
      <el-table :data="goodsList" stripe style="width: 80%">

        <el-table-column prop="name" label="商品名称" align="center"></el-table-column> 

        <el-table-column prop="price" label="价格" align="center"></el-table-column>

        <el-table-column prop="salePoint" label="卖点" align="center"></el-table-column>

        <el-table-column prop="updateBy" label="修改人" align="center"></el-table-column>

        <el-table-column type="expand" label="详情" >
          
          <template slot-scope="props">
            <el-card>
              <el-form label-position="right" inline class="demo-table-expand">
                <el-form-item label="主键编号:">
                  <el-input  size="small" type="text" v-model="props.row.id" ></el-input>
                </el-form-item>
                <el-form-item label="商品名称:">
                  <el-input  size="small" type="text" v-model="props.row.name" ></el-input>
                </el-form-item>
                <el-form-item label="商品价格:">
                  <el-input  size="small" type="text" v-model="props.row.price" ></el-input>
                </el-form-item>
                <el-form-item label="卖点:">
                  <el-input  size="small" type="text" v-model="props.row.salePoint" ></el-input>
                </el-form-item>
                <el-form-item label="库存:">
                  <el-input size="small" type="text" v-model="props.row.stock" ></el-input>
                </el-form-item>
                <el-form-item label="商品图片:">
                  <span>{{ props.row.image }}</span>
                </el-form-item>
                
              </el-form>
            </el-card>
          </template>
          <el-button>修改</el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="this.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Httpservice from "@/services/HttpService";
export default {
  data() {
    return {
      http: Httpservice.getAxios,
      pageNum: 1,
      pageSize: 5,
      goodsList: [],
      total: 0,
      dataForm: {
        name:'',
        id:''

      }
    };
  },

  created() {
    this.testAxios();
  },
  methods: {
    // =========================================
    testAxios() {
      let param = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      };
      this.http
        .get("/product/selectAll", { params: param })
        .then((response) => {
          this.goodsList = response.data.rows;
          this.total = response.data.total;
        });
    },

    // =========================================
    handleSizeChange(val) {
      this.pageSize = val;
      this.testAxios();
    },

    // =========================================
    handleCurrentChange(val) {
      this.pageNum = val;
      this.testAxios();
    },
  },
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
