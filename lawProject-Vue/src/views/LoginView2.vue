<template>
    <div>
    <div v-if="authState !== 'signedin'">You are signed out.</div>
    <amplify-auth-container>
        <amplify-authenticator username-alias="email">
        <div v-if="authState === 'signedin' && user">
            <div>Hello, {{user.attributes.email}}</div>
        </div>
        <amplify-sign-out></amplify-sign-out>
        </amplify-authenticator>
    </amplify-auth-container>
  </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

export default {
  name: 'AuthStateApp',

  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    };
  },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  },
}

</script>

<style lang="css" scoped>

</style>