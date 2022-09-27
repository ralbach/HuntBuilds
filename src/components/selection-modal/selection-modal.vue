<template>
    <div class="selectionModalWrapper">
        <div class="selectionModal">
            <div class="itemWrapper">
                <div class="titleBar">
                    <div @click="toggleModal" class='exitButton'>
                        X
                    </div>
                    Select {{capitalized(itemType)}}
                </div>
                <div v-for="item in itemsList" :key="item.Name"  class="trait">
                    <Tooltip v-if="isNotEmpty(item.Description)" :text="item.Description">
                        <img :src='`process.env.SERVER_ADDRESS/${itemType}/image/${item.imageUrl}`' 
                            :height="150" 
                            :width="150" 
                            @click="addToSelected(item)" />
                        <div class="itemFooter">
                            <b>{{item.Name}}</b>
                            <br />
                            Cost: {{item.Cost}}
                        </div>
                    </Tooltip>
                    <div v-else class="trait">
                        <img :src='`process.env.SERVER_ADDRESS/${itemType}/image/${item.imageUrl}`' 
                            :height="150" 
                            :width="isSingle ? 250 : 150" 
                            @click="addToSelected(item)" />
                        <div class="itemFooter">
                            <b>{{item.Name}}</b>
                            <br />
                            Cost: {{itemType === 'traits' ? item.Cost : item.Cost + '$'}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Tooltip from '../tooltip/tooltip.vue';
import {capitalize, isEmpty} from 'lodash';
export default {
    name: 'SelectionModal',
    components: {
        Tooltip
    },
    props: {
        isSingle: {
            type: Boolean,
            required: true
        },
        itemsList: {
            type: Array,
            required: true
        },
        itemType: {
            type: String,
            required: true
        }
    },
    computed: {},
    methods: {
        toggleModal () {
            console.warn('toggleModal')
            this.$emit('toggleModal');
        },
        addToSelected(equipable){
            console.warn('pushing', equipable);
            this.$emit('selected', equipable);
        },
        capitalized(text){
            return capitalize(text)
        },
        isNotEmpty(item){
            return !isEmpty(item)
        }
    }
}
</script>
<style scoped>
.titleBar {
    position: sticky;
    display:flex;
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 1rem;
    font-size: 40px;
    transition: all ease 1.5s;

}
.itemWrapper {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    transition: all ease 1.5s;

}
.trait{
    color: white;
    margin: 25px;
    width: 250px;
    height: 250px;
    transition: all ease 1.5s;
}
.itemFooter { 
    border-radius: 10px;
    background-color: rgb(36, 36, 36);
    display:flex; 
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    transition: all ease 1.5s;

}
.selectionModalWrapper {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color:rgba(0,0,0,0.4);
    position:absolute;
    z-index: 99;
    transition: all ease .2s;

}
.selectionModal {
    display:flex;
    align-self: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    margin: 5% auto;
    background-color: #424242;
    z-index: 100;
    color: white;
    transition: all ease 1.5s;

}
.exitButton {
    position: absolute;
    top: 0;
    right:1%;
}
</style>