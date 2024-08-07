import { useState } from "react";
import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Widget from "./components/widget";
import "./App.css";
import WorkforceLegends from "./components/WorkforceLegends";
import Sidebar from "./components/sidebar";
import Workforce from "./components/Workforce ";

function App() {
  const [showWorkforce, setShowWorkforce] = useState(false);
  const [showLegends, setShowLegends] = useState(true);

  return (
    <>
      <div className="MapDev relative">
        <ArcgisMap
          center={[36.47618573252876, 28.4044846389379]}
          zoom={17}
          onArcgisViewReadyChange={(event) => {
            const { map, view }: { map: __esri.Map; view: __esri.MapView } =
              event.target;

            const container = document.createElement("div");
            container.id = "widgets-container";
            container.className =
              "flex flex-row space-x-4 absolute bottom-4 right-4";
            view.ui.add(container, "manual");

            const legendWidget = document.createElement("div");
            legendWidget.id = "WorkforceLegends";
            view.ui.add(legendWidget, "bottom-left");

            const sidebarContainer = document.createElement("div");
            sidebarContainer.id = "Sidebar";
            view.ui.add(sidebarContainer, "top-left");

            const widget1 = document.createElement("div");
            widget1.id = "widget1";
            container.appendChild(widget1);

            const widget2 = document.createElement("div");
            widget2.id = "widget2";
            container.appendChild(widget2);

            const widget3 = document.createElement("div");
            widget3.id = "widget3";
            container.appendChild(widget3);

            const graphicsLayer = new GraphicsLayer();
            map.add(graphicsLayer);

            const point = new Point({
              longitude: 36.47618573252876,
              latitude: 28.4044846389379,
            });

            const simpleMarkerSymbol = new SimpleMarkerSymbol({
              color: "red",
            });

            const graphic = new Graphic({
              geometry: point,
              symbol: simpleMarkerSymbol,
            });

            graphicsLayer.add(graphic);
          }}
        ></ArcgisMap>
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
            currentWorkers={10}
            totalWorkers={20}
            workers="Workers on floor"
          />
          <Widget
            id="widget2"
            currentWorkers={15}
            totalWorkers={25}
            workers="Workers on floor"
          />
          <Widget
            id="widget3"
            currentWorkers={20}
            totalWorkers={30}
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
