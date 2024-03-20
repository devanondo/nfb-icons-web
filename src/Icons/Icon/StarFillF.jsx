const StarFillF = ({ width = 21, height = 21, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 21 21`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.6232 7.24102L13.4163 6.48429L11.0886 1.76544C11.0251 1.63624 10.9205 1.53165 10.7913 1.46807C10.4672 1.30811 10.0735 1.44141 9.91148 1.76544L7.58384 6.48429L2.3769 7.24102C2.23335 7.26153 2.1021 7.32921 2.00161 7.43175C1.88012 7.55661 1.81318 7.7246 1.81549 7.8988C1.81779 8.07299 1.88916 8.23915 2.01391 8.36075L5.7812 12.0337L4.89116 17.2201C4.87029 17.3408 4.88364 17.4649 4.9297 17.5783C4.97576 17.6918 5.05268 17.79 5.15175 17.862C5.25082 17.9339 5.36807 17.9767 5.49019 17.9854C5.61232 17.9941 5.73445 17.9684 5.84273 17.9112L10.5001 15.4626L15.1574 17.9112C15.2845 17.9789 15.4322 18.0015 15.5737 17.9769C15.9305 17.9153 16.1705 17.577 16.1089 17.2201L15.2189 12.0337L18.9862 8.36075C19.0887 8.26026 19.1564 8.12901 19.1769 7.98546C19.2323 7.62657 18.9821 7.29435 18.6232 7.24102Z"
                fill={fill}
            />
        </svg>
    );
};

export default StarFillF;