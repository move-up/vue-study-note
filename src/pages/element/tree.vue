<template>
  <el-container>
    <el-aside width="300px">
      <div class="block tree-left">
        <p>知识分类</p>
        <el-tree
          :data="data5"
          node-key="id"
          :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <a :href="'item' + node.id"><span>{{ node.label }}</span></a>
            <span>
              <el-button
                type="text"
                size="mini"
                @click="() => append(data)">
                Append
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)">
                Delete
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </el-aside>
    <el-container>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 11,
          label: '二级 1-1',
          children: [{
            id: 111,
            label: '三级 1-1-1'
          }, {
            id: 112,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 21,
          label: '二级 2-1'
        }, {
          id: 22,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 31,
          label: '二级 3-1'
        }, {
          id: 32,
          label: '二级 3-2'
        }]
      }];
      return {
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      // renderContent(h, { node, data, store }) {
      //   return (
      //     <span class="custom-tree-node">
      //       <span>{node.label}</span>
      //       <span>
      //         <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
      //         <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
      //       </span>
      //     </span>);
      // }
    }
  };
</script>

<style lang="scss" scoped>
.tree-left .custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
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
.tree-left .el-tree {
  padding-left: 5px!important;
}
// .tree-left .el-tree-node__content {
//     height: 30px;
// }
</style>
