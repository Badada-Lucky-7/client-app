import MissionCard from '@/components/mission/MissionCard';
import './page.css';

const Mission = () => {
  return (
    <div className="container">
      <div className="sampleImage">
        <img src="/asset/sampleImage.png" alt="sampleImage" />
      </div>
      <div className="textBox">
        <MissionCard />
      </div>
    </div>
  );
};

export default Mission;
