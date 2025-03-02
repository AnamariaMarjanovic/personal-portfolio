export const SegmentHeader = ({
    title, segment, description
}: {
    title: string;
    segment: string;
    description: string;
}) => {
  return (
    <section>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-green-500 to-teal-600 text-center bg-clip-text text-transparent">
          {segment}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
         {title}
      </h2>
      <p className="text-center md:text-large lg:text-xl text-white/60 mt-4 mx-w-md mx-auto">
        {description}
      </p>
    </section>
  );
};
