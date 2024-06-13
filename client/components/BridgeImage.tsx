import aucklandHarbourBridge from '/public/images/Auckland_Habour_Bridge.jpeg'
import graftonBridge from '/public/images/Grafton_Bridge.jpg'
import jacobsLadderBridge from "/public/images/Jacobs_Ladder_Bridge.jpg"
import mangereBridge from '/public/images/Mangere_Bridge.jpg'
import newmarketViaduct from "/public/images/Newmarket_Viaduct.jpg"
import onehungaHarbourBridge from '/public/images/Onehunga_Harbour_Bridge.jpg'
import onepotoBridge from "/public/images/Onepoto_Bridge.jpg"
import panmureBridge from '/public/images/Panmure_Bridge.jpg'
import tamakiBridge from "/public/images/Tamaki_Bridge.jpg"
import upperHarbourBridge from '/public/images/Upper_Harbour_Bridge.jpg'
import victoriaParkViaduct from "/public/images/Victoria_Park_Viaduct.jpg"
import westgatePedestrianCycleBridge from "/public/images/Westgate_Pedestrian_and_Cycle_Bridge.jpg"
import wynyardCrossing from '/public/images/Wynyard_Crossing.jpg'


const imageList = [
    {
        id: 1,
        src: aucklandHarbourBridge,
        alt: "Auckland Harbour Bridge"
    },
    {
        id: 2,
        src: graftonBridge,
        alt: "Grafton Bridge"

    },
    {
        id: 3,
        src: jacobsLadderBridge,
        alt: "Jacobs Ladder Bridge",
    },
    {
        id: 4,
        src: mangereBridge,
        alt: "Mangere Bridge",
    },
    {
        id: 5,
        src: newmarketViaduct,
        alt: "Newmarket Viaduct",
    },
    {
        id: 6,
        src: onehungaHarbourBridge,
        alt: "Onehunga Harbour Bridge",
    },
    {
        id: 7,
        src: onepotoBridge,
        alt: "Onepoto Bridge",
    },
    {
        id: 8,
        src: panmureBridge,
        alt: "Panmure Bridge",
    },
    {
        id: 9,
        src: tamakiBridge,
        alt: "Tamaki Bridge",
    },
    {
        id: 10,
        src: upperHarbourBridge,
        alt: "Upper Harbour Bridge",
    },
    {
        id: 11,
        src: victoriaParkViaduct,
        alt: "Victoria Park Viaduct",
    },
    {
        id: 12,
        src: westgatePedestrianCycleBridge,
        alt: "Westgate Pedestrian and Cycle Bridge",
    },
    {
        id: 13,
        src: wynyardCrossing,
        alt: "Wynyard Crossing",
    }

]

function BridgeImage() {
    return (
        <div>
            {imageList.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} />
            ))}
        </div>
    )
}

export default BridgeImage