import { useState, useEffect } from "react";
import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import Widget from "./components/widget";
import WorkforceLegends from "./components/WorkforceLegends";
import Sidebar from "./components/sidebar";
import Workforce from "./components/Workforce ";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import template from "./components/popup";
import "./App.css";

const simpleMarkerSymbol = new SimpleMarkerSymbol({
  color: "#F97316",
});

const simpleRenderer = new SimpleRenderer({
  symbol: simpleMarkerSymbol,
});

function App() {
  const [showWorkforce, setShowWorkforce] = useState(false);
  const [showLegends, setShowLegends] = useState(true);
  const [pointCount, setPointCount] = useState(0);
  const [mapView, setMapView] = useState<__esri.MapView>();
  /*
We used useEffect here to ensure that once the data is successfully loaded from the mapView, 
it triggers the fetching of data from the JSON file and then displays that data in the console.
*/
  useEffect(() => {
    const fetchData = async () => {
      if (mapView) {
        try {
          // Fetch data from the local JSON file
          const response = await fetch("./MockData.json");
          /*
          We used the await keyword here to ensure that the operation does not pause or delay while waiting for data
           to be fetched from the JSON file. Instead, it allows the code to continue running asynchronously
            until the data is fully retrieved and available for use. This way, the data appears without any
             unnecessary delays.
          */
          const data = await response.json();
          console.log("Data from MockData.json:", data);

          const geoJsonLayer = new GeoJSONLayer({
            url: "http://localhost:3000/earthquake",
            popupTemplate: template,
            renderer: simpleRenderer,
            refreshInterval: 0.125,
          });

          geoJsonLayer.when(() => {
            geoJsonLayer.queryFeatures().then((result) => {
              setPointCount(result.features.length);
            });
          });

          mapView.map.add(geoJsonLayer);

          const graphicsLayer = new GraphicsLayer();
          mapView.map.add(graphicsLayer);

          // Add your point and graphic to the graphics layer if needed
          // const point = new Point({
          //   longitude: 36.47618573252876,
          //   latitude: 28.4044846389379,
          // });

          // const graphic = new Graphic({
          //   geometry: point,
          //   symbol: simpleMarkerSymbol,
          // });

          // graphicsLayer.add(graphic);
        } catch (error) {
          console.error("Error", error);
        }
      }
    };

    fetchData();
  }, [mapView]);

  return (
    <>
      <div className="MapDev relative">
        <ArcgisMap
          basemap={"hybrid"}
          center={[36.47618573252876, 28.4044846389379]}
          zoom={18}
          onArcgisViewReadyChange={(event) => {
            const { view } = event.target;
            setMapView(view);
            view.ui.remove("attribution");
          }}
        />
        <Sidebar
          id="Sidebar"
          onIconClick={() => setShowWorkforce(!showWorkforce)}
          onConstructionClick={() => setShowLegends(!showLegends)}
        />
        <div
          id="widgets-container"
          className="flex flex-row space-x-4 absolute bottom-4 right-4"
        >
          <Widget
            id="widget1"
            currentWorkers={pointCount}
            totalWorkers={pointCount}
            workers="Workers on floor"
          />
          <Widget
            id="widget2"
            workers="Workers on floor"
            currentWorkers={pointCount}
            totalWorkers={pointCount}
          />
          <Widget
            id="widget3"
            currentWorkers={0}
            totalWorkers={0}
            workers="Crews on floor"
          />
        </div>
        {showLegends && <WorkforceLegends id="WorkforceLegends" />}
        {showWorkforce && (
          <div className="flex absolute top-4 left-[80px] space-x-4">
            <Workforce id="Workforcen" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
