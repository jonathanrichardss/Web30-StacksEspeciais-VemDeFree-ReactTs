import Box from "../Box/Box"
import { HeaderStyle } from "./styles"


// export const colorArr = ['red', 'blue', 'green', 'purple'];

// const defaultSort = Array.from((colorArr).sort())

// interface ArrType {
//     count: number;
// }

// let count: number;

export default function Header() {
    return (
        <HeaderStyle>
        <div className="lft-hdr">
            <h1>VemDeFree!</h1>
            <img src="images/Yellow Colorful Blocks Blogger Bio-Link Website (1).png" alt="hdr-image" className="hdr-image" />
        </div>
        <div className="rgt-hdr">
            <Box bgColor="#00c4cc" txtBox="Procura-se Designer"/>
            <Box bgColor="#ff738e" txtBox="Procura-se Barista" />
            <Box bgColor="#a548ff" txtBox="Procura-se Cozinheiro(a)" />
            <Box bgColor="#ffa53b" txtBox="Procura-se Diarista" />
            <Box bgColor="#6422b8" txtBox="Procura-se DJ" />
            <Box bgColor="#ffd93b" txtBox="Procura-se Recepcionista" />
        </div>
        </HeaderStyle>
    )
}