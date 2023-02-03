<template>
    <div>
        
    <v-form style="background-color: #dcf0ff;">
        <v-container>
            <v-btn @click="$emit('deletePerson')"> <v-icon> mdi-delete </v-icon> </v-btn>
            <v-row>
                <v-col>
                <v-text-field :value="person.firstName" @change="emitUpdate({name:'firstName',value:$event})" label="שם פרטי"/>
            </v-col>
            <v-col>
                <v-text-field :value="person.lastName"  @change="emitUpdate({name:'lastName',value:$event})" label="שם משפחה"/>
            </v-col>
            <v-col>
                <v-select :value="person.nickname"  @change="emitUpdate({name:'nickname',value:$event})" :items="getNicknames" label="כינוי"/>
            </v-col>
            </v-row>
            <v-row>
                <v-col>
                <v-text-field :value="person.stateId"  @change="emitUpdate({name:'stateId',value:$event})" label="ת''ז"/>
            </v-col>
            <v-col>
                <v-select :value="person.relationship"  @change="emitUpdate({name:'relationship',value:$event})" :items="getRelationships" label="תאר את הקשר שלך עם הבן אדם"/>
            </v-col>
            </v-row>
        </v-container>
    </v-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"addPerson",
    props:['person'],

    data(){
        return{
            name: "",
            lastName:"",
            nickname:"",
            id:"",
            relationship:"",
        }
    },
    computed:{
        ...mapGetters(["getNicknames","getRelationships"]),
    },
    methods:{
        emitUpdate({name,value}){
            this.$emit("updatePerson",{name:name,value:value})
        }
            }

}
</script>

<style>

</style>