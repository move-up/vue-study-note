<template>
  <div>
    <input
    v-model="newItem"
    @keyup.enter="handleAddItem">
    <ul>
      <li
      v-for="(item,index) in items"
      :key="index"
      v-text="item.content"
      :class="{ finished:item.isFinished }"
      @click="handleFinished(item)"></li>
    </ul>
  </div>
</template>

<script>
import Store from './store'

export default {
  name: 'App',
  data () {
    return {
      items: Store.fetch(),
      items: [],
      newItem: ''
    }
  },
  watch: {
    items: {
      handler (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    handleFinished (item) {
      item.isFinished = !item.isFinished
    },
    handleAddItem () {
      let item = {
        content: this.newItem,
        isFinished: false
      }
      this.items.push(item)
      this.newItem = ''
    }
  },
}
</script>

<style>
.finished {
  text-decoration: underline;
  color: #999;
}
ul li {
  font-size: 18px;
  cursor: pointer;
}
</style>
