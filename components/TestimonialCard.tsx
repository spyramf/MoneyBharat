
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="mb-4">
        {/* Quote icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="text-fintech-purple/30"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M10.762 8c-3.78 0-6.857 2.963-6.857 6.608 0 3.225 2.472 5.893 5.714 6.411v2.394c-3.472-.518-6.373-2.886-7.747-5.942C.594 15.154 0 12.808 0 10.268 0 4.59 4.813 0 10.762 0v8zm18.283 0c-3.78 0-6.857 2.963-6.857 6.608 0 3.225 2.472 5.893 5.714 6.411v2.394c-3.472-.518-6.373-2.886-7.747-5.942-1.279-2.316-1.872-4.662-1.872-7.202C18.283 4.59 23.096 0 29.045 0v8z"></path>
        </svg>
      </div>

      <p className="text-gray-700 mb-6 italic">{quote}</p>

      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fintech-purple to-fintech-blue flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
