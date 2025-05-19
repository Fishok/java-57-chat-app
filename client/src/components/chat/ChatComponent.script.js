import {useWebSocket} from "@/composables/useWebSocket.js";
import {onMounted, ref} from "vue";

export default {
    setup() {
        const {messages, isConnected, connect, sendMessage} = useWebSocket();
        const input = ref('');

        onMounted(() => {
                connect();
            }
        )
        const send = () => {
            if (input.value.trim()) {
                sendMessage(input.value)
                input.value = '';
            }
        }
        return {
            messages,
            isConnected,
            input,
            send
        }
    }
}