
const cardComics = (props) => {

  const { src, title, id} = props

    return (
                  <div id={id} className="card">
                          <div className='containerImg'>
                           <img className='ImgComics' src={src} alt={title} />
                          </div>
                          <h3>{title}</h3>
                  </div>            
    )
}
export default cardComics