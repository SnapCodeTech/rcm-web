import './HeroSection.css';
import heroContainerImg from '../../assets/images/projectOverview/heroContainerImg.png';
import heroIcon from '../../assets/images/projectOverview/img_icon.svg';

const HeroSection = () => {
    return (
        <section className="heroSection">
            <div className="heroContent">

                <div className="heroBadge">
                    {/* <div className="heroBadgeDot"></div> */}
                    <img
                        src={heroIcon}
                        alt="AI Platform"
                        className="heroBadgeDot"
                    />
                    <span>v2.4 Engine Now Live</span>
                </div>

                <h1 className="heroTitle">
                    From Event to
                    <br />
                    Insight in
                    <br />
                    <span>Milliseconds</span>
                </h1>

                <p className="heroDescription">
                    Deploy mission-critical intelligence across your entire infrastructure.
                    Our patented pipeline processes billions of events with zero packet
                    drop, transforming raw telemetry into actionable decisions instantly.
                </p>

                <div className="heroButtons">
                    <button className="launchBtn">
                        Launch Pipeline
                    </button>

                    <button className="docsBtn">
                        View API Docs
                    </button>
                </div>

            </div>

            <div className="heroImageWrapper">
                <img
                    src={heroContainerImg}
                    alt="AI Platform"
                    className="heroImage"
                />
            </div>
        </section>
    );
};

export default HeroSection;