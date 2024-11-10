import './ReviewCard.css';

const ReviewCard = () => {
  return (
    <span className="reviewBox">
      <div>
        <div style={{ fontSize: 15, fontWeight: 350, paddingBottom: 1 }}>Gangnam-gu/Food</div>
        <div style={{ fontSize: 25, fontWeight: 600, paddingBottom: 5 }}>I am the first who successed challenge.^^</div>
        <div className="photo">
          <img src="/asset/sampleImage.png" alt="review_photo" className="review-photo" />
        </div>
      </div>
      <div className="detailBox">
        <div>
          <div className="profileBox">
            <div className="profileOwner">
              <img src="/asset/sampleImage.png" alt="review_photo" className="photo" />
            </div>
            <div style={{ fontSize: 30, paddingLeft: 15, fontWeight: 500 }}>Nickname</div>
          </div>
          <div className="detail">Detail Review.</div>
        </div>
        <div style={{ backgroundColor: 'pink', borderRadius: 20 }}>
          <div className="profileBox">
            <div className="profileUser">
              <img src="/asset/sampleImage.png" alt="review_photo" className="photo" />
            </div>
            <div style={{ fontSize: 20, paddingLeft: 15 }}>Nickname</div>
          </div>
          <div className="detail">Comment.</div>
        </div>
      </div>
    </span>
  );
};
export default ReviewCard;
