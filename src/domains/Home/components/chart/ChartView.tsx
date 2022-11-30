import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import Image from "next/image";
import { PieChart } from "react-minimal-pie-chart";

export const ChartView = () => {
  const dataMock = [
    { title: "Two", value: 50, color: `${Color.LightGreen}` },
    { title: "Three", value: 5.25, color: `${Color.LightPurple}` },
    { title: "Three", value: 17.5, color: `${Color.LightYellow}` },
    { title: "One", value: 15, color: `${Color.LightBlue}` },
    { title: "Three", value: 12.25, color: `${Color.LightPink}` },
  ];

  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PieChart
          data={dataMock}
          lineWidth={46}
          startAngle={-46}
          label={({ dataEntry }) => `${dataEntry.percentage}%`}
          labelStyle={(index) => ({
            fontWeight: 500,
            fontSize: "4.3px",
            fontFamily: "IBM Plex Mono",
            fill: index === 1 ? "white" : "black",
          })}
          labelPosition={78}
        />
        ;
      </div>
      <div css={sx.imageWrapper}>
        <div css={sx.image}>
          <Image fill src={"/assets/chart/ic-coin.png"} alt="coin" />
        </div>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 33.95vw;
    aspect-ratio: 1;
    position: relative;
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
    width: 12.15vw;
    aspect-ratio: 1;
  `,
};
