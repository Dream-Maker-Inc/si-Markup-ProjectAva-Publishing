import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { LaptopBackgroundImage } from "./elements/LaptopBackgroundImage";
import { MobileBackgroundImage } from "./elements/MobileBackgroundImage";

export const BackgroundImage = () => {
  const { isMobile } = useCustomMediaQuery();
  return (
    <div>
      {isMobile ? <MobileBackgroundImage /> : <LaptopBackgroundImage />}
    </div>
  );
};
