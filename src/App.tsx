import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import "./App.css";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Widget from "./components/widget";

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

const graphicsLayer = new GraphicsLayer();
graphicsLayer.add(graphic);

function App() {
  return (
    <>
      <div className="MapDev">
        <ArcgisMap
          center={[36.47618573252876, 28.4044846389379]}
          zoom={17}
          onArcgisViewReadyChange={(event) => {
            const { map, view }: { map: __esri.Map; view: __esri.MapView } =
              event.target;
            view.ui.add("myDev", "bottom-left");

            map.add(graphicsLayer);
          }}
        ></ArcgisMap>
        <div>
          <Widget text="hi I`m meshari " id="myDev" />
        </div>
      </div>
    </>
  );
}

export default App;
