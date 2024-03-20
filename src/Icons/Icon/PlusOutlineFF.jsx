const PlusOutlineFF = ({ width = 17, height = 17, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.5104 0.346985V6.67376H0.34668V10.6525H6.5104V16.9792H10.8152V10.6525H16.9789V6.67376H10.8152V0.346985H6.5104Z"
                fill={fill}
            />
        </svg>
    );
};

export default PlusOutlineFF;
