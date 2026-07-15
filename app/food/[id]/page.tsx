import type { Metadata } from "next";
import { FOOD_RESTAURANTS } from "../../../lib/ordering/catalog";
import FoodMenuClient from "../../../components/food/FoodMenuClient";

export function generateStaticParams() {
  return FOOD_RESTAURANTS.map((r) => ({ id: r.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return params.then(({ id }) => {
    const r = FOOD_RESTAURANTS.find((x) => x.id === id);
    return {
      title: r ? `${r.name} — ShoreDrop` : "Food — ShoreDrop",
      description: r?.tagline,
    };
  });
}

export default async function FoodMenuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <FoodMenuClient restaurantId={id} />;
}
