<template>
    <div>
        <h1>הוסף אנשים</h1>
        <div v-for="(person,index) in getPeople" :key="index" style="margin-bottom:1rem">
            <addPerson :person="person" @updatePerson="updatePerson({...$event,index})" @deletePerson="deletePerson(person.id)"></addPerson>
        </div>
    <v-btn @click="addNewPerson">הוסף עוד בן אדם</v-btn>
</div>
</template>

<script>

import addPerson from './addPerson.vue'
import { mapGetters, mapActions  } from 'vuex';
export default {
    name:"addPeople",
    components:{addPerson},
    data(){
        return{
            
        }
    },
    computed:{
        ...mapGetters(["getPeople"])
    },
    methods:{
        ...mapActions(["addNewPerson","updatePerson", "deletePerson"]),
    }
}
</script>

<style>

</style>