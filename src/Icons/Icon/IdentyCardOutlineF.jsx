const IdentyCardOutlineF = ({ width = 24, height = 24, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.25 3.625H2.75C1.79625 3.66 1.035 4.42125 1 5.375V17.625C1.035 18.5787 1.79625 19.34 2.75 19.375H20.25C21.2038 19.34 21.965 18.5787 22 17.625V5.375C21.9839 4.916 21.7943 4.48018 21.4696 4.15541C21.1448 3.83065 20.709 3.6411 20.25 3.625ZM20.25 17.625H2.75V5.375H20.25V17.625ZM13.25 15.875V14.7812C13.25 13.3287 10.3275 12.5938 8.875 12.5938C7.4225 12.5938 4.5 13.3287 4.5 14.7812V15.875H13.25ZM8.875 7.125C8.29484 7.125 7.73844 7.35547 7.3282 7.7657C6.91797 8.17594 6.6875 8.73234 6.6875 9.3125C6.6875 9.59977 6.74408 9.88422 6.85401 10.1496C6.96395 10.415 7.12508 10.6562 7.3282 10.8593C7.73844 11.2695 8.29484 11.5 8.875 11.5C9.16227 11.5 9.44672 11.4434 9.71212 11.3335C9.97752 11.2236 10.2187 11.0624 10.4218 10.8593C10.6249 10.6562 10.7861 10.415 10.896 10.1496C11.0059 9.88422 11.0625 9.59977 11.0625 9.3125C11.0625 9.02523 11.0059 8.74078 10.896 8.47538C10.7861 8.20998 10.6249 7.96883 10.4218 7.7657C10.2187 7.56258 9.97752 7.40145 9.71212 7.29151C9.44672 7.18158 9.16227 7.125 8.875 7.125ZM13.25 7.125V8H18.5V7.125H13.25ZM13.25 8.875V9.75H18.5V8.875H13.25ZM13.25 10.625V11.5H16.75V10.625H13.25Z"
                fill={fill}
            />
        </svg>
    );
};

export default IdentyCardOutlineF;
