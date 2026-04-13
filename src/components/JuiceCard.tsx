import Image from "next/image";
import Link from "next/link";

export interface JuiceCardProps {
  image: string;
  title: string;
  description: string;
  benefits: string[];
  price: number;
}

export default function JuiceCard({
  image,
  title,
  description,
  benefits,
  price,
}: JuiceCardProps) {
  // Format harga dengan style Rp 5.000
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  // Link WhatsApp
  const phoneNumber = "6285169175438"; // Updated number
  const waMessage = encodeURIComponent(
    `Halo Admin, saya mau pesan ${title} seharga ${formattedPrice}.`
  );
  const waLink = `https://wa.me/${phoneNumber}?text=${waMessage}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col overflow-hidden group">
      {/* 2. Image Section */}
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        {/* 3. Content Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {description}
          </p>
        </div>

        {/* 4. Benefits Section */}
        <div className="space-y-1 mb-4 flex-grow">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-500 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-xs text-gray-600 leading-tight">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* 5. Footer/Action Section */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          {/* 6. Harga */}
          <span className="text-lg font-extrabold text-orange-500">
            {formattedPrice}
          </span>

          {/* 7 & Fungsionalitas CTWA */}
          <Link
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Pesan via WA
          </Link>
        </div>
      </div>
    </div>
  );
}
