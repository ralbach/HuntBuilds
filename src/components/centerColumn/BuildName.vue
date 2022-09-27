<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name:'BuildName',
    props:{ 
        name: {
            type: String
        },
    }
})
</script>

<template>
    <div>
        <input class="buildNameInput" :value="name" />
    </div>
</template>

<style scoped>
.buildNameInput {
    width: 450px;
    height: 105px;
    font-size: 56px;
    font-family: 'Courier New';
    color: white;
    border-radius: 10px;
    background-color: #424242;
    text-align:  center;
}
</style>
