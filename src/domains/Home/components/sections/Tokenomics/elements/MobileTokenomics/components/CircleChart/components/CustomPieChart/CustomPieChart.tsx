import { pieData } from "@/domains/Home/components/sections/Tokenomics/models/pieData.model";
import { css } from "@emotion/react";
import Image from "next/image";
import { PieChart } from "react-minimal-pie-chart";

export const CustomPieChart = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PieChart
          data={pieData}
          lineWidth={48}
          startAngle={-46}
          label={({ dataEntry }) => `${dataEntry.percentage}%`}
          labelStyle={(index) => ({
            fontWeight: 500,
            fontSize: "4.4px",
            fontFamily: "IBM Plex Mono",
            fill: index === 1 ? "white" : "black",
          })}
          labelPosition={76.5}
        />
        <CoinImage />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    aspect-ratio: 1;
    position: relative;
    margin-bottom: 12.5%;
  `,
  container: css`
    width: 100%;
    height: 100%;
  `,
  imageWrapper: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  image: css`
    position: relative;
    width: 31.81vw;
    aspect-ratio: 1;
  `,
};

const CoinImage = () => (
  <div css={sx.imageWrapper}>
    <div css={sx.image}>
      <Image fill src={"/assets/chart/ic-coin.png"} alt="coin" />
    </div>
  </div>
);
