<template>
  <div>

        <!-- <component :value="answer" :is="question.type" :label="question.label"  @change="$emit('answerChange',$event)"
                   :prefix="question.prefix" :items="questionItems"  :rules="rules"> -->
                   <!-- </component> -->
        <genericInput v-if="!specialComponents.includes(question.type)" :value="answer" :type="question.type" 
                   :label="question.label"  @input="$emit('answerChange',$event)"
                   :prefix="question.prefix" :items="questionItems"  :rules="rules" :disabled="disabled"/>

        <vRadioGroup v-if="question.type == 'v-radio-group'" :value="answer" 
                     @change="$emit('answerChange',$event)" row>
            <v-radio v-for="item in questionItems" :key="item.value" :label="item.text" :value="item.value"></v-radio>
        </vRadioGroup>
  </div>
</template>

<script>
// import { VTextField,VSelect,VCheckbox } from 'vuetify/lib'
import { mapGetters } from 'vuex';
import genericInput from './genericInput.vue'
export default {
    name:"questionBox",
    props:["question", "answer", "disabled"],
    components:{
      genericInput
    },
    data() {
      return {
        specialComponents: ["v-radio-group"]
      }
    },

    computed:{
      ...mapGetters(["getPeopleForSelect","getNicknames", "getBonds", "getCommunication", 
                     "getTransportation", "getMaritalStatus"]),

      rules(){
        let rules = []

        if(this.question.required){
          rules.push(v => !!v ||"שדה חובה")
        }

        if(this.question.rules.includes("number")){
          rules.push(v =>!v || !isNaN(parseFloat(v)) ||"הערך חייב להיות מספר")
        }

        if(this.question.maxLen){
          rules.push(v => v <= this.question.maxLen ||"הערך חייב להיות מספר")
        }


        return rules
      },

      questionItems(){
        let items = []
        if(!this.question.itemsId) return 

        switch (this.question.itemsId) {
          case 'people':
            this.getPeopleForSelect.forEach(person=>{
              let text = this.itemText(person)
              let value = person.id
              items.push({value,text})
            })
          
          break;
          case 'bonds':
            items = this.getBonds
            break;

          case 'transportation':
            items = this.getTransportation
            break;
          case 'maritalStatus':
            items = this.getMaritalStatus
            break;
          case 'communication':
            items = this.getCommunication
            break;
          default:
            console.log("couldnt find item group")
          break;    
        }

        return items
      }

      
    },
    methods:{
      itemText(item){
        switch (this.question.itemsId) {
          case 'people':
            return item.nickname == 0 ? `${item.firstName} ${item.lastName}` : this.getNicknames[item.nickname].text 

          default:
            return ''
        }
      },
      
    }
}
</script>

<style>

</style>