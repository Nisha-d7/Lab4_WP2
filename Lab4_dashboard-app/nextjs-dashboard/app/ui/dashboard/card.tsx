// // card.tsx

// export default function Card({ title, value, type }: { title: string; value: number; type: string }) {
//   return (
//     <div className="p-4 border rounded shadow">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-xl">{value}</p>
//     </div>
//   );
// }

// Card.tsx or wherever your Card component is
type CardProps = {
  title: string;
  value: number;
  type: string;
};

export function Card({ title, value, type }: CardProps) {
  return (
    <div className="rounded-2xl p-4 shadow bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl">{value}</p>
      <span className="text-sm text-gray-500">{type}</span>
    </div>
  );
}
