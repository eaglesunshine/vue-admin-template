<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.remind_id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="提醒内容">
        <template slot-scope="scope">
          {{ scope.row.remind_words }}
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上次提醒时间" align="center" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.last_remind }}</span>
        </template>
      </el-table-column>
      <el-table-column label="下次提醒时间" align="center" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.remind_time }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">
            <span v-if="scope.row.status === 'wait'">{{ scope.row.status }}</span>
            <span v-else>
              <font color="#FF0000">{{ scope.row.status }}</font>
            </span>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center" width="90">
        <template v-slot="scope">
          <el-button type="text" size="small" align="center"
                     @click="handleEdit(scope.row)">
            编辑
          </el-button>
          <el-button type="text" size="small" align="center"
                     @click="handleDel(scope.row)">
            <font color="#FF0000">删除</font>
          </el-button>
<!--          <el-tag v-if="!isAuthed" type="warning" align="center"> 无权限</el-tag>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getRemindList } from '@/api/table'

export default {
  //属性
  data() {
    return {
      user_info: null,
      user_id: this.$route.query.user_id,
      corp_id: this.$route.query.corp_id,
      list: null,
      listLoading: true
    }
  },

  //在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
  created() {
    console.log(this.user_id);
    console.log(this.corp_id);
    this.getRemindList(this.user_id);
  },

  //过滤器：对要显示的数据进行特定格式化后再显示
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },

  //方法定义
  methods: {
    //TODO：编辑提醒事件
    handleEdit(row){
    },

    //TODO：删除提醒事件
    handleDel(row){
    },

    //获取提醒事件列表
    getRemindList() {
      this.listLoading = true
      getRemindList(this.user_id).then(response => {
        this.list = response.data
        this.listLoading = false
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>
