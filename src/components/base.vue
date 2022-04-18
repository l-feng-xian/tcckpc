<template>
    <div style="height: 100%;">
        <baseTitleVue title="勤务资源"></baseTitleVue>
    </div>
</template>

<script>
import baseTitleVue from './baseTitle.vue';
export default {
    components: { baseTitleVue },
    data() {
        return {
            dataMessage: { class1: '12', class2: '120' }
        }
    },
    mounted() {
    },
    methods: {}
}
</script>

<style scoped>
</style>