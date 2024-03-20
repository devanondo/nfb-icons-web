const TrushOutlineF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.41699 19.25C5.91283 19.25 5.48108 19.0703 5.12174 18.711C4.76241 18.3517 4.58305 17.9202 4.58366 17.4167V5.5H3.66699V3.66667H8.25033V2.75H13.7503V3.66667H18.3337V5.5H17.417V17.4167C17.417 17.9208 17.2373 18.3526 16.878 18.7119C16.5187 19.0713 16.0872 19.2506 15.5837 19.25H6.41699ZM8.25033 15.5833H10.0837V7.33333H8.25033V15.5833ZM11.917 15.5833H13.7503V7.33333H11.917V15.5833Z"
                fill={fill}
            />
        </svg>
    );
};

export default TrushOutlineF;
