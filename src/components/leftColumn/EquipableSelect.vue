<script lang="ts">
    import Tooltip from '../tooltip/tooltip.vue';
    import SelectionModal from '../selection-modal/selection-modal.vue';
    import {isEmpty} from 'lodash';
    export default {
        components:{Tooltip, SelectionModal},
        props:{
            equipables: {
                type: [Object],
                required: true
            },
            single:{
                type: Boolean,
                default: false
            },
            type:{
                type: String,
                default: 'weapon'
            }
        },
        data() {
            return {
                imageLink: '108',
                selected: {},
                showModal: false
            }
        },
        computed: {
        }, 
        methods:{
            toggleModal(){
                console.warn('toggleModal!', this.equipables, this.type, this.showModal)
                this.showModal = !this.showModal;
            },
            addToSelected(equipable: any){
                this.selected = equipable;
            },
            isNotEmpty(check: any){
                return !isEmpty(check)
            }
        }
    }
</script>

<template>
    <div class="equipableWrapper">
        <div v-if="showModal" >
            <SelectionModal :itemsList="equipables" :itemType="type" :isSingle="single" @toggleModal="toggleModal"/>
        </div>
       
            <div v-if="type === 'traits'" class="singleSlot" @click="toggleModal">
                <div class="plusStyling">
                    +
                </div>
            </div>

            <div v-if="type === 'weapons'" class="singleSlot" @click="toggleModal">
                <div v-if="isNotEmpty(selected.primaryWeapon)">
                    <img class="singleSlot" :name="selected" />
                </div>
                <div v-else class="plusStyling">
                    +
                </div>
            </div>
            <div v-if="type === 'consumables'" class="singleSlot" @click="toggleModal">
                <div v-if="isNotEmpty(selected.consumables)">
                    <img class="singleSlot" :name="selected" />
                </div>
                <div v-else class="plusStyling">
                    +
                </div>
            </div>
            <div v-if="type === 'tools'" class="singleSlot" @click="toggleModal">
                <div v-if="isNotEmpty(selected.tools)">
                    <img class="singleSlot" :name="selected" />
                </div>
                <div v-else class="plusStyling">
                    +
                </div>
            </div>
            <div v-if="type !== 'weapons' && type !== 'traits'" class="multiSlot" @click="toggleModal">
                <img  v-if="selected" :name="selected" />
                <div v-else class="plusStyling">
                    +
                </div>
                <img  v-if="selected" :name="selected" />
                <div v-else class="plusStyling">
                    +
                </div>
                <img  v-if="!selected" :name="selected" />
                <div v-else class="plusStyling">
                    +
                </div>
                <img  v-if="selected" :name="selected" />
                <div v-else class="plusStyling">
                    +
                </div>
            </div>
        </div>  
</template>

<style scoped>

.equipableWrapper {
    height: 108px;
    width: 450px;
    border-radius:10px;
    margin-top: 20px;
    background-color: #424242;
}
.singleSlot {
    display:flex;
    flex-direction: row;
    background-color: #424242;
    color: white;
    border-radius: 10px;
}
.singleSlot {
    display:flex;
    flex-direction: row;
    background-color: #424242;
    color: white;
    border-radius: 10px;
}
.multiSlot {
    display:flex;
    justify-content: space-between;
    align-items:center;
    background-color: #424242;
    color: white;
    border-radius: 10px;
    margin: 2px;
}
.plusStyling {
    margin: 0 auto;
    font-size: 54px;
    text-align: center;
    vertical-align: middle;
    line-height: 108px;
    color: white;
}
</style>
