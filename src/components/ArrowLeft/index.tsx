import { ReactComponent as Seta } from "../../assets/buttons/Vector-1.svg"
import { ReactComponent as Linha } from "../../assets/buttons/Vector.svg"
import { ArrowWrapper } from "./style"

export const ArrowLeft = ({style}:any) => (
  <ArrowWrapper id="previousIcon" style={style} >
    <Seta />
    <Linha id="linha" />
  </ArrowWrapper>
)