import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people:[],
    nextPersonId: 0,
    defaultPerson:{
      // id:"", added when new person is added
      firstName:"",
      lastName:"",
      nickname:0,
      stateId: "",
      relationship:""
    },
    

    nicknames:[
      {text: "השם", value:0},
      {text: "בן זוג", value:1},
      {text: "בת זוג", value:2},
      {text: "בן", value:3},
      {text:"בת", value:4},
      {text: "אח", value:5},
      {text: "אחות", value:6},
      {text: "אב", value:7},
      {text: "אם", value:8}
    ],

    relationships:[
      {text: "בן/בת זוג לנישואין", value:0},
      {text: "בן/בת זוג", value:1},
      {text: "ילד", value:2},
      {text: "הורה", value:3},
      {text:"סבא/סבתה", value:4},
      {text: "אח/אחות", value:5},
      {text: "חבר טוב", value:6},
      {text: "מטפל", value:7},
      {text: "אחר", value:8}
    ],

    bonds:[
      {text:"טובה", value:"1"},
      {text:"טובה מאוד", value:"2"},
      {text:"סבירה", value:"3"},
      {text:"גרועה", value:"4"}
    ],

    transportation:[
      {text:"רכב פרטי", value:"1"},
      {text:"מונית", value:"2"},
      {text:"תחבורה ציבורית", value:"3"},
      {text:"ברגל", value:"4"},
      {text:"אחר", value:"5"}
    ],
    maritalStatus:[
      {text:"נשוי", value:"1"},
      {text:"רווק", value:"2"},
      {text:"גרוש", value:"3"},
      {text:"אלמן", value:"4"},
      {text:"ידוע בציבור", value:"5"}
    ],
    communication:[
      {text:"טוב מאוד", value:"1"},
      {text:"ממוצע", value:"2"},
      {text:"לא בקשר", value:"3"}
    ],

    questions:[],
    questionAnswers:[],
  },
  getters: {
    getQuestionPages(state){
      return state.questions
    },

    getQuestions(state){
      let questions = []
      state.questions.forEach(page => 
                page.questionRows.forEach(questionRow=> 
                                        questionRow.questions.forEach(question =>
                                                                      questions.push(question))))
      return questions
    },

    getRelationships(state){
      return state.relationships
    },
    getBonds(state){
      return state.bonds
    },
    getTransportation(state){
      return state.transportation
    },
    getMaritalStatus(state){
      return state.maritalStatus
    },
    getCommunication(state){
      return state.communication
    },
    getNicknames(state){
      return state.nicknames
    },
    getPeople(state){
      return state.people
    },
    getPeopleForSelect(state){
      return state.people.filter( person => person.nickname != 0 || person.firstName || person.lastName)
    },
    getQuestionAnswers(state){
      return state.questionAnswers
    }
  },
  mutations: {
    updatePerson(state,{name,value,index}){
        state.people[index][name] = value
    },

    addNewPerson(state){
      state.people.push({...state.defaultPerson, id:state.nextPersonId})
      state.nextPersonId ++
    },

    deletePerson(state,id){
      state.people = state.people.filter(person => person.id != id)
    },

    setQuestionAnswer(state,{id,answer}){
      let questionExists = state.questionAnswers.find(answer=> answer.id == id)
      if( questionExists){
        questionExists.answer = answer
      }else{
        state.questionAnswers.push({id,answer})
      }
    },

    setQuestions(state,questions){
      state.questions = questions
    }
  },
  actions: {
    addNewPerson(context){
      context.commit("addNewPerson")
    },
    updatePerson(context,{name,value,index}){
      
      context.commit("updatePerson",{name,value,index})
    },

    deletePerson(context,id){
      context.commit("deletePerson", id)
    },

    setQuestionAnswer(context, {id,answer}){
      console.log(id, answer)
      context.commit("setQuestionAnswer", {id, answer})
    },
    setQuestions(context,questions){
      context.commit("setQuestions",questions)
    }
  },
  modules: {
  }
})
