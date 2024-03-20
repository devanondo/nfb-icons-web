const UserInfoFillF = ({ width = 24, height = 24, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14 19.5C14 17.5 15.1 15.7 16.7 14.8C15.4 14.3 13.8 14 12 14C7.6 14 4 15.8 4 18V20H14V19.5ZM19.5 16C17.6 16 16 17.6 16 19.5C16 21.4 17.6 23 19.5 23C21.4 23 23 21.4 23 19.5C23 17.6 21.4 16 19.5 16ZM16 8C16 10.2 14.2 12 12 12C9.8 12 8 10.2 8 8C8 5.8 9.8 4 12 4C14.2 4 16 5.8 16 8Z"
                fill={fill}
            />
        </svg>
    );
};

export default UserInfoFillF;
