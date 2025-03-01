const InstagramFeedCard = ({ divStyle, imgStyle, img }) => {
  return (
    <div className={`${divStyle}`}>
      <img
        src={`${img}`}
        alt=""
        className={` ${imgStyle} w-full h-full object-cover object-center`}
      />
    </div>
  );
};

export default InstagramFeedCard;
