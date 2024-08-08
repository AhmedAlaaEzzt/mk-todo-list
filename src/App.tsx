import { useState, useEffect, useRef } from "react";
import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Widget from "./components/widget";
import WorkforceLegends from "./components/WorkforceLegends";
import Sidebar from "./components/sidebar";
import Workforce from "./components/Workforce ";
import Polygon from "@arcgis/core/geometry/Polygon";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";

import "./App.css";
// const template =new PopupTemplate({
//   title :"{type} - {mag}",
//   content :"type: {type} - Magnitude: {mag}"
// })
const template = new PopupTemplate({
  title: "Earthquake Info",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "place",
          label: "Place",
          visible: true,
        },
        {
          fieldName: "mag",
          label: "Magnitude",
          visible: true,
        },
        {
          fieldName: "time",
          label: "Time",
          visible: true,
          format: {
            dateFormat: "short-date-short-time",
          },
        },
      ],
    },
  ],
});

// const Url =
//   "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

function App() {
  const [showWorkforce, setShowWorkforce] = useState(false);
  const [showLegends, setShowLegends] = useState(true);
  const mapRef = useRef<__esri.MapView | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const view = mapRef.current;

      const geoJsonLayer = new GeoJSONLayer({
        url: "http://localhost:3000/earthquake",
        popupTemplate: template,
      });
      view.map.add(geoJsonLayer);

      const graphicsLayer = new GraphicsLayer();
      view.map.add(graphicsLayer);

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

      const polygon = new Polygon({
        rings: [
          [
            [36.47699248434162, 28.40572026796592],
            [36.47752491013449, 28.405042430882034],
            [36.474302332960235, 28.403132139403255],
            [36.47376990716609, 28.40399485594905],
            [36.47700649554554, 28.405769565039108],
          ],
        ],
      });

      const fillSymbol = new SimpleFillSymbol({
        color: [227, 139, 79, 0.8],
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      });

      const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: fillSymbol,
      });

      const graphicsLayer2 = new GraphicsLayer();
      graphicsLayer2.add(polygonGraphic);
      view.map.add(graphicsLayer2);
    }
  }, []);

  return (
    <>
      <div className="MapDev relative">
        <ArcgisMap
          basemap={"gray-vector"}
          center={[36.47618573252876, 28.4044846389379]}
          zoom={17}
          onArcgisViewReadyChange={(event) => {
            mapRef.current = event.target.view;
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
