const EyeFillF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 23 23`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 4.59259C7 4.59259 2.73 7.51574 1 11.642C2.73 15.7682 7 18.6914 12 18.6914C17 18.6914 21.27 15.7682 23 11.642C21.27 7.51574 17 4.59259 12 4.59259ZM12 16.3416C9.24 16.3416 7 14.2362 7 11.642C7 9.04781 9.24 6.94239 12 6.94239C14.76 6.94239 17 9.04781 17 11.642C17 14.2362 14.76 16.3416 12 16.3416ZM12 8.82223C10.34 8.82223 9 10.0817 9 11.642C9 13.2023 10.34 14.4617 12 14.4617C13.66 14.4617 15 13.2023 15 11.642C15 10.0817 13.66 8.82223 12 8.82223Z"
                fill={fill}
            />
        </svg>
    );
};

export default EyeFillF;
