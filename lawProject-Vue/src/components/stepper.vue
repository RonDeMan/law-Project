<template>
  <div>
    <v-stepper non-linear :value="getCurrentStep" @change="$emit('stepChanged',$event)">
     <v-stepper-header>
      <template v-for="(step,i) in getSteps">
          <v-stepper-step
            :key="`${step.id}-step`"
            :step="i + 1"
            editable
          >
            {{ step.text }}
          </v-stepper-step>

          <v-divider
            v-if="i !== getSteps.length -1"
            :key="step.id"
          ></v-divider>
        </template>

      <!-- <v-stepper-header>
        <v-stepper-step
          editable
          step="1"
        >
          הוסף אנשים
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="2"
        >
          שאלות
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
          editable
        >
          הצעות והמלצות
        </v-stepper-step> -->
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
    name:"questionStepper",
    props:{
      currentStep:{required: true},
      steps:{ required:true}
    },
    computed:{
      getCurrentStep(){
        // vue raises an error without this.... yuck
        return this.currentStep || 1
      },

      getSteps(){
        return this.steps || []
      }
    }
}
</script>

<style>

</style>