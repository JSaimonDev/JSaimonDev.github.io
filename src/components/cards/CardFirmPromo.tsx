import { type Firm } from "@/libs/data/firms";

interface CardFirmPromoProps {
    firm: Firm
}

const CardFirmPromo = ({ firm }: CardFirmPromoProps) => {

    return (
        <div className="flex gap-[20px]" >
            <div className="w-full aspect-square h-full relative cursor-pointer rounded-full group" style={{ backgroundColor: firm.bgColor }}>
                <a href={`/promociones/${firm.name}`}>
                    <img
                        src={firm.logoText}
                        className="rounded-full border-[8px] border-dark-grey h-full w-full relative 
                    ease-in-out object-contain group-hover:scale-105 duration-300"
                    />
                </a>
            </div>
        </div>
    );
}

export default CardFirmPromo;