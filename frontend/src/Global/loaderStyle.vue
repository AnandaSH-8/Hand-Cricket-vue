<template>
    <div>
        <h1>{{ store.storeData.loader }}</h1>
    </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/index'
const store = useGlobalStore();
</script>

<style scoped>

</style>