import { Image } from "@nextui-org/react";

export default function App({image}) {
  return (
    <Image   
      showSkeleton
      width={320}
      height={180}  
      maxDelay={10000}
      src={image||"https://app.requestly.io/delay/10000/https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"}
      alt="Default Image"
    />
  );
}
