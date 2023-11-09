import Button from './components/Button';
import Card from './components/Card';
import Navbar from './Sections/Main'

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
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap justify-center">
        {cards.map((card) => (
          <div key={card.title} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-8">
        <Button text="See More"  />
      </div>
    </div>
  );
};

export default App;