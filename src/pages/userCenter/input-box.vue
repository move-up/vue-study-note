<template>
    <div class="blog">
      <label>
        {{ label }}
      </label>
        <input type="text" :value="value" @input="handleInput" v-on="inputListeners">
    </div>
</template>
<script>
  export default {
      name: "InputBox",
      props:["label", "value"],
      methods: {
        handleInput() {
          this.$emit('input', event.target.value)
        }
      },
      computed: {
        inputListeners: function () {
          var vm = this
          return Object.assign({},
          this.$listeners,
          {
            input: function(event){
              vm.$emit('input',event.target.value)
            }
          })
        }
      }
  }
</script>
