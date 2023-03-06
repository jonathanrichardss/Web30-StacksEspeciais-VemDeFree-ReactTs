import { BoxStyle } from "./styles"

interface BoxProps {
    bgColor: string;
    txtBox: string;
}

export default function Box(props: BoxProps) {
   return (
    <BoxStyle style={{backgroundColor: props.bgColor}}>
        <p>{props.txtBox}</p>
    </BoxStyle>
   ) 
}