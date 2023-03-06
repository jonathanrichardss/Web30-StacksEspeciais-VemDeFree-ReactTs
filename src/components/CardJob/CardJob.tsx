import { CardJobStyle } from "./styles"



interface JobProps {
    title: string,
    description: string,
    required_experience: string
}



export default function CardJob(props: JobProps) {


    return (
        <CardJobStyle>
            <div>
                <h3>Title: {props.title}</h3>
                <p>Description: {props.description}</p>
                <p>Experience:  {props.required_experience}</p>
            </div>
        </CardJobStyle>
    )
}