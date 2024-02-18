import { groups } from "@/assets/data/data"
import PageHeader from "@/components/pageHeader"

const Groups = () => {
  return (
    <section>
      <PageHeader title={groups.groups} />
      <div className="flex items-center justify-center w-full h-full">
        <p className="mt-10">
          {groups.noGroup}
        </p>
      </div>
    </section>
  )
}

export default Groups