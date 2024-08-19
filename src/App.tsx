import { useState, useEffect } from "react";
import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import Widget from "./components/widget";
import WorkforceLegends from "./components/WorkforceLegends";
import Sidebar from "./components/sidebar";
import Workforce from "./components/Workforce";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import template from "./components/popup";
import "./App.css";
import throttle from "lodash/throttle";

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

  useEffect(() => {
    const fetchData = async () => {
      if (mapView) {
        try {
          const response = await fetch("./MockData.json");
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

          const throttledUpdate = throttle(() => {
            geoJsonLayer.queryFeatures().then((result) => {
              const visibleFeatures = result.features.filter((feature) => {
                const geometry = feature.geometry;
                if (geometry.type === "point") {
                  const point = geometry as __esri.Point;
                  return mapView.extent.contains(point);
                }
                return false;
              });

              setPointCount(visibleFeatures.length);
            });
          }, 200);

          mapView.watch("extent", throttledUpdate);

          const graphicsLayer = new GraphicsLayer();
          mapView.map.add(graphicsLayer);
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
          // center={[36.47618573252876, 28.4044846389379]}
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
            {mapView && <Workforce id="Workforce" view={mapView} />}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
