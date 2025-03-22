import Mushroom from './Mushroom';

export default function MushroomList() {
  const mushrooms = [
    { name: 'Destroying Angel', src: '/destroying-angel.jpg' },
    { name: 'Paddy Straw', src: '/paddy-straw.jpg' },
    { name: 'False Death Cap', src: '/false-death-cap.jpg' }
  ];

  return (
    <div className="flex flex-row gap-4 overflow-x-auto mt-2">
      {mushrooms.map((mushroom, index) => (
        <Mushroom key={index} name={mushroom.name} src={mushroom.src} />
      ))}
    </div>
  );
}
