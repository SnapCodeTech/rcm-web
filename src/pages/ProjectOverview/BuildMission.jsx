import React from 'react';
import './BuildMission.css';
import tickMark from '../../assets/images/projectOverview/img_overlay.svg';

const BuildMission = () => {
    return (
        <footer className="buildMissionFooter">
            <div className="buildMissionInner">
                <div className="buildMissionRow">
                    {/* Left Column - Mission Critical Reliability */}
                    <div className="buildMissionLeft">
                        {/* Title */}
                        <h2 className="buildMissionTitle">
                            Built for Mission-
                            <br />
                            Critical
                            <br />
                            Reliability
                        </h2>

                        {/* Description */}
                        <p className="buildMissionDesc">
                            Our underlying architecture is not just fast—it is
                            <br />
                            resilient. We have redesigned the ingestion stack from
                            <br />
                            the kernel up.
                        </p>

                        {/* Features List */}
                        <div className="buildMissionFeatures">
                            {/* Feature 1 */}
                            <div className="buildMissionFeatureItem">
                                <button type="button" className="buildMissionIconBtn" onClick={() => { }}>
                                    <img src={tickMark} alt="Zero-packet-drop" className="buildMissionIconBtnImg" />
                                </button>
                                <div className="buildMissionFeatureText">
                                    <h3 className="buildMissionFeatureTitle">Zero-packet-drop ingestion</h3>
                                    <p className="buildMissionFeatureDesc">
                                        Ring-buffer technology ensuring no data is
                                        <br />
                                        lost during traffic spikes.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="buildMissionFeatureItem">
                                <button type="button" className="buildMissionIconBtn" onClick={() => { }}>
                                    <img src={tickMark} alt="Multi-tenant" className="buildMissionIconBtnImg" />
                                </button>
                                <div className="buildMissionFeatureText">
                                    <h3 className="buildMissionFeatureTitle">Multi-tenant isolation</h3>
                                    <p className="buildMissionFeatureDesc">
                                        Logical and physical isolation of data streams
                                        <br />
                                        for absolute security.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="buildMissionFeatureItem">
                                <button type="button" className="buildMissionIconBtn" onClick={() => { }}>
                                    <img src={tickMark} alt="Signal Engine" className="buildMissionIconBtnImg" />
                                </button>
                                <div className="buildMissionFeatureText">
                                    <h3 className="buildMissionFeatureTitle">Patented Signal Engine</h3>
                                    <p className="buildMissionFeatureDesc">
                                        Proprietary algorithms for high-cardinality
                                        <br />
                                        signal correlation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Metrics Cards */}
                    <div className="buildMissionRight">
                        {/* Top Row - Latency and Reliability Cards */}
                        <div className="buildMissionCardsRow">
                            {/* Latency Card */}
                            <div className="buildMissionCard">
                                <div className="buildMissionCardContent">
                                    <p className="buildMissionCardLabel buildMissionCardLabelBrand">LATENCY P99</p>
                                    <h3 className="buildMissionCardValue">&lt; 14ms</h3>
                                    <p className="buildMissionCardSubtext">
                                        End-to-end processing time for global
                                        <br />
                                        distributed events.
                                    </p>
                                </div>
                                {/* <img
                                    src="/images/img_overlay_blur.png"
                                    alt="decoration"
                                    className="buildMissionCardDecor"
                                /> */}
                            </div>

                            {/* Reliability Card */}
                            <div className="buildMissionCard buildMissionCardCol">
                                <div className="buildMissionCardTop">
                                    <div className="buildMissionCardContent">
                                        <p className="buildMissionCardLabel buildMissionCardLabelAccent">RELIABILITY</p>
                                        <h3 className="buildMissionCardValue">99.999%</h3>
                                    </div>
                                    {/* <img
                                        src="/images/img_overlay_blur_80x80.png"
                                        alt="decoration"
                                        className="buildMissionCardDecor"
                                    /> */}
                                </div>
                                <p className="buildMissionCardSubtext buildMissionCardSubtextMt">
                                    Guaranteed uptime for core intelligence and
                                    <br />
                                    alert delivery.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Row - Live Node Performance Card */}
                        <div className="buildMissionPerfCard">
                            <div className="buildMissionPerfLeft">
                                <h3 className="buildMissionPerfTitle">Live Node Performance</h3>
                                <p className="buildMissionPerfDesc">
                                    Real-time health of our global processing clusters.
                                </p>

                                {/* Bar Chart Visualization */}
                                <div className="buildMissionBars">
                                    <div className="buildMissionBar buildMissionBarMedium" style={{ height: '40px' }} />
                                    <div className="buildMissionBar buildMissionBarPrimary" style={{ height: '48px' }} />
                                    <div className="buildMissionBar buildMissionBarStrong" style={{ height: '32px' }} />
                                    <div className="buildMissionBar buildMissionBarPrimary" style={{ height: '56px' }} />
                                    <div className="buildMissionBar buildMissionBarMedium" style={{ height: '40px' }} />
                                    <div className="buildMissionBar buildMissionBarPrimary" style={{ height: '48px' }} />
                                    <div className="buildMissionBar buildMissionBarLight" style={{ height: '32px' }} />
                                </div>
                            </div>

                            <button type="button" className="buildMissionStatusBtn" onClick={() => { }}>
                                Infrastructure Status
                                {/* <img src="/images/img_icon_gray_900.svg" alt="" className="buildMissionStatusBtnIcon" /> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BuildMission;
