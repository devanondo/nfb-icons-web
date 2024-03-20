const VertIconF = ({ width = 30, height = 30, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="14.7893" cy="24.878" r="3.0339" transform="rotate(-180 14.7893 24.878)" fill={fill} />
            <circle cx="14.7893" cy="15.1695" r="3.0339" transform="rotate(-180 14.7893 15.1695)" fill={fill} />
            <circle cx="14.7893" cy="5.46104" r="3.0339" transform="rotate(-180 14.7893 5.46104)" fill={fill} />
        </svg>
    );
};

export default VertIconF;
