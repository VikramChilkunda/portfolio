"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";
import ScrollableContainer from "./scrollable";

export default function Map() {
    const losAngelesLocation: LatLng = new LatLng(34.06238757916068, -118.33375622429904)
    const locations = {
        "nowcom": new LatLng(34.06238757916068, -118.33375622429904), //nowcom
        "engr6": new LatLng(34.06941276904872, -118.44437509455986), //website manager
        "rieber": new LatLng(34.073041842725225, -118.4522279555497), //mentorful
        "boelter": new LatLng(34.069144734588384, -118.44305286527072), //boelter: goodminton/sudokle
    }
    const projects = [
        { title: "Vehicle Description Generator", description: "Automating compelling descriptions of vehicles for car dealerships.", tags: [".NET", "C#"], imageURL: "nowcom.jpg", location: "nowcom" },
        { title: "Document Classifier", description: "Using artificial intelligence to automatically generate tags for and categorize images uploaded to a dealership listing.", tags: ["Python", "C#"], imageURL: "nowcom.jpg", location: "nowcom" },
        { title: "Website Manager", description: "Maintain and add content to the UCLA's Electrical and Computer Engineering Department website.", tags: ["Wordpress", "HTML"], imageURL: "ucla.png", link: "https://www.ee.ucla.edu/", location: "engr6" },
        { title: "Mentorful", description: "Help underrepresented students achieve college admission dreams through tutoring.", tags: ["Next.js", "React#"], imageURL: "mentorful.png", link: "https://github.com/VikramChilkunda/mentorful", location: "rieber" },
        { title: "Goodminton", description: "A spinoff of badminton created using computer animation fundamentals.", tags: ["TinyGraphics", "JavaScript"], imageURL: "goodminton.png", link: "https://github.com/adroyalz/goodminton", location: "boelter" },
        { title: "Sudokle", description: "Solve a new Sudoku puzzle each day.", tags: ["React", "NodeJS"], imageURL: "sudokle.png", link: "https://github.com/daduuu/sudokle", location: "boelter" },
    ]
    const groupedByLocation = projects.reduce((acc, obj) => {
        if (!acc[obj.location]) {
            acc[obj.location] = [];
        }
        acc[obj.location].push(obj)
        return acc;
    }, {})
    console.log(groupedByLocation)
    return (
        <MapContainer
            center={losAngelesLocation}
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: "100vh", width: "100vw", position: "absolute", left: "50%", transform: "translate(-50%, 0)" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {Object.keys(groupedByLocation).map((locationName, index) => (
                <Marker key={index} position={locations[locationName]}>
                    <Popup>
                        <ScrollableContainer items={groupedByLocation[locationName]} />
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}


