<!-- Tab.vue -->
<template>
    <div class="tab">
        <div
            class="item"
            v-for="(item, i) in currOptions"
            :class="item | tabItemClass"
            :key="i"
            @click="onTabSelect(item)">
            {{item.text}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String
            },
            options: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                currValue: this.value,
                currOptions: []
            }
        },
        mounted() {
            this.initOptions();
        },
        methods: {
            initOptions() {
                this.currOptions = this.options.map(item => {
                    return {
                        ...item,
                        active: item.value === this.currValue,
                        disabled: !!item.disabled
                    }
                });
            },
            onTabSelect(item) {
                if (item.disabled) return;
                this.currOptions.forEach(obj => obj.active = false);
                item.active = true;
                this.currValue = item.value;
                this.$emit('input', this.currValue);
            }
        },
        filters: {
            tabItemClass(item) {
                let classList = [];
                if (item.active) classList.push('active');
                if (item.disabled) classList.push('disabled');
                return classList.join(' ');
            }
        },
        watch: {
            options(value) {
                this.initOptions();
            },
            value(value) {
                this.currValue = value;
            }
        }
    }
</script>

<style lang="scss" scoped>
.tab {
    width: 100%;
    margin: 50px;
    overflow: hidden;
    position: relative;
    .item {
        padding: 10px 50px;
        border-top: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        font-size: 30px;
        background-color: #fff;
        float: left;
        user-select: none;
        cursor: pointer;
        transition: 300ms;
        &:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        &:last-child {
            border-right: 1px solid #ddd;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        &.active {
            color: #fff;
            background-color: red;
        }
        &:hover {
            color: #fff;
            background-color: #f06;
        }
        &.disabled {
            color: #fff;
            background-color: pink;
            cursor: no-drop;
        }
    }
}
</style>
