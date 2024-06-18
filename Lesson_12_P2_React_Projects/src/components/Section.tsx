import { ReactNode } from "react"

type SectionProps = {
    subHeading?: string,
    children: ReactNode
}

const Section = ({children, subHeading = "subH"} : SectionProps) => {
  return (
    <div>
      <h2>{subHeading}</h2>
      {children}
    </div>
  )
}

export default Section
