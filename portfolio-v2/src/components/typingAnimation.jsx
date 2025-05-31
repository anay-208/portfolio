import { TypeAnimation } from 'react-type-animation';

function TypeWriter(){
    return(
        <TypeAnimation sequence={[
            100,
            'Programmer',
            1000,
            "Web Developer",
            1000,
        ]}
        cursor={true}
        repeat={Infinity}
        speed={1}
        />
    )
}

export default TypeWriter;  