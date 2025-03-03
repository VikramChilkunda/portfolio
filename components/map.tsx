"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { LatLng, LatLngBounds } from "leaflet";
import ScrollableContainer from "./scrollable";

export default function Map() {
    
    const locations = {
        "nowcom": new LatLng(34.06238757916068, -118.33375622429904),
        "engr6": new LatLng(34.06941276904872, -118.44437509455986), 
        "rieber": new LatLng(34.073041842725225, -118.4522279555497),
        "boelter": new LatLng(34.069144734588384, -118.44305286527072), 
        "yrl": new LatLng(34.074995758568825, -118.44146600014676)
    }
    const projects = [
        { title: "Vehicle Description Generator", description: "Automating compelling descriptions of vehicles for car dealerships.", tags: [".NET", "C#"], imageURL: "nowcom.jpg", location: "nowcom" },
        { title: "Document Classifier", description: "Using artificial intelligence to automatically generate tags for and categorize images uploaded to a dealership listing.", tags: ["Python", "C#"], imageURL: "nowcom.jpg", location: "nowcom" },
        { title: "Website Manager", description: "Maintain and add content to the UCLA's Electrical and Computer Engineering Department website.", tags: ["Wordpress", "HTML"], imageURL: "ucla.png", link: "https://www.ee.ucla.edu/", location: "engr6" },
        { title: "Mentorful", description: "Help underrepresented students achieve college admission dreams through tutoring.", tags: ["Next.js", "React#"], imageURL: "mentorful.png", link: "https://github.com/VikramChilkunda/mentorful", location: "rieber" },
        { title: "Goodminton", description: "A spinoff of badminton created using computer animation fundamentals.", tags: ["TinyGraphics", "JavaScript"], imageURL: "goodminton.png", link: "https://github.com/adroyalz/goodminton", location: "yrl" },
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
            center={new LatLng(34.09391368099479, -118.30507868444019)}
            zoom={12}
            minZoom={3}
            scrollWheelZoom={true}
            maxBounds={new LatLngBounds(new LatLng(-90, -180), new LatLng(90, 180))}
            style={{ height: "90vh", width: "100vw", position: "absolute", left: "50%", transform: "translate(-50%, 0)" }}
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
            <SnapButton />
        </MapContainer>
    );

    function SnapButton() {
        const map = useMap()
        const handleClick = () => {
            map.setView([34.09391368099479, -118.30507868444019], 12, {animate: true})
        }
        return <button className="absolute top-20 left-3 p-2 bg-white border-black border z-[1000]" onClick={handleClick} >Center</button>
    }
}


