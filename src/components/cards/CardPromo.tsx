interface CardPromoProps {
    discount?: number
    benefit1?: string
    benefit2?: string
    benefit3?: string

}

const CardPromo = ({ discount, benefit1, benefit2, benefit3 }: CardPromoProps) => {
    return (<div className="w-[200px] h-[200px] bg-[#FFF]">
        <h3 className="text-7xl font-bold">
            {discount}%
        </h3>
        <p>{benefit1}</p>
        <p>{benefit2}</p>
        <p>{benefit3}</p>
    </div>);
}

export default CardPromo;