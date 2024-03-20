const SecurityRoundF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.2575 1.24663L3.84083 4.09746C3.18083 4.39079 2.75 5.05079 2.75 5.77496V10.0833C2.75 15.1708 6.27 19.9283 11 21.0833C15.73 19.9283 19.25 15.1708 19.25 10.0833V5.77496C19.25 5.05079 18.8192 4.39079 18.1592 4.09746L11.7425 1.24663C11.275 1.03579 10.725 1.03579 10.2575 1.24663ZM11 10.9908H17.4167C16.9308 14.7675 14.41 18.1316 11 19.1858V11H4.58333V5.77496L11 2.92413V10.9908Z"
                fill={fill}
            />
        </svg>
    );
};

export default SecurityRoundF;
