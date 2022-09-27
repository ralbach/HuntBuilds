
<script lang="ts">
  import HeaderBar from './components/HeaderBar.vue';
  import BuildName from './components/centerColumn/BuildName.vue';
  import CharacterBlock from './components/centerColumn/CharacterBlock.vue';
  import EquipableSelect from './components/leftColumn/EquipableSelect.vue';
  import { defineComponent } from 'vue';

export default defineComponent({
  name:'App',
  components: {
    EquipableSelect,
    CharacterBlock,
    BuildName,
    HeaderBar
  }, 
  data() {
      return {
        characters: [],
        consumables: [],
        longWeapons: [],
        mediumWeapons:[],
        shortWeapons: [],
        tools: [],
        traits: []
      }
  },
  computed: {},
  created() {
    this.fetchHunters();
    this.fetchTools();
    this.fetchTraits();
    this.fetchLongWeapons();
    this.fetchShortWeapons();
    this.fetchMediumWeapons();
    this.fetchConsumables();

  },
  methods: {
    async fetchHunters () {
      const hunters = fetch('process.env.SERVER_ADDRESS/legendaryHunters/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }}).then(response => response.json()).then(data => {console.warn(data); this.characters = data});
      return hunters
    },
    async fetchTools () {
      const tools = fetch('process.env.SERVER_ADDRESS/tools/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }}).then(response => response.json()).then(data => {this.tools = data});
      return tools
    },
    async fetchTraits () {
      const traits = fetch('process.env.SERVER_ADDRESS/traits/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }}).then(response => response.json()).then(data => {this.traits = data});
      return traits
    },
    async fetchConsumables () {
      const consumables = fetch('process.env.SERVER_ADDRESS/consumables/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }}).then(response => response.json()).then(data => {this.consumables = data});
      return consumables
    },
    async fetchLongWeapons () {
      const longWeapons = fetch('process.env.SERVER_ADDRESS/longWeapons/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }}).then(response => response.json()).then(data => {this.longWeapons = data});
      return longWeapons
    },
    async fetchShortWeapons () {
      const shortWeapons = fetch('process.env.SERVER_ADDRESS/shortWeapons/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }}).then(response => response.json()).then(data => {this.shortWeapons = data});
      return shortWeapons
    },
    async fetchMediumWeapons () {
      const mediumWeapons = fetch('process.env.SERVER_ADDRESS/mediumWeapons/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }}).then(response => response.json()).then(data => {this.mediumWeapons = data});
      return mediumWeapons
    },
  }

});

</script>
<template>
  <div class="wrapper">
    <HeaderBar />
    <div class="columns">
      <div class="leftColumn">
        <div class="equipableText">
          Primary
        </div>
        <EquipableSelect :equipables="[...shortWeapons, ...mediumWeapons, ...longWeapons]" type="weapons" :single="true" />
        <div class="equipableText">
          Secondary
        </div>
        <EquipableSelect :equipables="[...shortWeapons, ...mediumWeapons, ...longWeapons]" type="weapons" :single="true" />
        <div class="equipableText">
          Tools
        </div>
        <EquipableSelect :equipables="tools" type="tools" :single="true" />
        <div class="equipableText">
          Consumables
        </div>
        <EquipableSelect :equipables="consumables" type="consumables" :single="false" />
      </div>

      <div class="centerColumn">
        <BuildName name="Name Build" />
        <CharacterBlock :characters="characters" />
      </div>

      <div class="rightColumn">
        <div class="equipableText">
          Traits
        </div>
        <EquipableSelect :equipables="traits" type="traits" :single="false" />
        <div class="equipableText">
          Share Build button
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style> 
  .wrapper {
    height: 100vh;
    width: 100vw;
    background-color: #181818;
    font-family: 'Courier New';
  } 
  .columns {
    display: flex;
    flex-direction: row;
  }
  .centerColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto auto;
  }
  .leftColumn {
    display: flex;
    flex-direction: column;
    margin: 100px;
    width: 450px;

  }
  .rightColumn {
    display: flex;
    flex-direction: column;
    margin: 100px;
    /* background-color: white; */
    width: 450px;
  }
  .equipableText {
    color: white;
    margin: 20px auto 0 0;
    font-size: 24px;
  }
</style>

