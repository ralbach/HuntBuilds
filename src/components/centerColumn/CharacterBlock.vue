<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name:'CharacterBlock',
    props:{ 
        characters: {
            type: [Object],
            required: true
        },
    },
    data() {
        return {
            imageLink: '656',
            selected: ''
        }
    },
    methods: {
    }
})
</script>

<template>
    <div class="characterContainer">
        <select class="skinSelect" v-model="selected">
            <option value="">Select Build Skin</option>
            <option :key="character.Legendary_Hunter" v-for="character  in characters" :value="character">{{character.Legendary_Hunter}}</option>
        </select>
        <img v-if="selected" class="characterImage" :name="selected.Legendary_Hunter" :src="`process.env.SERVER_ADDRESS/legendaryHunters/image/${selected.imageUrl}`" />
    </div>
</template>

<style scoped>
.characterImage {
    height: 725px;
    width: 450px;
}
.characterContainer {
    height: 740px;
    width: 450px;
    border-radius:10px;
    margin-top: 20px;
    background-color: #424242;
}
.skinSelect {color : black; width: 100%; }
</style>
