import { firms } from "@/libs/data/firms";
import CardFirmPromo from "../cards/CardFirmPromo";

const keys = Object.keys(firms);

const GridPromos = () => {
    return (<div className="w-[1200px] grid grid-cols-5 justify-center gap-[40px]">
        {keys.map((key) => (
            <CardFirmPromo key={key} firm={firms[key]} />
        ))}
    </div>);
}

export default GridPromos;