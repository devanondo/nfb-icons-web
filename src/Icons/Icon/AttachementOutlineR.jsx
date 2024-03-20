const AttachementOutlineR = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 22 22`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 3.33696 1.76339 2.70107 2.23223 2.23223C2.70107 1.76339 3.33696 1.5 4 1.5C4.66304 1.5 5.29893 1.76339 5.76777 2.23223C6.23661 2.70107 6.5 3.33696 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.163 3.26339 15.7989 3.73223 16.2678C4.20107 16.7366 4.83696 17 5.5 17C6.16304 17 6.79893 16.7366 7.26777 16.2678C7.73661 15.7989 8 15.163 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z"
                fill={fill}
            />
        </svg>
    );
};

export default AttachementOutlineR;
