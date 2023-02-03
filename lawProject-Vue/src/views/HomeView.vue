<template>
  <div>
    <questionStepper :currentStep="currentStep" @stepChanged="currentStep=$event" :steps="getSteps"/>
    <div class="mt-4">
      <addPeople v-if="currentStep==1"/>
      <questionsForm v-if="currentStep<getSteps.length && currentStep>1" :questionPage="questionPage"/>
    </div>
  </div>
</template>

<script>
  import addPeople from '../components/addPeople.vue'
  import questionStepper from '../components/stepper.vue'
  import questionsForm from '../components/questionsForm.vue'
import { mapGetters } from 'vuex'
  export default {
    name: 'HomePage',
    data(){
      return{
        currentStep:1,
      }
    },

    computed:{
      ...mapGetters(["getQuestions","getQuestionPages"]),

      getSteps(){
        let steps = []
        steps.push({id:"people", text:"הוסף אנשים"})

        this.getQuestionPages.forEach(page=>{
          steps.push({id:page.id,text:page.title})
        })

        steps.push({id:"suggestions", text:"הצעות והמלצות"})
        return steps
      },

      questionPage(){
        return this.getSteps[this.currentStep-1].id
      }
    },
    
    components: {
      addPeople,
      questionStepper,
      questionsForm
    },
  }
</script>
