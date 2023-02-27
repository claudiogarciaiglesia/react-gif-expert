export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img className="card-img" src={url} alt={title} />
            <p>{title}</p>
        </div>
    )

}
