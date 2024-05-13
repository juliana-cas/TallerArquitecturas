const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Función para agregar un mensaje al área de chat
function addMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hasta el final
}

// Manejar el clic en el botón de enviar
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    addMessage('Tú: ' + message);
    messageInput.value = '';
    // Aquí normalmente enviarías el mensaje al servidor
    // Pero en este ejemplo, simplemente lo mostramos en la ventana de chat
  }
});

// Simular mensajes del servidor
setTimeout(() => {
  addMessage('Servidor: ¡Hola! ¿Cómo estás?');
}, 1000);

setTimeout(() => {
  addMessage('Servidor: ¿Listo para comenzar?');
}, 2000);
