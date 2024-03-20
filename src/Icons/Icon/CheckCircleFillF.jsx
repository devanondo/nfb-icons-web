const CheckCircleFillF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 24 23`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0004 2.64551C6.69639 2.64551 2.40039 6.6834 2.40039 11.6687C2.40039 16.6541 6.69639 20.692 12.0004 20.692C17.3044 20.692 21.6004 16.6541 21.6004 11.6687C21.6004 6.6834 17.3044 2.64551 12.0004 2.64551ZM11.2624 16.9248H9.65439L5.76639 11.8041L7.37559 10.3942L10.4584 13.1012L16.6276 6.41158L18.2356 7.47181L11.2624 16.9248Z"
                fill={fill}
            />
        </svg>
    );
};

export default CheckCircleFillF;
