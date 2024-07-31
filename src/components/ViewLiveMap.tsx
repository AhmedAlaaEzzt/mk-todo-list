import { useEffect, useRef } from "react";
import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Widget from "./Widget";

const ViewLiveMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const viewReadyHandler = (event: { target: any }) => {
      const view = event.target;
      const map = view.map;
      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      const point = new Point({
        longitude: 36.47621073304157,
        latitude: 28.404822629941677,
      });

      const symbol = new SimpleMarkerSymbol({
        color: [226, 119, 140],
      });

      const graphic = new Graphic({
        geometry: point,
        symbol: symbol,
      });

      graphicsLayer.add(graphic);
    };

    if (mapRef.current) {
      mapRef.current.addEventListener(
        "arcgisViewReadyChange",
        viewReadyHandler
      );
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.removeEventListener(
          "arcgisViewReadyChange",
          viewReadyHandler
        );
      }
    };
  }, []);

  return (
    <div className="relative h-screen">
      <ArcgisMap
        ref={mapRef}
        className="map-view h-full"
        center={[36.47621073304157, 28.404822629941677]}
        zoom={15}
      />
      <Widget />
    </div>
  );
};

export default ViewLiveMap;
