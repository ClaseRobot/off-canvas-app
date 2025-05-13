import './cardPopup.css'

export const Card = (props) => {

  return (
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{title}</h2>  
        <p class="card-text">{legend}</p>
      </div>
    </div>
  )
}