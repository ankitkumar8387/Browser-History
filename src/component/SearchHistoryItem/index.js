import './index.css'

const SearchHistoryItem = props => {
  const {itemDetails, onDeleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails

  const onDeleteButton = () => {
    onDeleteUser(id)
  }
  return (
    <div>
      <li className="list-item-container">
        <div className="item-container">
          <p className="timeAccessed">{timeAccessed}</p>
          <img className="timeAccessed" src={logoUrl} alt="domain logo" />
          <p className="timeAccessed">{title}</p>
          <p className="timeAccessed">{domainUrl}</p>
        </div>
        <button
          className="botton-container"
          type="button"
          onClick={onDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </li>
    </div>
  )
}
export default SearchHistoryItem
