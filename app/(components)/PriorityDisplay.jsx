import { faFire } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function PriorityDisplay() {
    return (
        <div className="flex justify-start align-baseline">
            <FontAwesomeIcon icon={faFire} className="text-red-500" />
            <FontAwesomeIcon icon={faFire} className="text-red-500" />
            <FontAwesomeIcon icon={faFire} className="text-red-500" />
            <FontAwesomeIcon icon={faFire} className="text-red-500" />
            <FontAwesomeIcon icon={faFire} className="text-red-500" />
        </div>
    )
}

export default PriorityDisplay