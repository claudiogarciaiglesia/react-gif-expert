import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)
    return (
        <>
            <h3 aria-label="gif-grid">{category}</h3>
            {isLoading && (<h3>Cargando...</h3>)}

            <div className="card-grid">
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div >
        </>)
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}