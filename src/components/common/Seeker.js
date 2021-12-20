import React from 'react';

export const Seeker = ({ handleChange, value, placeholder }) => {
    return (
        <div id="wrap">
            <form autocomplete="off">
                <input
                    name="search" 
                    autoComplete='off' 
                    type="number" 
                    placeholder={ placeholder }
                    onChange={ handleChange }
                    value={ value }
                />
                <input 
                    id="search_submit" 
                    value="Rechercher" 
                    type="submit"     
                />
            </form>
        </div>
    )
}