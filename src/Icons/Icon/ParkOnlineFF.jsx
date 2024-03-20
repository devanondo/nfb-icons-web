const ParkOnlineFF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 27 27`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="icon-park-outline:bill">
                <path
                    id="Vector"
                    d="M10.125 7.875H16.875M5.625 3.375C5.625 3.07663 5.74353 2.79048 5.95451 2.5795C6.16548 2.36853 6.45163 2.25 6.75 2.25H20.25C20.5484 2.25 20.8345 2.36853 21.0455 2.5795C21.2565 2.79048 21.375 3.07663 21.375 3.375V24.75L17.4375 21.9375L13.5 24.75L9.5625 21.9375L5.625 24.75V3.375ZM10.125 12.375H16.875H10.125ZM10.125 16.875H16.875H10.125Z"
                    stroke={fill}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

export default ParkOnlineFF;
