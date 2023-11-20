import { useContext } from 'react';
import { DataContext } from '../../data-provider';
import './index.css';

const secondsToMinutesHours = seconds => {
  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
};

function MainFeaturedVideo() {
  const { featured: data } = useContext(DataContext);
  const { hours, minutes } = secondsToMinutesHours(data.Duration);

  return (
    <div className="main-featured-video">
      <img className="main-featured-video__background" src={require(`./img/${data.CoverImage}`)} alt="Movie cover"/>
      <h2 className="main-featured-video__type">{data.Category}</h2>
      <img className="main-featured-video__title" src={require(`./img/${data.TitleImage}`)} alt={data.Title}/>
      <div className="main-featured-video__parameters">
        <div>{data.ReleaseYear}</div>
        <div>{data.MpaRating}</div>
        <div>{hours > 0 && `${hours}h`} {minutes}m</div>
      </div>
      <p className="main-featured-video__description">{data.Description}</p>
      <div className="main-featured-video__buttons">
        <a href="#" className="main-featured-video__button main-featured-video__button_play">
          <span className="icon-play"></span>
          <span className="main-featured-video__button__label">Play</span>
        </a>
        <a href="#" className="main-featured-video__button main-featured-video__button_more">
          <span className="main-featured-video__button__label">More Info</span>
        </a>
      </div>
    </div>
  );
}

export default MainFeaturedVideo;
