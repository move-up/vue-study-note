<template>
  <div class="page-index">
    <div id="demo1">
      <input type="number" v-model="a" v-bind:id="dynamicId">+
      <input type="number" v-model="b">+
      <input type="number" v-model="c">= <span>{{ total }}</span>
      <!-- <span>{{ total }}</span> -->
    </div>
    <div id="DEMO2">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
  </div>
</template>
  <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address">
  </template>

<script>
  export default {
    name: '',
    components: {

    },
    props: {
    },
    data () {
      return {
        a: 20,
        b: 40,
        c: 10,
        //total: 70,
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
        message: 'Hello',
        n: 0
      }
    },
    computed: {
      total () {
        return parseFloat(this.a) + parseFloat(this.b) + parseFloat(this.c)
        //return this.a + this.b + this.c
      },
      reversedMessage () {
        return this.message.split('').reverse().join('')
      }
    },
    watch: {
      /* a: function(val){
        this.total = parseFloat(val) + parseFloat(this.b) + parseFloat(this.c)
      },

      b: function(val){
        this.total = parseFloat(this.a) + parseFloat(val) + parseFloat(this.c)
      },

      c: function(val){
        this.total = parseFloat(this.a) + parseFloat(this.b) + parseFloat(val)
      }, */

      firstName: function(val){
        this.fullName = val + ' ' + this.lastName
      },

      lastName: function(val){
        this.fullName = this.firstName + ' ' + val
      },
    },
    created () {

    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style>
</style>
