<template>
  <v-app>
    <v-btn @click="toPdf">click me for pdf</v-btn>
    <v-main class="Page-padding" style="direction:rtl">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {getQuestions} from './DL/questions.js'
import { jsPDF } from "jspdf";
import callAddFont from "../Suez One-normal"

export default {
  name: 'App',

  data: () => ({
    //
  }),

  async created(){
    getQuestions().then((res) => this.setQuestions(res))
    jsPDF.API.events.push(['addFonts', callAddFont])
  },

  methods:{
    ...mapActions(["setQuestions"]),
    async toPdf(){
      const doc = new jsPDF({compress: true,});
      
      doc.setFont("Suez One")
      doc.setR2L(true);
      doc.setLanguage('he')
      
      
      let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth()
      this.getQuestions.forEach((question,i) => {
        let answer = this.getQuestionAnswers.find(answer => answer.id == question.id)
        let answerText = this.getAnswerText(answer, question.type, question.itemsId)

        let line = `${question.text}: ${answerText}` 
        doc.text(line,pageWidth-10, 10*(i+1),"right");
      })
      
      doc.save("answers.pdf");
    },

    getAnswerText(answer, questionType, questionItems){
      if(!answer && questionType != "v-checkbox" ) return 'אין תשובה'
      
      switch(questionType){
        case "v-checkbox":
          return answer?.answer ? "כן" : "לא"
        
        case "v-text-field":
          return answer.answer
        
        case "v-select":
          switch(questionItems){
            case "people":
              {
                let person = this.getPeople[answer.answer]
                return person.nickname == 0? `${person.firstName} ${person.lastName}` : this.getNicknames[person.nickname].text
              }
            default:
              return "הסלקט הזה לא קיים"

          }

        default: 
          return ""
      }
    }
  },
  computed:{
    ...mapGetters(["getQuestionAnswers","getQuestions", "getNicknames", "getPeople"])
  }
};
</script>
<style scoped>
  .Page-padding{
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-right: 10rem;
    margin-left: 10rem;
  }
</style>
