import "./card.css";

interface CardProps {
    price: number,
    title: string,
    imageUrl: string
}

export function Card({price, imageUrl, title}: CardProps) {
  return (
    <div className="card">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p><b>Valor: </b>R$ {price.toFixed(2)}</p>
    </div>
  );
}