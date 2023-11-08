import Button from './components/Button';
import Card from './components/Card';

const App = () => {
  const cards = [
    {
      imageSrc: './imgs/img1.jpg',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum.',
      tags: ['tag1', 'tag2', 'tag3'],
      donationAmount: 20,
      donationGoal: 100,
    },
    {
      imageSrc: './imgs/download.png',
      title: 'Card 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum.',
      tags: ['tag1', 'tag2', 'tag3'],
      donationAmount: 50,
      donationGoal: 100,
    },
    {
      imageSrc: './imgs/download.png',
      title: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum.',
      tags: ['tag1', 'tag2', 'tag3'],
      donationAmount: 80,
      donationGoal: 100,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-yellow-500 py-8">
        <h1 className="text-3xl font-bold text-white text-center">My Cards</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap justify-center">
        {cards.map((card) => (
          <div key={card.title} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-8">
        <Button text="View More" className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0" />
      </div>
    </div>
  );
};

export default App;