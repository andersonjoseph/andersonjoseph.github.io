import Tilt from "react-tilt";

function BlurryTilt(props) {
    return(
        <div>
                <Tilt>
                    <img alt={props.alt} className="absolute h-100pc w-100pc opacity-50" src={props.src} />
                </Tilt>
                <Tilt>
                    <img alt={props.alt} className="opacity-50 h-100pc w-100pc" src={props.src} />
                </Tilt>
        </div>

    )
}

export default BlurryTilt