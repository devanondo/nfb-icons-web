const PasswordOutlineF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 19V17H22V19H2ZM3.15 12.95L1.85 12.2L2.7 10.7H1V9.2H2.7L1.85 7.75L3.15 7L4 8.45L4.85 7L6.15 7.75L5.3 9.2H7V10.7H5.3L6.15 12.2L4.85 12.95L4 11.45L3.15 12.95ZM11.15 12.95L9.85 12.2L10.7 10.7H9V9.2H10.7L9.85 7.75L11.15 7L12 8.45L12.85 7L14.15 7.75L13.3 9.2H15V10.7H13.3L14.15 12.2L12.85 12.95L12 11.45L11.15 12.95ZM19.15 12.95L17.85 12.2L18.7 10.7H17V9.2H18.7L17.85 7.75L19.15 7L20 8.45L20.85 7L22.15 7.75L21.3 9.2H23V10.7H21.3L22.15 12.2L20.85 12.95L20 11.45L19.15 12.95Z"
                fill={fill}
            />
        </svg>
    );
};

export default PasswordOutlineF;
