<script src="./ChatComponent.script.js"></script>
<style scoped src="./ChatComponent.style.css"></style>

<template>
  <div class="chat-box">
  <h2>Chat</h2>
    <div class="messages">
      <p v-for="(msg, i) in messages" :key="i">{{msg}}</p>
    </div>
    <form @submit.prevent="send">
      <input v-model="input" placeholder="Type your message..."/>
      <button type="submit">Send</button>
    </form>
    <p v-if="!isConnected">Disconnected</p>
  </div>
</template>
