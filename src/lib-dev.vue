<script>
import { Rbln7Sample } from './entry';
export default {
    name:  'Rbln7LibDev', // vue library dev component
    components: {
        Rbln7Sample,
    },
}
</script>

<template>
    <div class="rbln7-lib-dev">
        <rbln7-sample></rbln7-sample>
    </div>
</template>

<style scoped>
    .rbln7-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
