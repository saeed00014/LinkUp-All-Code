import PageHeader from "@/components/pageHeader"
import Chat from "./chat"
import { messages } from "@/assets/data/data"

const Chats = () => {
  return (
    <section className="flex flex-col w-full h-screen">
      <PageHeader title={messages.messages} />
      <Chat />
    </section>
  )
}

export default Chats