// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, activeThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickChangeThumbnail = () => {
    activeThumbnailId(id)
  }

  const activeClassName = isActive ? 'active-thumbnail-font' : ''

  return (
    <li className="thumbnail-item-list">
      <button type="button" onClick={onClickChangeThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`normal-thubnail ${activeClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
