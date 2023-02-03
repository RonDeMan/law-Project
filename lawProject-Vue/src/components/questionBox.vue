<template>
  <div>
        <h3>{{ question.text }}: {{ question.required ? '*': "" }}</h3>
        <!-- <component :value="answer" :is="question.type" :label="question.label"  @change="$emit('answerChange',$event)"
                   :prefix="question.prefix" :items="questionItems"  :rules="rules"> -->
                   <!-- </component> -->
        <genericInput :value="answer" :type="question.type" :label="question.label"  @input="$emit('answerChange',$event)"
                   :prefix="question.prefix" :items="questionItems"  :rules="rules" :disabled="disabled"/>
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

    computed:{
      ...mapGetters(["getPeopleForSelect","getNicknames"]),

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

        switch (this.question.itemsId) {
          case 'people':
            this.getPeopleForSelect.forEach(person=>{
              let text = this.itemText(person)
              let value = person.id
              items.push({value,text})
            })
          

          break;
          default:
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