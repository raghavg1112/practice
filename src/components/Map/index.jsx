import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function Map() {
  return <MapWithNoSSR />;
}
