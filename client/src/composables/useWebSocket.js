import {onBeforeUnmount, ref} from "vue";


export const useWebSocket = (url = 'ws://localhost:9001') => {
    const ws = ref(null);
    const messages = ref([]);
    const isConnected = ref(false);

    const connect = () => {
        ws.value = new WebSocket(url);

        ws.value.onopen = () => {
            isConnected.value = true;
        }

        ws.value.onmessage = (e) => {
            messages.value.push(e.data);
        }

        ws.value.onclose = (e) => {
            isConnected.value = false;
        }
    }

    const sendMessage = (message) => {
        if(ws.value?.readyState === WebSocket.OPEN) {
            ws.value.send(message);
        }
    }

    onBeforeUnmount(() => {
        ws.value?.close()
    })

    return {
        connect,
        sendMessage,
        messages,
        isConnected,
    }
}