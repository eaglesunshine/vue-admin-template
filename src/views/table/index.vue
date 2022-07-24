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
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    handleEdit(row){

    },
    handleDel(row){

    },

    fetchData() {
      this.listLoading = true
      this.list=[
        {
          "remind_id": 16,
          "create_time": "2022-07-02 21:27:19",
          "remind_time": "2022-07-02 21:43:00",
          "remind_words": "测试",
          "repeat_type": "minute",
          "repeat_value": "2",
          "last_remind": "2022-07-02 21:41:02",
          "status": "end"
        },
        {
          "remind_id": 17,
          "create_time": "2022-07-02 21:46:00",
          "remind_time": "2022-07-02 22:00:00",
          "remind_words": "测试",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 18,
          "create_time": "2022-07-02 21:51:36",
          "remind_time": "2022-07-03 20:00:00",
          "remind_words": "测试",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 19,
          "create_time": "2022-07-02 21:51:59",
          "remind_time": "2022-07-04 00:00:00",
          "remind_words": "测试2",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 20,
          "create_time": "2022-07-02 22:30:23",
          "remind_time": "2022-07-02 23:00:00",
          "remind_words": "测试3",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 21,
          "create_time": "2022-07-02 22:31:08",
          "remind_time": "2022-07-02 18:00:00",
          "remind_words": "下班",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "wait"
        },
        {
          "remind_id": 22,
          "create_time": "2022-07-02 22:31:54",
          "remind_time": "2022-07-05 22:31:00",
          "remind_words": "测试",
          "repeat_type": "day",
          "repeat_value": "3",
          "last_remind": null,
          "status": "wait"
        },
        {
          "remind_id": 23,
          "create_time": "2022-07-02 22:32:43",
          "remind_time": "2022-07-03 00:00:00",
          "remind_words": "测试",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 26,
          "create_time": "2022-07-03 15:32:30",
          "remind_time": "2022-07-03 20:00:00",
          "remind_words": "测试",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 27,
          "create_time": "2022-07-03 17:38:25",
          "remind_time": "2022-07-03 18:00:00",
          "remind_words": "下班",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 28,
          "create_time": "2022-07-03 17:38:45",
          "remind_time": "2022-07-04 09:00:00",
          "remind_words": "我开早会",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 29,
          "create_time": "2022-07-03 17:39:08",
          "remind_time": "2022-07-04 11:39:00",
          "remind_words": "测试3",
          "repeat_type": "hour",
          "repeat_value": "3",
          "last_remind": "2022-07-04 08:39:02",
          "status": "end"
        },
        {
          "remind_id": 30,
          "create_time": "2022-07-03 17:39:26",
          "remind_time": "2022-10-01 00:00:00",
          "remind_words": "升国旗",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "wait"
        },
        {
          "remind_id": 31,
          "create_time": "2022-07-03 17:40:01",
          "remind_time": "2022-08-03 17:40:00",
          "remind_words": "ping www.qq.com",
          "repeat_type": "month",
          "repeat_value": "1",
          "last_remind": null,
          "status": "wait"
        },
        {
          "remind_id": 32,
          "create_time": "2022-07-03 17:44:48",
          "remind_time": "2022-07-03 18:00:00",
          "remind_words": "测试sender",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 33,
          "create_time": "2022-07-03 17:45:09",
          "remind_time": "2022-07-03 18:03:00",
          "remind_words": "测试循环时间",
          "repeat_type": "minute",
          "repeat_value": "2",
          "last_remind": "2022-07-03 18:01:02",
          "status": "end"
        },
        {
          "remind_id": 34,
          "create_time": "2022-07-03 17:46:58",
          "remind_time": "2022-07-04 00:00:00",
          "remind_words": "测试sender",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "end"
        },
        {
          "remind_id": 35,
          "create_time": "2022-07-04 09:54:30",
          "remind_time": "2022-07-05 20:00:00",
          "remind_words": "测试2",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "wait"
        },
        {
          "remind_id": 36,
          "create_time": "2022-07-04 09:54:47",
          "remind_time": "2022-07-04 15:00:00",
          "remind_words": "测试3",
          "repeat_type": "na",
          "repeat_value": "na",
          "last_remind": null,
          "status": "wait"
        }
      ]
      this.listLoading = false


      // getRemindList().then(response => {
      //   console.info(response);
      //   this.list = response.data.items
      //   this.listLoading = false
      // }).catch(err=>{
      //   console.info(err);
      // })

    }

  }
}
</script>
