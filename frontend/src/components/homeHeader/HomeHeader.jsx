import './home_header.css'

export default function HomeHeader() {
    return (
        <div className="HomeCover">
            <div className="HomeCoverTitles">
                <span className="HomeCoverTitleSm">React & Node</span>
                <span className="HomeCoverTitleLg">BLOG</span>
            </div>
            <div className="HomeCoverImg">
                <img
                    src="https://visualwilderness.com/wp-content/uploads/2015/11/Fiji_8B0A9727-845x321.jpg"
                    alt="Home Cover"
                />
            </div>
        </div>
    )
}