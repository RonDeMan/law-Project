import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import questions from "./assets/jsons/questions"
// test
import { Storage } from 'aws-amplify';
Storage.configure({ region: "eu-west-3" });

console.log(questions)
try {

Storage.put('private/questions.json', questions, { contentType: 'application/json', level: 'private' })
  .then(result => console.log('File added successfully:', result))
  .catch(err => console.log('Error adding file:', err));
}catch(error){
  console.log("error adding file: "+error)
}
//end test

Amplify.configure(awsconfig);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.ignoredElements = [/amplify-\w*/];


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


