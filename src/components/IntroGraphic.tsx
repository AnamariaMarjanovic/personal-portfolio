import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const IntroGraphic = ({
  children,
  size,
  rotation,
  shouldSpin = false,
  shouldSpinEach = false,
  spinDuration,
  spinEachDuration
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldSpin?: boolean;
  shouldSpinEach?: boolean;
  spinDuration?: string;
  spinEachDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldSpin === true && "animate-spin")}
        style={{ animationDuration: spinDuration }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div className={twMerge(shouldSpinEach === true && "animate-spin")} style={{ animationDuration: spinEachDuration }}>
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${-rotation}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
