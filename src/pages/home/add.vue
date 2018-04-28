<template>
  <div class="page-index">
    <div id="demo2">
      <input type="number" v-model="a">+
      <input type="number" v-model="b">+
      <input type="number" v-model="c">= <span>{{ total }}</span>
      <!-- <span>{{ total }}</span> -->
    </div>
  </div>
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
        fullName: 'Foo Bar'
      }
    },
    computed: {
      total () {
        return parseFloat(this.a) + parseFloat(this.b) + parseFloat(this.c)
        //return this.a + this.b + this.c
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
