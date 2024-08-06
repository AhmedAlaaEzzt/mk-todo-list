import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import "./App.css";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

function App() {
  return (
    <div className="MapDev">
      <ArcgisMap
        center={[36.47618573252876, 28.4044846389379]}
        zoom={17}
        onArcgisViewReadyChange={(event) => {
          const map = event.target.map;
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
    </div>
  );
}

export default App;
