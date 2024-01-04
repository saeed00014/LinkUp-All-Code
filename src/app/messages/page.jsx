import { messages } from "@/assets/data/data"
import PageHeader from "@/components/pageHeader"
import MessagesBody from "./messagesBody"

const Messages = () => {
  return (
    <section className="flex flex-col h-auto">
      <PageHeader title={messages.messages} />
      <MessagesBody />
    </section>
  )
}

export default Messages