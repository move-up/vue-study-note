<template>
  <el-container>
    <el-aside width="300px">
      <div class="block tree-left">
        <p>知识分类</p>
        <div class="clearfix" style="padding: 10px 28px 10px 10px;">
          <h4 style="height:28px;line-height:28px;">全部 (9)</h4>
          <el-button type="text" size="mini" @click.stop="handleAddMuti()" class="pull-right">
            add
          </el-button>
        </div>
        <el-collapse accordion>
          <el-collapse-item
          v-for="(content, index) in contents"
          :key="index">
            <template slot="title">
              <h4 class="pll-left">{{ content.title }} ({{ contents[index].length }})</h4>
              <span class="pull-right btn-group">
                <el-button type="text" size="mini" @click.stop="handleAddOne(index)">
                  add
                </el-button>
                <el-button type="text" size="mini" @click.stop="change()">
                  write
                </el-button>
                <el-button type="text" size="mini" @click.stop="handleRemoveMuti(index)">
                  delete
                </el-button>
              </span>
            </template>
            <div
            v-for="(item, key) in content.children"
            :key="key"
            class="list-item clearfix">
              <a :href="'item' + item.id" class="pull-left"> {{ item.title }} </a>
              <span class="pull-right">
                <el-button type="text" size="mini" @click.stop="change()">
                  write
                </el-button>
                <el-button type="text" size="mini" @click.stop="handleRemoveOne(index,key)">
                  delete
                </el-button>
              </span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-aside>
    <el-container>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      contents: [
        {
          id: 1,
          title: "1 电子政务标准",
          length: 5,
          children: [
            {
              id: 11,
              title: "11.工程管理"
            },
            {
              id: 12,
              title: "12.网络建设"
            },
            {
              id: 13,
              title: "13.信息共享"
            },
            {
              id: 14,
              title: "14.支撑技术"
            },
            {
              id: 15,
              title: "15.信息安全",
              children: []
            }
          ]
        },
        {
          id: 2,
          title: "2 电子政务方案",
          length: 2,
          children: [
            {
              id: 21,
              title: "21.方案1"
            },
            {
              id: 22,
              title: "22.方案2"
            }
          ]
        },
        {
          id: 1,
          title: "3 产品知识库",
          length: 2,
          children: [
            {
              id: 31,
              title: "21.方案1"
            },
            {
              id: 32,
              title: "22.方案2"
            }
          ]
        }
      ],
    };
  },
  methods: {
    append(el) {
      console.log(el.target);
    },
    handleAddOne (i) {
      console.log(i)
      this.contents[i].length ++
      const newId = Number(String(i + 1) + String(this.contents[i].length))
      const newItem = {id: newId, title: newId + '.new item' }
      this.contents[i].children.push(...newItem)
    },
    handleAddMuti () {
      let newId = this.contents.length - 1
      newId = this.contents[newId].id + 1
      console.log(newId)
      const newMutiItem = {id:newId, title: newId + ' newMutiItem', length: 0, children: []}
      this.contents.push(newMutiItem)
    },
    change() {
      console.log("change");
    },
    handleRemoveOne(i1, i2) {
      this.contents[i1].length = this.contents[i1].length - 1
      this.contents[i1].children.splice(i2, 1)
      // console.log(222);
    },
    handleRemoveMuti(i) {
      this.contents.splice(i, 1)
    }
  }
};
</script>

<style lang="scss" scoped>
.pull-left {
  float: left;
}
.pull-right {
  float: right;
}
.el-container .el-aside {
  height: 800px;
  background-color: #fff;
  border: 1px solid #e1e3e8;
}
.tree-left p {
  text-align: left;
  margin: 0;
  padding-left: 15px;
  line-height: 3;
  background-color: #0090ff;
  color: #fff;
  font-size: 16px;
}
.tree-left .el-collapse {
  padding: 0 10px;
}
.tree-left h4 {
  display: inline-block;
}
.el-collapse-item__content {
  margin-bottom: 10px!important;
  .list-item {
    padding: 3px 20px 3px 15px;
    &:hover {
      background-color: #eee;
    }
    a {
      color: #333;
      height: 28px;
      line-height: 28px;
    }
  }
}
</style>
