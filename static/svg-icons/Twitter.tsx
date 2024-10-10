export const Twitter = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7508 3.4082H20.8175L14.1175 11.0337L22 21.4082H15.8283L10.995 15.1153L5.46333 21.4082H2.395L9.56167 13.2517L2 3.40903H8.32833L12.6975 9.16093L17.7508 3.4082ZM16.675 19.5811H18.3742L7.405 5.13991H5.58167L16.675 19.5811Z" fill={color ? color : "#09090B"}/>
        </svg>
    );
};