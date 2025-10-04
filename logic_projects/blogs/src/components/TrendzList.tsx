

const TrendzList = () => {

  const trends = [
    { title: "Be the person yo are", author: "Micheal Jackson" },
    { title: "Become the best version", author: "Timmothy Rogers" },
    { title: "You are unstobable", author: "Andrew Tate" },
    { title: "Design patterns", author: "Lindsey Curts" },
    { title: "Design patterns", author: "Lindsey Curts" },

    {},
  ];
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h3 className=" font-semibold mb-4 text-lg">Todys Top Trendz</h3>

      <ul className="space-y-2">
        {trends.map((trend, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-medium">{trend.title}</span>
            <span className="text-sm text-grey-500">by {trend.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendzList