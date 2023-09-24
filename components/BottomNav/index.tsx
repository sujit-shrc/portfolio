"use client"
import Card from "./Card";
import data from '../../locales/data.json'

interface CardData {
    href: string;
    title: string;
    description: string;
  }
const BottomNav = () => {

    const cardData: CardData[] = data.navigate;


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    )
}

export default BottomNav