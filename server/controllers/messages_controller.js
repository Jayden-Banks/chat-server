const messages = []
let messageId = 0



module.exports = {
  create: (req, res) => {
    const { text, time } = req.body
    const message = {
      id: messageId,
      text,
      time
    }
    messageId++
    messages.push(message)
    res.status(200).send(messages)
  },

  read: (req, res) => {
    res.status(200).send(messages)
  },

  update: (req, res) => {
    const { id } = req.params
    const { text, time } = req.body
    const newMessage = messages.filter(message => {
      if (message.id === +id) {
        message.text = text
        message.time = time
        res.status(200).send(messages)
      } else {
        res.status(404).send("Message not found") 
      }
    })
  },

  delete: (req, res) => {
    const { id } = req.params
    messages.filter((message, index) => {
      if (message.id === +id) {
        messages.splice(index, 1)
        res.status(200).send(messages)
      } else {
        res.status(404).send('Message not found')
      }
    })
  }
}