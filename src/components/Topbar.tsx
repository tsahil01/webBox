import { BatteryChargingIcon, Volume2Icon, Wifi } from "lucide-react";
import { Button } from "./ui/button";

export function Topbar() {
  return (
    <>
      <div className="flex flex-row justify-between w-full my-auto">
        <Button
          variant={'ghost'}
          size={'lg'}
          className="flex flex-row gap-2 p-0 m-0 h-auto px-3"
        >
          <p>Sahil Tiwaskar</p>
        </Button>

        <Button
          variant={"ghost"}
          size={"lg"}
          className="flex flex-row gap-2 p-0 m-0 h-auto px-3"
        >
          <p>Oct 2 15:50</p>
        </Button>

        <Button
          variant={"ghost"}
          size={'lg'}
          className="flex flex-row gap-2 p-0 m-0 h-auto px-3"
        >
          <Wifi className="w-5" />
          <BatteryChargingIcon className="w-5" />
          <Volume2Icon className="w-5" />
        </Button>
      </div>
    </>
  );
}
