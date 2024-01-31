import { messages } from "@/assets/data/data"
import PageHeader from "@/components/pageHeader"
import MessagesBody from "./chatsBody"

const Chats = () => {
  return (
    <section className="flex flex-col h-screen overflow-hidden">
      <PageHeader title={messages.messages} />
      <MessagesBody />
    </section>
  )
}

export default Chats