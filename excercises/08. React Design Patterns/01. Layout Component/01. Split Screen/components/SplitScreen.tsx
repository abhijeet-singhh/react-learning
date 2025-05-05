import { ReactNode } from "react"

interface SplitScreenProps {
    children: [ReactNode, ReactNode];
    leftWeight: number;
    rightWeight: number;
}

const SplitScreen = ({ children, leftWeight, rightWeight }: SplitScreenProps) => {

    const [left, right] = children

    const leftWidth =  `${leftWeight}%`
    const rightWidth =  `${rightWeight}%`

  return (
    <section className="flex w-screen bg-[#222831]">
        <div style={{ width: leftWidth }}>{left}</div>
        <div style={{ width: rightWidth }}>{right}</div>
    </section>
  )
}

export default SplitScreen
